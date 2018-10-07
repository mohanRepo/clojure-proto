(ns reagent-goldenlayout.core
    (:require
      [reagent.core :as r]
      [js.goldenlayout]))

;; -------------------------
;; Views

(def config  { :content [{ :type "row", :content [{ :title "Users", :type"react-component", :component "user-list" } ,{ :title "User Detail", :type"react-component", :component "user-detail"}]}]})

;;(def config  { :content [{ :type "row", :content [{ :title "Users", :type"react-component", :component "user-list" }] }] })
(def config-js (clj->js config))

(def t2 (new js/GoldenLayout config-js))

(def User (r/create-class
            {
             :render
             (fn [this]
               [:div  [:p (str "event:" (.. this -props -userData))]  [:li  "Other-Smothing"]]
               )
             }))

(defn User-component [user on-user-select eventHub]
  (let [sta (r/atom eventHub)
        a-user-select (r/atom on-user-select)] ;; you can include state
    (r/create-class
      {
       :get-initial-state (fn [this]
                            (println (.-props this))
                            (println "above props in user init")
                            (println  (aget (.. this -props -argv) 1) )
                            (println eventHub)
                            (println "accessing args")
                            (clj->js user) )

       :display-name "user-component-1"

       :selectUser (fn [this]

                        (println "###########in user select")
                       (println @sta)
                       ;;(js/alert (.. this -state -name))
                      (.emit (r/adapt-react-class @sta) "user-select" (.-state this))
                       )

       ;; note the keyword for this method
       :render
                     (fn [this]
                       (println "in render")
                       (println (.-state this))
                       [:div {:style {:color "red"} :onClick (@a-user-select (.-state this))}   (.. this -state -name)])
       })))

(def current-atom-user (r/atom {}))

(def UserDetail (r/create-class
                  {:component-will-mount (fn [this]
                                           (println "££in user detail")
                                           (println (.. this -props))
                                           (let [gl-ev (.. this -props -glEventHub)]
                                             (.on gl-ev "user-select" (.-setUser this))))
                   :component-will-unmount (fn [this]
                                             (let [gl-ev (.. this -props -glEventHub)]
                                               (.off gl-ev "user-select" (.-setUser this))))
                   :currentUser (r/atom 1000)

                   :setUser (fn [ud]
                              (println "I am in user detail")
                              (println ud)
                              (reset! current-atom-user ud)
                              (println @current-atom-user)
                              )

                   :render (fn [this]
                             (let [user @current-atom-user
                                   imgUrl (str "https://s3-us-west-2.amazonaws.com/s.cdpn.io/152047/" (.-img user)) ]
                               [:div.userdetails
                                [:img {:src imgUrl :width 100 :height 100}]
                                [:h2 (.-name user)]
                                [:p (.-street user)]
                                ]
                               )
                             ;;[:div {:style {:color "red"}} (.-name @current-atom-user)]
                             )

                   }))

(def UserList (r/create-class
            {
             :store (r/atom  {}  )

             :get-initial-state (fn [this]

                                    (reset! (.. this -store) { :users [
                                                                       { :name "11Jackson Turner", :street "217 Tawny End", :img "men_1.jpg" }
                                                                       { :name "Megan Perry", :street "77 Burning Ramp", :img "women_1.jpg" }
                                                                       { :name "Ryan Harris", :street "12 Hazy Apple Route", :img "men_2.jpg" }
                                                                       { :name "Jennifer Edwards", :street "33 Maple Drive", :img "women_2.jpg" },
                                                                       { :name "Noah Jenkins", :street "423 Indian Pond Cape", :img "men_3.jpg" }
                                                                       ]})

                                  (println (.. this -props -glEventHub))
                                    ;; (set! (.-store this)  (clj->js @state1))
                                  ;;(println @state1)
                                  ;;(println (.-state this))
                                    ;;(println "i was here in inti")
                                    ;;(println (.. this -store -users))
                                  @(.. this -store)
                                     )

             :selectUser (fn [this user]
                           (println "###########in user select")
                           ;;(println user)
                           (println  (.. this -props -glEventHub))
                           ;;(js/alert (.. this -state -name))
                           (.emit (.. this -props -glEventHub) "user-select" (clj->js user))
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
                         ;;^{:key (:name user)} [User-component user (.-selectUser this)  {:glEventHub (.. this -props -glEventHub)}]
                         ^{:key (:name user)} [:li   {:style {:color "red"} :onClick #(.selectUser this this user)} (:name user) ]
                         )

                   ])
             }))


(defn home-page []
  (println "I am in home page")
  ;; [UserList]
  (.registerComponent t2 "user-list" UserList)
  (.registerComponent t2 "user-detail" UserDetail)
  (.init t2)
  )



;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
