(ns reagent-bootstrap.tab.tab-content
  (:require
    [reagent.core :as r]
    [baking-soda.core :as b]
    [cljsjs.ag-grid-react]
    [js.goldenlayout]
    [reagent-bootstrap.tab.chart :as chart]
    [reagent-bootstrap.tab.chart.plotly :as plotly]))


(def config {:content [{:type "row", :content [{:title "Users", :type "react-component", :component "user-list"}, {:title "User Detail", :type "react-component", :component "user-detail"}]}]})
(def config-js (clj->js config))

(def user-layout (new js/GoldenLayout config-js "#tabs1"))




(def rates [
            {:tenor "1D" :rate 1 :vol-factor 1}
            {:tenor "5D" :rate 3 :vol-factor 1.5}
            {:tenor "1M" :rate 6 :vol-factor .9}
            {:tenor "6M" :rate 4 :vol-factor 2}
            {:tenor "1Y" :rate 5 :vol-factor 3}
            {:tenor "2Y" :rate 2 :vol-factor 2}
            ])

(def usd-curve {:ccy "USD" :curve_type "Q2" :model "smile"})

(defn get-cols [entry]
  (into [] (map #(hash-map :headerName (-> % key name) :field (-> % key name)) entry))
  )


(def ag-adapter (r/adapt-react-class (.-AgGridReact js/agGridReact) ))

(defn rates-table []
  [:div { :style {:height 200 :width 20000 :color "red"}}
   [ag-adapter {:columnDefs  (get-cols (first rates)) :rowData rates}]]

  )

(def current-atom-user (r/atom {}))

(def UserDetail (r/create-class
                  {

                   :render                 (fn [this]
                                             ;;[chart/my-chart]
                                             [plotly/plotly-chart]
                                             )

                   }))

(def UserDetail1 (r/create-class
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
                                        [rates-table])
                 }))

(defn tab-content []
      (.registerComponent user-layout "user-list" UserList)
      (.registerComponent user-layout "user-detail" UserDetail)
      (.init user-layout)
      )

;;(def user-layout (new js/GoldenLayout config-js "#tabs1"))

(defn push-layout [id]
  (let [gl  (new js/GoldenLayout config-js id)]
       (.registerComponent gl "user-list" UserList)
       (.registerComponent gl "user-detail" UserDetail)
       (.init gl)

    ))


;; -------------------------
;; Initialize app

;;(defn mount-root []
;;    (r/render [home-page] (.getElementById js/document "app")))
