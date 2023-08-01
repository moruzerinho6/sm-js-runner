const luainjs = require('lua-in-js')

class Actor {
    constructor() {
        this.actorProps = {
            x: 0,
            y: 0,
            z: 0,
            rotationx: 0,
            rotationy: 0,
            rotationz: 0,
            aux: 0,
            rate: 0,
            commands: [],
            states: [],
            wrapperStats: [],
            animate: false,
            pause: true,
            baseAlpha: '#FFFFFF',
            zoom: 0,
            zoomx: 0,
            zoomy: 0,
            zoomz: 0,
            blend: '',
            cullMode: ''
        }
    }

    /**
     * Plays the commands that follow at an accelerated rate (fRate * fRate), where fRate is in seconds.
     * @param {number} fRate 
     */
    /*static*/ accelerate(fRate) {}
    /**
     * Adds fAux to the Actor's current aux value.
     * @param {number} fAux 
     */
    /*static*/ addaux(fAux) {}
    /**
     * Adds a command to the Actor.
     * @param {string} sName 
     * @param {*} cmd 
     */
    /*static*/ addcommand(sName, cmd) {}
    /**
     * Adds rot to the Actor's current x rotation.
     * @param {number} rot 
     */
    /*static*/ addrotationx(rot) {}
    /**
     * Adds rot to the Actor's current y rotation.
     * @param {number} rot 
     */
    /*static*/ /*static*/addrotationy(rot) {}
    /**
     * Adds rot to the Actor's current z rotation.
     * @param {number} rot 
     */
    /*static*/ addrotationz(rot) {}
    /**
     * This adds a wrapper state around the Actor, which is like wrapping the Actor in an ActorFrame, except that you can use it on any actor, and add or remove wrapper states in response to things that happen while the screen is being used. (wrapping an Actor in an ActorFrame normally requires setting it up before the screen starts)
     * The ActorFrame that is returned is the wrapper state, for convenience.
     * An Actor can have any number of wrapper states. Use GetWrapperState to access wrapper states for the actor.
     */
    /*static*/ AddWrapperState() {}
    /**
     * Adds xPos to the Actor's current x position.
     * @param {number} xPos 
     */
    /*static*/ addx(xPos) {}
    /**
     * Adds yPos to the Actor's current y position.
     * @param {number} yPos 
     */
    /*static*/ addy(yPos) {}
    /**
     * Adds zPos to the Actor's current z position.
     * @param {number} zPos 
     */
    /*static*/ addz(zPos) {}
    /**
     * Sets whether or not the Actor should animate.
     * @param {boolean} b 
     */
    /*static*/ animate(b) {}
    /**
     * Sets the Actor's aux value. (This can be a solution for coupling data with an Actor.)
     * @param {number} fAux 
     */
    /*static*/ aux(fAux) {}
    /**
     * If true, cull the Actor's back faces. See also: Actor.cullmode().
     * @param {boolean} b 
     */
    /*static*/ backfacecull(b) {}
    /**
     * Sets the Actor's base alpha to fAlpha, where fAlpha is in the range 0..1.
     * @param {number} fAlpha 
     */
    /*static*/ basealpha(fAlpha) {}
    /**
     * Sets the Actor's base X rotation to rot.
     * @param {number} rot 
     */
    /*static*/ baserotationx(rot) {}
    /**
     * Sets the Actor's base Y rotation to rot.
     * @param {number} rot 
     */
    /*static*/ baserotationy(rot) {}
    /**
     * Sets the Actor's base Z rotation to rot.
     * @param {number} rot 
     */
    /*static*/ baserotationz(rot) {}
    /**
     * Sets the Actor's base zoom to zoom.
     * @param {number} zoom 
     */
    /*static*/ basezoom(zoom) {}
    /**
     * Sets the Actor's base X zoom to zoom.
     * @param {number} zoom 
     */
    /*static*/ basezoomx(zoom) {}
    /**
     * Sets the Actor's base Y zoom to zoom.
     * @param {number} zoom 
     */
    /*static*/ basezoomy(zoom) {}
    /**
     * Sets the Actor's base Z zoom to zoom.
     * @param {number} zoom 
     */
    /*static*/ basezoomz(zoom) {}
    /**
     * Sets the Actor to use the specified blend mode.
     * @param {*} mode 
     */
    /*static*/ blend(mode) {}
    /**
     * Makes the Actor bob up and down. Can use Actor.effectmagnitude() to define different bobbing behavior.
     */
    /*static*/ bob() {}
    /**
     * Makes the Actor bounce, similar to bob but with one point acting as the ground. Can use Actor.effectmagnitude() to define different bouncing behavior (with effectmagnitude values relating to x, y, and z movement).
     */
    /*static*/ bounce() {}
    /**
     * 
     * @param {number} time 
     */
    /*static*/ bouncebegin(time) {}
    /**
     * 
     * @param {number} time 
     */
    /*static*/ bounceend(time) {}
    /**
     * Determines if the z-buffer should be cleared or not.
     * @param {boolean} bClear 
     */
    /*static*/ clearzbuffer(bClear) {}
    /**
     * Crops the actor by left, top, right and bottom percent of the left, top, right and bottom respectively. left,top,right,bottom are in the range 0..1.
     * @param {number} left 
     * @param {number} top 
     * @param {number} right 
     * @param {number} bottom 
     */
    /*static*/ crop(left, top, right, bottom) {}
    /**
     * Crops percent of the Actor from the bottom, where percent is in the range 0..1.
     * @param {number} percent 
     */
    /*static*/ cropbottom(percent) {}
    /**
     * Crops percent of the Actor from the left, where percent is in the range 0..1.
     * @param {number} percent 
     */
    /*static*/ cropleft(percent) {}
    /**
     * Crops percent of the Actor from the right, where percent is in the range 0..1.
     * @param {number} percent 
     */
    /*static*/ cropright(percent) {}
    /**
     * Crops percent of the Actor from the top, where percent is in the range 0..1.
     * @param {number} percent 
     */
    /*static*/ croptop(percent) {}
    /**
     * Sets the Actor's cull mode to mode.
     * @param {*} mode 
     */
    /*static*/ cullmode(mode) {}
    /**
     * Sets the Actor's cull mode to mode.
     * @param {number} fRate 
     */
    /*static*/ decelerate(fRate) {}
    /**
     * Set the Actor's diffuse color to c.
     * @param {*} c 
     */
    /*static*/ diffuse(c) {}
    /**
     * Sets the Actor's alpha level to fAlpha, where fAlpha is in the range 0..1.
     * @param {number} fAlpha 
     */
    /*static*/ diffusealpha(fAlpha) {}
    /**
     * Makes the Actor switch between two colors immediately. See Themerdocs/effect_colors.txt for an example.
     */
    /*static*/ diffuseblink() {}
    /**
     * Sets the Actor's bottom edge color to c.
     * @param {*} c 
     */
    /*static*/ diffusebottomedge(c) {}
    /**
     * Set the Actor's diffuse color to c, ignoring any alpha value in c.
     * @param {*} c 
     */
    /*static*/ diffusecolor(c) {}
    /**
     * Sets the Actor's left edge color to c.
     * @param {*} c 
     */
    /*static*/ diffuseleftedge(c) {}
    /**
     * Sets the Actor's lower left corner color to c.
     * @param {*} c 
     */
    /*static*/ diffuselowerleft(c) {}
    /**
     * Makes the Actor switch between two colors, jumping back to the first after reaching the second. See Themerdocs/effect_colors.txt for an example.
     */
    /*static*/ diffuseramp() {}
    /**
     * Sets the Actor's right edge color to c.
     * @param {*} c 
     */
    /*static*/ diffuserightedge(c) {}
    /**
     * Makes the Actor shift between two colors smoothly. See Themerdocs/effect_colors.txt for an example.
     */
    /*static*/ diffuseshift() {}
    /**
     * Sets the Actor's top edge color to c.
     * @param {} c
     */
    /*static*/ diffusetopedge(c) {}
    /**
     * Sets the Actor's upper left corner color to c.
     * @param {*} c 
     */
    /*static*/ diffuseupperleft(c) {}
    /**
     * Sets the Actor's upper right corner color to c.
     * @param {*} c 
     */
    /*static*/ diffuseupperright(c) {}
    /**
     * Tells the Actor to draw itself.
     */
    /*static*/ Draw() {}
    /**
     * Sets the Actor's draworder to iOrder, where larger values display first.
     * @param {number} iOrder 
     */
    /*static*/ draworder(iOrder) {}
    /**
     * Plays the commands that follow with an inBack ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinback(fDuration) {}
    /**
     * Plays the commands that follow with an inBack ease and has a customizable overshoot. fDuration is in seconds.
     * easeinback uses a value of 1.70158 for fOvershoot.
     * @param {number} fDuration 
     * @param {number} fOvershoot 
     */
    /*static*/ easeinbackex(fDuration, fOvershoot) {}
    /**
     * Plays the commands that follow with an inBounce ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinbounce(fDuration) {}
    /**
     * Plays the commands that follow with an inCircle ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeincircle(fDuration) {}
    /**
     * Plays the commands that follow with an inCubic ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeincubic(fDuration) {}
    /**
     * Plays the commands that follow with an inElastic ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinelastic(fDuration) {}
    /**
     * Plays the commands that follow with an inElastic ease and has customizable amplitude & period. fDuration is in seconds.
     * easeinelastic uses an fAmplitude of 0.1 and a fPeriod of 0.4.
     * @param {number} fDuration 
     * @param {number} fAmplitude
     * @param {number} fPeriod
     */
    /*static*/ easeinelasticex(fDuration, fAmplitude, fPeriod) {}
    /**
     * Plays the commands that follow with an inExpo ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinexpo(fDuration) {}
    /**
     * Plays the commands that follow with an inOutBack ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinoutback(fDuration) {}
    /**
     * Plays the commands that follow with an inOutBack ease and has a customizable overshoot. fDuration is in seconds.
     * easeinoutback uses a value of 2.5949095 for fOvershoot.
     * @param {number} fDuration 
     * @param {number} fOvershoot
     */
    /*static*/ easeinoutbackex(fDuration, fOvershoot) {}
    /**
     * Plays the commands that follow with an inOutBounce ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinoutbounce(fDuration) {}
    /**
     * Plays the commands that follow with an inOutCircle ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinoutcircle(fDuration) {}
    /**
     * Plays the commands that follow with an inOutCubic ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinoutcubic(fDuration) {}
    /**
     * Plays the commands that follow with an inOutElastic ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinoutelastic(fDuration) {}
    /**
     * Plays the commands that follow with an inOutElastic ease and has customizable amplitude & period. fDuration is in seconds.
     * easeinoutelastic uses an fAmplitude of 0.1 and a fPeriod of 0.4.
     * @param {number} fDuration 
     * @param {number} fAmplitude
     * @param {number} fPeriod
     */
    /*static*/ easeinoutelasticex(fDuration, fAmplitude, fPeriod) {}
    /**
     * Plays the commands that follow with an inOutExpo ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinoutexpo(fDuration) {}
    /**
     * Plays the commands that follow with an inOutQuad ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinoutquad(fDuration) {}
    /**
     * Plays the commands that follow with an inOutQuart ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinoutquart(fDuration) {}
    /**
     * Plays the commands that follow with an inOutQuint ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinoutquint(fDuration) {}
    /**
     * Plays the commands that follow with an inOutSine ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinoutsine(fDuration) {}
    /**
     * Plays the commands that follow with an inQuad ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinquad(fDuration) {}
    /**
     * Plays the commands that follow with an inQuart ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinquart(fDuration) {}
    /**
     * Plays the commands that follow with an inQuint ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinquint(fDuration) {}
    /**
     * Plays the commands that follow with an inSine ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeinsine(fDuration) {}
    /**
     * Plays the commands that follow with an outBack ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutback(fDuration) {}
    /**
     * Plays the commands that follow with an outBack ease and has a customizable overshoot. fDuration is in seconds.
     * easeoutback uses a value of 1.70158 for fOvershoot.
     * @param {number} fDuration 
     * @param {number} fOvershoot 
     */
    /*static*/ easeoutbackex(fDuration,fOvershoot) {}
    /**
     * Plays the commands that follow with an outBounce ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutbounce(fDuration) {}
    /**
     * Plays the commands that follow with an outCircle ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutcircle(fDuration) {}
    /**
     * Plays the commands that follow with an outCubic ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutcubic(fDuration) {}
    /**
     * Plays the commands that follow with an outElastic ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutelastic(fDuration) {}
    /**
     * Plays the commands that follow with an outElastic ease and has customizable amplitude & period. fDuration is in seconds.
     * easeoutelastic uses an fAmplitude of 0.1 and a fPeriod of 0.4.
     * @param {number} fDuration 
     * @param {number} fOvershoot 
     * @param {number} fPeriod 
     */
    /*static*/ easeoutelasticex(fDuration,fAmplitude,fPeriod) {}
    /**
     * Plays the commands that follow with an outExpo ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutexpo(fDuration) {}
    /**
     * Plays the commands that follow with an outInBack ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutinback(fDuration) {}
    /**
     * Plays the commands that follow with an outInBack ease and has a customizable overshoot. fDuration is in seconds.
     * easeoutinback uses a value of 2.5949095 for fOvershoot.
     * @param {number} fDuration 
     * @param {number} fOvershoot 
     */
    /*static*/ easeoutinbackex(fDuration,fOvershoot) {}
    /**
     * Plays the commands that follow with an outInBounce ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutinbounce(fDuration) {}
    /**
     * Plays the commands that follow with an outInCircle ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutincircle(fDuration) {}
    /**
     * Plays the commands that follow with an outInCubic ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutincubic(fDuration) {}
    /**
     * Plays the commands that follow with an outInElastic ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutinelastic(fDuration) {}
    /**
     * Plays the commands that follow with an outInElastic ease and has customizable amplitude & period. fDuration is in seconds.
     * easeoutinelastic uses an fAmplitude of 0.1 and a fPeriod of 0.4.
     * @param {number} fDuration 
     * @param {number} fOvershoot
     * @param {number} fPeriod 
     */
    /*static*/ easeoutinelasticex(fDuration, fAmplitude, fPeriod) {}
    /**
     * Plays the commands that follow with an outInExpo ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutinexpo(fDuration) {}
    /**
     * Plays the commands that follow with an outInQuad ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutinquad(fDuration) {}
    /**
     * Plays the commands that follow with an outInQuart ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutinquart(fDuration) {}
    /**
     * Plays the commands that follow with an outInQuint ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutinquint(fDuration) {}
    /**
     * Plays the commands that follow with an outInSine ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutinsine(fDuration) {}
    /**
     * Plays the commands that follow with an outQuad ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutquad(fDuration) {}
    /**
     * Plays the commands that follow with an outQuart ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutquart(fDuration) {}
    /**
     * Plays the commands that follow with an outQuint ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutquint(fDuration) {}
    /**
     * Plays the commands that follow with an outQuint ease. fDuration is in seconds.
     * @param {number} fDuration 
     */
    /*static*/ easeoutsine(fDuration) {}
    /**
     * Set the hold_at_full part of the effect timing while leaving the others unchanged.
     * @param {number} hold_at_full 
     */
    /*static*/ effect_hold_at_full(hold_at_full) {}
    /**
     * Set the Actor's effect clock to s.
     * @param {string} s 
     */
    /*static*/ effectclock(s) {}
    /**
     * Set the Actor's effect clock to s.
     * @param {*} c 
     */
    /*static*/ effectcolor1(c) {}
    /**
     * Sets the second effect color to c.
     * @param {*} c 
     */
    /*static*/ effectcolor2(c) {}
    /**
     * Set the Actor's effect magnitude in each direction to the given values.
     * @param {number} fX 
     * @param {number} fY 
     * @param {number} fZ 
     */
    /*static*/ effectmagnitude(fX, fY, fZ) {}
    /**
     * Set the Actor's effect offset to fTime. The offset is added to the time into the effect before calculating percent_through_effect.
     * @param {number} fTime 
     */
    /*static*/ effectoffset(fTime) {}
    /**
     * Set the Actor's effect period to fTime.
     * @param {number} fTime 
     */
    /*static*/ effectperiod(fTime) {}
    /**
     * Set the Actor's effect timing.
     * hold_at_zero is before hold_at_full in the argument list for compatibility. A future version will probably swap them because it makes more sense to have hold_at_full come before hold_at_zero.
     * All effect timings must be greater than or equal to zero, at least one of them must be greater than zero.
     * The effect timing controls how long it takes an effect to cycle and how long it spends in each phase.
     * Depending on the effect clock, the actor's time into effect is updated every frame. That time is then translated into a percent_through_effect using the parameters to this function.
     * 
     * ramp_to_half is the amount of time for percent_through_effect to reach 0.5.
     * hold_at_half is the amount of time percent_through_effect will stay at 0.5.
     * ramp_to_full is the amount of time percent_through_effect will take to go from 0.5 to 1.0.
     * hold_at_full is the amount of time percent_through_effect will stay at 1.0.
     * After reaching the end of hold_at_full, percent_through_effect stays at 0 until hold_at_zero is over.
     * 
     * The different effects use percent_through_effect in different ways. Some use it to calculate percent_between_colors with this sine wave: sin((percent_through_effect + 0.25f) * 2 * PI ) / 2 + 0.5f
     * Some effects check the internal bool blink_on. blink_on is true if percent_through_effect is greater than 0.5 and false if percent_through_effect is less than or equal to 0.5.
     * Check the effect functions for individual explanations: diffuseblink, diffuseshift, glowblink, glowshift, glowramp, rainbow, wag, bounce, bob, pulse, spin, vibrate.
     * @param {*} ramp_to_half 
     * @param {*} hold_at_half 
     * @param {*} ramp_to_full 
     * @param {*} hold_at_zero 
     * @param {*} hold_at_full 
     */
    /*static*/ effecttiming(ramp_to_half, hold_at_half, ramp_to_full, hold_at_zero, hold_at_full) {}
    /**
     * Erases the Actor's command for the given name. Does nothing if the command doesn't exist.
     * @param {string} sCmdName 
     */
    /*static*/ erasecommand(sCmdName) {}
    /**
     * Fades percent of the Actor from the bottom where percent is in the range 0..1.
     * @param {number} percent 
     */
    /*static*/ fadebottom(percent) {}
    /**
     * Fades percent of the Actor from the left where percent is in the range 0..1.
     * @param {number} percent 
     */
    /*static*/ fadeleft(percent) {}
    /**
     * Fades percent of the Actor from the right where percent is in the range 0..1.
     * @param {number} percent 
     */
    /*static*/ faderight(percent) {}
    /**
     * Fades percent of the Actor from the top where percent is in the range 0..1.
     * @param {number} percent 
     */
    /*static*/ fadetop(percent) {}
    /**
     * Finishes up an Actor's tween immediately.
     */
    /*static*/ finishtweening() {}
    /**
     * Returns true if this actor is currently set to use the effect delta for tweening.
     */
    /*static*/ get_tween_uses_effect_delta() {}
    /**
     * Returns what the Actor's absolute x position will be when it reaches its destination tween state. This can be used to determine its new location while being nested into multiple actorframes.
     */
    /*static*/ GetAbsoluteDestX() {}
    /**
     * Returns what the Actor's absolute y position will be when it reaches its destination tween state. This can be used to determine its new location while being nested into multiple actorframes.
     */
    /*static*/ GetAbsoluteDestY() {}
    /**
     * Returns the Actor's absolute x position. This can be used to determine its location while being nested into multiple actorframes.
     */
    /*static*/ GetAbsoluteX() {}
    /**
     * Returns the Actor's absolute y position. This can be used to determine its location while being nested into multiple actorframes.
     */
    /*static*/ GetAbsoluteY() {}
    /**
     * Returns the Actor's aux value.
     */
    /*static*/ getaux() {}
    /**
     * Returns the Actor's base X zoom value.
     */
    /*static*/ GetBaseZoomX() {}
    /**
     * Returns the Actor's base Y zoom value.
     */
    /*static*/ GetBaseZoomY() {}
    /**
     * Returns the Actor's base Z zoom value.
     */
    /*static*/ GetBaseZoomZ() {}
    /**
     * Returns the command with the given name. Returns nil if the command doesn't exist for the Actor.
     * @param {string} sCmdName 
     */
    /*static*/ GetCommand(sCmdName) {}
    /**
     * Gets the percentage the actor is cropped from the bottom. bCurrent is an optional parameter that makes the function return the current mid-tween value if true.
     * @param {boolean} bCurrent 
     */
    /*static*/ GetCropBottom(bCurrent) {}
    /**
     * Gets the percentage the actor is cropped from the left. bCurrent is an optional parameter that makes the function return the current mid-tween value if true.
     * @param {boolean} bCurrent 
     */
    /*static*/ GetCropLeft(bCurrent) {}
    /**
     * Gets the height of the actor after cropping. bCurrent is an optional parameter that makes the function return the current mid-tween value if true.
     * @param {boolean} bCurrent 
     */
    /*static*/ GetCroppedHeight(bCurrent) {}
    /**
     * Gets the width of the actor after cropping. bCurrent is an optional parameter that makes the function return the current mid-tween value if true.
     * @param {boolean} bCurrent 
     */
    /*static*/ GetCroppedWidth(bCurrent) {}
    /**
     * Gets the zoomed height of the actor after cropping. bCurrent is an optional parameter that makes the function return the current mid-tween value if true.
     * @param {boolean} bCurrent 
     */
    /*static*/ GetCroppedZoomedHeight(bCurrent) {}
    /**
     * Gets the zoomed width of the actor after cropping. bCurrent is an optional parameter that makes the function return the current mid-tween value if true.
     * @param {boolean} bCurrent 
     */
    /*static*/ GetCroppedZoomedWidth(bCurrent) {}
    /**
     * Gets the percentage the actor is cropped from the right. bCurrent is an optional parameter that makes the function return the current mid-tween value if true.
     * @param {boolean} bCurrent 
     */
    /*static*/ GetCropRight(bCurrent) {}
    /**
     * Gets the percentage the actor is cropped from the top. bCurrent is an optional parameter that makes the function return the current mid-tween value if true.
     * @param {boolean} bCurrent 
     */
    /*static*/ GetCropTop(bCurrent) {}
    /**
     * Returns what the Actor's x position will be when it reaches its destination tween state.
     */
    /*static*/ GetDestX() {}
    /**
     * Returns what the Actor's y position will be when it reaches its destination tween state.
     */
    /*static*/ GetDestY() {}
    /**
     * Returns what the Actor's z position will be when it reaches its destination tween state.
     */
    /*static*/ GetDestZ() {}
    /**
     * Returns the Actor's current diffuse color
     */
    /*static*/ GetDiffuse() {}
    /**
     * Returns the Actor's current diffusealpha.
     */
    /*static*/ GetDiffuseAlpha() {}
    /**
     * Returns the Actor's current effect delta.
     */
    /*static*/ GetEffectDelta() {}
    /**
     * Returns the Actor's current effect magnitude as three floats.
     */
    /*static*/ geteffectmagnitude() {}
    /**
     * Returns the Actor's current X rotation, taking the current actor effect into account.
     */
    /*static*/ GetEffectRotationX() {}
    /**
     * Returns the Actor's current Y rotation, taking the current actor effect into account.
     */
    /*static*/ GetEffectRotationY() {}
    /**
     * Returns the Actor's current Z rotation, taking the current actor effect into account.
     */
   /*static*/  GetEffectRotationZ() {}
    /**
     * Returns the Actor's fake parent, or nil if it doesn't have one.
     */
    /*static*/ GetFakeParent() {}
    /**
     * Returns the Actor's current glow color.
     */
    /*static*/ GetGlow() {}
    /**
     * Returns the Actor's horizontal alignment as a number in the range 0..1
     */
    /*static*/ GetHAlign() {}
    /**
     * Returns the Actor's current height.
     */
    /*static*/ GetHeight() {}
    /**
     * @returns {number}
     */
    /*static*/ GetHoldLength() {}
    /**
     * Returns the Actor's name.
     */
    /*static*/ GetName() {}
    /**
     * Returns the number of states the Actor has.
     */
    /*static*/ GetNumStates() {}
    /**
     * Returns the number of wrapper states the actor has.
     */
    /*static*/ GetNumWrapperStates() {}
    /**
     * Returns the Actor's parent, or nil if it doesn't have one.
     */
    /*static*/ GetParent() {}
    /**
     * Returns whether the Actor applies rotation after zoom or not.
     */
    /*static*/ GetRotAfterZoom() {}
    /**
     * Returns the Actor's rotation in X, Y, and Z.
     */
    /*static*/ getrotation() {}
    /**
     * Returns the Actor's destination X rotation.
     * bGetCurrent is optional.
     * When bGetCurrent is true, the function returns the Actor's current mid-tween value for X rotation.
     * @param {boolean} bGetCurrent 
     */
    /*static*/ GetRotationX(bGetCurrent) {}
    /**
     * Returns the Actor's destination Y rotation.
     * bGetCurrent is optional.
     * When bGetCurrent is true, the function returns the Actor's current mid-tween value for Y rotation.
     * @param {boolean} bGetCurrent 
     */
    /*static*/ GetRotationX(bGetCurrent) {}
    /**
     * Returns the Actor's destination Z rotation.
     * bGetCurrent is optional.
     * When bGetCurrent is true, the function returns the Actor's current mid-tween value for Z rotation.
     * @param {number} bGetCurrent 
     */
    /*static*/ GetRotationX(bGetCurrent) {}
    /**
     * Returns the number of seconds into the currently running effect (e.g. diffuseshift, bob).
     */
    /*static*/ GetSecsIntoEffect() {}
    /**
     * Returns whether the Actor applies skew after zoom and rotation or not.
     */
    /*static*/ GetSkewAfterZoomRot() {}
    /**
     * Returns the Actor's destination value for SkewX.
     * bGetCurrent is optional.
     * When bGetCurrent is true, the function returns the Actor's current mid-tween value for SkewX.
     * @param {boolean} bGetCurrent 
     */
    /*static*/ GetSkewX(bGetCurrent) {}
    /**
     * Returns the Actor's destination value for SkewY.
     * bGetCurrent is optional.
     * When bGetCurrent is true, the function returns the Actor's current mid-tween value for SkewY.
     * @param {boolean} bGetCurrent 
     */
    /*static*/ GetSkewY(bGetCurrent) {}
    /**
     * Returns how much time is remaining for the current tween.
     */
    /*static*/ GetTweenTimeLeft() {}
    /**
     * Returns the Actor's vertical alignment as a number in the range 0..1.
     */
    /*static*/ GetVAlign() {}
    /**
     * Returns the Actor's visibility.
     */
    /*static*/ GetVisible() {}
    /**
     * Returns the Actor's current width.
     */
    /*static*/ GetWidth() {}
    /**
     * Returns the wrapper state at index i. Think of wrapper states with a higher index as being "further out". Actor is inside Wrapper 1, Wrapper 1 is inside Wrapper 2, Wrapper 2 is inside Wrapper 3, and so on.
     * @param {number} i 
     */
    /*static*/ GetWrapperState(i) {}
    /**
     * Returns the Actor's x position.
     */
    /*static*/ GetX() {}
    /**
     * Returns the Actor's y position.
     */
    /*static*/ GetY() {}
    /**
     * Returns the Actor's z position.
     */
    /*static*/ GetZ() {}
    /**
     * Returns the Actor's destination zoom.
     * bGetCurrent is optional.
     * When bGetCurrent is true, the function returns the Actor's current mid-tween value for zoom.
     * @param {boolean} bGetCurrent 
     */
    /*static*/ GetZoom(bGetCurrent) {}
    /**
     * Returns the zoomed height of an Actor.
     */
    /*static*/ GetZoomedHeight() {}
    /**
     * Returns the zoomed width of an Actor.
     */
    /*static*/ GetZoomedWidth() {}
    /**
     * Returns the Actor's destination X zoom.
     * bGetCurrent is optional.
     * When bGetCurrent is true, the function returns the Actor's current mid-tween value for X zoom.
     * @param {boolean} bGetCurrent 
     */
    /*static*/ GetZoomX(bGetCurrent) {}
    /**
     * Returns the Actor's destination Y zoom.
     * bGetCurrent is optional.
     * When bGetCurrent is true, the function returns the Actor's current mid-tween value for Y zoom.
     * @param {boolean} bGetCurrent 
     */
    /*static*/ GetZoomY(bGetCurrent) {}
    /**
     * Returns the Actor's destination Z zoom.
     * bGetCurrent is optional.
     * When bGetCurrent is true, the function returns the Actor's current mid-tween value for Z zoom.
     * @param {boolean} bGetCurrent 
     */
    /*static*/ GetZoomZ(bGetCurrent) {}
    /**
     * Sets the Actor's glow color.
     * @param {*} c 
     */
    /*static*/ glow(c) {}
    /**
     * Makes the Actor glow between two colors immediately. See Themerdocs/effect_colors.txt for an example.
     */
    /*static*/ glowblink() {}
    /**
     * Makes the Actor glow between two colors smoothly, jumping back to the first at the end. See Themerdocs/effect_colors.txt for an example.
     */
    /*static*/ glowramp() {}
    /**
     * Makes the Actor glow between two colors smoothly. See Themerdocs/effect_colors.txt for an example.
     */
    /*static*/ glowshift() {}
    /**
     * Set the fractional horizontal alignment of the Actor according to fAlign which should be ain the range 0..1. An alignment of 0 is left aligned while an alignment of 1 is right aligned. See Actor.horizalign() for the common case.
     * @param {number} fAlign 
     */
    /*static*/ halign(fAlign) {}
    /**
     * Sets the heading of this Actor to fHeading.
     * @param {number} fHeading 
     */
    /*static*/ heading(fHeading) {}
    /**
     * Hides the Actor for the specified amount of time.
     * @param {number} fTime 
     */
    /*static*/ hibernate(fTime) {}
    /**
     * Set the horizontal alignment of the Actor according to align. See Actor.halign() for fractional alignment.
     * @param {*} align 
     */
    /*static*/ horizalign(align) {}
    /**
     * Hurries up an Actor's tweening by factor.
     * @param {number} factor 
     */
    /*static*/ hurrytweening(factor) {}
    /**
     * Plays the commands that follow at a normal rate, where fRate is in seconds.
     * @param {number} fRate 
     */
    /*static*/ linear(fRate) {}
    /**
     * Sets the actor's effect command to sCommandName. Params cannot be passed to the command.
     * @param {string} sCommandName 
     */
    /*static*/ luaeffect(sCommandName) {}
    /**
     * Sets the Actor's name to sName.
     * @param {string} sName 
     */
    /*static*/ name(sName) {}
    /**
     * Stops the Actor's movement. (Usually used for Sprites or Models.)
     */
    /*static*/ pause() {}
    /**
     * Sets the pitch of this Actor to fPitch.
     * @param {number} fPitch 
     */
    /*static*/ pitch(fPitch) {}
    /**
     * Starts the Actor's movement. (Usually used for Sprites or Models.)
     */
    /*static*/ play() {}
    /**
     * Starts the Actor's movement. (Usually used for Sprites or Models.)
     * @param {string} sCommandName 
     * @param {*} params 
     */
    /*static*/ playcommand(sCommandName, params) {}
    /**
     * Sets how thick an Actor's lines are when the PolygonMode is set to Line.
     * Only accepts positive numbers.
     * @param {number} fWidth 
     */
    /*static*/ polygonlinewidth(fWidth) {}
    /**
     * Sets the fill mode of an Actor.
     * @param {*} pm 
     */
    /*static*/ polygonmode(pm) {}
    /**
     * Makes the Actor grow and shrink. Can use Actor.effectmagnitude() to define different pulsing behavior.
     */
    /*static*/ pulse() {}
    /**
     * Makes the Actor grow and shrink on a sawtooth wave. Can use Actor.effectmagnitude() to define different pulsing behavior.
     */
    /*static*/ pulseramp() {}
    /**
     * Queues a command named sCommandName to be played.
     * @param {string} sCommandName 
     */
    /*static*/ queuecommand(sCommandName) {}
    /**
     * Basically creates a command named !sMessageName (Note the ! at the beginning. The source code says this: "Hack: use "!" as a marker to broadcast a command, instead of playing a command, so we don't have to add yet another element to every tween state for this rarely-used command.")
     * @param {string} sMessageName 
     */
    /*static*/ queuemessage(sMessageName) {}
    /**
     * Makes the Actor change colors continually using colors of the rainbow. Each channel follows a cosine wave, red starts at 0, green starts at 2pi/3, and blue starts at 4pi/3.
     */
    /*static*/ rainbow() {}
    /**
     * Removes the wrapper state at index i.
     * @param {number} i 
     */
    /*static*/ RemoveWrapperState(i) {}
    /**
     * Sets the roll of this Actor to fRoll.
     * @param {number} fRoll 
     */
    /*static*/ roll(fRoll) {}
    /**
     * Set whether the Actor applies rotation after zoom or not.
     * @param {boolean} b 
     */
    /*static*/ rotafterzoom(b) {}
    /**
     * Set the Actor's rotation on the X axis to fAlign.
     * @param {number} fRotation 
     */
    /*static*/ rotationx(fRotation) {}
    /**
     * Set the Actor's rotation on the Y axis to fAlign.
     * @param {number} fRotation 
     */
    /*static*/ rotationy(fRotation) {}
    /**
     * Set the Actor's rotation on the Z axis to fAlign.
     * @param {number} fRotation 
     */
    /*static*/ rotationz(fRotation) {}
    /**
     * Run the lua function command on the Actor. If used on an ActorFrame, all Actors within will run the command.
     * @param {*} command 
     * @param {*} params 
     */
    /*static*/ RunCommandsRecursively(command, params) {}
    /**
     * Scales the Actor to cover a rectangle defined by the fourarguments.
     * @param {number} fLeft 
     * @param {number} fTop 
     * @param {number} fRight 
     * @param {number} fBottom 
     */
    /*static*/ scaletocover(fLeft, fTop, fRight, fBottom) {}
    /**
     * Scales the Actor to fit inside a rectangle defined by the fourarguments.
     * @param {number} fLeft 
     * @param {number} fTop 
     * @param {number} fRight 
     * @param {number} fBottom 
     */
    /*static*/ scaletofit(fLeft, fTop, fRight, fBottom ) {}
    /**
     * Scales the Actor to fit inside a rectangle defined by the fourarguments.
     */
    /*static*/ set_tween_uses_effect_delta() {}
    /**
     * Sets the Actor's fake parent to p, or clears it if p is nil.
     * @param {new Actor} p
     */
    /*static*/ SetFakeParent(p) {}
    /**
     * Sets the height of the Actor.
     * @param {number} height 
     */
    /*static*/ SetHeight(height) {}
    /**
     * Sets the size of the Actor.
     * @param {number} width 
     * @param {number} height 
     */
    /*static*/ setsize(width, height) {}
    /**
     * Sets a multi-framed Actor's state to iNewState.
     * @param {number} iNewState 
     */
    /*static*/ setstate(iNewState) {}
    /**
     * Sets Texture Filtering for an Actor to b.
     * @param {boolean} b 
     */
    /*static*/ SetTextureFiltering(b) {}
    /**
     * Sets Texture Filtering for an Actor to b.
     * @param {number} width 
     */
    /*static*/ SetWidth(width) {}
    /**
     * Sets the shadow's color to c.
     * @param {*} c 
     */
    /*static*/ shadowcolor(c) {}
    /**
     * Sets the Actor's shadow length to fLength.
     * @param {number} fLength 
     */
    /*static*/ shadowlength(fLength) {}
    /**
     * Sets the Actor's horizontal shadow length to fLength.
     * @param {number} fLength 
     */
    /*static*/ shadowlengthx(fLength) {}
    /**
     * Sets the Actor's horizontal shadow length to fLength.
     * @param {number} fLength 
     */
    /*static*/ shadowlengthy(fLength) {}
    /**
     * Set whether the Actor applies skew after zoom and rotation or not.
     * @param {boolean} b 
     */
    /*static*/ skewafterzoomrot(b) {}
    /**
     * Skews the Actor on the x axis by fAmount.
     * @param {number} fAmount 
     */
    /*static*/ skewx(fAmount) {}
    /**
     * Skews the Actor on the y axis by fAmount
     * @param {number} fAmount 
     */
    /*static*/ skewy(fAmount) {}
    /**
     * Waits fSeconds before executing the next command.
     * @param {number} fSeconds 
     */
    /*static*/ sleep(fSeconds) {}
    /**
     * Plays the next animation with a smoothened movement.
     * @param {number} fDuration 
     */
    /*static*/ smooth(fDuration) {}
    /**
     * Tells the Actor to spin. Can use Actor.effectmagnitude() to define different spinning behavior.
     */
    /*static*/ spin() {}
    /**
     * Makes the next animation use a 'springing' movement.
     * @param {number} fDuration 
     */
    /*static*/ spring(fDuration) {}
    /**
     * Tells the Actor to squich and stretch. Can use Actor.effectmagnitude() to define different squishing behavior.
     */
    /*static*/ squish() {}
    /**
     * Stops any effect the Actor has.
     */
    /*static*/ stopeffect() {}
    /**
     * Stops any tweening.
     */
    /*static*/ stoptweening() {}
    /**
     * Stretches the Actor to a rectangle of a specific size.
     * @param {number} x1 
     * @param {number} y1 
     * @param {number} x2 
     * @param {number} y2 
     */
    /*static*/ stretchto(x1, y1, x2, y2) {}
    /**
     * Translates the texture of the actor by x and y.
     * @param {number} x 
     * @param {number} y 
     */
    /*static*/ texturetranslate(x, y) {}
    /**
     * Determines if the Actor should use texture wrapping or not.
     * @param {boolean} bWrap 
     */
    /*static*/ texturewrapping(bWrap) {}
    /**
     * Uses type to determine the tween to use. The type must be one of the TweenType enum values. If the type is not TweenType_Bezier, the params table is ignored. If the type is TweenType_Bezier, then the params table must have 4 or 8 numbers. 4 numbers in the params creates a 1 dimensional bezier curve, 8 numbers creates a 2 dimensional bezier curve.
     * It's usually more convenient to use Actor:linear, Actor:accelerate, and so on, rather than using Actor:tween directly.
     * @param {number} time 
     * @param {*} type 
     * @param {*} params 
     */
    /*static*/ tween(time, type, params) {}
    /**
     * Set the fractional vertical alignment of the Actor according to fAlign which should be ain the range 0..1. An alignment of 0 is top aligned while an alignment of 1 is bottom aligned. See Actor.vertalign() for the common case.
     * @param {number} fAlign 
     */
    /*static*/ valign(fAlign) {}
    /**
     * Set the vertical alignment of the Actor according to align. See Actor.valign() for fractional alignment.
     * @param {*} align 
     */
    /*static*/ vertalign(align) {}
    /**
     * Set the vertical alignment of the Actor according to align. See Actor.valign() for fractional alignment.
     */
    /*static*/ vibrate() {}
    /**
     * Sets an Actor's visibility to b.
     * @param {boolean} b 
     */
    /*static*/ visible(b) {}
    /**
     * Makes the Actor wag. Use Actor.effectmagnitude() to define different wag behavior.
     */
    /*static*/ wag() {}
    /**
     * Sets whether the actor render as a wireframe. Not all actors support this.
     * @param {boolean} bWireFrame 
     */
    /*static*/ wireframe(bWireFrame) {}
    /**
     * Set the x position of the Actor to xPos.
     * @param {number} xPos 
     */
   /*static*/  x(xPos) {}
    /**
     * Sets the x and y location of the Actor in one command.
     * @param {number} actorX 
     * @param {number} actorY 
     */
    /*static*/ xy(actorX, actorY) {}
    /**
     * Sets the x, y and z location of the Actor in one command.
     * @param {number} actorX 
     * @param {number} actorY 
     * @param {number} actorZ 
     */
    /*static*/ xyz(actorX, actorY, actorZ) {}
    /**
     * Set the y position of the Actor to yPos.
     * @param {number} yPos 
     */
    /*static*/ y(yPos) {}
    /**
     * Set the z position of the Actor to zPos.
     * @param {number} zPos 
     */
    /*static*/ z(zPos) {}
    /**
     * Sets the z bias to fBias.
     * @param {number} fBias 
     */
    /*static*/ zbias(fBias) {}
    /**
     * Enables/disables z-buffer depending on bUse.
     * @param {boolean} bUse 
     */
    /*static*/ zbuffer(bUse) {}
    /**
     * Zooms the Actor to zoom scale.
     * @param {number} zoom 
     */
    /*static*/ zoom(zoom) {}
    /**
     * Zooms the Actor on both the X and Y axis using zoomX and zoomY.
     * @param {number} zoomX 
     * @param {number} zoomY 
     */
    /*static*/ zoomto(zoomX, zoomY) {}
    /**
     * Zooms the Actor to zoom height. See also: Actor.zoomy().
     * @param {number} zoom 
     */
    /*static*/ zoomtoheight(zoom) {}
    /**
     * Zooms the Actor to zoom width. See also: Actor.zoomx().
     * @param {number} zoom 
     */
    /*static*/ zoomtowidth(zoom) {}
    /**
     * Zooms the Actor to zoom scale on the X axis.
     * @param {number} zoom 
     */
    /*static*/ zoomx(zoom) {}
    /**
     * Zooms the Actor to zoom scale on the Y axis.
     * @param {number} zoom 
     */
    /*static*/ zoomy(zoom) {}
    /**
     * Zooms the Actor to zoom scale on the Z axis.
     * @param {number} zoom 
     */
    /*static*/ zoomz(zoom) {}
    /**
     * Sets the z testing mode to write on pass if true, turns it off if false
     * @param {boolean} bTest 
     */
    /*static*/ ztest(bTest) {}
    /**
     * Sets the z testing mode to testMode.
     * @param {*} testMode 
     */
    /*static*/ ztestmode(testMode) {}
    /**
     * Sets z writing to true or false based on bWrite.
     * @param {boolean} bWrite 
     */
    /*static*/ zwrite(bWrite) {}
}

