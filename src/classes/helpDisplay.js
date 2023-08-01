const BitmapText = require("./bitmapText").BitmapTextClass
const luainjs = require('lua-in-js')

class HelpDisplay extends BitmapText {
    constructor () {
        super()
    }

    /**
     * Returns two tables representing the tips and alternate tips in the HelpDisplay.
     */
    gettips() {}
    /**
     * Sets the seconds between switches of tips to fSeconds.
     * @param {number} fSeconds 
     */
    SetSecsBetweenSwitches(fSeconds) {}
    /**
     * Sets the HelpDisplay's tips using tips (and optionally altTips).
     * @param {*} tips 
     * @param {*} altTips 
     */
    settips(tips, altTips) {}
    /**
     * Sets the HelpDisplay's text from sTips using two colons to separate new sections.
     * @param {string} sTips 
     */
    SetTipsSeparated(sTips) {}
}

const actorCreate = () => {
    const newActor = new HelpDisplay()
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

exports.HelpDisplay = actorCreate()
exports.HelpDisplayClass = HelpDisplay