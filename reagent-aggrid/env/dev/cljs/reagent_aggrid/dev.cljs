(ns ^:figwheel-no-load reagent-aggrid.dev
  (:require
    [reagent-aggrid.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
