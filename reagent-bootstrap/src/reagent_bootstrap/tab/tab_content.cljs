(ns reagent-bootstrap.tab.tab-content
  (:require
    [reagent.core :as r]
    [baking-soda.core :as b]
    [js.goldenlayout]))


(def config {:content [{:type "row", :content [{:title "Users", :type "react-component", :component "user-list"}, {:title "User Detail", :type "react-component", :component "user-detail"}]}]})
(def config-js (clj->js config))

(def user-layout (new js/GoldenLayout config-js "#tabs1"))

(def current-atom-user (r/atom {}))

(def UserDetail (r/create-class
                  {:component-will-mount   (fn [this]
                                               (let [gl-ev (.. this -props -glEventHub)]
                                                    (.on gl-ev "user-select" (.-setUser this))))
                   :component-will-unmount (fn [this]
                                               (let [gl-ev (.. this -props -glEventHub)]
                                                    (.off gl-ev "user-select" (.-setUser this))))

                   :setUser                (fn [ud]
                                               (println ud)
                                               (reset! current-atom-user ud)
                                               )

                   :render                 (fn [this]
                                               (let [user @current-atom-user
                                                     imgUrl (str "https://s3-us-west-2.amazonaws.com/s.cdpn.io/152047/" (.-img user))]
                                                    [:div.userdetails
                                                     [:img {:src imgUrl :width 100 :height 100}]
                                                     [:h2 (.-name user)]
                                                     [:p (.-street user)]
                                                     ]
                                                    )
                                               )

                   }))

(def UserList (r/create-class
                {
                 :store             (r/atom {})

                 :get-initial-state (fn [this]

                                        (reset! (.. this -store) {:users [
                                                                          {:name "11Jackson Turner", :street "217 Tawny End", :img "men_1.jpg"}
                                                                          {:name "Megan Perry", :street "77 Burning Ramp", :img "women_1.jpg"}
                                                                          {:name "Ryan Harris", :street "12 Hazy Apple Route", :img "men_2.jpg"}
                                                                          {:name "Jennifer Edwards", :street "33 Maple Drive", :img "women_2.jpg"},
                                                                          {:name "Noah Jenkins", :street "423 Indian Pond Cape", :img "men_3.jpg"}
                                                                          ]})

                                        @(.. this -store)
                                        )

                 :selectUser        (fn [this user]
                                        (println user)
                                        (.emit (.. this -props -glEventHub) "user-select" (clj->js user))
                                        )
                 :render
                                    (fn [this]
                                        [:ul (for [user (:users (.-state this))]
                                                  ^{:key (:name user)} [:li {:style {:color "red"} :onClick #(.selectUser this this user)} (:name user)]
                                                  )

                                         ])
                 }))

(defn tab-content []
      (.registerComponent user-layout "user-list" UserList)
      (.registerComponent user-layout "user-detail" UserDetail)
      (.init user-layout)
      )

(defn render-tab-content []
      (r/render [tab-content] (.getElementById js/document "tabs-1"))
      )





;; -------------------------
;; Initialize app

;;(defn mount-root []
;;    (r/render [home-page] (.getElementById js/document "app")))
