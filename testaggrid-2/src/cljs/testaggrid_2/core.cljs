(ns testaggrid-2.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [js.goldenlayout]))

;; -------------------------
;; Views

(enable-console-print!)

(def values #js [0 3 2 5 4 7 8 6 2 6 5 1 0])

(def width 960)
(def height 500)

(def config1 "{ content: [{ type: 'row', content:[{ type: 'component', componentName: 'testComponent', componentState: { label: 'A' } },{ type: 'column', content:[{ type: 'component', componentName: 'testComponent', componentState: { label: 'B' } },{ type: 'component', componentName: 'testComponent', componentState: { label: 'C' } }] }] }] }")

(def js-object (clj->js { :content [{:type "component", :componentName "sayHi",:componentState { :name 'Wolfram' } }]}))

(enable-console-print!)
(println "mhan")

(println js-object)

(def t2 (new js/GoldenLayout js-object))

(defn myfun [container , componentState]
  (let [c (.getElement() container)]
    (.text c "test")) )

  ;;myLayout.registerComponent( 'testComponent', function( container, componentState )

  ;;myLayout.init();
(defn home-page []
  (.registerComponent t2 "sayHi" myfun)
  (.init t2))


(defn home-page1 []
  [:div [:h2 (str (type t2))]
   [:div [:a {:href "/about"} "go to about page"]]])

(defn about-page []
  [:div [:h2 "About testaggrid-2"]
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
  (reagent/render [home-page] (.getElementById js/document "app")))

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


