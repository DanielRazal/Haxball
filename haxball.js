


// const RoomManager = require('./RoomManager.js');
// const roomManager = new RoomManager(room);
// roomManager.clearAllBans();

var room = HBInit({
    roomName: "Test",
    maxPlayers: 10,
    public: true,
    // password: "1234",
    geo: {
        code: "IL",
        lat: 31.0461,
        lon: 34.8516
    },
    token: "thr1.AAAAAGd3Ye7VEzP7zwygLA.Ic6aVUdLBfU",
    noPlayer: true
});

var stadiumFileText = `
{
    "name": "Training  from HaxMaps",
    "width": 600,
    "height": 500,
    "spawnDistance": 350,
    "bg": {
        "type": "hockey",
        "width": 550,
        "height": 450,
        "kickOffRadius": 80,
        "cornerRadius": 0
    },
    "vertexes": [
        {
            "x": -550,
            "y": 450,
            "trait": "ballArea",
            "bCoef": 1,
            "cMask": [
                "ball"
            ]
        },
        {
            "x": -550,
            "y": -449,
            "trait": "ballArea",
            "bCoef": 1,
            "cMask": [
                "ball"
            ]
        },
        {
            "x": 550,
            "y": 240,
            "trait": "ballArea"
        },
        {
            "x": 550,
            "y": -240,
            "trait": "ballArea"
        },
        {
            "x": 154,
            "y": 79,
            "color": "696969",
            "bCoef": 1,
            "trait": "ballArea"
        },
        {
            "x": -465,
            "y": 80,
            "color": "696969",
            "bCoef": 1,
            "trait": "ballArea"
        },
        {
            "x": 551,
            "y": 77,
            "bCoef": 1,
            "trait": "ballArea"
        },
        {
            "x": -1,
            "y": -80,
            "bCoef": 1,
            "trait": "ballArea"
        },
        {
            "x": -469,
            "y": -77,
            "bCoef": 1,
            "trait": "ballArea"
        },
        {
            "x": 550,
            "y": -79,
            "bCoef": 1,
            "trait": "ballArea"
        },
        {
            "x": 508,
            "y": -218
        },
        {
            "x": 507,
            "y": -107
        },
        {
            "x": 509,
            "y": 106
        },
        {
            "x": 508,
            "y": 217
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": 32,
            "y": -81
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": 32,
            "y": 23
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -196,
            "y": 78
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -197,
            "y": -16
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -83,
            "y": -32
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -82,
            "y": 30
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -325,
            "y": -79
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -326,
            "y": 11
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -261,
            "y": -51
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -260,
            "y": 17
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -397,
            "y": 79
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -399,
            "y": 0
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": 112,
            "y": 77
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": 111,
            "y": -19
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": 181,
            "y": -80
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": 181,
            "y": 10
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": 242,
            "y": 76
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": 242,
            "y": 31
        },
        {
            "x": 506,
            "y": -54
        },
        {
            "x": 505,
            "y": 57
        },
        {
            "x": 563,
            "y": -233,
            "curve": 200,
            "trait": "kickOffBarrier"
        },
        {
            "x": 562,
            "y": -212,
            "curve": 200,
            "trait": "kickOffBarrier"
        },
        {
            "x": 563,
            "y": -203,
            "trait": "kickOffBarrier"
        },
        {
            "x": 563,
            "y": -179,
            "trait": "kickOffBarrier"
        },
        {
            "x": 574,
            "y": -197,
            "trait": "kickOffBarrier"
        },
        {
            "x": 563,
            "y": -189,
            "trait": "kickOffBarrier"
        },
        {
            "x": 575,
            "y": -177,
            "trait": "kickOffBarrier"
        },
        {
            "x": 563,
            "y": -166,
            "trait": "kickOffBarrier"
        },
        {
            "x": 563,
            "y": -143,
            "trait": "kickOffBarrier"
        },
        {
            "x": 559,
            "y": -131,
            "trait": "kickOffBarrier"
        },
        {
            "x": 558,
            "y": -106
        },
        {
            "x": 573,
            "y": -124,
            "trait": "kickOffBarrier"
        },
        {
            "x": 560,
            "y": -116,
            "trait": "kickOffBarrier"
        },
        {
            "x": 575,
            "y": -109,
            "trait": "kickOffBarrier"
        },
        {
            "x": 560,
            "y": 83,
            "trait": "kickOffBarrier"
        },
        {
            "x": 560,
            "y": 108,
            "trait": "kickOffBarrier"
        },
        {
            "x": 573,
            "y": 93,
            "trait": "kickOffBarrier"
        },
        {
            "x": 561,
            "y": 96,
            "trait": "kickOffBarrier"
        },
        {
            "x": 577,
            "y": 109,
            "trait": "kickOffBarrier"
        },
        {
            "x": 566,
            "y": 117,
            "trait": "kickOffBarrier"
        },
        {
            "x": 558,
            "y": 125
        },
        {
            "x": 566,
            "y": 135,
            "trait": "kickOffBarrier"
        },
        {
            "x": 573,
            "y": 127,
            "trait": "kickOffBarrier"
        },
        {
            "x": 570,
            "y": 142,
            "trait": "kickOffBarrier"
        },
        {
            "x": 556,
            "y": 153
        },
        {
            "x": 570,
            "y": 162,
            "trait": "kickOffBarrier"
        },
        {
            "x": 557,
            "y": 168
        },
        {
            "x": 556,
            "y": 189
        },
        {
            "x": 558,
            "y": 181
        },
        {
            "x": 570,
            "y": 171,
            "trait": "kickOffBarrier"
        },
        {
            "x": 569,
            "y": 187,
            "trait": "kickOffBarrier"
        },
        {
            "x": 558,
            "y": 197
        },
        {
            "x": 558,
            "y": 217
        },
        {
            "x": 569,
            "y": 216,
            "trait": "kickOffBarrier"
        },
        {
            "x": 557,
            "y": 206
        },
        {
            "x": 571,
            "y": 205,
            "trait": "kickOffBarrier"
        },
        {
            "x": 572,
            "y": 196,
            "trait": "kickOffBarrier"
        },
        {
            "x": 564,
            "y": 230,
            "trait": "kickOffBarrier"
        },
        {
            "x": 564,
            "y": 250,
            "trait": "kickOffBarrier"
        },
        {
            "x": 557,
            "y": 231
        },
        {
            "x": 577,
            "y": 230,
            "trait": "kickOffBarrier"
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -467.5,
            "y": -242
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -459.5,
            "y": 242,
            "color": "30D5C8"
        },
        {
            "x": 493,
            "y": 257
        },
        {
            "x": 492,
            "y": 435,
            "color": "FFD700",
            "trait": "kickOffBarrier"
        },
        {
            "x": 490.5,
            "y": 262,
            "color": "FFD700",
            "trait": "kickOffBarrier"
        },
        {
            "x": 490.5,
            "y": 283,
            "color": "FFD700",
            "trait": "kickOffBarrier"
        },
        {
            "x": 491.5,
            "y": 408,
            "color": "FFD700",
            "trait": "kickOffBarrier"
        },
        {
            "x": 491.5,
            "y": 387,
            "trait": "kickOffBarrier"
        },
        {
            "x": 490.5,
            "y": 303,
            "trait": "kickOffBarrier"
        },
        {
            "x": 490.5,
            "y": 362,
            "color": "FFFFF0",
            "trait": "kickOffBarrier"
        },
        {
            "x": 490.5,
            "y": 327,
            "trait": "kickOffBarrier"
        },
        {
            "x": -401.5,
            "y": 454,
            "trait": "kickOffBarrier"
        },
        {
            "x": -401.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": -387.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": -374.5,
            "y": 456,
            "trait": "kickOffBarrier"
        },
        {
            "x": -374.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": -360.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": -360.5,
            "y": 456,
            "trait": "kickOffBarrier"
        },
        {
            "x": -347.5,
            "y": 454,
            "trait": "kickOffBarrier"
        },
        {
            "x": -342.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": -336.5,
            "y": 460,
            "trait": "kickOffBarrier"
        },
        {
            "x": -326.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": -322.5,
            "y": 454,
            "trait": "kickOffBarrier"
        },
        {
            "x": -271.5,
            "y": 455,
            "trait": "kickOffBarrier"
        },
        {
            "x": -271.5,
            "y": 472,
            "trait": "kickOffBarrier"
        },
        {
            "x": -259.5,
            "y": 470,
            "trait": "kickOffBarrier"
        },
        {
            "x": -258.5,
            "y": 454,
            "trait": "kickOffBarrier"
        },
        {
            "x": -251.5,
            "y": 454,
            "trait": "kickOffBarrier"
        },
        {
            "x": -251.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": -237.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": -237.5,
            "y": 455,
            "trait": "kickOffBarrier"
        },
        {
            "x": -221.5,
            "y": 455,
            "trait": "kickOffBarrier"
        },
        {
            "x": -221.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": -227.5,
            "y": 454,
            "trait": "kickOffBarrier"
        },
        {
            "x": -213.5,
            "y": 454,
            "trait": "kickOffBarrier"
        },
        {
            "x": -201.5,
            "y": 455,
            "trait": "kickOffBarrier"
        },
        {
            "x": -201.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": -189.5,
            "y": 460,
            "trait": "kickOffBarrier"
        },
        {
            "x": -199.5,
            "y": 462,
            "trait": "kickOffBarrier"
        },
        {
            "x": -186.5,
            "y": 469,
            "trait": "kickOffBarrier"
        },
        {
            "x": -175.5,
            "y": 472,
            "trait": "kickOffBarrier"
        },
        {
            "x": -167.5,
            "y": 453,
            "trait": "kickOffBarrier"
        },
        {
            "x": -155.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": -172.5,
            "y": 463,
            "trait": "kickOffBarrier"
        },
        {
            "x": -158.5,
            "y": 464,
            "trait": "kickOffBarrier"
        },
        {
            "x": -139.5,
            "y": 453,
            "trait": "kickOffBarrier"
        },
        {
            "x": -140.5,
            "y": 469,
            "trait": "kickOffBarrier"
        },
        {
            "x": -127.5,
            "y": 462,
            "trait": "kickOffBarrier"
        },
        {
            "x": -99.5,
            "y": 452,
            "trait": "kickOffBarrier"
        },
        {
            "x": -99.5,
            "y": 469,
            "trait": "kickOffBarrier"
        },
        {
            "x": -85.5,
            "y": 458,
            "trait": "kickOffBarrier"
        },
        {
            "x": -98.5,
            "y": 462,
            "trait": "kickOffBarrier"
        },
        {
            "x": -61.5,
            "y": 451,
            "trait": "kickOffBarrier"
        },
        {
            "x": -61.5,
            "y": 470,
            "trait": "kickOffBarrier"
        },
        {
            "x": -48.5,
            "y": 459,
            "trait": "kickOffBarrier"
        },
        {
            "x": -63.5,
            "y": 463,
            "trait": "kickOffBarrier"
        },
        {
            "x": -45.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": -22.5,
            "y": 454,
            "trait": "kickOffBarrier"
        },
        {
            "x": -22.5,
            "y": 470,
            "trait": "kickOffBarrier"
        },
        {
            "x": -4.5,
            "y": 469,
            "trait": "kickOffBarrier"
        },
        {
            "x": -3.5,
            "y": 455,
            "trait": "kickOffBarrier"
        },
        {
            "x": 49.5,
            "y": 454,
            "trait": "kickOffBarrier"
        },
        {
            "x": 40.5,
            "y": 470,
            "trait": "kickOffBarrier"
        },
        {
            "x": 50.5,
            "y": 471,
            "trait": "kickOffBarrier"
        },
        {
            "x": 61.5,
            "y": 454,
            "trait": "kickOffBarrier"
        },
        {
            "x": 75.5,
            "y": 452,
            "trait": "kickOffBarrier"
        },
        {
            "x": 63.5,
            "y": 470,
            "trait": "kickOffBarrier"
        },
        {
            "x": 79.5,
            "y": 470,
            "trait": "kickOffBarrier"
        },
        {
            "x": 89.5,
            "y": 453,
            "trait": "kickOffBarrier"
        },
        {
            "x": 104.5,
            "y": 452,
            "trait": "kickOffBarrier"
        },
        {
            "x": 93.5,
            "y": 468,
            "trait": "kickOffBarrier"
        },
        {
            "x": 113.5,
            "y": 458,
            "trait": "kickOffBarrier"
        },
        {
            "x": 100.5,
            "y": 459,
            "trait": "kickOffBarrier"
        },
        {
            "x": 111.5,
            "y": 469,
            "trait": "kickOffBarrier"
        },
        {
            "x": 141.5,
            "y": 452,
            "trait": "kickOffBarrier"
        },
        {
            "x": 126.5,
            "y": 472,
            "trait": "kickOffBarrier"
        },
        {
            "x": 148.5,
            "y": 462,
            "trait": "kickOffBarrier"
        },
        {
            "x": 134.5,
            "y": 461,
            "trait": "kickOffBarrier"
        },
        {
            "x": 146.5,
            "y": 470,
            "trait": "kickOffBarrier"
        },
        {
            "x": 172.5,
            "y": 453,
            "trait": "kickOffBarrier"
        },
        {
            "x": 161.5,
            "y": 470,
            "trait": "kickOffBarrier"
        },
        {
            "x": 195.5,
            "y": 452,
            "trait": "kickOffBarrier"
        },
        {
            "x": 180.5,
            "y": 460,
            "trait": "kickOffBarrier"
        },
        {
            "x": 199.5,
            "y": 466,
            "trait": "kickOffBarrier"
        },
        {
            "x": 177.5,
            "y": 470,
            "trait": "kickOffBarrier"
        },
        {
            "x": 580.5,
            "y": 260,
            "trait": "kickOffBarrier"
        },
        {
            "x": 560.5,
            "y": 277,
            "trait": "kickOffBarrier"
        },
        {
            "x": 580.5,
            "y": 288,
            "trait": "kickOffBarrier"
        },
        {
            "x": 560.5,
            "y": 297,
            "trait": "kickOffBarrier"
        },
        {
            "x": 559.5,
            "y": 307,
            "trait": "kickOffBarrier"
        },
        {
            "x": 559.5,
            "y": 333,
            "trait": "kickOffBarrier"
        },
        {
            "x": 559.5,
            "y": 323,
            "trait": "kickOffBarrier"
        },
        {
            "x": 583.5,
            "y": 322,
            "trait": "kickOffBarrier"
        },
        {
            "x": 582.5,
            "y": 302,
            "trait": "kickOffBarrier"
        },
        {
            "x": 582.5,
            "y": 336,
            "trait": "kickOffBarrier"
        },
        {
            "x": 558.5,
            "y": 345,
            "trait": "kickOffBarrier"
        },
        {
            "x": 558.5,
            "y": 372,
            "trait": "kickOffBarrier"
        },
        {
            "x": 582.5,
            "y": 372,
            "trait": "kickOffBarrier"
        },
        {
            "x": 581.5,
            "y": 346,
            "trait": "kickOffBarrier"
        },
        {
            "x": 570.5,
            "y": 388,
            "trait": "kickOffBarrier"
        },
        {
            "x": 569.5,
            "y": 421,
            "trait": "kickOffBarrier"
        },
        {
            "x": 557.5,
            "y": 387
        },
        {
            "x": 583.5,
            "y": 387,
            "trait": "kickOffBarrier"
        },
        {
            "bCoef": 1,
            "cMask": [
                "red",
                "blue"
            ],
            "trait": "ballArea",
            "x": 96.5,
            "y": 241,
            "color": "800080"
        },
        {
            "bCoef": 1,
            "cMask": [
                "red",
                "blue"
            ],
            "trait": "ballArea",
            "x": 95.5,
            "y": 445,
            "color": "800080"
        },
        {
            "x": 508,
            "y": -218
        },
        {
            "x": 507,
            "y": -107
        },
        {
            "x": 499,
            "y": -437
        },
        {
            "x": 499,
            "y": -437
        },
        {
            "x": 536,
            "y": -383
        },
        {
            "x": 531,
            "y": -313,
            "curve": 104.53478217
        },
        {
            "x": 514,
            "y": -255,
            "curve": 104.53478217
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -451.5,
            "y": -449
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -453.5,
            "y": -272
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -424.5,
            "y": -241,
            "color": "B803FF"
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "x": -425.5,
            "y": -419,
            "color": "B803FF"
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 575.5,
            "y": -443
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 561.5,
            "y": -428
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 581.5,
            "y": -417
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 562.5,
            "y": -403
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 573.5,
            "y": -402
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 562.5,
            "y": -380
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 580.5,
            "y": -381
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 566.5,
            "y": -388
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 577.5,
            "y": -389
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 561.5,
            "y": -372
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 561.5,
            "y": -351
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 577.5,
            "y": -353
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 575.5,
            "y": -371
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 558.5,
            "y": -341
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 559.5,
            "y": -321
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 576.5,
            "y": -332
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 562.5,
            "y": -312
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 561.5,
            "y": -294
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 565.5,
            "y": -317
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 576.5,
            "y": -308
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 565.5,
            "y": -304
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 578.5,
            "y": -298
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 568.5,
            "y": -286
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 562.5,
            "y": -278
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 569.5,
            "y": -272
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 574.5,
            "y": -280
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 573.5,
            "y": -266
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 563.5,
            "y": -251
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 560.5,
            "y": -262
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "x": 578.5,
            "y": -252
        },
        {
            "x": 572.5,
            "y": -73,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 561.5,
            "y": -57,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 572.5,
            "y": -46,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 584.5,
            "y": -62,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 559.5,
            "y": -42,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 558.5,
            "y": -17,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 576.5,
            "y": -32,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 562.5,
            "y": -27,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 583.5,
            "y": -15,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 575.5,
            "y": -4,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 563.5,
            "y": 7,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 582.5,
            "y": 17,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 561.5,
            "y": 28,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 569.5,
            "y": 39,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 569.5,
            "y": 63,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 558.5,
            "y": 39,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "x": 582.5,
            "y": 37,
            "_selected": true,
            "trait": "kickOffBarrier"
        }
    ],
    "segments": [
        {
            "vis": false,
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "cGroup": [
                "redKO",
                "blueKO"
            ],
            "trait": "kickOffBarrier",
            "v0": 1,
            "v1": 0
        },
        {
            "vis": true,
            "color": "696969",
            "v0": 4,
            "v1": 5,
            "bCoef": 1,
            "trait": "ballArea"
        },
        {
            "vis": true,
            "color": "696969",
            "v0": 4,
            "v1": 6,
            "bCoef": 1,
            "trait": "ballArea"
        },
        {
            "vis": true,
            "color": "696969",
            "v0": 7,
            "v1": 8,
            "bCoef": 1,
            "trait": "ballArea"
        },
        {
            "vis": true,
            "color": "696969",
            "v0": 7,
            "v1": 9,
            "bCoef": 1,
            "trait": "ballArea"
        },
        {
            "vis": true,
            "color": "696969",
            "v0": 10,
            "v1": 11,
            "curve": 104.53478217
        },
        {
            "vis": true,
            "color": "696969",
            "v0": 12,
            "v1": 13,
            "curve": 104.53478217
        },
        {
            "vis": true,
            "color": "696969",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 14,
            "v1": 15
        },
        {
            "vis": true,
            "color": "696969",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 16,
            "v1": 17
        },
        {
            "vis": true,
            "color": "696969",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 18,
            "v1": 19
        },
        {
            "vis": true,
            "color": "696969",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 20,
            "v1": 21
        },
        {
            "vis": true,
            "color": "696969",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 22,
            "v1": 23
        },
        {
            "vis": true,
            "color": "696969",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 24,
            "v1": 25
        },
        {
            "vis": true,
            "color": "696969",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 26,
            "v1": 27
        },
        {
            "vis": true,
            "color": "696969",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 28,
            "v1": 29
        },
        {
            "vis": true,
            "color": "696969",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 30,
            "v1": 31
        },
        {
            "vis": true,
            "color": "696969",
            "v0": 32,
            "v1": 33,
            "curve": 104.53478217
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FFFF",
            "v0": 34,
            "v1": 35,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 200,
            "vis": true,
            "color": "00FFFF",
            "v0": 34,
            "v1": 35,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FFFF",
            "v0": 36,
            "v1": 37,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FFFF",
            "v0": 36,
            "v1": 38,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FFFF",
            "v0": 38,
            "v1": 39,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FFFF",
            "v0": 39,
            "v1": 40,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FFFF",
            "v0": 41,
            "v1": 42,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FFFF",
            "v0": 43,
            "v1": 44
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FFFF",
            "v0": 43,
            "v1": 45,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FFFF",
            "v0": 45,
            "v1": 46,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FFFF",
            "v0": 46,
            "v1": 47,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FFFF",
            "v0": 47,
            "v1": 44
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 48,
            "v1": 49,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 48,
            "v1": 50,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 50,
            "v1": 51,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 51,
            "v1": 52,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 53,
            "v1": 54
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 54,
            "v1": 55
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 55,
            "v1": 56,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 56,
            "v1": 53,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 57,
            "v1": 58
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 58,
            "v1": 59
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 60,
            "v1": 61
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 62,
            "v1": 63
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 62,
            "v1": 64
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 65,
            "v1": 66
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 66,
            "v1": 67
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 68,
            "v1": 69
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 65,
            "v1": 70
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 71,
            "v1": 72,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "00FF00",
            "v0": 73,
            "v1": 74
        },
        {
            "vis": true,
            "color": "696969",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 3,
            "v1": 75
        },
        {
            "vis": true,
            "color": "696969",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 76,
            "v1": 2
        },
        {
            "vis": true,
            "color": "696969",
            "v0": 77,
            "v1": 78,
            "curve": 104.53478217
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 79,
            "v1": 80,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 78,
            "v1": 81,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 81,
            "v1": 82,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 80,
            "v1": 83,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 82,
            "v1": 84,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 83,
            "v1": 85,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFFF0",
            "v0": 85,
            "v1": 84,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFFF0",
            "v0": 86,
            "v1": 87,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFFF0",
            "v0": 87,
            "v1": 88,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFFF0",
            "v0": 89,
            "v1": 90,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFFF0",
            "v0": 90,
            "v1": 91,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFFF0",
            "v0": 91,
            "v1": 92,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFFF0",
            "v0": 92,
            "v1": 89,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFFF0",
            "v0": 93,
            "v1": 94,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFFF0",
            "v0": 94,
            "v1": 95,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFFF0",
            "v0": 95,
            "v1": 96,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFFF0",
            "v0": 96,
            "v1": 97,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 98,
            "v1": 99,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 98,
            "v1": 100,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 100,
            "v1": 101,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 102,
            "v1": 103,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 103,
            "v1": 104,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 104,
            "v1": 105,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 105,
            "v1": 102,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 106,
            "v1": 107,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 108,
            "v1": 109,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 110,
            "v1": 111,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 110,
            "v1": 112,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 112,
            "v1": 113,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 113,
            "v1": 114,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 114,
            "v1": 111,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 115,
            "v1": 116,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 116,
            "v1": 117,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 118,
            "v1": 119,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 120,
            "v1": 121,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 120,
            "v1": 122,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "964B00",
            "v0": 122,
            "v1": 121,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 123,
            "v1": 124,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 123,
            "v1": 125,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 125,
            "v1": 126,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 127,
            "v1": 128,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 127,
            "v1": 129,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 129,
            "v1": 130,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 130,
            "v1": 131,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 132,
            "v1": 133,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 133,
            "v1": 134,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 134,
            "v1": 135,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "C0C0C0",
            "v0": 135,
            "v1": 132,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 136,
            "v1": 137,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 136,
            "v1": 138,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 138,
            "v1": 139,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 140,
            "v1": 141,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 141,
            "v1": 142,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 142,
            "v1": 143,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 143,
            "v1": 140,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 144,
            "v1": 145,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 144,
            "v1": 146,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 146,
            "v1": 147,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 147,
            "v1": 148,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 149,
            "v1": 150,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 149,
            "v1": 151,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 151,
            "v1": 152,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 152,
            "v1": 153,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 154,
            "v1": 155,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 156,
            "v1": 157,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 157,
            "v1": 158,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFD700",
            "v0": 158,
            "v1": 159,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFF00",
            "v0": 160,
            "v1": 161,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFF00",
            "v0": 161,
            "v1": 162,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFF00",
            "v0": 162,
            "v1": 163,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFF00",
            "v0": 164,
            "v1": 165,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFF00",
            "v0": 166,
            "v1": 167,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFF00",
            "v0": 168,
            "v1": 169,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFF00",
            "v0": 170,
            "v1": 171,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFF00",
            "v0": 171,
            "v1": 172,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFF00",
            "v0": 172,
            "v1": 173,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFF00",
            "v0": 173,
            "v1": 170,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFF00",
            "v0": 174,
            "v1": 175,
            "trait": "kickOffBarrier"
        },
        {
            "vis": true,
            "color": "FFFF00",
            "v0": 176,
            "v1": 177
        },
        {
            "vis": true,
            "color": "800080",
            "bCoef": 1,
            "cMask": [
                "red",
                "blue"
            ],
            "trait": "ballArea",
            "v0": 178,
            "v1": 179
        },
        {
            "vis": true,
            "color": "696969",
            "v0": 180,
            "v1": 181,
            "curve": 104.53478217
        },
        {
            "vis": true,
            "color": "696969",
            "v0": 183,
            "v1": 184,
            "curve": 104.53478217
        },
        {
            "vis": true,
            "color": "696969",
            "v0": 185,
            "v1": 186,
            "curve": 104.53478217
        },
        {
            "vis": true,
            "color": "696969",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 187,
            "v1": 188
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "v0": 189,
            "v1": 190
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 191,
            "v1": 192
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 192,
            "v1": 193
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 193,
            "v1": 194
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 195,
            "v1": 196
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 195,
            "v1": 197
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 198,
            "v1": 199
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 200,
            "v1": 201
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 200,
            "v1": 202
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 202,
            "v1": 203
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 204,
            "v1": 205
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 204,
            "v1": 206
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 206,
            "v1": 205
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 207,
            "v1": 208
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 209,
            "v1": 210
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 210,
            "v1": 211
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 211,
            "v1": 212
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 212,
            "v1": 208
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 213,
            "v1": 214
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 214,
            "v1": 215
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 215,
            "v1": 216
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 216,
            "v1": 213
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 217,
            "v1": 218
        },
        {
            "vis": true,
            "color": "B803FF",
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "kickOffBarrier",
            "v0": 219,
            "v1": 220
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 221,
            "v1": 222,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 222,
            "v1": 223,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 223,
            "v1": 224,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 224,
            "v1": 221,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 225,
            "v1": 226,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 225,
            "v1": 227,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 227,
            "v1": 228,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 228,
            "v1": 229,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 229,
            "v1": 226,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 230,
            "v1": 231,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 231,
            "v1": 232,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 232,
            "v1": 233,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 234,
            "v1": 235,
            "_selected": true,
            "trait": "kickOffBarrier"
        },
        {
            "curve": 0,
            "vis": true,
            "color": "FF0000",
            "v0": 236,
            "v1": 237,
            "_selected": true,
            "trait": "kickOffBarrier"
        }
    ],
    "goals": [
        {
            "team": "blue",
            "p0": [
                509,
                105
            ],
            "p1": [
                509,
                216
            ]
        },
        {
            "team": "blue",
            "p0": [
                505,
                55
            ],
            "p1": [
                506,
                -56
            ]
        },
        {
            "team": "blue",
            "p0": [
                508,
                -219
            ],
            "p1": [
                507,
                -105
            ]
        },
        {
            "team": "blue",
            "p0": [
                508,
                -219
            ],
            "p1": [
                507,
                -105
            ]
        },
        {
            "team": "blue",
            "p0": [
                491.5,
                254
            ],
            "p1": [
                491.5,
                437
            ]
        }
    ],
    "discs": [
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                508,
                -218
            ],
            "color": "696969"
        },
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                507,
                -108
            ],
            "color": "696969"
        },
        {
            "radius": 5,
            "invMass": 0,
            "pos": [
                301,
                -162
            ],
            "color": "696969"
        },
        {
            "radius": 5,
            "invMass": 0,
            "pos": [
                216,
                -160
            ],
            "color": "696969"
        },
        {
            "radius": 5,
            "invMass": 0,
            "color": "696969",
            "pos": [
                123,
                -162
            ]
        },
        {
            "radius": 5,
            "invMass": 0,
            "color": "696969",
            "pos": [
                20,
                -160
            ]
        },
        {
            "radius": 5,
            "invMass": 0,
            "color": "696969",
            "pos": [
                -72,
                -162
            ]
        },
        {
            "radius": 5,
            "invMass": 0,
            "color": "696969",
            "pos": [
                -152,
                -161
            ]
        },
        {
            "radius": 5,
            "invMass": 0,
            "color": "696969",
            "pos": [
                -234,
                -160
            ]
        },
        {
            "radius": 5,
            "invMass": 0,
            "color": "696969",
            "pos": [
                -319,
                -159
            ]
        },
        {
            "radius": 5,
            "invMass": 0,
            "color": "696969",
            "pos": [
                -415,
                -159
            ]
        },
        {
            "radius": 15,
            "invMass": 0,
            "pos": [
                479,
                -164
            ],
            "color": "5555FF"
        },
        {
            "radius": 7,
            "invMass": 0,
            "pos": [
                0,
                90
            ],
            "color": "FFFCCC"
        },
        {
            "radius": 7,
            "invMass": 0,
            "pos": [
                0,
                228
            ],
            "color": "FFFCCC"
        },
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                509,
                106
            ],
            "color": "696969"
        },
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                508,
                216
            ],
            "color": "696969"
        },
        {
            "radius": 7,
            "invMass": 0,
            "pos": [
                207,
                88
            ],
            "color": "FFFCCC"
        },
        {
            "radius": 7,
            "invMass": 0,
            "pos": [
                207,
                231
            ],
            "color": "FFFCCC"
        },
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                506,
                -54
            ],
            "color": "696969"
        },
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                505,
                56
            ],
            "color": "696969"
        },
        {
            "radius": 15,
            "invMass": 0,
            "pos": [
                477,
                0
            ],
            "color": "FF5555"
        },
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                491,
                255
            ],
            "color": "696969"
        },
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                491,
                435
            ],
            "color": "696969"
        },
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                508,
                -218
            ],
            "color": "696969"
        },
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                499,
                -437
            ],
            "color": "696969"
        },
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                535,
                -383
            ],
            "color": "696969"
        },
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                531,
                -312
            ],
            "color": "696969",
            "curve": -104.53478217
        },
        {
            "radius": 8,
            "invMass": 0,
            "pos": [
                512,
                -256
            ],
            "color": "696969",
            "curve": -104.53478217
        }
    ],
    "planes": [
        {
            "normal": [
                0,
                -1
            ],
            "dist": -450,
            "trait": "ballArea"
        },
        {
            "normal": [
                1,
                0
            ],
            "dist": -600,
            "bCoef": 0.1
        },
        {
            "normal": [
                -1,
                0
            ],
            "dist": -600,
            "bCoef": 0.1
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "dist": -550,
            "normal": [
                -1,
                0
            ]
        },
        {
            "bCoef": 1,
            "cMask": [
                "ball"
            ],
            "trait": "ballArea",
            "dist": -450,
            "normal": [
                0,
                1
            ]
        }
    ],
    "traits": {
        "ballArea": {
            "vis": false,
            "bCoef": 1,
            "cMask": [
                "ball"
            ]
        },
        "goalPost": {
            "radius": 8,
            "invMass": 0,
            "bCoef": 0.5
        },
        "goalNet": {
            "vis": true,
            "bCoef": 0.1,
            "cMask": [
                "ball"
            ]
        },
        "kickOffBarrier": {
            "vis": false,
            "bCoef": 0.1,
            "cGroup": [
                "redKO",
                "blueKO"
            ],
            "cMask": [
                "red",
                "blue"
            ]
        }
    }
}
`


