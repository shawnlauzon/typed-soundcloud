SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.16",
      "os": "github:jspm/nodelibs-os@0.2.0-alpha",
      "blue-tape": "npm:blue-tape@0.2.0",
      "es6-promise": "npm:es6-promise@3.2.1",
      "util": "github:jspm/nodelibs-util@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
      "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
      "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
      "events": "github:jspm/nodelibs-events@0.2.0-alpha",
      "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
      "http": "github:jspm/nodelibs-http@0.2.0-alpha",
      "url": "github:jspm/nodelibs-url@0.2.0-alpha",
      "soundcloud": "npm:soundcloud@3.1.2"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@4.0.16": {
        "map": {
          "typescript": "npm:typescript@1.8.10"
        }
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "npm:blue-tape@0.2.0": {
        "map": {
          "tape": "npm:tape@4.6.0"
        }
      },
      "npm:tape@4.6.0": {
        "map": {
          "function-bind": "npm:function-bind@1.1.0",
          "glob": "npm:glob@7.0.5",
          "inherits": "npm:inherits@2.0.1",
          "through": "npm:through@2.3.8",
          "resumer": "npm:resumer@0.0.0",
          "object-inspect": "npm:object-inspect@1.2.1",
          "minimist": "npm:minimist@1.2.0",
          "defined": "npm:defined@1.0.0",
          "deep-equal": "npm:deep-equal@1.0.1",
          "has": "npm:has@1.0.1",
          "string.prototype.trim": "npm:string.prototype.trim@1.1.2",
          "resolve": "npm:resolve@1.1.7"
        }
      },
      "npm:glob@7.0.5": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "once": "npm:once@1.3.3",
          "minimatch": "npm:minimatch@3.0.2",
          "path-is-absolute": "npm:path-is-absolute@1.0.0",
          "fs.realpath": "npm:fs.realpath@1.0.0",
          "inflight": "npm:inflight@1.0.5"
        }
      },
      "npm:resumer@0.0.0": {
        "map": {
          "through": "npm:through@2.3.8"
        }
      },
      "npm:has@1.0.1": {
        "map": {
          "function-bind": "npm:function-bind@1.1.0"
        }
      },
      "npm:string.prototype.trim@1.1.2": {
        "map": {
          "function-bind": "npm:function-bind@1.1.0",
          "define-properties": "npm:define-properties@1.1.2",
          "es-abstract": "npm:es-abstract@1.5.1"
        }
      },
      "npm:es-abstract@1.5.1": {
        "map": {
          "function-bind": "npm:function-bind@1.1.0",
          "is-regex": "npm:is-regex@1.0.3",
          "es-to-primitive": "npm:es-to-primitive@1.1.1",
          "is-callable": "npm:is-callable@1.1.3"
        }
      },
      "npm:once@1.3.3": {
        "map": {
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:minimatch@3.0.2": {
        "map": {
          "brace-expansion": "npm:brace-expansion@1.1.5"
        }
      },
      "npm:inflight@1.0.5": {
        "map": {
          "once": "npm:once@1.3.3",
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:define-properties@1.1.2": {
        "map": {
          "object-keys": "npm:object-keys@1.0.11",
          "foreach": "npm:foreach@2.0.5"
        }
      },
      "npm:es-to-primitive@1.1.1": {
        "map": {
          "is-callable": "npm:is-callable@1.1.3",
          "is-date-object": "npm:is-date-object@1.0.1",
          "is-symbol": "npm:is-symbol@1.0.1"
        }
      },
      "npm:brace-expansion@1.1.5": {
        "map": {
          "balanced-match": "npm:balanced-match@0.4.1",
          "concat-map": "npm:concat-map@0.0.1"
        }
      },
      "github:jspm/nodelibs-buffer@0.2.0-alpha": {
        "map": {
          "buffer-browserify": "npm:buffer@4.7.0"
        }
      },
      "npm:buffer@4.7.0": {
        "map": {
          "isarray": "npm:isarray@1.0.0",
          "base64-js": "npm:base64-js@1.1.2",
          "ieee754": "npm:ieee754@1.1.6"
        }
      },
      "github:jspm/nodelibs-stream@0.2.0-alpha": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "readable-stream": "npm:readable-stream@2.1.4"
        }
      },
      "npm:readable-stream@2.1.4": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "isarray": "npm:isarray@1.0.0",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "core-util-is": "npm:core-util-is@1.0.2",
          "string_decoder": "npm:string_decoder@0.10.31",
          "buffer-shims": "npm:buffer-shims@1.0.0"
        }
      },
      "github:jspm/nodelibs-http@0.2.0-alpha": {
        "map": {
          "http-browserify": "npm:stream-http@2.3.0"
        }
      },
      "npm:stream-http@2.3.0": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "readable-stream": "npm:readable-stream@2.1.4",
          "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
          "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
          "xtend": "npm:xtend@4.0.1"
        }
      },
      "github:jspm/nodelibs-url@0.2.0-alpha": {
        "map": {
          "url-browserify": "npm:url@0.11.0"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "punycode": "npm:punycode@1.3.2",
          "querystring": "npm:querystring@0.2.0"
        }
      },
      "npm:soundcloud@3.1.2": {
        "map": {
          "es6-promise": "npm:es6-promise@2.3.0",
          "node-static": "npm:node-static@0.7.7",
          "form-urlencoded": "npm:form-urlencoded@0.1.9",
          "query-string": "npm:query-string@2.4.2"
        }
      },
      "npm:node-static@0.7.7": {
        "map": {
          "mime": "npm:mime@1.3.4",
          "colors": "npm:colors@1.1.2",
          "optimist": "npm:optimist@0.6.1"
        }
      },
      "npm:optimist@0.6.1": {
        "map": {
          "wordwrap": "npm:wordwrap@0.0.3",
          "minimist": "npm:minimist@0.0.10"
        }
      },
      "npm:query-string@2.4.2": {
        "map": {
          "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  typescriptOptions: {
    tsconfig: true
  },
  meta: {
    "*.ts": {
      loader: "plugin-typescript"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {},
  packages: {}
});
