(ns testaggrid-2.prod
  (:require [testaggrid-2.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
