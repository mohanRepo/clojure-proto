(defproject reagent-bootstrap "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [baking-soda "0.2.0"]
                 [reagent "0.8.1" :exclusions [cljsjs/react
                                               cljsjs/react-dom]]
                 [cljsjs/ag-grid-react "17.0.0-0"]
                 [cljsjs/recharts "1.1.0-3"]
                 [cljsjs/react "16.3.2-0"]
                 [cljsjs/react-dom "16.3.2-0"]
                 [cljsjs/react-transition-group "2.3.1-0"]
                 [cljsjs/react-popper "0.10.4-0"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.16"]]

  :min-lein-version "2.5.0"
  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["public"]

  :figwheel {:http-server-root "."
             :nrepl-port 7002
             :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
             :css-dirs ["public/css"]}

  :cljsbuild {:builds {:app
                       {:source-paths ["src" "env/dev/cljs"]
                        :compiler
                        {:main "reagent-bootstrap.dev"
                         :output-to "public/js/app.js"
                         :output-dir "public/js/out"
                         :asset-path   "js/out"
                         :source-map true
                         :optimizations :none
                         :foreign-libs  [
                                         {:file     "gl/jquery-3.3.1.js"
                                          :provides ["org.jquery.jQuery"]}
                                         {:file     "plotly/plotly-latest.js"
                                          :provides ["js.plotly"]}
                                         {:file     "plotly/create-plotly-component.js"
                                          :provides ["js.plotly.react"]
                                          :requires ["cljsjs.react" "cljsjs.react.dom" "js.plotly"]}
                                         {:file     "gl/goldenlayout.js"
                                          :provides ["js.goldenlayout"]
                                          :requires ["org.jquery.jQuery"]}]
                         :pretty-print  true}
                        :figwheel
                        {:on-jsload "reagent-bootstrap.core/mount-root"
                         :open-urls ["http://localhost:3449/index.html"]}}
                       :release
                       {:source-paths ["src" "env/prod/cljs"]
                        :compiler
                        {:output-to "public/js/app.js"
                         :output-dir "public/js/release"
                         :asset-path   "js/out"
                         :optimizations :advanced
                         :foreign-libs  [
                                         {:file     "gl/jquery-3.3.1.js"
                                          :provides ["org.jquery.jQuery"]}
                                         {:file     "plotly/plotly-latest.js"
                                          :provides ["js.plotly"]}
                                         {:file     "plotly/create-plotly-component.js"
                                          :provides ["js.plotly.react"]
                                          :requires ["cljsjs.react" "cljsjs.react.dom" "js.plotly"]}
                                         {:file     "gl/goldenlayout.js"
                                          :provides ["js.goldenlayout"]
                                          :requires ["org.jquery.jQuery"]}]
                         :pretty-print false}}}}

  :aliases {"package" ["do" "clean" ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:source-paths ["src" "env/dev/clj"]
                   :dependencies [[binaryage/devtools "0.9.10"]
                                  [figwheel-sidecar "0.5.16"]
                                  [nrepl "0.4.4"]
                                  [cider/piggieback "0.3.8"]]}})