// room.setDefaultStadium("Classic");
room.setCustomStadium(stadiumFileText)
room.setScoreLimit(3);
room.setTimeLimit(3);

// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() {
    // Get all players
    var players = room.getPlayerList();
    if (players.length == 0) return; // No players left, do nothing.
    if (players.find((player) => player.admin) != null) return; // There's an admin left so do nothing.
    room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}

function clearAllBans() {
    room.clearBans();
    room.sendChat("Clear Bans!");
    console.log("Clear Bans!");

}


room.onPlayerChat = function (player, message) {
    console.log(`Received message: "${message}" from player: ${player.name}`);

    if (message === "!clear") {
        clearAllBans()
    }

    if (message === "!all") {
        getPlayerList();
    }

    if (message === "!kick") {
        kickPlayerFromRoom(1, 'Violation of rules', true);
    }
};

room.onPlayerJoin = function (player) {
    room.sendChat(`${player.name} welcome to our room`, player.id)
    // getPlayerList()
    updateAdmins();
}

room.onPlayerLeave = function (player) {
    room.sendChat(`${player.name} left the room`)
    updateAdmins();
}

function getPlayerList() {
    var players = room.getPlayerList();
    let playerList = players.map(player => `${player.name} : ${player.id}`).join(' | ');

    room.sendChat(`Players: ${playerList}`);
    console.log(`Players: ${playerList}`);
}

function kickPlayerFromRoom(playerID, reason, ban) {

    if (typeof playerID !== 'number' || typeof reason !== 'string') {
        console.error('Invalid arguments. playerID should be a number and reason should be a string.');
        return;
    }

    room.kickPlayer(playerID, reason, ban)
    console.log(`Kicked player with ID ${playerID}. Reason: ${reason}. Ban: ${ban}`);
}