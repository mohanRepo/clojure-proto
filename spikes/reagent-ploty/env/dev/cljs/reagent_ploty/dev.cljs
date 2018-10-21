(ns ^:figwheel-no-load reagent-ploty.dev
  (:require
    [reagent-ploty.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