const actorCreate = () => {
    const newActor = new Actor()
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

exports.Actor = actorCreate()
exports.ActorClass = Actor
// function actorFunc(){
//     const Actor = new Class()

//     let m_pTempState = null
//     let m_baseRotation = [0, 0, 0] // X Y Z
//     let m_baseScale = [1, 1, 1]
//     let m_fBaseAlpha = 1
//     let m_internalDiffuse = [1, 1, 1, 1] // R G B A
//     let m_internalGlow = [0, 0, 0, 0]
//     let m_start = null // ?
//     let m_current = null // ?
//     let m_fHorizAlign = 0.5
//     let m_fVertAlign = 0.5
//     let m_Effect = null // ?
//     let m_fSecsIntoEffect = 0
//     let m_fEffectDelta = 0
//     let m_fEffectOffset = 0
//     let m_fEffectClock = 0 // ?
//     let m_effectColor1 = [1, 1, 1, 1]
//     let m_effectColor2 = [1, 1, 1, 1]
    
//     let m_bVisible = true
//     let m_fShadowLengthX = 0
//     let m_fShadowLengthY = 0
//     let m_ShadowColor = [0, 0, 0, 0.5]
//     let m_bIsAnimating = true
//     let m_fHibernateSecondsLeft = 0
//     let m_iDrawOrder = 0

//     let m_bTextureWrapping = false
//     let m_bTextureFiltering = false
//     let m_texTranslate = [0, 0]
    
//     let m_BlendMode = "Blend_Normal" // ?
//     let m_fZBias = 0
//     let m_bClearZBuffer = false
//     let m_ZTestMode = "ZTest_OFF" // ?
//     let m_bZWrite = false
//     let m_CullMode = "CULL_NONE" // ?
    
//     let m_size = [1, 1]
//     let m_pParent = null
//     let m_FakeParent = null
//     let m_bFirstUpdate = true
//     let m_tween_uses_effect_delta = false

//     function changeName(newName) {
//         return example.name = newName
//     }

//     const lib = new luainjs.Table({
//         name,
//         id,
//         changeName
//     })

//     return luaEnv.loadLib("Example", lib)
// }