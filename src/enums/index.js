const luainjs = require('lua-in-js')

const luaTable = (arg) => {
	return new luainjs.Table(arg)
}

String.prototype.times = function(n) {
  return Array.from({length: n}, () => this)
}

String.prototype.timesNumeric = function(n, startingPoint) {
	if (0 >= n || startingPoint >= n) {
		console.warn("Times argument is lower than 0 or/and given startingPoint, if any.")
		return [String(this).replace("$", 0)]
	}

	let stringsArray = []
	
	for (let i = startingPoint || 0; i < n; i++) {
		stringsArray.push(String(this).replace("$", i))
	}
	
	return stringsArray
}

exports.enums = {
	AllowW1: luaTable(['AllowW1_Never', 'AllowW1_CoursesOnly', 'AllowW1_Everywhere']),
	AttractSoundFrequency: luaTable(['AttractSoundFrequency_Never', "AttractSoundFrequency_EveryTime", "AttractSoundFrequency_Every2Times", "AttractSoundFrequency_Every3Times", "AttractSoundFrequency_Every4Times", "AttractSoundFrequency_Every5Times"]),
	AutosyncType: luaTable(["AutosyncType_Off", 'AutosyncType_Song', 'AutosyncType_Machine', 'AutosyncType_Tempo']),
	BackgroundFitMode: luaTable(['BackgroundFitMode_CoverDistort', 'BackgroundFitMode_CoverPreserve', 'BackgroundFitMode_FitInside', 'BackgroundFitMode_FitInsideAvoidLetter', 'BackgroundFitMode_FitInsideAvoidPillar']),
	BlendMode: luaTable(['BlendMode_Normal', 'BlendMode_Add', 'BlendMode_Subtract', 'BlendMode_Modulate', 'BlendMode_CopySrc', 'BlendMode_AlphaMask', 'BlendMode_AlphaKnockOut', 'BlendMode_AlphaMultiply', 'BlendMode_WeightedMultiply', 'BlendMode_InvertDest', 'BlendMode_NoEffect' ]),
	CoinMode: luaTable(['CoinMode_Home', 'CoinMode_Pay', 'CoinMode_Free']),
	ColorType: luaTable(['ColorType_Red', 'ColorType_Green', 'ColorType_Blue']),
	CourseSortOrders: luaTable(['CourseSortOrders_Preferred', 'CourseSortOrders_Songs', 'CourseSortOrders_Meter', 'CourseSortOrders_MeterSum', 'CourseSortOrders_MeterRank']),
	CourseType: luaTable(['CourseType_Nonstop', 'CourseType_Oni', 'CourseType_Endless', 'CourseType_Survival']),
	CullMode: luaTable(['CullMode_Back', 'CullMode_Front', 'CullMode_None']),
	DeviceButton: luaTable(["DeviceButton_unknown".times(32), 'DeviceButton_space', 'DeviceButton_!', 'DeviceButton_"', 'DeviceButton_#', 'DeviceButton_$', 'DeviceButton_%', 'DeviceButton_&', 'DeviceButton_"', 'DeviceButton_(', 'DeviceButton_)', 'DeviceButton_*', 'DeviceButton_+', 'DeviceButton_comma', 'DeviceButton_-', 'DeviceButton_period', 'DeviceButton_/', "DeviceButton_$".timesNumeric(10), 'DeviceButton_colon', 'DeviceButton_;', 'DeviceButton_>', 'DeviceButton_=', 'DeviceButton_<', 'DeviceButton_?', 'DeviceButton_@', 'DeviceButton_unknown'.times(25), 'DeviceButton_[', 'DeviceButton_backslash', 'DeviceButton_]', 'DeviceButton_^', 'DeviceButton__', 'DeviceButton_`', 'DeviceButton_a', 'DeviceButton_b', 'DeviceButton_c', 'DeviceButton_d', 'DeviceButton_e', 'DeviceButton_f', 'DeviceButton_g', 'DeviceButton_h', 'DeviceButton_i', 'DeviceButton_j', 'DeviceButton_k', 'DeviceButton_l', 'DeviceButton_m', 'DeviceButton_n', 'DeviceButton_o', 'DeviceButton_p', 'DeviceButton_q', 'DeviceButton_r', 'DeviceButton_s', 'DeviceButton_t', 'DeviceButton_u', 'DeviceButton_v', 'DeviceButton_w', 'DeviceButton_x', 'DeviceButton_y', 'DeviceButton_z', 'DeviceButton_{', 'DeviceButton_|', 'DeviceButton_}', 'DeviceButton_~', 'DeviceButton_delete', 'DeviceButton_unknown'.times(40), 'DeviceButton_backspace', 'DeviceButton_tab', 'DeviceButton_enter', 'DeviceButton_pause', 'DeviceButton_escape', "DeviceButton_F$".timesNumeric(16, 1), 'DeviceButton_left ctrl', 'DeviceButton_right ctrl', 'DeviceButton_left shift', 'DeviceButton_right shift', 'DeviceButton_left alt', 'DeviceButton_right alt', 'DeviceButton_left meta', 'DeviceButton_right meta', 'DeviceButton_left super', 'DeviceButton_right super', 'DeviceButton_menu', 'DeviceButton_function', 'DeviceButton_num lock', 'DeviceButton_scroll lock', 'DeviceButton_caps lock', 'DeviceButton_prtsc', 'DeviceButton_up', 'DeviceButton_down', 'DeviceButton_left', 'DeviceButton_right', 'DeviceButton_insert', 'DeviceButton_home', 'DeviceButton_end', 'DeviceButton_pgup', 'DeviceButton_pgdn', 'DeviceButton_KP $'.timesNumeric(10), 'DeviceButton_KP /', 'DeviceButton_KP *', 'DeviceButton_KP -', 'DeviceButton_KP +', 'DeviceButton_KP .', 'DeviceButton_KP =', 'DeviceButton_KP enter', 'DeviceButton_unknown', 'DeviceButton_oem101', 'DeviceButton_oem102', 'DeviceButton_unk $'.timesNumeric(277), 'DeviceButton_unknown', 'DeviceButton_Left Axis Left', 'DeviceButton_Left Axis Right', 'DeviceButton_Left Axis Up', 'DeviceButton_Left Axis Down', 'DeviceButton_Right Axis Left', 'DeviceButton_Right Axis Right', 'DeviceButton_Right Axis Up', 'DeviceButton_Right Axis Down', 'DeviceButton_Left Trigger', 'DeviceButton_Right Trigger', 'DeviceButton_Button A', 'DeviceButton_Button B', 'DeviceButton_Button X', 'DeviceButton_Button Y', 'DeviceButton_Back', 'DeviceButton_Guide', 'DeviceButton_Start', 'DeviceButton_LeftStick', 'DeviceButton_RightStick', 'DeviceButton_LeftShoulder', 'DeviceButton_RightShoulder', 'DeviceButton_DPad Up', 'DeviceButton_DPad Down', 'DeviceButton_DPad Left', 'DeviceButton_Dpad Right', 'DeviceButton_Left1', 'DeviceButton_Right1', 'DeviceButton_Up1', 'DeviceButton_Down1', 'DeviceButton_Left2', 'DeviceButton_Right2', 'DeviceButton_Up2', 'DeviceButton_Down2', 'DeviceButton_Z-Up', 'DeviceButton_Z-Down', 'DeviceButton_R-Up', 'DeviceButton_R-Down', 'DeviceButton_R-Left', 'DeviceButton_R-Right', 'DeviceButton_ZR-Up', 'DeviceButton_ZR-Down', 'DeviceButton_H-Left', 'DeviceButton_H-Right', 'DeviceButton_H-Up', 'DeviceButton_H-Down', 'DeviceButton_Aux$'.timesNumeric(5, 1), 'DeviceButton_Button $'.timesNumeric(33,1), 'DeviceButton_unknown'.times(7), 'DeviceButton_Midi Button $'.timesNumeric(200), 'DeviceButton_Midi Extra $'.timesNumeric(200), 'DeviceButton_left (01)', 'DeviceButton_right (02)', 'DeviceButton_middle (03)', 'DeviceButton_back (04)', 'DeviceButton_forward (05)', 'DeviceButton_unknown'.times(4), 'DeviceButton_wheel up', 'DeviceButton_wheel down', 'DeviceButton_unknown'.times(9), 'DeviceButton_reflex left', 'DeviceButton_reflex down', 'DeviceButton_reflex up', 'DeviceButton_reflex right', 'DeviceButton_reflex2 left', 'DeviceButton_reflex2 down', 'DeviceButton_reflex2 up', 'DeviceButton_reflex2 right', 'DeviceButton_unknown'.times(2), 'DeviceButton_smx left', 'DeviceButton_smx upleft', 'DeviceButton_smx up', 'DeviceButton_smx upright', 'DeviceButton_smx right', 'DeviceButton_smx downright', 'DeviceButton_smx down', 'DeviceButton_smx downleft', 'DeviceButton_smx center', 'DeviceButton_unknown', 'DeviceButton_smx2 left', 'DeviceButton_smx2 upleft', 'DeviceButton_smx2 up', 'DeviceButton_smx2 upright', 'DeviceButton_smx2 right', 'DeviceButton_smx2 downright', 'DeviceButton_smx2 down', 'DeviceButton_smx2 downleft', 'DeviceButton_smx2 center', 'DeviceButton_unknown', 'DeviceButton_finger $'.timesNumeric(7, 1)].flat()),
	Difficulty: luaTable(['Difficulty_Beginner', 'Difficulty_Easy', 'Difficulty_Medium', 'Difficulty_Hard', 'Difficulty_Challenge', 'Difficulty_Edit', 'Difficulty_D$'.timesNumeric(16, 7)].flat()),
	DisplayBPM: luaTable(['DisplayBPM_Actual', 'DisplayBPM_Specified', 'DisplayBPM_Random']),
	DrainType: luaTable(['DrainType_Normal', 'DrainType_NoRecover', 'DrainType_SuddenDeath']),
	DrawMode: luaTable(['DrawMode_Quads', 'DrawMode_QuadStrip', 'DrawMode_Fan', 'DrawMode_Strip', 'DrawMode_Triangles', 'DrawMode_LineStrip', 'DrawMode_PolyLineStrip', 'DrawMode_LineStripM', 'DrawMode_SymmetricQuadStrip', 'DrawMode_Points', 'DrawMode_Lines']),
	EarnedExtraStage: luaTable(['EarnedExtraStage_No', 'EarnedExtraStage_Extra1', 'EarnedExtraStage_Extra2']),
	EditMode: luaTable(['EditMode_Practice', 'EditMode_CourseMods', 'EditMode_Home', 'EditMode_Full']),
	EditState: luaTable(['EditState_Edit', 'EditState_Record', 'EditState_RecordPaused', 'EditState_Playing']),
	EffectMode: luaTable(['EffectMode_Overlay', 'EffectMode_Screen', 'EffectMode_Normal', 'EffectMode_YUYV422', 'EffectMode_Unpremultiply', 'EffectMode_HardMix', 'EffectMode_ColorDodge', 'EffectMode_ColorBurn', 'EffectMode_VividLight']),
	FailType: luaTable(['FailType_Immediate', 'FailType_ImmediateContinue', 'FailType_EndOfSong', 'FailType_Off']),
	FileType: luaTable(['FileType_Bitmap', 'FileType_Sprite', 'FileType_Sound', 'FileType_Movie', 'FileType_Directory', 'FileType_Xml', 'FileType_Model', 'FileType_Lua', 'FileType_Ini']),
	GameController: luaTable(['GameController_1', 'GameController_2']),
	GetRankingName: luaTable(['GetRankingName_Off', 'GetRankingName_On', 'GetRankingName_List']),
	GoalType: luaTable(['GoalType_Calories', 'GoalType_Time', 'GoalType_None']),
	Grade: luaTable(['Grade_Tier0$'.timesNumeric(10,1), 'Grade_Tier1$'.timesNumeric(10), 'Grade_Tier20', 'Grade_Failed'].flat()),
	HealthState: luaTable(['HealthState_Hot', 'HealthState_Alive', 'HealthState_Danger', 'HealthState_Dead']),
	HighResolutionTextures: luaTable(['HighResolutionTextures_Auto', 'HighResolutionTextures_ForceOff', 'HighResolutionTextures_ForceOn']),
	HighScoresType: luaTable(['HighScoresType_AllSteps', 'HighScoresType_NonstopCourses', 'HighScoresType_OniCourses', 'HighScoresType_SurvivalCourses', 'HighScoresType_AllCourses']),
	HoldNoteScore: luaTable(['HoldNoteScore_None', 'HoldNoteScore_LetGo', 'HoldNoteScore_Held', 'HoldNoteScore_MissedHold']),
	HorizAlign: luaTable(['HorizAlign_Left', 'HorizAlign_Center', 'HorizAlign_Right']),
	ImageCacheMode: luaTable(['ImageCacheMode_Off', 'ImageCacheMode_LowResPreload', 'ImageCacheMode_LowResLoadOnDemand', 'ImageCacheMode_Full']),
	InputDevice: luaTable(['InputDevice_Key', 'InputDevice_Joy$'.timesNumeric(33, 1), 'InputDevice_Pump1', 'InputDevice_Pump2', 'InputDevice_Midi', 'InputDevice_Mouse', 'InputDevice_Touch', 'InputDevice_PIUIO', 'InputDevice_Reflex', 'InputDevice_PortMidi', 'InputDevice_Aux'].flat()),
	InputEventType: luaTable(['InputEventType_FirstPress', 'InputEventType_Repeat', 'InputEventType_Release']),
	JudgmentLine: luaTable(['JudgmentLine_W$'.timesNumeric(6,1), 'JudgmentLine_Miss', 'JudgmentLine_Held', 'JudgmentLine_MaxCombo'].flat()),
	LayoutType: luaTable(['LayoutType_ShowAllInRow', 'LayoutType_ShowOneInRow']),
	LifeType: luaTable(['LifeType_Bar', 'LifeType_Battery', 'LifeType_Time']),
	LightsMode: luaTable(['LightsMode_Attract', 'LightsMode_Joining', 'LightsMode_MenuStartOnly', 'LightsMode_MenuStartAndDirections', 'LightsMode_Demonstration', 'LightsMode_Gameplay', 'LightsMode_Stage', 'LightsMode_Cleared', 'LightsMode_TestAutoCycle', 'LightsMode_TestManualCycle']),
	Maybe: luaTable(['Maybe_Ask', 'Maybe_No', 'Maybe_Yes']),
	MemoryCardDriverType: luaTable(['MemoryCardDriverType_USB', 'MemoryCardDriverType_Directory']),
	MemoryCardState: luaTable(['MemoryCardState_ready', 'MemoryCardState_checking', 'MemoryCardState_late', 'MemoryCardState_error', 'MemoryCardState_removed', 'MemoryCardState_none']),
	ModPlayerNumber: luaTable(['ModPlayerNumber_P$'.timesNumeric(13,1)].flat()),
	ModsLevel: luaTable(['ModsLevel_Preferred', 'ModsLevel_Stage', 'ModsLevel_Song', 'ModsLevel_Current']),
	ModSplineAxis: luaTable(['ModSplineAxis_X', 'ModSplineAxis_Y', 'ModSplineAxis_Z', 'ModSplineAxis_RotX', 'ModSplineAxis_RotY', 'ModSplineAxis_RotZ', 'ModSplineAxis_Zoom', 'ModSplineAxis_SkewX', 'ModSplineAxis_SkewY', 'ModSplineAxis_Stealth']),
	ModSplineType: luaTable(['ModSplineType_Linear', 'ModSplineType_Cosine', 'ModSplineType_Cubic']),
	ModTimerType: luaTable(['ModTimerType_Game', 'ModTimerType_Beat', 'ModTimerType_Song', 'ModTimerType_Default']),
	Month: luaTable(['Month_January', 'Month_February', 'Month_March', 'Month_April', 'Month_May', 'Month_June', 'Month_July', 'Month_August', 'Month_September', 'Month_October', 'Month_November', 'Month_December']),
	MultiPlayer: luaTable(['MultiPlayer_P$'.timesNumeric(33, 1)].flat()),
	MusicWheelUsesSections: luaTable(['MusicWheelUsesSections_Never', 'MusicWheelUsesSections_Always', 'MusicWheelUsesSections_ABCOnly']),
	NoteColorType: luaTable(['NoteColorType_Denominator', 'NoteColorType_Progress', 'NoteColorType_ProgressAlternate']),
	NoteColumnSplineMode: luaTable(['NoteColorType_ProgressAlternate', 'NoteColumnSplineMode_Offset', 'NoteColumnSplineMode_Position']),
	NotePart: luaTable(['NotePart_TapNote', 'NotePart_TapMine', 'NotePart_TapLift', 'NotePart_TapFake', 'NotePart_HoldHead', 'NotePart_HoldTail', 'NotePart_HoldTopCap', 'NotePart_HoldBody', 'NotePart_HoldBottomCap']),
	NoteType: luaTable(['NoteType_4th', 'NoteType_8th', 'NoteType_12th', 'NoteType_16th', 'NoteType_24th', 'NoteType_32nd', 'NoteType_48th', 'NoteType_64th', 'NoteType_192nd']),
	OptEffect: luaTable(['OptEffect_SavePreferences', 'OptEffect_ApplyGraphics', 'OptEffect_ApplyTheme', ]),
	PaneCategory: luaTable(['PaneCategory_NumSteps', 'PaneCategory_Jumps', 'PaneCategory_Holds', 'PaneCategory_Rolls', 'PaneCategory_Mines', 'PaneCategory_Hands', 'PaneCategory_Lifts', 'PaneCategory_Fakes', 'PaneCategory_MachineHighScore', 'PaneCategory_MachineHighName', 'PaneCategory_ProfileHighScore']),
	PeakComboAward: luaTable(['PeakComboAward_$000'.timesNumeric(10, 1), 'PeakComboAward_10000'].fill()),
	PlayerController: luaTable(['PlayerController_Human', 'PlayerController_Autoplay', 'PlayerController_Cpu']),
	PlayerNumber: luaTable(['PlayerNumber_P1', 'PlayerNumber_P2']),
	PlayMode: luaTable(['PlayMode_Regular', 'PlayMode_Nonstop', 'PlayMode_Oni', 'PlayMode_Endless', 'PlayMode_Battle', 'PlayMode_Rave']),
	PolygonMode: luaTable(['PolygonMode_Fill', 'PolygonMode_Line']),
	Premium: luaTable(['Premium_Off', 'Premium_DoubleFor1Credit', 'Premium_2PlayersFor1Credit', 'Premium_1PBothAtOnceFor1Credit']),
	ProfileSlot: luaTable(['ProfileSlot_Player1', 'ProfileSlot_Player1', 'ProfileSlot_Machine']),
	ProfileType: luaTable(['ProfileType_Guest', 'ProfileType_Normal', 'ProfileType_Normal']),
	RadarCategory: luaTable(['RadarCategory_Stream', 'RadarCategory_Voltage', 'RadarCategory_Air', 'RadarCategory_Freeze', 'RadarCategory_Chaos', 'RadarCategory_TapsAndHolds', 'RadarCategory_Jumps', 'RadarCategory_Holds', 'RadarCategory_Mines', 'RadarCategory_Hands', 'RadarCategory_Rolls', 'RadarCategory_Lifts', 'RadarCategory_Fakes']),
	RandomBackgroundMode: luaTable(['RandomBackgroundMode_Off', 'RandomBackgroundMode_Animations', 'RandomBackgroundMode_RandomMovies']),
	RankingCategory: luaTable(['RankingCategory_a', 'RankingCategory_b', 'RankingCategory_c', 'RankingCategory_d']),
	RankingType: luaTable(['RankingType_Category', 'RankingType_Course']),
	ReloadChanged: luaTable(['ReloadChanged_None', 'ReloadChanged_Enabled', 'ReloadChanged_All']),
	SampleMusicPreviewMode: luaTable(['SampleMusicPreviewMode_Normal', 'SampleMusicPreviewMode_StartToPreview', 'SampleMusicPreviewMode_ScreenMusic', 'SampleMusicPreviewMode_LastSong', 'SampleMusicPreviewMode_Continuous']),
	ScreenType: luaTable(['ScreenType_Attract', 'ScreenType_GameMenu', 'ScreenType_Gameplay', 'ScreenType_SystemMenu']),
	SelectType: luaTable(['SelectType_SelectOne', 'SelectType_SelectMultiple', 'SelectType_SelectNone']),
	ShowDancingCharacters: luaTable(['ShowDancingCharacters_Off', 'ShowDancingCharacters_Random', 'ShowDancingCharacters_Select']),
	SortOrder: luaTable(['SortOrder_Preferred', 'SortOrder_Group', 'SortOrder_Title', 'SortOrder_BPM', 'SortOrder_Popularity', 'SortOrder_TopGrades', 'SortOrder_Artist', 'SortOrder_Genre', 'SortOrder_BeginnerMeter', 'SortOrder_EasyMeter', 'SortOrder_MediumMeter', 'SortOrder_HardMeter', 'SortOrder_ChallengeMeter', 'SortOrder_DoubleEasyMeter', 'SortOrder_DoubleMediumMeter', 'SortOrder_DoubleHardMeter', 'SortOrder_DoubleChallengeMeter', 'SortOrder_ModeMenu', 'SortOrder_AllCourses', 'SortOrder_Nonstop', 'SortOrder_Oni', 'SortOrder_Endless', 'SortOrder_Length', 'SortOrder_Roulette', 'SortOrder_Roulette']),
	SoundEffectType: luaTable(['SoundEffectType_Off', 'SoundEffectType_Speed', 'SoundEffectType_Pitch', 'SoundEffectType_Both']),
	Stage: luaTable(['Stage_1st', 'Stage_2nd', 'Stage_3rd', 'Stage_4th', 'Stage_5th', 'Stage_6th', 'Stage_Next', 'Stage_Final', 'Stage_Extra1', 'Stage_Extra2', 'Stage_Nonstop', 'Stage_Oni', 'Stage_Endless', 'Stage_Event', 'Stage_Demo']),
	StageAward: luaTable(['StageAward_FullComboW3', 'StageAward_SingleDigitW3', 'StageAward_OneW3', 'StageAward_FullComboW2', 'StageAward_SingleDigitW2', 'StageAward_OneW2', 'StageAward_FullComboW1', 'StageAward_80PercentW3', 'StageAward_90PercentW3', 'StageAward_100PercentW3']),
	StageResult: luaTable(['StageResult_Win', 'StageResult_Lose', 'StageResult_Draw']),
	StepsType: luaTable(['StepsType_Dance_Single', 'StepsType_Dance_Double', 'StepsType_Dance_Couple', 'StepsType_Dance_Solo', 'StepsType_Dance_Threepanel', 'StepsType_Dance_Routine', 'StepsType_Pump_Single', 'StepsType_Pump_Halfdouble', 'StepsType_Pump_Double', 'StepsType_Pump_Couple', 'StepsType_Pump_Routine', 'StepsType_Kb7_Single', 'StepsType_Ez2_Single', 'StepsType_Ez2_Double', 'StepsType_Ez2_Real', 'StepsType_Para_Single', 'StepsType_Para_Double', 'StepsType_Para_Eight', 'StepsType_Ds3ddx_Single', 'StepsType_Bm_Single5', 'StepsType_Bm_Double5', 'StepsType_Bm_Single7', 'StepsType_Bm_Double7', 'StepsType_Maniax_Single', 'StepsType_Maniax_Double', 'StepsType_Techno_Single4', 'StepsType_Techno_Single5', 'StepsType_Techno_Single8', 'StepsType_Techno_Single9', 'StepsType_Techno_Double4', 'StepsType_Techno_Double5', 'StepsType_Techno_Double8', 'StepsType_Techno_Double9', 'StepsType_Pnm_Three', 'StepsType_Pnm_Four', 'StepsType_Pnm_Five', 'StepsType_Pnm_Seven', 'StepsType_Pnm_Nine', 'StepsType_Pnm_Nine_Double', 'StepsType_Gddm_Real', 'StepsType_Gddm_New', 'StepsType_Gddm_Old', 'StepsType_Guitar_Five', 'StepsType_Bass_Six', 'StepsType_Guitar_Six', 'StepsType_Guitar_Three', 'StepsType_Bass_Four', 'StepsType_Gh_Solo', 'StepsType_Gh_Solo6', 'StepsType_Gh_Bass', 'StepsType_Gh_Bass6', 'StepsType_Gh_Rhythm', 'StepsType_Gh_Rhythm6', 'StepsType_Taiko', 'StepsType_Lights_Cabinet', 'StepsType_Kickbox_Human', 'StepsType_Kickbox_Quadarm', 'StepsType_Kickbox_Insect', 'StepsType_Kickbox_Arachnid']),
	StyleType: luaTable(['StyleType_OnePlayerOneSide', 'StyleType_TwoPlayersTwoSides', 'StyleType_OnePlayerTwoSides', 'StyleType_TwoPlayersSharedSides']),
	TapNoteScore: luaTable(['TapNoteScore_None', 'TapNoteScore_HitMine', 'TapNoteScore_AvoidMine', 'TapNoteScore_CheckpointMiss', 'TapNoteScore_Miss', 'TapNoteScore_W5', 'TapNoteScore_W4', 'TapNoteScore_W3', 'TapNoteScore_W2', 'TapNoteScore_W1', 'TapNoteScore_ProW5', 'TapNoteScore_ProW4', 'TapNoteScore_ProW3', 'TapNoteScore_ProW2', 'TapNoteScore_ProW1', 'TapNoteScore_MaxScore', 'TapNoteScore_CheckpointHit']),
	TapNoteScoreJudgeType: luaTable(['TapNoteScoreJudgeType_MinimumScore', 'TapNoteScoreJudgeType_LastScore']),
	TapNoteSource: luaTable(['TapNoteSource_Original', 'TapNoteSource_Addition']),
	TapNoteSubType: luaTable(['TapNoteSubType_Hold', 'TapNoteSubType_Roll']),
	TapNoteType: luaTable(['TapNoteType_Empty', 'TapNoteType_Tap', 'TapNoteType_HoldHead', 'TapNoteType_HoldTail', 'TapNoteType_Mine', 'TapNoteType_Lift', 'TapNoteType_Attack', 'TapNoteType_AutoKeysound', 'TapNoteType_Fake']),
	TextGlowMode: luaTable(['TextGlowMode_Inner', 'TextGlowMode_Stroke', 'TextGlowMode_Both']),
	TextureMode: luaTable(['TextureMode_Modulate', 'TextureMode_Glow', 'TextureMode_Add']),
	TweenType: luaTable(['TweenType_Linear', 'TweenType_Accelerate', 'TweenType_Decelerate', 'TweenType_Spring', 'TweenType_Smooth', 'TweenType_BounceBegin', 'TweenType_BounceEnd', 'TweenType_Bezier', 'TweenType_Bezier2D', 'TweenType_Step', 'TweenType_SmoothStep', 'TweenType_EaseInSine', 'TweenType_EaseOutSine', 'TweenType_EaseInOutSine', 'TweenType_EaseOutInSine', 'TweenType_EaseInQuad', 'TweenType_EaseOutQuad', 'TweenType_EaseInOutQuad', 'TweenType_EaseOutInQuad', 'TweenType_EaseInCubic', 'TweenType_EaseOutCubic', 'TweenType_EaseInOutCubic', 'TweenType_EaseOutInCubic', 'TweenType_EaseInQuart', 'TweenType_EaseOutQuart', 'TweenType_EaseInOutQuart', 'TweenType_EaseOutInQuart', 'TweenType_EaseInQuint', 'TweenType_EaseOutQuint', 'TweenType_EaseInOutQuint', 'TweenType_EaseOutInQuint', 'TweenType_EaseInExpo', 'TweenType_EaseOutExpo', 'TweenType_EaseInOutExpo', 'TweenType_EaseOutInExpo', 'TweenType_EaseInBack', 'TweenType_EaseOutBack', 'TweenType_EaseInOutBack', 'TweenType_EaseOutInBack', 'TweenType_EaseInCircle', 'TweenType_EaseOutCircle', 'TweenType_EaseInOutCircle', 'TweenType_EaseOutInCircle', 'TweenType_EaseInElastic', 'TweenType_EaseOutElastic', 'TweenType_EaseInOutElastic', 'TweenType_EaseOutInElastic', 'TweenType_EaseOutInElastic', 'TweenType_EaseOutBounce', 'TweenType_EaseInOutBounce', 'TweenType_EaseOutInBounce']),
	UnlockRequirement: luaTable(['UnlockRequirement_ArcadePoints', 'UnlockRequirement_DancePoints', 'UnlockRequirement_SongPoints', 'UnlockRequirement_ExtraCleared', 'UnlockRequirement_ExtraFailed', 'UnlockRequirement_Toasties', 'UnlockRequirement_StagesCleared', 'UnlockRequirement_NumberUnlocked']),
	UnlockRequirementType: luaTable(['UnlockRewardType_Song', 'UnlockRewardType_Steps', 'UnlockRewardType_StepsType', 'UnlockRewardType_Course', 'UnlockRewardType_Modifier']),
	VertAlign: luaTable(['VertAlign_Top', 'VertAlign_Middle', 'VertAlign_Bottom']),
	WheelItemDataType: luaTable(['WheelItemDataType_Generic', 'WheelItemDataType_Section', 'WheelItemDataType_Song', 'WheelItemDataType_Roulette', 'WheelItemDataType_Random', 'WheelItemDataType_Portal', 'WheelItemDataType_Course', 'WheelItemDataType_Sort', 'WheelItemDataType_Custom']),
	WheelState: luaTable(['WheelState_Selecting', 'WheelState_FlyingOffBeforeNextSort', 'WheelState_FlyingOnAfterNextSort', 'WheelState_RouletteSpinning', 'WheelState_RouletteSpinning', 'WheelState_RandomSpinning', 'WheelState_Locked']),
	ZTestMode: luaTable(['ZTestMode_Off', 'ZTestMode_WriteOnPass', 'ZTestMode_WriteOnFail'])
}