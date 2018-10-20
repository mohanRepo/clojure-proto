(ns reagent-ploty.core
    (:require
      [reagent.core :as r]
      [js.plotly.react]))

;; -------------------------
;; Views


(enable-console-print!)

(def Plot (new js/createPlotlyComponent js/Plotly))

(def data1 [
           {
            :x [1, 2, 3],
            :y [2, 6, 3],
            :type "scatter",
            :mode "lines+points",
            :marker {:color "red"},
            },
           {:type "bar", :x [1, 2, 3], :y [2, 5, 3]}
           ])

(def layout1 {:width 320 :height 240 :title "A Fancy Plot"})

(defn my-chart []
  [:div
   [Plot {:data data1 :layout layout1}]
   ]
)

(println data1)
(println layout1)

(println "test")


(defn home-page []
  [:div [:h2 "Welcome to Reagent"]
   [my-chart]
   ])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
