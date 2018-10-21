(ns reagent-ag-grid-ex.prod
  (:require
    [reagent-ag-grid-ex.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
