var stadiumFileText = `
{
    "name": "Classic training from HaxMaps",
    "width": 420,
    "height": 200,
    "spawnDistance": 30,
    "bg": {
        "type": "grass",
        "width": 370,
        "height": 170,
        "kickOffRadius": 75,
        "cornerRadius": 0
    },
    "vertexes": [
        {
            "x": -370,
            "y": 170,
            "trait": "ballArea"
        },
        {
            "x": -370,
            "y": 64,
            "trait": "ballArea"
        },
        {
            "x": -370,
            "y": -64,
            "trait": "ballArea"
        },
        {
            "x": -370,
            "y": -170,
            "trait": "ballArea"
        },
        {
            "x": 370,
            "y": 170,
            "trait": "ballArea"
        },
        {
            "x": 370,
            "y": 64,
            "trait": "ballArea"
        },
        {
            "x": 370,
            "y": -64,
            "trait": "ballArea"
        },
        {
            "x": 370,
            "y": -170,
            "trait": "ballArea"
        },
        {
            "x": -380,
            "y": -64,
            "trait": "goalNet"
        },
        {
            "x": -400,
            "y": -44,
            "trait": "goalNet"
        },
        {
            "x": -400,
            "y": 44,
            "trait": "goalNet"
        },
        {
            "x": -380,
            "y": 64,
            "trait": "goalNet"
        },
        {
            "x": 380,
            "y": -64,
            "trait": "goalNet"
        },
        {
            "x": 400,
            "y": -44,
            "trait": "goalNet"
        },
        {
            "x": 400,
            "y": 44,
            "trait": "goalNet"
        },
        {
            "x": 380,
            "y": 64,
            "trait": "goalNet"
        }
    ],
    "segments": [
        {
            "v0": 0,
            "v1": 1,
            "trait": "ballArea"
        },
        {
            "v0": 2,
            "v1": 3,
            "trait": "ballArea"
        },
        {
            "v0": 4,
            "v1": 5,
            "trait": "ballArea"
        },
        {
            "v0": 6,
            "v1": 7,
            "trait": "ballArea"
        },
        {
            "v0": 8,
            "v1": 9,
            "trait": "goalNet",
            "curve": -90
        },
        {
            "v0": 9,
            "v1": 10,
            "trait": "goalNet"
        },
        {
            "v0": 10,
            "v1": 11,
            "trait": "goalNet",
            "curve": -90
        },
        {
            "v0": 12,
            "v1": 13,
            "trait": "goalNet",
            "curve": 90
        },
        {
            "v0": 13,
            "v1": 14,
            "trait": "goalNet"
        },
        {
            "v0": 14,
            "v1": 15,
            "trait": "goalNet",
            "curve": 90
        }
    ],
    "goals": [],
    "discs": [
        {
            "pos": [
                -370,
                64
            ],
            "trait": "goalPost",
            "color": "FFCCCC"
        },
        {
            "pos": [
                -370,
                -64
            ],
            "trait": "goalPost",
            "color": "FFCCCC"
        },
        {
            "pos": [
                370,
                64
            ],
            "trait": "goalPost",
            "color": "CCCCFF"
        },
        {
            "pos": [
                370,
                -64
            ],
            "trait": "goalPost",
            "color": "CCCCFF"
        }
    ],
    "planes": [
        {
            "normal": [
                0,
                1
            ],
            "dist": -170,
            "trait": "ballArea"
        },
        {
            "normal": [
                0,
                -1
            ],
            "dist": -170,
            "trait": "ballArea"
        },
        {
            "normal": [
                0,
                1
            ],
            "dist": -200,
            "bCoef": 0.1
        },
        {
            "normal": [
                0,
                -1
            ],
            "dist": -200,
            "bCoef": 0.1
        },
        {
            "normal": [
                1,
                0
            ],
            "dist": -420,
            "bCoef": 0.1
        },
        {
            "normal": [
                -1,
                0
            ],
            "dist": -420,
            "bCoef": 0.1
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
            "bCoef": 3,
            "cMask": [
                "ball"
            ]
        }
    }
}
`

