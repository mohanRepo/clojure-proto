(ns reagent-ploty.core
    (:require
      [reagent.core :as r]
      [js.plotly.react]))

;; -------------------------
;; Views


(enable-console-print!)

;;(def plot-comp (r/adapt-react-class js/createPlotlyComponent))

(def p js/Plotly)

(def plot (.-plot p))

(def plotly (r/adapt-react-class js/Plotly))

;;(def Plot (new js/createPlotlyComponent js/Plotly))

(def data1 (clj->js [
                     {:x [1, 2, 3] :y [2, 6, 3] :type "scatter" :mode "lines+points" :marker {:color "red"}}
                     {:type "bar", :x [1, 2, 3], :y [2, 5, 3]}
                     ]))

(def layout1 (clj->js {:width 320 :height 240 :title "A Fancy Plot"}))


;;(println data1)
;;(println layout1)

;;(println "test")


(defn home-page []
  [:div [:h2 "Welcome to Reagent"]
   [plot {:data data1 :layout layout1}]
   ])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
