


// const RoomManager = require('./RoomManager.js');
// const roomManager = new RoomManager(room);
// roomManager.clearAllBans();

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

var room = HBInit({
    roomName: "Test",
    maxPlayers: 10,
    public: false,
    // password: "1234",
    geo: {
        code: "IL",
        lat: 31.0461,
        lon: 34.8516
    },
    token: "thr1.AAAAAGd4x5755T8vgHbDVQ.SmpAwfDOIcs",
    noPlayer: false,
});


const RedTeam = 1
const BlueTeam = 2
const SpecTeam = 0


const badWords =
    ["בן זונה", "בן שרמוטה", "מניאק",
        ",תשרף", "תישרף", "כושי", "כושי חמודי",
        "רוסי", "רוסי מסריח", "fuck you", "fuck"]

const messageCounts = {};

let lastTeamCombination = [];

function shufflePlayers4(players) {
    const filteredPlayers = players.filter(player => player.id !== 0);
    
    const shuffled = filteredPlayers.sort(() => Math.random() - 0.5);

    return {
        red: [shuffled[0].id, shuffled[1].id], // Using the first two from the filtered array
        blue: [shuffled[2].id, shuffled[3].id] // Using the next two
    };
}

function shufflePlayers6(players) {
    const filteredPlayers = players.filter(player => player.id !== 0);
    
    const shuffled = filteredPlayers.sort(() => Math.random() - 0.5);

    return {
        teamA: [shuffled[0].id, shuffled[1].id, shuffled[2].id], // First team
        teamB: [shuffled[3].id, shuffled[4].id, shuffled[5].id]  // Second team
    };
}

room.setScoreLimit(3);
room.setTimeLimit(3);


function updateAdmins() {
    var players = room.getPlayerList();
    if (players.length == 0) return;
    if (players.find((player) => player.admin) != null) return;
    room.setPlayerAdmin(players[0].id, true);
}

function clearAllBans() {
    room.clearBans();
    room.sendChat("Clear Bans!");
    console.log("Clear Bans!");
}

function addRoomPassword(pass) {
    room.setPassword(pass)
}

// function clearBanById(playerId) {
//     room.clearBan(playerId)
// }

function requireRecaptcha(required) {
    room.setRequireRecaptcha(required);
}

requireRecaptcha(false)

room.onPlayerChat = function (player, message) {
    console.log(`Received message: "${message}" from player: ${player.name}`);

    if (player.admin) {
        if (message === "!clears") {
            clearAllBans()
        }

        if (message === "!all") {
            getPlayerList();
        }

        if (message.startsWith("!pass ")) {
            const pass = message.substring(6);
            addRoomPassword(pass);
            return false;
        }

        // if (message.startsWith("!clear ")) {
        //     const id = message.substring(7);
        //     clearBanById(id);
        // }
    }

    if (badWords.some(badWord => message.includes(badWord))) {
        kickPlayerFromRoom(player.id, 'נא להתנהג בהתאם', false);
        console.log(`${player.name} has been kicked for using inappropriate language.`);
    }

    if (!messageCounts[player.id]) {
        messageCounts[player.id] = {
            count: 0,
            timer: null
        };
    }
    
    messageCounts[player.id].count += 1;

    if (!messageCounts[player.id].timer) {
        messageCounts[player.id].timer = setTimeout(() => {
            messageCounts[player.id].count = 0;
            messageCounts[player.id].timer = null;
        }, 5000);
    }

    if (messageCounts[player.id].count > 5) {
        kickPlayerFromRoom(player.id, 'נא להתנהג בהתאם', false);
        delete messageCounts[player.id];
        return false;
    }

    if (message === "Arsenal") {
        room.setPlayerAdmin(player.id, true)
        console.log(`${player.name} has been granted admin`);
        return false;
    }

    if (message === "!help") {
        room.sendChat("פקודות אדמין: !clears - מסיר את כל החסימות. | !all - מציג את רשימת השחקנים. | !pass <סיסמה> - מוסיף סיסמה לחדר.", player.id);
        return false;
    }


};

room.onPlayerJoin = function (player) {
    var players = room.getPlayerList();


    room.sendChat(`${player.name} ברוך הבא לחדר שלנו`, player.id)
    room.sendChat(`לקבלת עזרה !help`, player.id)

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

        const sortedPlayers = players.filter(player => player.id !== 0).sort((a, b) => b.id - a.id);
        const lastPlayer = sortedPlayers[4];

        if (lastPlayer) {
            room.setPlayerTeam(lastPlayer.id, SpecTeam);
        }



        room.stopGame();
        room.setDefaultStadium("Classic");
        room.startGame();
    }
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