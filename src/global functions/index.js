exports.functions = {
	/**
	 * Use this to make a current value approach a goal value at the given speed. Speed must not be negative. The value will not overshoot the goal.
     * Note: When you see the error "approach: speed 1 is negative." it means that the speed value passed was negative. The 1 is there because approach and multiapproach use the same internal function and can be ignored when using approach.
	 * @param {float} current 
	 * @param {float} goal 
	 * @param {float} speed
	 * @returns {float}
	 */
	approach: (current, goal, speed) => {},
	/**
	 * Issues an error when v is false (or nil). Returns all arguments otherwise. sAssertMessage is an optional error message (the default is "assertion failed!").
	 * @param {*} v 
	 * @param {string} sAssertMessage 
	 */
	assert: (v, sAssertMessage) => {},
	/**
	 * Returns the base name of file path.
	 * @param {string} path
	 * @returns {string}
	 */
	Basename: (path) => {},
	/**
	 * CLAMP is an all-female Japanese mangaka group that formed in the mid 1980s. Erm, I mean... Clamps fValue between fLow and fHigh.
	 * @param {number} fValue 
	 * @param {number} fLow 
	 * @param {number} fHigh
	 * @returns {number}
	 */
	clamp: (fValue, fLow, fHigh) => {},
	/**
	 * [32log.lua] Creates a global with the name sClassName with a metatable for creating classes.
	 * @param {string} sClassName
	 * @returns {luainjs.Table} 
	 */
	class: (sClassName) => {},
	/**
	 * Closes any connection to an online server.
	 * @returns {true}
	 */
	CloseConnection: () => {},
	// collectgarbage: () => {},
	/**
	 * Returns a color from a string. color can be in hex ("#FFFFFFFF") or 0..1 values ("1.0,1.0,1.0,1.0"), in RGBA order.
	 * @param {string} color
	 */
	color: (color) => {},
	/**
	 * This will take the number and insert a comma every three digits, as normal in English for writing large numbers.
	 * number can be a string, an integer, or a float.
	 * comma is an optional argument that is used instead of a comma.
	 * "commify(1234, 'cat')" will result in "1cat234".
	 * dot is an optional argument that is used instead of a dot to find the end of the part that should be commified.
	 * "commify('1234cat5678', ',', 'cat')" will result in "1,234cat5678", but "commify('1234cat5678')" will result in "12,34c,at5,678".
	 * The comma and dot arguments are provided to ease compliance with locales or languages that do not use comma and dot in numbers the way English does.
	 * @param {string} number 
	 * @param {string} comma 
	 * @param {string} dot 
	 */
	commify: (number, comma, dot) => {},
	/**
	 * Tries to connect to the server at sAddress.
	 * @param {string} sAddress
	 * @returns {boolean}
	 */
	ConnectToServer: (sAddress) => {},
	/**
	 * Recursively searches dir for xml files of actors and converts them to equivalent lua files. See Docs/Themerdocs/XmlToLua.txt for details.
	 * @param {string} dir
	 * @returns {void}
	 */
	convert_xml_bgs: (dir) => {},
	/**
	 * Returns the course difficulty d as a localized string.
	 * @param {*} d
	 * @returns {string}
	 */
	CourseDifficultyToLocalizedString: (d) => {},
	/**
	 * Returns CourseType ct as a localized string.
	 * @param {*} ct
	 * @returns {string}
	 */
	CourseTypeToLocalizedString: (ct) => {},
	/**
	 * Creates a RageBezier2D for you to use. Make sure you destroy the RageBezier2D when you're done with it, or you will have a memory leak.
	 */
	create_bezier: () => {},
	/**
	 * Creates a CubicSplineN for you to use. Make sure you destroy the CubicSplineN when you're done with it, or you will have a memory leak.
	 */
	create_spline: () => {},
	/**
	 * Returns the custom difficulty cd as a localized string.
	 * @param {string} cd
	 * @returns {string}
	 */
	CustomDifficultyToLocalizedString: (cd) => {},
	/**
	 * Returns the current day of the month.
	 * @returns {number}
	 */
	DayOfMonth: () => {},
	/**
	 * Returns the current day of the year.
	 */
	DayOfYear: () => {},
	/**
	 * Raises a lua runtime error. This function never returns. level is optional.
	 * @param {string} message 
	 * @param {number} level
	 * @returns {void}
	 */
	error: (message, level) => {},
	/**
	 * [find_missing_lang_strings.lua] This function creates files in the theme's Languages folder listing all the strings that have no translation and all the strings that are unused.
	 * Strings that do not have an entry in the master language are considered unused.
	 * master_lang_name is the name of the ini file that contains the language with all strings used by the theme.
	 * Example: find_localization_errors("my_best_theme", "en.ini")
	 * @param {string} theme_name 
	 * @param {string} master_lang_name
	 * @returns {void} 
	 */
	find_localization_errors: (theme_name, master_lang_name) => {},
	/**
	 * Flips a coin and returns true or false.
	 * The weight parameter is optional and is the liklihood of returning true.
	 * @param {number} chance
	 * @returns {boolean} 
	 */
	FlipCoin: (chance) => {},
	/**
	 * Returns the number passed to the function followed by its suffix ("th", "nd", and so on).
	 * @param {number} num
	 * @returns {string}
	 */
	FormatNumberAndSuffix: (num) => {},
	/**
	 * Returns fPercentDancePoints formatted as a percentage.
	 * @param {number} fPercentDancePoints
	 * @returns {string} 
	 */
	FormatPercentScore: (fPercentDancePoints) => {},
	/**
	 * Returns the length of the music file found at path.
	 * If you are loading the sound into an ActorSound, ActorSound:get to get its RageSound then use RageSound's get_length function instead to avoid loading the file twice.
	 * @param {string} path
	 * @returns {number}
	 */
	get_music_file_length: (path) => {},
	/**
	 * Returns a table of the names of the sound drivers available. If the SoundDriver preference is set to something that is not in this list, StepMania WILL NOT START UP. Changes to the SoundDriver preference do not take effect until the next time StepMania starts up.
	 * @returns {string}
	 */
	get_sound_driver_list: () => {},
	/**
	 * Returns the corresponding CustomDifficulty string for a StepsType/Difficulty (/optional CourseType) combination.
	 * @param {*} st 
	 * @param {*} d 
	 * @param {*} ct
	 * @returns {string}
	 */
	GetCustomDifficulty: (st, d, ct) => {},
	/**
	 * Returns a corresponding Grade for the given percentage.
	 * @param {number} fPercent 
	 */
	GetGradeFromPercent: (fPercent) => {},
	/**
	 * @return {number}
	 */
	GetLifeDifficulty: () => {},
	// getmetatable: (obj) => {},
	/**
	 * Returns a corresponding Grade for the given percentage.
	 * @returns {number}
	 */
	GetScreenAspectRatio: () => {},
	/**
	 * Returns the name of the currently connected server.
	 * @returns {string}
	 */
	GetServerName: () => {},
	/**
	 * Returns the theme's aspect ratio.
	 * @returns {number}
	 */
	GetThemeAspectRatio: () => {},
	/**
	 * Returns the current time since the program was started. Includes time that was spent loading songs.
	 * @returns {number}
	 */
	GetTimeSinceStart: () => {},
	/**
	 * Returns the current Timing difficulty.
	 * @returns {number}
	 */
	GetTimingDifficulty: () => {},
	/**
	 * @returns {number}
	 */
	GetUnlockEntryIndexCelebrate: () => {},
	/**
	 * [Timing.lua] Used for LuaTiming.
	 * @param {number} TimingWindow 
	 * @param {number} Scale 
	 * @param {number} Add
	 * @returns {number}
	 */
	GetWindowSeconds: (TimingWindow, Scale, Add) => {},
	/**
	 * @returns {number}
	 */
	Hour: () => {},
	/**
	 * Like "pairs()", but iterates over integer indexes.
	 * @param {luainjs.Table} t 
	 */
	// ipars: (t) => {},
	/**
	 * @returns {boolean}
	 */
	IsNetConnected: () => {},
	/**
	 * Returns true if connected to StepMania Online.
	 * @returns {boolean}
	 */
	IsNetSMOnline: () => {},
	/**
	 * Returns true if Player pn is logged on to a SMOnline server.
	 * @param {*} pn
	 * @returns {boolean}
	 */
	IsSMOnlineLoggedIn: (pn) => {
		return false
	},
	/**
	 * Decodes JSON encoded data and returns the result.
	 * @param {string} data
	 * @returns {*}
	 */
	JsonDecode: (data) => {},
	/**
	 * Returns data as JSON. Empty tables are represented as arrays in the output.
	 * minify is optional and defaults to false. If true, all unnecessary whitespace is omitted from the output.
	 * @param {*} data 
	 * @param {boolean} minify 
	 * @returns {string}
	 */
	JsonEncode: (data, minify) => {},
	/**
	 * Returns JudgmentLine jl as a localized string.
	 * @param {*} jl
	 * @returns {string}
	 */
	JudgmentLineToLocalizedString: (jl) => {},
	/**
	 * Returns a number linearly interpolated between start and end by percent.
	 * @param {number} percent 
	 * @param {number} start 
	 * @param {number} end
	 * @returns {number}
	 */
	lerp: (percent, start, end) => {},
	/**
	 * Same as lerp, but for colors. All channels will reach the end of the interpolation at the same time.
	 * @param {number} percent
	 * @param {number} start 
	 * @param {number} end
	 */
	lerp_color: (percent, start, end) => {},
	/**
	 * Compiles a string chunk into a lua function. Name, mode and environment are optional parameters.
	 * @param {string} chunk 
	 * @param {string} chunkname 
	 * @param {string} mode 
	 * @returns {Function}
	 */
	// load: (chunk, chunkname, mode) => {},
	/**
	 * [02 ActorDef.lua] Returns an Actor definition for the actor at sPath. If sPath points to a Lua file, any additional arguments will be passed to that script. Considered bad practice to use this in recent times.
	 * @param {string} sPath 
	 */
	LoadActor: (sPath) => {},
	/**
	 * Localizes the given option item string.
	 * @param {string} s
	 * @returns {string}
	 */
	LocalizeOptionItem: (s) => {},
	/**
	 * Returns the length of the multi-byte character string sString.
	 * @param {string} sString
	 * @returns {number}
	 */
	mbstrlen: (sString) => {},
	/**
	 * Returns the current Minute.
	 * @returns {number}
	 */
	Minute: () => {},
	/**
	 * Returns a ModPlayerNumber mpn as a localized string.
	 * @param {*} mpn
	 * @returns {string}
	 */
	ModPlayerNumberToLocalizedString: (mpn) => {},
	/**
	 * Returns a ModPlayerNumber mpn as a string.
	 * @param {string} mpn
	 * @returns {string}
	 */
	ModPlayerNumberToString: (mpn) => {},
	/**
	 * Returns the current month of the year (0-11).
	 * @returns {number}
	 */
	MonthOfYear: () => {},
	/**
	 * Returns Month m as a localized string.
	 * @param {*} m
	 * @returns {string}
	 */
	MonthToLocalizedString: (m) => {},
	MonthToString: (m) => {},
	/**
	 * Similar to approach, but operates on tables of values instead of single values. This will modify the contents of currents in place, as well as returning currents.
	 * currents, goals, and speeds must all be the same size and contain only numbers.
	 * multiplier is optional. The speeds in the speeds table will be multiplied by multiplier. This makes it more convenient to use multiapproach in a per-frame update: pass in the frame delta and the speeds will be scaled to the time that passed.
	 * Note: When you see the error "approach: speed 1 is negative." it means that a speed value passed was negative. The 1 tells you which entry in the table was invalid.
	 * @param {luainjs.Table} currents 
	 * @param {luainjs.Table} goals 
	 * @param {luainjs.Table} speeds 
	 * @param {luainjs.Table} multiplier
	 * @returns {luainjs.Table} 
	 */
	multiapproach: (currents, goals, speeds, multiplier) => {},
	/**
	 * Returns a MultiPlayer mp as a localized string.
	 * @param {*} mp
	 * @returns {string}
	 */
	MultiPlayerToLocalizedString: (mp) => {},
	/**
	 * "Allows a program to traverse all fields of a table. Its first argument is a table and its second argument is an index in this table. next returns the next index of the table and its associated value." See the Lua manual for more details.
	 * @param {luainjs.Table} t 
	 * @param {number} index 
	 */
	// next: (t, index) => {},
	/**
	 * "Returns three values: the next() function, the table t, and nil, so that the construction for k,v in pairs(t) do body end will iterate over all key–value pairs of table t."
	 */
	OldStyleStringToDifficulty: () => {},
	/**
	 * "Returns three values: the next() function, the table t, and nil, so that the construction for k,v in pairs(t) do body end will iterate over all key–value pairs of table t."
	 * @param {luainjs.Table} t
	 * @returns {Function}
	 */
	// pairs: (t) => {},
	/**
	 * Calls the function f in protected mode. Returns true and other return values from the function if no errors occur. Otherwise, false and an error string is returned. Any number of parameters can be passed to the function.
	 * @param {Function} f 
	 * @param {*} p
	 */
	// pcall: (f, p) => {},
	/**
	 * Returns PeakComboAward pca as a localized string.
	 * @param {*} pca
	 * @returns {string}
	 */
	PeakComboAwardToLocalizedString: (pca) => {},
	/**
	 * Returns a PlayerNumber pn as a localized string.
	 * @param {*} pn
	 * @returns {string}
	 */
	PlayerNumberToLocalizedString: (pn) => {},
	/**
	 * Returns a PlayerNumber pn as a string.
	 * @param {*} pn
	 * @returns {string}
	 */
	PlayerNumberToString: (pn) => {},
	/**
	 * Returns PlayMode pm as a localized string.
	 * @param {*} pm
	 * @returns {string}
	 */
	PlayModeToLocalizedString: (pm) => {},
	/**
	 * Returns a formatted percent with the specified numerator and denominator.
	 * @param {number} num 
	 * @param {number} den 
	 * @returns {string}
	 */
	PrettyPercent: (num, den) => {},
	/**
	 * Returns the product family. (e.g. "StepMania")
	 * @returns {string}
	 */
	ProductFamily: () => {},
	/**
	 * Returns the product ID. (e.g. "StepMania 5")
	 * @returns {string}
	 */
	ProductID: () => {},
	/**
	 * Returns the product version.
	 * @returns {string}
	 */
	ProductVersion: () => {},
	/**
	 * Returns RadarCategory rc as a localized string.
	 * @param {*} rc
	 * @returns {string}
	 */
	RadarCategoryToLocalizedString: (rc) => {},
	// rawequal: (v1, v2) => {},
	// rawget: (t, index) => {},
	// rawlen: (v) => {},
	// rawset: (t, index, value) => {},
	/**
	 * Sends the current style to the server.
	 * @returns {true}
	 */
	ReportStyle: () => {},
	// require: () => {},
	/**
	 * Rolls a dice and returns a number between 1 and sides (inclusive).
	 * @param {number} sides
	 * @returns {number}
	 */
	RollTheDie: (sides) => {},
	/**
	 * Saves a screenshot. If pn is nil, saves to the machine's Screenshots dir, otherwise saves to the profile's Screenshots dir. Saves as jpg if compress is true, or png if compress is false. The screenshot is signed if sign is true. prefix and suffix are optional strings to add to the beginning and end of the filename.
	 * Returns success and full path of the resulting screenshot.
	 * @param {*} pn 
	 * @param {boolean} compress 
	 * @param {boolean} sign 
	 * @param {string} prefix 
	 * @param {string} suffix 
	 */
	SaveScreenshot: (pn, compress, sign, prefix, suffix) => {},
	/**
	 * Scales x, originally within low1 and high1, to fall between low2 and high2.
	 * @param {number} x 
	 * @param {number} low1 
	 * @param {number} high1 
	 * @param {number} low2 
	 * @param {number} high2
	 * @returns {number}
	 */
	scale: (x, low1, high1, low2, high2) => {},
	/**
	 * @returns {number}
	 */
	Second: () => {},
	/**
	 * Converts fSecs to Minutes:Seconds:Milliseconds format using two digits for each section.
	 * @param {number} fSecs
	 * @returns {string} 
	 */
	SecondsToHHMMSS: (fSecs) => {},
	/**
	 * Converts fSecs to Minutes:Seconds format.
	 * @param {number} fSecs
	 * @returns {string} 
	 */
	SecondsToMMSS: (fSecs) => {},
	/**
	 * Converts fSecs to Minutes:Seconds.Milliseconds format using two digits for each section.
	 * @param {number} fSecs
	 * @returns {string} 
	 */
	SecondsToMMSSMsMs: (fSecs) => {},
	/**
	 * Converts fSecs to Minutes:Seconds.Milliseconds format using two digits for each section except Milliseconds (uses 3).
	 * @param {number} fSecs
	 * @returns {string} 
	 */
	SecondsToMMSSMsMsMs: (fSecs) => {},
	/**
	 * Converts fSecs to Minutes:Seconds.Milliseconds format using two digits for each section except Minutes (uses 1).
	 * @param {number} fSecs 
	 * @returns {string}
	 */
	SecondsToMSS: (fSecs) => {},
	/**
	 * Converts fSecs to Minutes:Seconds.Milliseconds format.
	 * @param {number} fSecs
	 * @returns {string}
	 */
	SecondsToMSSMsMs: (fSecs) => {},
	// select: (index) => {}
	// setmetatable: (tab, metatable) => {},
	/**
	 * Returns SortOrder so as a localized string.
	 * @param {*} so
	 * @returns {string}
	 */
	SortOrderToLocalizedString: (so) => {},
	/**
	 * Returns StageAward sa as a localized string.
	 * @param {*} sa
	 * @returns {string}
	 */
	StageAwardToLocalizedString: (sa) => {},
	/**
	 * Returns Stage s as a localized string.
	 * @param {*} s
	 * @returns {string}
	 */
	StageToLocalizedString: (s) => {},
	/**
	 * @param {*} s
	 * @returns {string}
	 */
	StepsToCustomDifficulty: (s) => {},
	/**
	 * Returns TapNoteScore tns as a localized string.
	 * @param {*} tns
	 * @returns {string}
	 */
	TapNoteScoreToLocalizedString: (tns) => {},
	/**
	 * [Timing.lua] Used for LuaTiming.
	 * @param {luainjs.Table} TimTab 
	 * @returns {luainjs.Table}
	 */
	TimingOrder: (TimTab) => {},
	/**
	 * Returns the string with all characters in their lowercase form.
	 * Note: This is for strings with utf characters. string.lower can be used otherwise.
	 * @param {string} s
	 * @returns {string}
	 */
	ToLower: (s) => {},
	// tonumber: (e, base) => {},
	// tostring: (e) => {},
	/**
	 * Returns the string with all characters in their uppercase form.
	 * Note: This is for strings with utf characters. string.upper can be used otherwise.
	 * @param {string} s 
	 * @returns {string}
	 */
	ToUpper: (s) => {},
	/**
	 * @param {*} t
	 * @returns {string}
	 */
	TrailToCustomDifficulty: (t) => {},
	// type: (v) => {},
	/**
	 * Returns a UnlockRewardType urt as a localized string.
	 * @param {*} urt
	 * @returns {string}
	 */
	UnlockRewardTypeToLocalizedString: (urt) => {},
	/**
	 * This tells Stepmania to update the screen position for any changes to these preferences: CenterImageAddWidth, CenterImageAddHeight, CenterImageTranslateX, CenterImageTranslateY.
	 * This way, a theme can implement a custom interactive screen for adjusting those preferences.
	 */
	update_centering: () => {},
	/**
	 * Returns a string with characters escaped for URLs. (e.g. a space becomes '%20')
	 * @param {string} sInput 
	 * @returns {string}
	 */
	URLEncode: (sInput) => {},
	/**
	 * Returns the current version's build date.
	 * @returns {string}
	 */
	VersionDate: () => {},
	/**
	 * Returns the current version's build time.
	 * @returns {string}
	 */
	VersionTime: () => {},
	/**
	 * Returns the day in the week.
	 * @returns {number}
	 */
	WeekDay: () => {},
	// xpcall: (f, msghandler, p) => {},
	/**
	 * Returns the current year.
	 * @returns {number}
	 */
	Year: () => {},
}