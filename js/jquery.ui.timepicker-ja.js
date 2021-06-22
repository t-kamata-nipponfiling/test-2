/* Japanese initialisation for the jQuery time picker plugin. */
/* Written by Bernd Plagge (bplagge@choicenet.ne.jp). */

jQuery(function($) {

	$.timepicker.regional['ja'] = {

		// options
		timeSeparator: ':',				// The character to use to separate hours and minutes (default: ':')
		timeWithoutSeparator: true,     // Accept time input without seperator (default: true)
		periodSeparator: ' ',			// The character to use to separate the time from the time period (default: ' ')
		showPeriod: false,				// Define whether or not to show AM/PM with selected time (default: false)
		showPeriodType: 'ja',
		showPeriodLabels: true,			// Define if the AM/PM labels on the left are displayed (default: true)
		showLeadingZero: true,			// Define whether or not to show a leading zero for hours < 10 (default: true)
		showMinutesLeadingZero: true,	// Define whether or not to show a leading zero for minutes < 10 (default: true)
		altField: '',					// Define an alternate input to parse selected time to
		defaultTime: '',				// Used as default time when input field is empty or for inline timePicker
										// (set to '' for no highlighted time, 'now' for the current time, default value: '')
		
		// trigger options
		showOn: 'focus',				// Define when the timepicker is shown
										// 'focus': when the input gets focus, 'button' when the button trigger element is clicked,
										// 'both': when the input gets focus and when the button is clicked
		button: null,					// jQuery selector that acts as button trigger (ex: '#trigger_button')
		showAnim: 'show',				// Name of jQuery animation for popup
		duration: 500,
		showOptions: {},				// Options for enhanced animations
		appendText: '',					// Display text following the input box, e.g. showing the format
		
		// localization
		hourText: '',					// Define the locale text for "Hour"
		minuteText: '',				// Define the locale text for "Minute"
		amPmText: ['AM', 'PM'],		// Define the locale text for "AM / PM"
		
		// position
		myPosition: 'left top',			// Corner of the dialog to position, used with the jQuery UI Position utility if present
		atPosition: 'left bottom',		// Corner of the input to position
		
		// events
		beforeShow: null,				// Callback function executed before the timepicker is rendered and displayed
		onSelect: null,					// Define a callback function when an hour / minutes is selected
		onClose: null,					// Define a callback function when the timepicker is closed
		onHourShow: null,				// Define a callback to enable / disable certain hours (ex: function onHourShow(hour))
		onMinuteShow: null,				// Define a callback to enable / disable certain minutes (ex: function onMinuteShow(hour, minute))
		
		// custom hours and minutes
		hours: {
			starts: 0,					// First displayed hour
			ends: 23					// Last displayed hour
		},
		minutes: {
			starts: 0,					// First displayed minute
			ends: 55,					// Last displayed minute
			interval: 5,				// Interval of displayed minutes
			manual: []					// Optional extra entries for minutes
		},
		rows: 4,						// Number of rows for the input tables, minimum 2, makes more sense if you use multiple of 2
		showHours: true,				// Define if the hours section is displayed or not (Set to false to get a minute only dialog)
		showMinutes: true,				// Define if the minutes section is displayed or not (Set to false to get an hour only dialog)
		optionalMinutes: false,         // optionally parse inputs of whole hours with minutes omitted
		
		// min and max time
		minTime: {						// Set the minimum time selectable by the user, disable hours and minutes
			hour: 0,					// previous to min time
			minute: 0
		},
		maxTime: {						// Set the minimum time selectable by the user, disable hours and minutes
			hour: 23,					// after max time
			minute: 55
		},
		
		// buttons
		showCloseButton: false,			// shows an OK button to confirm the edit
		closeButtonText: '閉じる',		// Text for the confirmation button (ok button)
		showNowButton: false,			// Shows the 'now' button
		nowButtonText: '現在時刻',		// Text for the now button
		showDeselectButton: false,		// Shows the deselect time button
		deselectButtonText: '選択解除'	// Text for the deselect button

	}

	// set defaults
	$.timepicker.setDefaults($.timepicker.regional['ja']);

});
