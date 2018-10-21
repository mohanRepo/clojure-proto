(ns reagent-bootstrap.tab.tab-content-mix.core
  (:require
    [reagent.core :as r]
    [cljsjs.ag-grid-react]
    [js.goldenlayout]))



(def config {:content [{:type "row", :content [{:title "Rates", :type "react-component", :component "rates"}]}]})
(def config-js (clj->js config))

(def curve-layout (new js/GoldenLayout config-js "#tabcontent"))

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

(def UserDetail (r/create-class
                  {

                   :render                 (fn [this]
                                             [rates-table]
                                             )

                   }))


(defn curve-detail [curve]
  [:div [:h2 "Curve detail"]
    [:div
     (for [prop curve]
       [:p (str (-> prop key name) " : " (-> prop val))])
     ]
   ]
  )


(defn other-fun []
  (.registerComponent curve-layout "rates" UserDetail)
  (.init curve-layout)
  )


(defn push-layout [id]
  (println "i was here .. dirty log")
  (let [gl  (new js/GoldenLayout config-js id)]
    (.registerComponent gl "rates" UserDetail)
    ;;(.registerComponent gl "curve-detail" curve-detail)
    (.init gl)

    ))

;;(push-layout "#tabcontent")
