class RoomManager {
    constructor(room){
        this.room = room
    }


    clearAllBans(){
        room.clearBans();
        room.sendChat("Clear Bans!");
    }
}

module.exports = RoomManager;

