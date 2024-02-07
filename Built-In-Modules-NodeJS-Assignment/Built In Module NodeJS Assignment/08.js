const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

const subscribeMessage = (channelName) =>{
    console.log(`Thanks for subscribing to ${channelName}`)
}

eventEmitter.addListener('subscribe', subscribeMessage)
eventEmitter.emit('subscribe', "PW Skills")