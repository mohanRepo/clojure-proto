(ns reagent-chart.core
    (:require
      [reagent.core :as reagent]
    [cljsjs.recharts]))

;; -------------------------
;; Views


(def lc (reagent/adapt-react-class (.-LineChart js/Recharts)) )
(def x-axis (reagent/adapt-react-class(.-XAxis js/Recharts)))
(def y-axis (reagent/adapt-react-class(.-YAxis js/Recharts)))
(def c-g (reagent/adapt-react-class(.-CartesianGrid js/Recharts)))
(def tool-tip (reagent/adapt-react-class(.-Tooltip js/Recharts)))
(def legend (reagent/adapt-react-class(.-Legend js/Recharts)))
(def line (reagent/adapt-react-class(.-Line js/Recharts)))

(def data (clj->js [
                    {:name "Page A" :uv 4000 :pv 2400 :amt 2400}
                    {:name "Page B" :uv 3000 :pv 1398 :amt 2210}
                    {:name "Page C" :uv 2000 :pv 9800 :amt 2290}
                    {:name "Page D" :uv 2780 :pv 3908 :amt 2000}
                    {:name "Page E" :uv 1890 :pv 4800 :amt 2181}
                    {:name "Page F" :uv 2390 :pv 3800 :amt 2500}
                    {:name "Page G" :uv 3490 :pv 4300 :amt 2100}
                    {:name "Page H" :uv 3490 :pv 4300 :amt 2100}
                    ]) )

(defn my-chart []
  [lc {:width 600 :height 300 :data data :margin {:top 5 :right 30 :left 20 :bottom 5}}
   [x-axis {:dataKey "name"}]
   [y-axis]
   [c-g {:strokeDasharray "3 3"}]
   [tool-tip]
   [legend]
   [line {:type "monotone" :dataKey "pv" :stroke "#8884d8" :activeDot {:r 8}}]
   [line {:type "monotone" :dataKey "uv" :stroke "#82ca9d" }]
   ]
  )



(defn home-page []
  [:div [:h2 "Welcome to Reagent"]
   [my-chart]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
