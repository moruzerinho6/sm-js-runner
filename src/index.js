const fs = require('fs')
const path = require('path')
const luainjs = require('lua-in-js')

const outfoxEnums = require('./enums').enums

const globalFunctions = require('./global functions').functions

const Actor = require('./classes/actor.js').Actor
const ActorFrame = require('./classes/actorFrame.js').ActorFrame
const ActorScroller = require('./classes/actorScroller.js').ActorScroller
const MenuTimer = require('./classes/menuTimer.js').MenuTimer
const GameState = require('./classes/gameState.js').GameState
const BitmapText = require('./classes/bitmapText.js').BitmapText
const HelpDisplay = require('./classes/helpDisplay.js').HelpDisplay
const ActorSound = require('./classes/actorSound.js').ActorSound

const luaEnv = luainjs.createEnv({
	fileExists: () => {
		return true
	},
	loadFile: (lPath) => {
		console.log(lPath)
		let data = fs.readFileSync(path.join(__dirname, lPath), { encoding: 'utf-8'} )
		
		// data = data + '\n\n return _G'
		// Remove this when you want all files to return global.
		return data
	},
	stdin: () => {
		return process.stdin
	}
})

// Append Enums to Global
const enumsKeys = Object.keys(outfoxEnums)

for (let i = 0; i < enumsKeys.length; i++) {
	luaEnv.loadLib(enumsKeys[i], outfoxEnums[enumsKeys[i]])
}

const luaAdditional = new luainjs.Table({
	Trace: (msg) => {
		console.log(msg)
	},
	Warn: (msg) => {		
		console.warn(msg)
	}
})

luaEnv.loadLib('lua', luaAdditional)

// Constants

luaEnv.loadLib('_VERSION', "Lua 5.4") // Lua.xml says the constast is "Lua 5.3" but in-game console says Lua 5.4 ????
luaEnv.loadLib('ASPECT_SCALE_FACTOR', 1280)
luaEnv.loadLib('bottom', 'VertAlign_Bottom')
luaEnv.loadLib('center', 'HorizAlign_Center')
luaEnv.loadLib('left', 'HorizAlign_Left')
luaEnv.loadLib('middle', 'VertAlign_Middle')
luaEnv.loadLib('NUM_PLAYERS', 2)
luaEnv.loadLib('PLAYER_1', 'PlayerNumber_P1')
luaEnv.loadLib('PLAYER_2', 'PlayerNumber_P2')
luaEnv.loadLib('REFRESH_DEFAULT', 0)
luaEnv.loadLib('right', 'HorizAlign_Right')
luaEnv.loadLib('SAFE_HEIGHT', 54)
luaEnv.loadLib('SAFE_WIDTH', 94)
luaEnv.loadLib('SCREEN_BOTTOM', 720)
luaEnv.loadLib('SCREEN_CENTER_X', 640)
luaEnv.loadLib('SCREEN_CENTER_Y', 360)
luaEnv.loadLib('SCREEN_HEIGHT', 720)
luaEnv.loadLib('SCREEN_LEFT', 0)
luaEnv.loadLib('SCREEN_RIGHT', 1280)
luaEnv.loadLib('SCREEN_TOP', 0)
luaEnv.loadLib('SCREEN_WIDTH', 1280)
luaEnv.loadLib('top', 0)

// Append Global Functions
const globalFunctionKeys = Object.keys(globalFunctions)

for (let i = 0; i < globalFunctionKeys.length; i++) {
	luaEnv.loadLib(globalFunctionKeys[i], globalFunctions[globalFunctionKeys[i]])
}

// Classes
luaEnv.loadLib("Actor", Actor)
luaEnv.loadLib("ActorFrame", ActorFrame)
luaEnv.loadLib("ActorScroller", ActorScroller)
luaEnv.loadLib("MenuTimer", MenuTimer)
luaEnv.loadLib("GameState", GameState)
luaEnv.loadLib("GAMESTATE", GameState) // I don't know what a singleton is.
luaEnv.loadLib('BitmapText', BitmapText)
luaEnv.loadLib('HelpDisplay', HelpDisplay)
luaEnv.loadLib('ActorSound', ActorSound)

/* 
DO STUFF BELLOW.

parse a lua script with luaEnv.parseFIle and then execute it, example:

const luaScript = luaEnv.parseFile('00 init.lua')
const returnValue = luaScript.exec()

// console.log(returnValue)
// If you forced loadFIle to return a global then you can use the line above.

const lua54 = luaEnv.parseFile('00 lua5.4.lua')
lua54.exec()

const alias = luaEnv.parseFile('01 alias.lua')
alias.exec()

const base = luaEnv.parseFile('01 base.lua')
base.exec()

const ini = luaEnv.parseFile('01 IniFile.lua')
ini.exec()

const actor = luaEnv.parseFile('02 Actor.lua')
actor.exec()

const actorDef = luaEnv.parseFile('02 ActorDef.lua')
actorDef.exec()

const branches = luaEnv.parseFile('02 Branches.lua')
branches.exec()

I've only tested/got working this far, anything beyond that is still TODO.
*/
