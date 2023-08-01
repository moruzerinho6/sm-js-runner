const ActorFrame = require("./actorFrame").ActorFrameClass
const luainjs = require('lua-in-js')
class ActorScroller extends ActorFrame {
    constructor() {
        super()
    }

    /**
     * Returns the scroller's current item.
     */
    GetCurrentItem() {}
    /**
     * Returns the item the scroller's going to.
     */
    GetDestinationItem() {}
    /**
     * Returns how long it will take for the scroller to completely scroll through all its items.
     */
    GetFullScrollLengthSeconds() {}
    /**
     * Returns the number of items in the ActorScroller.
     */
    GetNumItems() {}
    /**
     * Returns the number of seconds the scroller pauses between items.
     */
    GetSecondsPauseBetweenItems() {}
    /**
     * Returns the number of seconds until the scroller reaches its destination.
     */
    GetSecondsToDestination() {}
    /**
     * Positions the scroller items.
     */
    PositionItems() {}
    /**
     * Scrolls through all the items in the scroller.
     */
    ScrollThroughAllItems() {}
    /**
     * Scrolls through all the items in the scroller with padding at the beginning and end.
     * @param {number} fItemPaddingStart 
     * @param {number} fItemPaddingEnd 
     */
    ScrollWithPadding(fItemPaddingStart, fItemPaddingEnd) {}
    /**
     * Sets the item the scroller should scroll to next and makes it the current item.
     * @param {number} fItemIndex 
     */
    SetCurrentAndDestinationItem(fItemIndex) {}
    /**
     * Sets the item the scroller should scroll to next.
     * @param {number} fItemIndex 
     */
    SetDestinationItem(fItemIndex) {}
    /**
     * Sets if the scroller should catch up fast.
     * @param {boolean} bOn 
     */
    SetFastCatchup(bOn) {}
    /**
     * Specifies if the scroller should loop or not.
     * @param {boolean} bLoop 
     */
    SetLoop(bLoop) {}
    /**
     * Sets the scroller's mask to a Quad that is fWidth by fHeight pixels.
     * @param {number} fWidth 
     * @param {number} fHeight 
     */
    SetMask(fWidth, fHeight) {}
    /**
     * Sets the scroller to draw fNumItems items.
     * @param {number} fNumItems 
     */
    SetNumItemsToDraw(fNumItems) {}
    /**
     * Sets the number of subdivisions in the scroller.
     * @param {number} iNumSubdivisions 
     */
    SetNumSubdivisons(iNumSubdivisions) {}
    /**
     * Sets the scroller's pause countdown to fSecs.
     * @param {number} fSecs 
     */
    SetPauseCoutdownSeconds(fSecs) {}
    /**
     * Sets the scroller's pause between items to fSeconds.
     * @param {number} fSeconds 
     */
    SetSecondsPauseBetweenItems(fSeconds) {}
    /**
     * Sets how many seconds the scroller should spend on each item.
     * A value of 0 means the scroller will not scroll.
     * @param {number} fSeconds 
     */
    SetSecondsPerItem(fSeconds) {}
    /**
     * Sets the scroller's transform function to the specified Lua function.
     * @param {*} ScrollerFunction 
     */
    SetTransformFromFunction(ScrollerFunction) {}
    /**
     * Sets the scroller's transform function from fItemHeight.
     * @param {*} fItemHeight 
     */
    SetTransformFromHeight(fItemHeight) {}
    /**
     * Sets the scroller's transform function from fItemWidth.
     * @param {*} fItemWidth 
     */
    SetTransformFromWidth(fItemWidth) {}
    /**
     * Specifies if the scroller should wrap or not.
     * @param {*} bLoop 
     */
    SetWrap(bLoop) {}
}

const actorCreate = () => {
    const newActor = new ActorScroller()
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

exports.ActorScroller = actorCreate()
exports.ActorScrollerClass = ActorScroller