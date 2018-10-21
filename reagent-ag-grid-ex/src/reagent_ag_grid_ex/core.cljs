(ns reagent-ag-grid-ex.core
    (:require
      [reagent.core :as r]
      [cljsjs.ag-grid-react]))

;; -------------------------
;; Views

(enable-console-print!)

(def ag-adapter (r/adapt-react-class (.-AgGridReact js/agGridReact) ))


(def cols [ {:headerName "Make", :field "make"}, {:headerName "Model", :field "model"}, {:headerName "Price", :field "price"} ])
(def rows [ {:make "Toyota", :model "Celica", :price 35000}, {:make "Ford", :model "Mondeo", :price 32000}, {:make "Porsche", :model "Boxter", :price 72000}])
;;columnDefs: [ {headerName: "Make", field: "make"}, {headerName: "Model", field: "model"}, {headerName: "Price", field: "price"} ]
;;rowData: [ {make: "Toyota", model: "Celica", price: 35000}, {make: "Ford", model: "Mondeo", price: 32000}, {make: "Porsche", model: "Boxter", price: 72000}]

(defn home-page []
  [:div [:h2 "Welcome to reagent-aggrid change"]
   [:div {:className "ag-theme-balham" :style {:height 200 :width 20000 :color "red"}}
    [ag-adapter {:columnDefs  cols :rowData rows}]]

   [:div [:a {:href "/about"} "go to about page"]]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
