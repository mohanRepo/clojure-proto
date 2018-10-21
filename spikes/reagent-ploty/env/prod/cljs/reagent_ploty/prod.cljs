(ns reagent-ploty.prod
  (:require
    [reagent-ploty.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
