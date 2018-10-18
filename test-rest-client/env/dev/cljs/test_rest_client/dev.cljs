(ns ^:figwheel-no-load test-rest-client.dev
  (:require
    [test-rest-client.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
