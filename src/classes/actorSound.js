const Actor = require("./actor").ActorClass
const luainjs = require('lua-in-js')

class ActorSound extends Actor {
    constructor () {
        super()
    }

    /**
     * Returns the RageSound that can be played by this Actor.
     */
    get() {}
    /**
     * Returns whether the sound is an action.
     */
    get_is_action() {}
    /**
     * Loads the sound at sPath.
     * @param {string} sPath 
     */
    load(sPath) {}
    /**
     * Pauses or unpauses the sound based on bPause.
     * @param {boolean} bPause 
     */
    pause(bPause) {}
    /**
     * Plays the sound.
     */
    play() {}
    /**
     * Sets whether the sound is an action.
     * @param {boolean} is_action 
     */
    set_is_action(is_action) {}
    /**
     * Stops the sound.
     */
    stop() {}
}

const actorCreate = () => {
    const newActor = new ActorSound()
    const methodsReferences = {}
    // const classMethods = Object.getOwnPropertyNames(Actor.prototype)
    const classMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(newActor))
    console.log(classMethods.length)
    classMethods.shift() // constructor
    
    const cb = (methodName, ...args) => {
        return newActor[methodName](...args)
    }

    for (let i = 0; i < classMethods.length; i++) {
        const currentMethodName = classMethods[i]
        const currentMethod = (...args) => {
            return cb(currentMethodName, ...args)
        }
        methodsReferences[currentMethodName] = currentMethod
    }

    const lib = new luainjs.Table(methodsReferences)

    return lib
}

exports.ActorSound = actorCreate()
exports.ActorSoundClass = ActorSound