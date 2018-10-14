(ns reagent-bootstrap.Nav.header-bar
  (:require
    [reagent.core :as r]
    [baking-soda.core :as b])
  )


(def logo "TNPC")

(def header-bar-state (r/atom false))

(defn header-bar-toggle []
  (swap! header-bar-state not))

(defn header-bar [user]
  [:div
   [b/Navbar {:color "light" :light true :expand "md"}
     [b/NavbarBrand {:href "#"} logo]
     [b/NavbarToggler {:on-click header-bar-toggle}]
     [b/Collapse {:is-open @header-bar-state :navbar true}
      [b/Nav {:class "ml-auto" :navbar true}
       [b/NavItem [b/NavLink {:href "#"} "Settings"]]
       [b/UncontrolledDropdown {:nav true :inNavbar true}
        [b/DropdownToggle {:nav true :caret true} user]
        [b/DropdownMenu {:right true}
         [b/DropdownItem "Options"]
         [b/DropdownItem "Save Log"]
         [b/DropdownItem {:divider true}]
         [b/DropdownItem "LogOut"]
         ]
        ]
       ]
      ]
    ]
   ]

  )
