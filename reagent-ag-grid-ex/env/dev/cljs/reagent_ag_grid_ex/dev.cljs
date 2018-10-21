(ns ^:figwheel-no-load reagent-ag-grid-ex.dev
  (:require
    [reagent-ag-grid-ex.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
