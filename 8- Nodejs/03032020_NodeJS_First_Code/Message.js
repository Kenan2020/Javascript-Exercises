const EventEmitter = require("events")
const uuid = require("uuid")

class Message extends EventEmitter {
    log(issue, type) {
        if (type === "under18") {
            this.emit("show", {
                id: uuid.v4(),
                details: issue
            })
        } else {
            this.emit("unshow", {
                id: uuid.v4(),
                details: issue
            })
        }
    }
}

module.exports = Message