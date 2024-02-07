const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

const subscribeMessage = (channelName) =>{
    console.log(`Thanks for subscribing to ${channelName}`)
}

eventEmitter.addListener('subscribe', subscribeMessage)
console.log("Calling event listener before removing the event")
eventEmitter.emit('subscribe', "PW Skills")


console.log("Calling event listener after removing the event")
eventEmitter.removeListener('subscribe', subscribeMessage)
eventEmitter.emit('subscribe', "PW Skills")
