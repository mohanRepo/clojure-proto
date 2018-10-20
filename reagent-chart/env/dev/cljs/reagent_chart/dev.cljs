(ns ^:figwheel-no-load reagent-chart.dev
  (:require
    [reagent-chart.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
