const Actor = require('./actor').ActorClass
const luainjs = require('lua-in-js')
class ActorFrame extends Actor {
    constructor() {
        super()
    }

    /**
     * Adds a collection of actors from actors to the ActorFrame. Just like regular ActorFrames or Actors, it must return some kind of table.
     * @param {*} actors 
     */
    AddChild(actors) {}
    /**
     * Adds a child to the ActorFrame from the specified path.
     * @param {string} sPath 
     */
    AddChildFromPath(sPath) {}
    /**
     * Sets how far back in z-space an ActorFrame's contents can be visible.
     * If FOV is zero, this also sets the positive z-space limit as well.
     * @param {number} fFarDistZ 
     */
    fardistz(fFarDistZ) {}
    /**
     * Sets the field of view for the ActorFrame.
     * @param {number} fFOV 
     */
    fov(fFOV) {}
    /**
     * Returns the child at the index iIndex.
     * @param {number} iIndex 
     */
    GetChildAt(iIndex) {}
    /**
     * Returns the child with a name of sName.
     * If there are multiple children with that name, returns an array of those children.
     * The table also acts as a pass through layer, function calls pass through to the last child of that name.
     * @param {string} sName 
     */
    GetChild(sName) {}
    /**
     * Returns a table of all the children in the ActorFrame.
     * The table is indexed by the names of the children.
     * If there are multiple children with the same name, the entry for that name is an array of those children.
     * The table also acts as a pass through layer, function calls pass through to the last child of that name.
     */
    GetChildren() {}
    /**
     * Gets the ActorFrame's Draw function.
     */
    GetDrawFunction() {}
    /**
     * Returns the ActorFrame's current FOV.
     */
    GetFOV() {}
    /**
     * Returns the number of children in the ActorFrame.
     */
    GetNumChildren() {}
    /**
     * Gets the update function's rate.
     */
    GetUpdateRate() {}
    /**
     * Plays the sCommandName command on the ActorFrame's children.
     * @param {string} sCommandName 
     */
    playcommandonchildren(sCommandName) {}
    /**
     * Plays the sCommandName command on the ActorFrame's leaves.
     * @param {string} sCommandName 
     */
    playcommandonleaves(sCommandName) {}
    /**
     * Sets if the Actorframe should propagate commands to its children.
     * @param {boolean} bPropagate 
     */
    propagate(bPropagate) {}
    /**
     * Sets if the Actorframe should propagate commands to its children.
     */
    RemoveAllChildren() {}
    /**
     * Removes the specified child from the ActorFrame.
     * @param {string} sChild 
     */
    RemoveChild(sChild) {}
    /**
     * Runs the commands in cmds on the ActorFrame's children.
     * @param {*} cmds 
     */
    RunCommandsOnChildren(cmds) {}
    /**
     * Sets the ActorFrame's ambient light color to c.
     * @param {*} c 
     */
    SetAmbientLightColor(c) {}
    /**
     * Sets the ActorFrame's ambient light color to c.
     * @param {*} c 
     */
    SetDiffuseLightColor(c) {}
    /**
     * Sets if the ActorFrame should draw by Z position.
     * @param {boolean} b 
     */
    SetDrawByZPosition(b) {}
    /**
     * Sets the ActorFrame's Draw function to the specified Lua function.
     * @param {*} DrawFunction 
     */
    SetDrawFunction(DrawFunction) {}
    /**
     * Sets the field of view for the ActorFrame.
     * @param {number} fFOV 
     */
    SetFOV(fFOV) {}
    /**
     * Currently unimplemented since it does not handle errors correctly. Arguments must be passed in as a table.
     * @param {*} table 
     */
    SetLightDirection(table) {}
    /**
     * Sets the ActorFrame's specular light color to c.
     * @param {*} c 
     */
    SetSpecularLightColor(c) {}
    /**
     * Sets the ActorFrame's update function to the specified Lua function.
     * @param {*} UpdateFunction 
     */
    SetUpdateFunction(UpdateFunction) {}
    /**
     * Sets the update function's rate to fRate.
     * @param {number} fRate 
     */
    SetUpdateRate(fRate) {}
    /**
     * Tells the ActorFrame to sort by draw order.
     */
    SortByDrawOrder() {}
    /**
     * Sets the vanishing point for the ActorFrame.
     * @param {number} fX 
     * @param {number} fY 
     */
    vanishpoint(fX, fY) {}
    /**
     * Sets the vanishing point's x position for the ActorFrame.
     * @param {number} fX 
     */
    vanishpointx(fX) {}
    /**
     * Sets the vanishing point's y position for the ActorFrame.
     * @param {number} fY 
     */
    vanishpointy(fY) {}
}

const actorCreate = () => {
    const newActor = new ActorFrame()
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

exports.ActorFrame = actorCreate()
exports.ActorFrameClass = ActorFrame