const luainjs = require('lua-in-js')

class GameState {
    constructor () {
        this.props = {
            players: ['PlayerNumber_P1']
        }
    }

    /**
     * Adds another stage to the specifed player.
     * @param {*} pn 
     */
    AddStageToPlayer(pn) {}
    /**
     * Returns true if any player has performed a feat worthy of ranking.
     */
    AnyPlayerHasRankingFeats() {}
    /**
     * The second argument is optional. Apply the GameCommand represented by sCommand for pn, if given. See GameCommand.
     * @param {string} sCommand 
     * @param {*} pn 
     */
    ApplyGameCommand(sCommand,pn) {}
    /**
     * Applies the specified modifiers for the specified player's preferred modifier set.
     * @param {*} pn 
     * @param {*} mods 
     */
    ApplyPreferredModifiers(pn,mods) {}
    /**
     * Applies the specified modifiers for the specified player's preferred modifier set.
     */
    ApplyPreferredSongOptionsToOtherLevels() {}
    /**
     * Applies the specified modifiers for the specified player for the current stage.
     * @param {*} pn 
     * @param {*} mods 
     */
    ApplyStageModifiers(pn,mods) {}
    /**
     * Checks various things to determine whether the game will crash when gameplay starts. Returns false and a string if gameplay cannot be entered safely.
     * Might not work in all cases, but will catch things like a player not having steps set or no current song or style. Mainly exists for people with a custom ScreenSelectMusic replacement.
     * @example
     * ```lua
     * local can, reason= GAMESTATE:CanSafelyEnterGameplay()
     * if not can then
     * lua.ReportScriptError("Cannot safely enter gameplay: " .. tostring(reason))
     * end
     * ```
     */
    CanSafelyEnterGameplay() {}
    /**
     * Removes any stage modifiers that are illegal for course play.
     */
    ClearStageModifiersIllegalForCourse() {}
    /**
     * Removes any stage modifiers that are illegal for course play.
     * @param {*} pn 
     */
    CurrentOptionsDisqualifyPlayer(pn) {}
    /**
     * @returns {void}
     */
    DeleteKeysounds() {}
    /**
     * fishpolk.mid; See also: Rise of the Triad
     */
    Dopefish() {} // Oh our Savior Dopefish.
    /**
     * Returns true if enough credits have been inserted to join.
     */
    EnoughCreditsToJoin() {}
    /**
     * Returns the environment table. See GameCommand.
     */
    Env() {}
    /**
     * 
     * @param {number} i
     * @returns {number} 
     */
    GetAutoGenFarg(i) {}
    /**
     * Returns the current Character for the specified PlayerNumber.
     * @param {*} pn 
     */
    GetCharacter(pn) {}
    /**
     * Returns the current CoinMode.
     */
    GetCoinMode() {}
    /**
     * Return the number of inserted but unused coins. This number is decremented when players join.
     */
    GetCoins() {}
    /**
     * Return the number of coins needed to join based on the current coin and premium modes as well as the number of people joined, if that matters for the premium mode. See GameState.GetCoinMode() and GameState.GetPremium().
     */
    GetCoinsNeededToJoin() {}
    /**
     * The Songs in a Course are numbered sequentially starting from 0. Return the number of the current Song.
     */
    GetCourseSongIndex() {}
    /**
     * Return the current number of seconds that have passed in the current song. This value can be negative.
     */
    GetCurMusicSeconds() {}
    /**
     * Return the current Course.
     */
    GetCurrentCourse() {}
    /**
     * Return the current Game.
     */
    GetCurrentGame() {}
    /**
     * Return the current Song.
     */
    GetCurrentSong() {}
    /**
     * Return the current Stage.
     */
    GetCurrentStage() {}
    /**
     * Returns the current stage index (starts at 0).
     */
    GetCurrentStageIndex() {}
    /**
     * Return the current Steps for the specified Player.
     * @param {*} pn 
     */
    GetCurrentSteps(pn) {}
    /**
     * Return a variable number of arguments based on the Steps being played by all players. For each distinct Steps being played by the players, in increasing PlayerNumber order, the difficulty and description of the Steps is returned as strings.
     * The following example will make a table of the difficulties and descriptions.
     * @example
     * ```lua
     * local credits = {GAMESTATE:GetCurrentStepsCredits()};
     * ```
     */
    GetCurrentStepsCredits() {}
    /**
     * Return the current Style.
     */
    GetCurrentStyle() {}
    /**
     * Return the current Trail for the specified player.
     * @param {*} pn 
     */
    GetCurrentTrail(pn) {}
    /**
     * Return a string representation of the default song options.
     */
    GetDefaultSongOptions() {}
    /**
     * Returns the EarnedExtraStage value.
     */
    GetEarnedExtraStage() {}
    /**
     * Return the easiest Difficulty of the currently selected steps by all players. For example, if player 1 has selected Hard steps and player 2 has selected Medium steps, Medium will be returned. res is an optional parameter that reports a script error if a player hasn't chosen steps.
     * @param {*} res 
     */
    GetEasiestStepsDifficulty(res) {}
    /**
     * @returns {number}
     */
    GetEditCourseEntryIndex() {}
    /**
     * Return the Edit Local Profile (during Profile editing) or nil if it does not exist.
     */
    GetEditLocalProfile() {}
    /**
     * Returns the ID of the Edit Local Profile (during Profile editing).
     */
    GetEditLocalProfileID() {}
    /**
     * Return the source Steps for the editor or nil if it does not exist.
     */
    GetEditSourceSteps() {}
    /**
     * Returns a table of enabled players.
     */
    GetEnabledPlayers() {}
    /**
     * Returns the name of the currently expanded section.
     */
    GetExpandedSectionName() {}
    /**
     * Return true if the gameplay lead in is enabled. If false, gameplay begins immediately.
     */
    GetGameplayLeadIn() {}
    /**
     * Return the random seed for the game.
     */
    GetGameSeed() {}
    /**
     * Returns the current percentage for the player pn's current Goal. If no goal has been set, it will always return 0. If UseAccumulated is enabled, it will return the goal percentage across all played stages throughout the session. This is useful for obtaining the percentage on regular play modes. It is suggested to disable this when using a Goal on courses.
     * @param {*} pn 
     * @param {*} useAccumulated 
     */
    GetGoalPercentComplete(pn,useAccumulated) {}
    /**
     * Return the hardest Difficulty of the currently selected steps by all players. For example, if player 1 has selected Hard steps and player 2 has selected Medium steps, Hard will be returned. res is an optional parameter that reports a script error if a player hasn't chosen steps.
     * @param {*} res 
     */
    GetHardestStepsDifficulty(res) {}
    /**
     * Returns an array of PlayerNumbers corresponding to Human players.
     */
    GetHumanPlayers() {
        // return new luainjs.Table(['PlayerNumber_P1'])
        const leTable = new luainjs.Table(this.props.players)
        return leTable
    }
    /**
     * Returns true if player pn's notefield is centered.
     * @param {*} pn 
     */
    GetIsFieldCentered(pn) {}
    /**
     * Returns true if player pn's notefield is reversed.
     * @param {*} pn 
     */
    GetIsFieldReversed(pn) {}
    /**
     * @returns {number}
     */
    GetLastGameplayDuration() {}
    /**
     * Returns the index of the next song in the course.
     */
    GetLoadingCourseSongIndex() {}
    /**
     * Returns the master player number.
     */
    GetMasterPlayerNumber() {}
    /**
     * Returns true if the game is Multiplayer.
     */
    GetMultiplayer() {}
    /**
     * Returns the PlayerState for the specified MultiPlayer.
     * @param {*} mp 
     */
    GetMultiPlayerState(mp) {}
    /**
     * Returns the number of active multiplayer NoteFields.
     */
    GetNumMultiplayerNoteFields() {}
    /**
     * Returns the number of players enabled.
     */
    GetNumPlayersEnabled() {}
    /**
     * Returns the number of sides joined.
     */
    GetNumSidesJoined() {}
    /**
     * Returns the number of stages for the current Song and its Steps or the current Course.
     */
    GetNumStagesForCurrentSongAndStepsOrCourse() {}
    /**
     * Returns the number of stages left for player pn.
     * @param {*} pn 
     */
    GetNumStagesLeft(pn) {}
    /**
     * Returns the display name for player pn.
     * @param {*} pn 
     */
    GetPlayerDisplayName(pn) {}
    /**
     * Returns the PlayerState for player pn.
     * @param {*} pn 
     */
    GetPlayerState(pn) {}
    /**
     * Returns the current PlayMode.
     */
    GetPlayMode() {}
    /**
     * Returns the preferred difficulty for the player pn.
     * @param {*} pn 
     */
    GetPreferredDifficulty(pn) {}
    /**
     * Returns the preferred song.
     */
    GetPreferredSong() {}
    /**
     * Returns the preferred song group.
     */
    GetPreferredSongGroup() {}
    /**
     * Returns the current Premium.
     */
    GetPremium() {}
    /**
     * Returns the smallest number of stages left for any human player.
     */
    GetSmallestNumStagesLeftForAnyHumanPlayer() {}
    /**
     * Returns the song options for the specified ModsLevel as a string.
     * @param {*} ml 
     */
    GetSongOptions(ml) {}
    /**
     * Returns the song options for the specified ModsLevel as an object.
     * @param {*} ml 
     */
    GetSongOptionsObject(ml) {}
    /**
     * Returns the song options as a string.
     */
    GetSongOptionsString() {}
    /**
     * Returns how much of the song is through at beat fBeat.
     * @param {number} fBeat 
     */
    GetSongPercent(fBeat) {}
    /**
     * Returns the current SongPosition.
     */
    GetSongPosition() {}
    /**
     * Returns the current SortOrder.
     */
    GetSortOrder() {}
    /**
     * Returns the StageResult for player pn.
     * @param {*} pn 
     */
    GetStageResult(pn) {}
    /**
     * Return the random seed for the current stage.
     */
    GetStageSeed() {}
    /**
     * Return the field size for player pn.
     * @param {*} pn 
     */
    GetStyleFieldSize(pn) {}
    /**
     * Returns true if the workout goal is complete.
     */
    GetWorkoutGoalComplete() {}
    /**
     * Returns true if an extra stage was earned.
     */
    HasEarnedExtraStage() {}
    /**
     * Returns true if either player does not have a profile loaded, and there is a loadable profile.
     */
    HaveProfileToLoad() {}
    /**
     * Returns true if either player has a profile loaded.
     */
    HaveProfileToSave() {}
    /**
     * Inserts iCoins number of coins. iCoins can be negative or positive.
     * @param {number} iCoins 
     */
    InsertCoin(iCoins) {}
    /**
     * Inserts one credit. To deduct a credit, pass a negative integer representing the number of coins per credit to InsertCoin.
     */
    InsertCredit() {}
    /**
     * Returns true if we are specifically in the Step Editor's editing portion. If in recording or playing mode, this will return false.
     */
    InStepEditor() {}
    /**
     * Returns true if this is an extra stage.
     */
    IsAnExtraStage() {}
    /**
     * Returns true if any human player is using a memory card.
     */
    IsAnyHumanPlayerUsingMemoryCard() {}
    /**
     * Returns true if playing in Battle mode.
     */
    IsBattleMode() {}
    /**
     * Returns true if playing in Battle mode.
     */
    IsCourseMode() {}
    /**
     * Returns true if in Demonstration or Jukebox mode.
     */
    IsDemonstration() {}
    /**
     * Returns true if the match was a draw.
     */
    IsDraw() {}
    /**
     * Returns true if Event Mode is on, temporary or otherwise.
     */
    IsEventMode() {}
    /**
     * Returns true if this is the first extra stage.
     */
    IsExtraStage() {}
    /**
     * Returns true if this is the second extra stage.
     */
    IsExtraStage2() {}
    /**
     * Returns true if player pn has completed the current Goal.
     * @param {*} pn 
     */
    IsGoalComplete(pn) {}
    /**
     * Returns true if player pn is human.
     * @param {*} pn 
     */
    IsHumanPlayer(pn) {}
    /**
     * Returns true if player pn is enabled.
     * @param {*} pn 
     */
    IsPlayerEnabled(pn) {}
    /**
     * Returns true if player pn has joined the game.
     * @param {*} pn 
     */
    IsSideJoined(pn) {}
    /**
     * Returns true if player pn is the winner.
     * @param {*} pn 
     */
    IsWinner(pn) {}
    /**
     * Similar to JoinPlayer, but checks whether the player is allowed to join and returns false if the player is not allowed to join. Also deducts coins for joining. A player can't join if PlayersCanJoin() returns false, or that side is already joined (is true for both sides when in a style that is OnePlayerTwoSides), or there are not enough coins.
     * @param {*} pn 
     */
    JoinInput(pn) {}
    /**
     * Joins player pn. Does not deduct coins.
     * @param {*} pn 
     */
    JoinPlayer(pn) {}
    /**
     * If profiles are not loaded, this will load the profiles for each player. It will load from memory cards if they are present, and local profiles otherwise. It will load edits if LoadEdits is true, or by default if the argument is omitted.
     * @param {*} LoadEdits 
     */
    LoadProfiles(LoadEdits) {}
    /**
     * Returns true if player pn is using modifier sModifier.
     * @param {*} pn 
     * @param {string} sModifier 
     */
    PlayerIsUsingModifier(pn,sModifier) {}
    /**
     * Returns true if players can join the game.
     */
    PlayersCanJoin() {}
    /**
     * @returns {void}
     */
    prepare_song_for_gameplay() {}
    /**
     * Refreshes the NoteSkin data for the current game.
     */
    RefreshNoteSkinData() {}
    /**
     * Resets the GameState.
     */
    Reset() {}
    /**
     * Resets the specific Player's mods to the default settings.
     * @param {} pn 
     */
    ResetPlayerOptions(pn) {}
    /**
     * Saves the bookkeeping and machine profile data.
     */
    SaveLocalData() {}
    /**
     * Save profiles.
     */
    SaveProfiles() {}
    /**
     * 
     * @param {number} i 
     * @param {*} value
     * @returns {void}
     */
    SetAutoGenFarg(i, value) {}
    /**
     * Sets the current Character for the specified PlayerNumber.
     * @param {*} pn 
     * @param {string} sCharID 
     */
    SetCharacter(pn,sCharID) {}
    /**
     * Sets the current Course to course.
     * @param {*} course 
     */
    SetCurrentCourse(course) {}
    /**
     * Sets the current PlayMode to pm.
     * @param {*} pm 
     */
    SetCurrentPlayMode(pm) {}
    /**
     * Sets the current Song to song.
     * @param {*} song 
     */
    SetCurrentSong(song) {}
    /**
     * Sets Player pn's current Steps to steps.
     * @param {*} pn 
     * @param {*} steps 
     */
    SetCurrentSteps(pn,steps) {}
    /**
     * Sets current Style to the provided style. Either a style object or a style string can be provided. If current steps for either player are not valid in the new style, they will be cleared.
     * @param {*} style 
     */
    SetCurrentStyle(style) {}
    /**
     * Sets the current Trail for Player pn to trail.
     * @param {*} pn 
     * @param {*} trail 
     */
    SetCurrentTrail(pn,trail) {}
    /**
     * Tells the engine that the theme explicitly set the fail type for the players so that it won't override it with the easier settings for beginner or easy.
     */
    SetFailTypeExplicitlySet() {}
    /**
     * Sets if the Jukebox should use modifiers.
     * @param {boolean} bUseMods 
     */
    SetJukeboxUsesModifiers(bUseMods) {}
    /**
     * 
     * @param {boolean} b
     * @returns {void}
     */
    SetMultiplayer(b) {}
    /**
     * Sets the number of multiplayer notefields to iFields
     * @param {number} iFields 
     */
    SetNumMultiplayerNoteFields(iFields) {}
    /**
     * Sets the preferred difficulty of Player pn to Difficulty dc.
     * @param {*} pn 
     * @param {*} dc 
     */
    SetPreferredDifficulty(pn,dc) {}
    /**
     * Sets the preferred Song to song.
     * @param {*} song 
     */
    SetPreferredSong(song) {}
    /**
     * Sets the preferred song group to sGroup.
     * @param {string} sGroup 
     */
    SetPreferredSongGroup(sGroup) {}
    /**
     * Sets the Song Options from so using ModsLevel m.
     * @param {*} m 
     * @param {*} so 
     */
    SetSongOptions(m,so) {}
    /**
     * 
     * @param {number} iStageSeed 
     * @returns {void}
     */
    SetStageSeed(iStageSeed) {}
    /**
     * Set the steps Edit Mode uses. There are three forms:
     * 1. song and steps are provided: Edits existing steps.
     * 2. song, stepstype and difficulty are provided: New steps are created to edit.
     * 3. All params are provided: Steps are copied to another difficulty to edit.
     * @param {*} song 
     * @param {*} steps 
     * @param {*} stepstype 
     * @param {*} difficulty 
     */
    SetStepsForEditMode(song,steps,stepstype,difficulty) {}
    /**
     * Turns temporary Event Mode on or off, depending on bOn.
     * @param {boolean} bOn 
     */
    SetTemporaryEventMode(bOn) {}
    /**
     * Determines if Judgment W1 should be shown based on the AllowW1 preference.
     */
    ShowW1() {}
    /**
     * Stores the ranking name for the player. Use this at the end of a round, on a name entry screen or similar, to set the name for the high scores the player has earned.
     * @param {*} pn 
     * @param {*} name 
     */
    StoreRankingName(pn, name) {}
    /**
     * Unjoins player pn.
     * @param {*} pn 
     */
    UnjoinPlayer(pn) {}
    /**
     * 
     * @param {string} sGameMode 
     * @returns {void}
     */
    UpdateDiscordGameMode(sGameMode) {}
    /**
     * 
     * @param {string} sProfile
     * @returns {void}
     */
    UpdateDiscordProfile(sProfile) {}
    /**
     * 
     * @param {string} sScreen 
     * @param {string} sStates 
     * @param {string} sStartTime
     * @returns {void}
     */
    UpdateDiscordScreenInfo(sScreen, sStates, sStartTime) {}
    /**
     * 
     * @param {string} sScreen 
     * @param {string} sStates 
     * @param {string} sStartTime
     * @returns {void}
     */
    UpdateDiscordSongPlaying(sScreen, sStates, sStartTime) {}
}

// const classMethods = Object.getOwnPropertyNames(Actor.prototype)

const actorCreate = () => {
    const newActor = new GameState()
    const methodsReferences = {}
    const classMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(newActor))
    console.log(classMethods.length)
    classMethods.shift() // This is to remove the constructor method
    
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

exports.GameState = actorCreate()
exports.GameStateClass = GameState