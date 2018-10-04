(ns reagent-aggrid.core
    (:require [reagent.core :as reagent :refer [atom]]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [ cljsjs.ag-grid-react]
              [goog.object :as gobj]))

;; -------------------------
;; Views

(enable-console-print!)

(def ag-adapter (reagent/adapt-react-class (.-AgGridReact js/agGridReact) ))

(println "1...")
(println ag-adapter)


(defn make-component
  ([display-name m] (make-component display-name nil m))
  ([display-name construct m]
   (let [cmp (fn [props context updater]
               (cljs.core/this-as this
                 (js/React.Component.call this props context updater)
                 (when construct
                   (construct this))
                 this))]
     (gobj/extend (.-prototype cmp) js/React.Component.prototype m)

     (when display-name
       (set! (.-displayName cmp) display-name)
       (set! (.-cljs$lang$ctorStr cmp) display-name)
       (set! (.-cljs$lang$ctorPrWriter cmp)
             (fn [this writer opt]
               (cljs.core/-write writer display-name))))
     (set! (.-cljs$lang$type cmp) true)
     (set! (.. cmp -prototype -constructor) cmp))))

(def create-element js/React.createElement)

(def my-component
  (make-component "MyComponent"
                  (fn [this] (set! (.-state this) #js{:counter 0}))
                  #js{:render
                      (fn []
                        (this-as this
                          (create-element "div"
                                          nil
                                          #js[(create-element "div"
                                                              #js{:key 1}
                                                              #js["Counter is " (-> this .-state .-counter)])
                                              (create-element "button"
                                                              #js{:key 2
                                                                  :onClick #(.setState this
                                                                                       (fn [old]
                                                                                         #js{:counter (-> old .-counter inc)}))}
                                                              #js["Click me"])])))}))

;;{:columnDefs [ {:headerName "Make", :field "make"}  ], :rowData [ {:make "Toyota"} ] }

(def colsjs  (clj->js [ {:headerName "Make", :field "make"}  ]) )
(def rowsjs  (clj->js  [ {:make "Toyota"} ]) )
(def cols   [ {:headerName "Make", :field "make"}  ])
(def rows   [ {:make "Toyota"} {:make "BMW"}  ])

(defn home-page []
  [:div [:h2 "Welcome to reagent-aggrid change"]
   [:div {:className "ag-theme-balham" :style {:height 200 :width 200 :color "red"}}
    [ag-adapter {:columnDefs  cols :rowData rows}]]

   [:div [:a {:href "/about"} "go to about page"]]])

(defn about-page []
  [:div [:h2 "About reagent-aggrid"]
   [:div [:a {:href "/"} "go to the home page"]]])

;; -------------------------
;; Routes

(defonce page (atom #'home-page))

(defn current-page []
  [:div [@page]])

(secretary/defroute "/" []
  (reset! page #'home-page))

(secretary/defroute "/about" []
  (reset! page #'about-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  ;;(reagent/render (create-element my-component) (.getElementById js/document "app"))
  (reagent/render [current-page] (.getElementById js/document "app"))
  )

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
