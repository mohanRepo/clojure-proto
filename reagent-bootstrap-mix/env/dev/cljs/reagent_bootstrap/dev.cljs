(ns ^:figwheel-no-load reagent-bootstrap.dev
  (:require
    [reagent-bootstrap.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
