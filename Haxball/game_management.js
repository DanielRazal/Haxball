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
const failedLoginAttempts = {};
const users = JSON.parse(localStorage.getItem("users")) || [];
// const registeredUser = users.find(user => user.username === player.name && user.password === password);


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
    token: "thr1.AAAAAGeCsXS1cNq2O4zfuw.t4u5J6kYVVg",
    noPlayer: false,
});




room.onPlayerJoin = function (player) {

    var players = room.getPlayerList();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    console.log("Registered users:", users);

    players.forEach((currentPlayer) => {
        const existingUser = users.find(user => user.username === player.name);
        
        if (!existingUser) {
            room.sendChat(`Hello ${currentPlayer.name}, please register with the "!register + password" command.`, currentPlayer.id);

            // room.setPlayerTeam(currentPlayer.id, SpecTeam);
        } else {
            room.sendChat(`Hello ${currentPlayer.name}, please login with the "!login + password" command.`, currentPlayer.id);
            // const registeredPlayers = players.filter(p => users.find(user => user.username === p.username));
            // console.log(`test: ${JSON.stringify(users[0].id)}`);
            
        }

        if (players.length === 2) {
            room.setPlayerTeam(players[1].id, RedTeam);
            room.setCustomStadium(stadiumFileText)
            room.startGame()
        }
    
        else if (players.length === 3) {
            room.setPlayerTeam(players[1].id, RedTeam);
            room.setPlayerTeam(players[2].id, BlueTeam);
            room.stopGame()
            room.setDefaultStadium("Classic");
            room.startGame()
        }
    
        else if (players.length === 5) {
    
            room.setPlayerTeam(players[1].id, RedTeam);
            room.setPlayerTeam(players[2].id, BlueTeam);
            room.setPlayerTeam(players[3].id, RedTeam);
            room.setPlayerTeam(players[4].id, BlueTeam);
    
            room.stopGame();
            room.setDefaultStadium("Classic");
            room.startGame();
        }
    
        else if (players.length === 7) {
    
            room.setPlayerTeam(players[1].id, RedTeam);
            room.setPlayerTeam(players[2].id, BlueTeam);
            room.setPlayerTeam(players[3].id, RedTeam);
            room.setPlayerTeam(players[4].id, BlueTeam);
            room.setPlayerTeam(players[5].id, RedTeam);
            room.setPlayerTeam(players[6].id, BlueTeam);
    
            room.stopGame();
            room.setDefaultStadium("Big");
            room.startGame();
        }
    });



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

        room.setPlayerTeam(players[1].id, RedTeam);
        room.setPlayerTeam(players[2].id, BlueTeam);
        room.setPlayerTeam(players[3].id, SpecTeam);

        room.stopGame()
        room.setDefaultStadium("Classic");
        room.startGame()
    }

    else if (players.length === 6) {

        room.setPlayerTeam(players[1].id, RedTeam);
        room.setPlayerTeam(players[2].id, BlueTeam);
        room.setPlayerTeam(players[3].id, RedTeam);
        room.setPlayerTeam(players[4].id, BlueTeam);
        room.setPlayerTeam(players[5].id, SpecTeam);

        room.stopGame();
        room.setDefaultStadium("Classic");
        room.startGame();
    }
}

// room.onTeamGoal = function (team,player) {

//     if (team === RedTeam) {
//         room.sendChat(`${player.name} scored in the red team!`)
//     }
//     else if(team === BlueTeam){
//         room.sendChat(`${player.name} scored in the blue team!`)
//     }
// }

room.onPlayerChat = function(player, message) {

    var players = room.getPlayerList();
    console.log(`Received message: "${message}" from player: ${player.name}`);
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(user => user.username === player.name);

    if (existingUser) {
        if (message.startsWith("!register ")) {
            room.sendChat(`You are already registered as "${player.name}".`, player.id);
            return false;
        }}

        else {
        
        if (message.startsWith("!register ")) {
            const pass = message.substring(10);
            
            const userData = {
                username: player.name,
                password: pass,
                id: Date.now(),
            };
            
            try {
                const duplicateUser = users.find(user => user.username === player.name);
                if (duplicateUser) {
                    room.sendChat(`Registration failed: Username "${player.name}" already exists.`, player.id);
                    return false; 
                }
                
                users.push(userData);
                localStorage.setItem("users", JSON.stringify(users));
                room.sendChat(`Registration successful for: ${player.name}`, player.id);

                const updatedUsers = JSON.parse(localStorage.getItem("users")) || [];
                const existingUser = updatedUsers.find(user => user.username === player.name);

                if(!existingUser){
                    setTimeout(() => {
                        room.kickPlayer(player.id, "Time expired for registration.", false);
                    }, 10000);
                }

            } catch (error) {
                console.error("Error accessing local storage", error);
                room.sendChat(`Failed to register ${player.name}. Please try again.`, player.id);
            }
        } else {
            room.sendChat("You are not registered. Please use the command '!register + password' to register.", player.id);
            return false;
        }
    }
    
    if (message.startsWith("!login ")) {
        const password = message.substring(7);
        
        const users = JSON.parse(localStorage.getItem("users")) || [];
        
        const registeredUser = users.find(user => user.username === player.name && user.password === password);
        
        if (registeredUser) {
            room.sendChat(`Welcome back, ${player.name}! You are now logged in.`, player.id);
            console.log(player.id);
            delete failedLoginAttempts[player.id];
        } else {
            if (!failedLoginAttempts[player.id]) {
                failedLoginAttempts[player.id] = 0;
            }
            
            failedLoginAttempts[player.id]++;
            room.sendChat("Invalid password. Please try again.", player.id);
            console.log(`Failed login attempts for ${player.name}: ${failedLoginAttempts[player.id]}`);

            if (failedLoginAttempts[player.id] === 3) {
                kickPlayerFromRoom(player.id, "Too many failed login attempts.", false);
                console.log(`Kicking player ${player.name} (ID: ${player.id}) after 3 failed attempts`);
                delete failedLoginAttempts[player.id];
            }
        }
        return false;
    }
};


function kickPlayerFromRoom(playerID, reason, ban) {

    if (typeof playerID !== 'number' || typeof reason !== 'string') {
        console.error('Invalid arguments. playerID should be a number and reason should be a string.');
        return;
    }

    room.kickPlayer(playerID, reason, ban)
    console.log(`Kicked player with ID ${playerID}. Reason: ${reason}. Ban: ${ban}`);
}