(ns reagent-bootstrap.core
    (:require
      [reagent.core :as r]
      [baking-soda.core :as b]
      [reagent-bootstrap.Nav.header-bar :as nav]
      [reagent-bootstrap.tab.tab-content :as t]
      [reagent-bootstrap.tab.dynamic-tab :as dt]
      [reagent-bootstrap.tab.tab-content-mix.core :as mix]))

;; -------------------------
;; Views


(defonce app-state
         (r/atom {:show-modal? false}))

(defn toggle! [ratom]
  (swap! ratom update :show-modal? not))


(defn modal-example [ratom opts]
  (let [{:keys [button-label
                class]} opts
        show-modal?     (get @ratom :show-modal? false)]
    [:div
     [b/Button {:color    "danger"
                :on-click #(toggle! ratom)}
      button-label]

     [b/Modal {:is-open show-modal?
               :toggle  #(toggle! ratom)
               :class   class}
      [b/ModalHeader
       "Modal title"]

      [b/ModalBody
       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]

      [b/ModalFooter

       [b/Button {:color    "primary"
                  :on-click #(toggle! ratom)}
        "Do Something"]
       [b/Button {:color    "secondary"
                  :on-click #(toggle! ratom)}
        "Cancel"]]
      ]
     ]))

(defn ^:export main []
  (r/render [modal-example app-state {:button-label "Click Me"
                                            :class        "mymodal"}]
                  (.getElementById js/document "app")))

(defn home-page []
  (r/render [modal-example app-state {:button-label "Click Me"
                                      :class        "mymodal"}]
            (.getElementById js/document "app")))


(defn page-header []
  [nav/header-bar "Mohan"]
  )

(defn page-body []



      [:div  [modal-example app-state {:button-label "Click Me"
                                       :class        "mymodal"}]
        [:div {:id "tabs1" :style {:height 200 :width 500}}]
       [dt/tab-static]

       ]



  )
(defn page[]
  [:div
   [page-header]
   [page-body]
   ]
  )
;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [page]
            (.getElementById js/document "app"))
  (t/tab-content)
  ;;(mix/other-fun)
      )

(defn mount-root-1 []
  (r/render [modal-example app-state {:button-label "Click Me"
                                      :class        "mymodal"}]
            (.getElementById js/document "app")))

(defn init! []
  (mount-root))
