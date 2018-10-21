(ns reagent-bootstrap.tab.chart.plotly  (:require
                                          [reagent.core :as r]
                                          [js.plotly.react]))

;; -------------------------
;; Views


(enable-console-print!)

;;(def plot-comp (r/adapt-react-class js/createPlotlyComponent))
;;(def p js/Plotly)
;;(def plot (.-plot p))
;;(def plot-comp (r/adapt-react-class js/createPlotlyComponent))
;;(def plotly (r/adapt-react-class js/Plotly))

(def Plot (r/adapt-react-class (js/createPlotlyComponent js/Plotly)))

(def data1 (clj->js [
                     {:x [1, 2, 3] :y [2, 6, 3] :type "scatter" :mode "lines+points" :marker {:color "red"}}
                     {:type "bar", :x [1, 2, 3], :y [2, 5, 3]}
                     ]))

(def layout1 (clj->js {:width 320 :height 240 :title "A Fancy Plot"}))


;;(println data1)
;;(println layout1)
;;(println "test")

(def UserDetail (r/create-class
                  {

                   :render                 (fn [this]
                                             [Plot {:data data1 :layout layout1}]
                                             )

                   }))


(defn home-page []
  [:div [:h2 "Welcome to Reagent"]
   ;;[plot {:data data1 :layout layout1}]
   ])

(defn plotly-chart []
  [Plot {:data data1 :layout layout1}]
  )

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [Plot {:data data1 :layout layout1}] (.getElementById js/document "app")))


