var APP_DATA = {
  "scenes": [
    {
      "id": "0-outside",
      "name": "outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.08992918073532508,
        "pitch": -0.11131003683195928,
        "fov": 1.3861230773731033
      },
      "linkHotspots": [
        {
          "yaw": 0.013552267359237646,
          "pitch": 0.3168474473550962,
          "rotation": 6.283185307179586,
          "target": "1-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entry",
      "name": "entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.0211603627757615,
        "pitch": 0.15249861512066687,
        "fov": 1.3861230773731033
      },
      "linkHotspots": [
        {
          "yaw": -0.05416995514896783,
          "pitch": 0.4507662913444186,
          "rotation": 0,
          "target": "2-hall"
        },
        {
          "yaw": -3.0773042919536238,
          "pitch": 0.3888927319293707,
          "rotation": 0,
          "target": "0-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall",
      "name": "hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 1.9508823126529728,
        "pitch": -0.014723289011973506,
        "fov": 1.3861230773731033
      },
      "linkHotspots": [
        {
          "yaw": -3.050499416968421,
          "pitch": 0.33368557637460405,
          "rotation": 0,
          "target": "1-entry"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Casa Rural Figueroa",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
