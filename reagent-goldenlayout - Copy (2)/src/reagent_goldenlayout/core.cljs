(ns reagent-goldenlayout.core
    (:require
      [reagent.core :as r]
      [js.goldenlayout]))

;; -------------------------
;; Views

;;(def config  { :content [{ :type "row", :content [{ :title "Users", :type"react-component", :component "user-list" } ,{ :title "User Detail", :type"react-component", :component "user-detail"}]}]})

(def config  { :content [{ :type "row", :content [{ :title "Users", :type"react-component", :component "user-list" }] }] })
(def config-js (clj->js config))

(def t2 (new js/GoldenLayout config-js))

(def User (r/create-class
            {
             :render
             (fn [this]
               [:div  [:p (str "event:" (.. this -props -userData))]  [:li  "Other-Smothing"]]
               )
             }))

(defn User-component [user]
  (let [sta (r/atom user)] ;; you can include state
    (r/create-class
      {
       :get-initial-state (fn []  (clj->js user) )
       :component-did-mount
                     (fn [this] (println "I mounted - user")
                       (println (.-props this))
                       (println "above props")
                       (println (.-state this))
                       (println "above state")
                       (for [p (.-props this)]
                         (println (str "Property:" p))
                         )
                       )
       :display-name "user-component-1"

       ;; note the keyword for this method
       :render
                     (fn [this]
                       (println "in render")
                       (println (.-state this))
                       [:div {:style {:color "white"}}   (.. this -state -name)])
       })))





(def UserList (r/create-class
            {
             :store (r/atom  {}  )

             :get-initial-state (fn [this]

                                    (reset! (.. this -store) { :users [
                                                                       { :name "11Jackson Turner", :street "217 Tawny End", :img "men_1.jpg" }
                                                                       ;;{ :name "Megan Perry", :street "77 Burning Ramp", :img "women_1.jpg" }
                                                                       ;;{ :name "Ryan Harris", :street "12 Hazy Apple Route", :img "men_2.jpg" }
                                                                       ;;{ :name "Jennifer Edwards", :street "33 Maple Drive", :img "women_2.jpg" },
                                                                       ;;{ :name "Noah Jenkins", :street "423 Indian Pond Cape", :img "men_3.jpg" }
                                                                       ]})

                                  (println (.. this -props -glEventHub))
                                    ;; (set! (.-store this)  (clj->js @state1))
                                  ;;(println @state1)
                                  ;;(println (.-state this))
                                    ;;(println "i was here in inti")
                                    ;;(println (.. this -store -users))
                                  @(.. this -store)
                                     )


             :component-did-mount (fn [this]
                                    (println "did i get my state")
                                    (println (.-state this))
                                    (println (.-props this))
                                    (println "above props")
                                    (for [p (.-props this)]
                                      (println (str "Property:" p))
                                    ))
             :render
             (fn [this]
                  [:ul (for [user  (:users (.-state this))]
                         ^{:key (:name user)} [User-component user {:glEventHub (.. this -props -glEventHub)}])

                   ])
             }))


(defn home-page []
  (println "I am in home page")
  ;; [UserList]
  (.registerComponent t2 "user-list" UserList)
  (.init t2)
  )



;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
