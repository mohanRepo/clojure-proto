(ns reagent-bootstrap.tab.dynamic-tab
(:require   [reagent.core :as r]
            [baking-soda.core :as b]
            [js.goldenlayout]
            [reagent-bootstrap.tab.tab-content :as t]))

(def dyn-tab-state (r/atom "1"))

(defn toggle-tab [tab]
      (reset! dyn-tab-state tab)
      (t/push-layout "#dyntab")

      )

(def some-content "dynamic content")


(defn tab-static
  "docstring"
  []
      [:div
       [b/Nav {:tabs true}
        [b/NavItem [b/NavLink {:on-click #(toggle-tab "1")}  "Tab1" ]]
        [b/NavItem [b/NavLink {:on-click #(toggle-tab "2")}  some-content]]
        ]
       [b/TabContent {:active-tab @dyn-tab-state}
        [b/TabPane {:tab-id "1"}
         [b/Row
          [b/Col {:sm "12"}
           [:h6#dyntab "Tab 1 Content"]
           ]
          ]
         ]
        [b/TabPane {:tab-id "2"}
         [b/Row
          [b/Col {:sm "12"}
           [:h6 "Tab 2 Content"]
           ]
          ]
         ]
        ]
       ]
  )



