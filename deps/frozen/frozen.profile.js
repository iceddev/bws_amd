var profile = (function(){

  'use strict';

  var miniExcludes = {
    'frozen/package': 1
  };

  return {
    basePath: "./",
    releaseDir: "libs",
    action: "release",
    layerOptimize: "closure",
    mini: true,
    selectorEngine: "acme",

    dojoBootText: "(function(){ require({cache:{}}); require.boot && require.apply(null, require.boot); })();",

    defaultConfig: {
      hasCache:{
        "dojo-built": 1,
        "dojo-loader": 1,
        "dom": 1,
        "host-browser": 1,
        "config-selectorEngine": "acme"
      },
      async: 1
    },

    staticHasFeatures: {
      "config-deferredInstrumentation": 0,
      "config-dojo-loader-catches": 0,
      "config-tlmSiblingOfDojo": 0,
      "dojo-amd-factory-scan": 0,
      "dojo-cdn": 0,
      "dojo-combo-api": 0,
      "dojo-config-api": 1,
      "dojo-config-require": 0,
      "dojo-debug-messages": 0,
      "dojo-dom-ready-api": 1,
      "dojo-firebug": 0,
      "dojo-guarantee-console": 0,
      "dojo-has-api": 1,
      "dojo-inject-api": 1,
      "dojo-loader": 1,
      "dojo-log-api": 0,
      "dojo-modulePaths": 0,
      "dojo-moduleUrl": 0,
      "dojo-publish-privates": 0,
      "dojo-requirejs-api": 0,
      "dojo-sniff": 0,
      "dojo-sync-loader": 0,
      "dojo-test-sniff": 0,
      "dojo-timeout-api": 0,
      "dojo-trace-api": 0,
      "dojo-undef-api": 0,
      "dojo-v1x-i18n-Api": 1,
      "dom": 1,
      "host-browser": 1,
      "extend-dojo": 1,
      "dom-addeventlistener": 1,
      "csp-restrictions": 1
    },

    layers: {
      "dojo/dojo": {
        include: [],
        customBase: true
      },
      "dist/frozen": {
        include: [
          'frozen/box2d/Box',
          'frozen/box2d/BoxGame',
          'frozen/box2d/entities',
          'frozen/box2d/entities/Circle',
          'frozen/box2d/entities/Entity',
          'frozen/box2d/entities/Polygon',
          'frozen/box2d/entities/MultiPolygon',
          'frozen/box2d/entities/Rectangle',
          'frozen/box2d/joints',
          'frozen/box2d/joints/Joint',
          'frozen/box2d/joints/Revolute',
          'frozen/box2d/joints/Distance',
          'frozen/box2d/joints/Prismatic',
          'frozen/reiner/Creature',
          'frozen/AnimFrame',
          'frozen/Animation',
          'frozen/GameAction',
          'frozen/MouseAction',
          'frozen/GameCore',
          'frozen/InputManager',
          'frozen/ResourceManager',
          'frozen/shims/AudioContext',
          'frozen/shims/RAF',
          'frozen/Sprite',
          'frozen/utils',
          'frozen/sounds/Sound',
          'frozen/sounds/WebAudio',
          'frozen/sounds/HTML5Audio',
          'frozen/plugins/sound',
          'frozen/plugins/loadImage',
          'frozen/plugins/loadSound',
          'dojo/keys'
        ],
        customBase: true,
        boot: true
      }
    },

    resourceTags: {
      miniExclude: function(filename, mid){
        return mid in miniExcludes;
      },
      amd: function(filename, mid) {
        return (/\.js$/).test(filename);
      }
    }
  };
})();