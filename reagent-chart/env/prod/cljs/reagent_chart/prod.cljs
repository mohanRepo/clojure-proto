(ns reagent-chart.prod
  (:require
    [reagent-chart.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
