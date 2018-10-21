(ns reagent-aggrid.prod
  (:require [reagent-aggrid.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
