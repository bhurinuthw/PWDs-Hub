export const colors = {
  "background": "#ffffff",
  "brand": "#0096D6",
  "control": "#0096D6",
  "focus": "#99d5ef",
  "neutral-1": "#006996",
  "neutral-2": "#A65336",
  "neutral-3": "#A69136",
  "neutral-4": "#774677",
  "accent-1": "#c1613e",
  "accent-2": "#E6C84B",
  "accent-3": "#915591",
  "accent-4": '#FF4080',
  "status-critical": "#F04B37",
  "status-warning": "#F0AA3C",
  "status-ok": "#509137",
  "status-unknown": "#848484",
  "status-disabled": "#848484",
  "dark-1": "#24292E",
  "dark-2": "#676767",
  "light-0": '#FFFFFF',
  "light-1": "#F2F2F2",
  "light-2": "#E8E8E8",
  "light-3": "#CCCCCC",
  "light-4": "#6E7174",
};

export default {
  "global": {
    control: {
      border: {
        radius: "24px"
      }
    },
    "colors": colors,
    "font": {
      "family": "'HPSimplified', Arial, sans-serif",
      "face": "\n        @font-face {\n          font-family: 'HPSimplified';\n          src:\n            local('HPSimplified'),\n            url(\"https://hpincfonts.s3.amazonaws.com/hps-me-w27-regular-woff.woff\") format('woff');\n        }\n      "
    }
  },
  "anchor": {
    "color": "#2883d7"
  },
  "button": {
    "extend": [
      "\n      ",
      null,
      "\n    "
    ]
  },
  "checkBox": {
    "icon": {
      "extend": [
        "\n        box-sizing: border-box;\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        width: ",
        null,
        ";\n        height: ",
        null,
        ";\n      "
      ]
    }
  },
  "icon": {
    "colors": {
      "light-0": '#FFFFFF'
    }
  }
}