(ns reagent-goldenlayout.core
    (:require
      [reagent.core :as r]
      [js.goldenlayout]))

;; -------------------------
;; Views

;;(def js-object (clj->js { :content [{:type "component", :component "sayHi",:componentState { :name 'Wolfram' } }]}))
;;:content [{ :type 'row', :content[{ :type'react-component', :component 'test-component', :props { :label 'A' } },{ :type 'column', :content[{ :type'react-component', :component 'test-component', :props { :label 'B' } },{ :type'react-component', :component 'test-component', :props { :label 'C' } }] }] }]
(def js-object (clj->js {:content [{ :type "row", :content[{ :type"react-component", :component "test-component", :props { :label "A" } },{ :type "column", :content[{ :type"react-component", :component "test-component", :props { :label "B" } },{ :type"react-component", :component "test-component", :props { :label "C" } }] }] }] }))

(def config  { :content [{ :type "row", :content [{ :title "Users", :type"react-component", :component "user-list" },{ :title "User Detail", :type"react-component", :component "user-detail" }] }] })
(def config-js (clj->js config))

(enable-console-print!)
(println "mhan")

(println js-object)

(def t2 (new js/GoldenLayout config-js))

(println t2)

(def User (r/create-class
                {:get-initial-state (fn [this]
                                      (.. this -props -userData))

                 :selectUser (fn [this]
                               (let [gl-ev (.. this -props -glEventHub)
                                     st (.-state this)]
                                 (.emit gl-ev "user-select" st)
                                 ))

                 :render
                                    (fn [this]
                                      [:li {:onClick #(.selectUser this)} (.. this -state -name)])
                 }))

(def UserDetail (r/create-class
                  {:component-will-mount (fn [this]
                                           (let [gl-ev (.. this -props -glEventHub)]
                                             (.on gl-ev "user-select" (.setUser this))))
                   :component-will-unmount (fn [this]
                                             (let [gl-ev (.. this -props -glEventHub)]
                                               (.off gl-ev "user-select" (.setUser this))))
                   :setUser (fn [ud]
                              (this-as this (.setState this ud )))

                   :render (fn [this]
                             ((if (.state this)
                               (let [imgUrl (str "https://s3-us-west-2.amazonaws.com/s.cdpn.io/152047/" (.. this -state -img)) ]
                                 [:div.userdetails
                                  [:img {:src imgUrl :width 100 :height 100}]
                                  [:h2 (.. this -state -name)]
                                  [:p (.. this -state -street)]
                                  ]
                                 )
                               ([:div.userdetails "No User Selected"]))))

                   }))


(def UserList (r/create-class
            {:get-initial-state (fn [this]
                                  {:users  [
                                            { :name "Jackson Turner", :street "217 Tawny End", :img "men_1.jpg" },
                                            { :name "Megan Perry", :street "77 Burning Ramp", :img "women_1.jpg" },
                                            { :name "Ryan Harris", :street "12 Hazy Apple Route", :img "men_2.jpg" },
                                            { :name "Jennifer Edwards", :street "33 Maple Drive", :img "women_2.jpg" },
                                            { :name "Noah Jenkins", :street "423 Indian Pond Cape", :img "men_3.jpg" }
                                            ]})

             :render
             (fn [this]
               [:ul.userlist (.map (.. this -state -users)
                                   (fn [user]
                                       [User {:key (.-name user)
                                              :userData user
                                              :glEventHub (.. this -props -glEventHub)}]
                ))]

              )
             }))






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
  (.registerComponent t2 "user-list" UserList)
  (.registerComponent t2 "user-detail" UserDetail)
  (.init t2))

(defn home-page-2 []
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
