const Actor = require("./actor").ActorClass
const luainjs = require('lua-in-js')

class BitmapText extends Actor {
    constructor() {
        super()
    }

    /**
     * Add the attribute attr to the string at position iPos.
     * The attribute is a table that must contain Length which specifies how many (multi-byte) characters the attribute is to apply. If Length=-1, then the attribute applies until another attribute overrides it.
     * If the table contains Diffuse, then the color value is applied to the range of text.
     * If the table contains Diffuses, then it should be an array of 4 colors which specify the diffuse color for the top left, top right, bottom left, and bottom right.
     * If the table contains Glow, then the color value is applied as a glow to the range of text.
     * @example
     * ```lua
     * attr = { Length = 10; Diffuse = color("#AABBCC"); }
     * ```
     * 
     * @param {number} iPos 
     * @param {*} Attribute 
     */
    AddAttribute(iPos, Attribute) {}
    /**
     * Clear all attributes associated with the BitmapText.
     */
    ClearAttributes() {}
    /**
     * Causes each character of text to be randomly distorted by distortion_percentage of its size when the text is set. The distortion only changes when the text changes.
     * @param {number} distortion_percentage 
     */
    distort(distortion_percentage) {}
    /**
     * Returns whether the diffuse colors in the attributes are multiplied by the general diffuse colors of the BitmapText.
     */
    get_mult_attrs_with_diffuse() {}
    /**
     * Returns the stroke color.
     */
    getstrokecolor() {}
    /**
     * Returns the text that is currently set.
     */
    GetText() {}
    /**
     * If bJitter is true, move each character of the string around by a small random amount.
     * @param {boolean} bJitter 
     */
    jitter(bJitter) {}
    /**
     * Loads a font from sPath, replacing the old glyphs currently loaded.
     * @param {string} sPath 
     */
    LoadFromFont(sPath) {}
    /**
     * If use_zoom is true, this BitmapText will use the zoom that has been applied to it when calculating to change its base zoom from maxheight or maxwidth.
     * @param {boolean} use_zoom 
     */
    max_dimension_use_zoom(use_zoom) {}
    /**
     * Set the maximum height of the unzoomed text to fHeight. If fHeight is 0, then there is no maximum height.
     * @param {number} fHeight 
     */
    maxheight(fHeight) {}
    /**
     * Set the maximum width of the unzoomed text to fWidth. If fWidth is 0, then there is no maximum width.
     * @param {number} hWidth 
     */
    maxwidth(hWidth) {}
    /**
     * If true, set each character of the text in turn to the rainbow colors in the metrics BitmapText::RainbowColor#.
     * @param {boolean} bRainbowScroll 
     */
    rainbowscroll(bRainbowScroll) {}
    /**
     * If mult_attrs_with_diffuse is set to true, then the diffuse colors in the attributes are multiplied by the general diffuse colors of the BitmapText.
     * @param {boolean} mult 
     */
    set_mult_attrs_with_diffuse(mult) {}
    /**
     * Set the text to sText. This clears all attributes. If there are any missing glyphs in sText, you can use sAltText as an alternative to be used. If there are also missing glyphs in sAltText, then sText will be used instead.
     * @param {string} sText 
     * @param {string} sAltText 
     */
    settext(sText, sAltText) {}
    /**
     * Sets the stroke color to c.
     * @param {*} c 
     */
    strokecolor(c) {}
    /**
     * If the text is glowing, specify if just the stroke layer, just the inner layer, or both are affected by the glow.
     * @param {*} tgm 
     */
    textglowmode(tgm) {}
    /**
     * Turns off distortion.
     */
    undistort() {}
    /**
     * If true, make all text uppercase.
     * @param {boolean} b 
     */
    uppercase(b) {}
    /**
     * Add iSpacing pixels of padding between lines of text.
     * @param {number} iSpacing 
     */
    vertspacing(iSpacing) {}
    /**
     * Wrap the unzoomed text at iWidth pixels. If you Actor.zoom() or Actor.zoomx() by x and you want the text wrapped at width, then you should use wrapwidthpixels(width/x).
     * @param {number} iWidth 
     */
    wrapwidthpixels(iWidth) {}
}

const actorCreate = () => {
    const newActor = new BitmapText()
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

exports.BitmapText = actorCreate()
exports.BitmapTextClass = BitmapText