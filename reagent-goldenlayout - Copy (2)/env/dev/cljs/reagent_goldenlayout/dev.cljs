(ns ^:figwheel-no-load reagent-goldenlayout.dev
  (:require
    [reagent-goldenlayout.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
