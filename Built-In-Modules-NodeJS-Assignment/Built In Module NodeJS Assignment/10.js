const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

const subscribeMessage = (channelName) =>{
    console.log(`Thanks for subscribing to ${channelName}`)
}

eventEmitter.addListener('subscribe', subscribeMessage)
eventEmitter.emit('subscribe', "PW Skills")

console.log(
    `The default max number of event listeners are: ${eventEmitter.getMaxListeners()}`
)

eventEmitter.setMaxListeners(5)

console.log(
    `The updated max number of event listeners are: ${eventEmitter.getMaxListeners()}`
)