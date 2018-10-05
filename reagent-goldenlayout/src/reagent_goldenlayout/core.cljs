(ns reagent-goldenlayout.core
    (:require
      [reagent.core :as r]
      [js.goldenlayout]))

;; -------------------------
;; Views

;;(def js-object (clj->js { :content [{:type "component", :component "sayHi",:componentState { :name 'Wolfram' } }]}))
;;:content [{ :type 'row', :content[{ :type'react-component', :component 'test-component', :props { :label 'A' } },{ :type 'column', :content[{ :type'react-component', :component 'test-component', :props { :label 'B' } },{ :type'react-component', :component 'test-component', :props { :label 'C' } }] }] }]
(def js-object (clj->js {:content [{ :type "row", :content[{ :type"react-component", :component "test-component", :props { :label "A" } },{ :type "column", :content[{ :type"react-component", :component "test-component", :props { :label "B" } },{ :type"react-component", :component "test-component", :props { :label "C" } }] }] }] }))

(enable-console-print!)
(println "mhan")

(println js-object)

(def t2 (new js/GoldenLayout js-object))

(println t2)

;;(.. js/object -prop1 -prop2 -prop3) ;; JS output: object.prop1.prop2.prop3;
;;(aget js/object "prop1" "prop2" "prop3") ;; JS output: object["prop1"]["prop2"]["prop3"];
;;(libraryCall (fn [] (this-as my-this (.log js/console my-this))))

(defn myfun []
  (println "...£££ i am called")
  (println (fn [] (this-as my-this (.. my-this -props -label))))
  [:h2 "Something"])

(def fun2 (r/create-class
            {:render
             (fn [this]
               ;;(println (this-as my-this (.-props my-this)))

               [:h1 (.. this -props -label) ])}))




(defn home-page []
  (println "I am in home page")
  (.registerComponent t2 "test-component" fun2)
  (.init t2))



(defn home-page-1 []
  [:div [:h2 "Welcome to Reagent"]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
