(ns tiny.core)

(defn ^:export hello
  []
  (.log js/console "Hello, world!"))

(.log js/console "Hello, world!")
