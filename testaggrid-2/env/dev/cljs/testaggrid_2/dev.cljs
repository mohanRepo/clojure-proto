(ns ^:figwheel-no-load testaggrid-2.dev
  (:require
    [testaggrid-2.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