const RedTeam = 1
const BlueTeam = 2
const SpecTeam = 0


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
    token: "thr1.AAAAAGd4x5755T8vgHbDVQ.SmpAwfDOIcs",
    noPlayer: false,
});

function shufflePlayers4(players) {
    const filteredPlayers = players.filter(player => player.id !== 0);

    const shuffled = filteredPlayers.sort(() => Math.random() - 0.5);

    return {
        red: [shuffled[0].id, shuffled[1].id],
        blue: [shuffled[2].id, shuffled[3].id],
    };
}

function shufflePlayers6(players) {
    const filteredPlayers = players.filter(player => player.id !== 0);

    const shuffled = filteredPlayers.sort(() => Math.random() - 0.5);

    return {
        teamA: [shuffled[0].id, shuffled[1].id, shuffled[2].id],
        teamB: [shuffled[3].id, shuffled[4].id, shuffled[5].id]
    };
}

room.onPlayerJoin = function (player) {
    var players = room.getPlayerList();

    if (players.length === 2) {
        room.setPlayerTeam(players[1].id, RedTeam);
        room.setCustomStadium(stadiumFileText)
        room.startGame()
    }

    else if (players.length === 3) {
        const randomIndex = Math.floor(Math.random() * 2);
        if (randomIndex === 0) {
            room.setPlayerTeam(players[1].id, RedTeam);
            room.setPlayerTeam(players[2].id, BlueTeam);
        } else {
            room.setPlayerTeam(players[1].id, BlueTeam);
            room.setPlayerTeam(players[2].id, RedTeam);
        }
        room.stopGame()
        room.setDefaultStadium("Classic");
        room.startGame()
    }

    else if (players.length === 5) {
        const teams = shufflePlayers4(players);

        room.setPlayerTeam(teams.red[0], RedTeam);
        room.setPlayerTeam(teams.red[1], RedTeam);
        room.setPlayerTeam(teams.blue[0], BlueTeam);
        room.setPlayerTeam(teams.blue[1], BlueTeam);

        room.stopGame();
        room.setDefaultStadium("Classic");
        room.startGame();
    }

    else if (players.length === 7) {
        const teams = shufflePlayers6(players);

        room.setPlayerTeam(teams.teamA[0], RedTeam);
        room.setPlayerTeam(teams.teamA[1], RedTeam);
        room.setPlayerTeam(teams.teamA[2], RedTeam);

        room.setPlayerTeam(teams.teamB[0], BlueTeam);
        room.setPlayerTeam(teams.teamB[1], BlueTeam);
        room.setPlayerTeam(teams.teamB[2], BlueTeam);

        room.stopGame();
        room.setDefaultStadium("Big");
        room.startGame();
    }
}

room.onPlayerLeave = function (player) {

    const players = room.getPlayerList();

    if (players.length === 2) {
        room.setPlayerTeam(players[1].id, RedTeam);
        room.stopGame();
        room.setCustomStadium(stadiumFileText);
        room.startGame();
    }

    else if (players.length === 4) {
        const randomIndex = Math.floor(Math.random() * 2);
        if (randomIndex === 0) {
            room.setPlayerTeam(players[1].id, RedTeam);
            room.setPlayerTeam(players[2].id, BlueTeam);
            room.setPlayerTeam(players[3].id, SpecTeam);
        } else {
            room.setPlayerTeam(players[1].id, BlueTeam);
            room.setPlayerTeam(players[2].id, RedTeam);
            room.setPlayerTeam(players[3].id, SpecTeam);
        }
        room.stopGame()
        room.setDefaultStadium("Classic");
        room.startGame()
    }

    else if (players.length === 6) {
        const teams = shufflePlayers4(players);

        room.setPlayerTeam(teams.red[0], RedTeam);
        room.setPlayerTeam(teams.red[1], RedTeam);
        room.setPlayerTeam(teams.blue[0], BlueTeam);
        room.setPlayerTeam(teams.blue[1], BlueTeam);

        const lastPlayer = players[5].id
        if (lastPlayer) {
            room.setPlayerTeam(lastPlayer.id, SpecTeam);
        }


        room.stopGame();
        room.setDefaultStadium("Classic");
        room.startGame();
    }
}
