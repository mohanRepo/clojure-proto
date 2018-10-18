(ns test-rest-client.core
    (:require
      [reagent.core :as r]
      [cljs.core.async :refer [<!]]
      [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(enable-console-print!)

  (go (let [response (<! (http/get "http://localhost:3000/api/plus?x=1&y=2"))]
        (prn (:status response))
        (prn (:body response))))

;; -------------------------
;; Views

(defn home-page []
  (go (let [response (<! (http/get "http://localhost:3000/api/plus" {:with-credentials? false :query-params {"x" 1 "y" 2}}) )]
        (prn (:status response))
        (prn (:body response))))

  [:div [:h2 "Welcome to Reagent"]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
