const ActorFrame = require("./actorFrame").ActorFrameClass
const luainjs = require('lua-in-js')
class MenuTimer extends ActorFrame {
    constructor() {
        super()
    }

    /**
     * Stops the MenuTimer by setting it to 99.99 and pausing.
     */
    disable() {}
    /**
     * Returns the current MenuTimer's value.
     */
    GetSeconds() {}
    /**
     * Pauses the MenuTimer, stopping it from counting down.
     */
    pause() {}
    /**
     * Sets the MenuTimer's value to fSeconds.
     * @param {number} fSeconds 
     */
    SetSeconds(fSeconds) {}
    /**
     * Sets the MenuTimer's silent setting to bSilent.
     */
    silent() {}
    /**
     * Starts up the timer.
     */
    start() {}
    /**
     * Sets the MenuTimer's stealth setting to bStealth. If true, the timer will be invisible and silent.
     * @param {boolean} bStealth 
     */
    stealth(bStealth) {}
    /**
     * Stops the MenuTimer by setting it to 0 and pausing.
     */
    stop() {}
}

const actorCreate = () => {
    const newActor = new MenuTimer()
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

exports.MenuTimer = actorCreate()
exports.MenuTimerClass = MenuTimer