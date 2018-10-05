(defproject testaggrid-2 "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [ring-server "0.5.0"]
                 [reagent "0.8.1"]
                 [reagent-utils "0.3.1"]
                 [ring "1.6.3"]
                 [ring/ring-defaults "0.3.1"]
                 [compojure "1.6.1"]
                 [hiccup "1.0.5"]
                 [yogthos/config "1.1.1"]
                 [org.clojure/clojurescript "1.10.339"
                  :scope "provided"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.2.4"
                  :exclusions [org.clojure/tools.reader]]]

  :plugins [[lein-environ "1.1.0"]
            [lein-cljsbuild "1.1.7"]
            [lein-asset-minifier "0.2.7"
             :exclusions [org.clojure/clojure]]]

  :ring {:handler testaggrid-2.handler/app
         :uberwar-name "testaggrid-2.war"}

  :min-lein-version "2.5.0"
  :uberjar-name "testaggrid-2.jar"
  :main testaggrid-2.server
  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources" "target/cljsbuild"]

  :minify-assets
  {:assets
   {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

  :cljsbuild
  {:builds {
            :app
            {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
             :figwheel     {:on-jsload "testaggrid-2.core/mount-root"}
             :compiler
                           {:main          "testaggrid-2.dev"
                            :asset-path    "/js/out"
                            :output-to     "target/cljsbuild/public/js/app.js"
                            :source-map "target/cljsbuild/public/js/app.js.map"
                            :output-dir    "target/cljsbuild/public/js/out"
                            :optimizations :whitespace
                            :foreign-libs  [
                                            {:file     "jquery-3.3.1.js"
                                             :provides ["org.jquery.jQuery"]}
                                            {:file     "gl/goldenlayout.js"
                                             :provides ["js.goldenlayout"]
                                             :requires ["org.jquery.jQuery"]}]
                            ;; :externs ["jquery-3.3.1.js" "d3-externs.js"]
                            }
             }

            }
   }

  :figwheel
  {:http-server-root "public"
   :server-port 3449
   :nrepl-port 7002
   :nrepl-middleware [cider.piggieback/wrap-cljs-repl
                      ]
   :css-dirs ["resources/public/css"]
   :ring-handler testaggrid-2.handler/app}



  :profiles {:dev {:repl-options {:init-ns testaggrid-2.repl}
                   :dependencies [[cider/piggieback "0.3.8"]
                                  [binaryage/devtools "0.9.10"]
                                  [ring/ring-mock "0.3.2"]
                                  [ring/ring-devel "1.6.3"]
                                  [prone "1.5.2"]
                                  [figwheel-sidecar "0.5.16"]
                                  [nrepl "0.4.4"]
                                  [cider/piggieback "0.3.8"]
                                  [pjstadig/humane-test-output "0.8.3"]
                                  
 ]

                   :source-paths ["env/dev/clj"]
                   :plugins [[lein-figwheel "0.5.16"]
]

                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)]

                   :env {:dev true}}

             :uberjar {:hooks [minify-assets.plugin/hooks]
                       :source-paths ["env/prod/clj"]
                       :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
                       :env {:production true}
                       :aot :all
                       :omit-source true}})
