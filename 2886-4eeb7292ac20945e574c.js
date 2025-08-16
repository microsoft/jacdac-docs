(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2886],{

/***/ 94184:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 92886:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PianoWidget; }
});

// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(71508);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/just-range/index.js
var just_range = __webpack_require__(34833);
var just_range_default = /*#__PURE__*/__webpack_require__.n(just_range);
// EXTERNAL MODULE: ./node_modules/react-piano/node_modules/prop-types/index.js
var prop_types = __webpack_require__(72830);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/lodash.difference/index.js
var lodash_difference = __webpack_require__(61478);
var lodash_difference_default = /*#__PURE__*/__webpack_require__.n(lodash_difference);
;// CONCATENATED MODULE: ./node_modules/react-piano/dist/react-piano.esm.js






function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var SORTED_PITCHES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
var ACCIDENTAL_PITCHES = ['Db', 'Eb', 'Gb', 'Ab', 'Bb'];
var PITCH_INDEXES = {
  C: 0,
  'C#': 1,
  Db: 1,
  D: 2,
  'D#': 3,
  Eb: 3,
  E: 4,
  F: 5,
  'F#': 6,
  Gb: 6,
  G: 7,
  'G#': 8,
  Ab: 8,
  A: 9,
  'A#': 10,
  Bb: 10,
  B: 11
};
var MIDI_NUMBER_C0 = 12;
var MIN_MIDI_NUMBER = MIDI_NUMBER_C0;
var MAX_MIDI_NUMBER = 127;
var NOTE_REGEX = /([a-g])([#b]?)(\d+)/;
var NOTES_IN_OCTAVE = 12; // Converts string notes in scientific pitch notation to a MIDI number, or null.
//
// Example: "c#0" => 13, "eb5" => 75, "abc" => null
//
// References:
// - http://www.flutopedia.com/octave_notation.htm
// - https://github.com/danigb/tonal/blob/master/packages/note/index.js

function fromNote(note) {
  if (!note) {
    throw Error('Invalid note argument');
  }

  var match = NOTE_REGEX.exec(note.toLowerCase());

  if (!match) {
    throw Error('Invalid note argument');
  }

  var _match = _slicedToArray(match, 4),
      letter = _match[1],
      accidental = _match[2],
      octave = _match[3];

  var pitchName = "".concat(letter.toUpperCase()).concat(accidental);
  var pitchIndex = PITCH_INDEXES[pitchName];

  if (pitchIndex == null) {
    throw Error('Invalid note argument');
  }

  return MIDI_NUMBER_C0 + pitchIndex + NOTES_IN_OCTAVE * parseInt(octave, 10);
} //
// Build cache for getAttributes
//


function buildMidiNumberAttributes(midiNumber) {
  var pitchIndex = (midiNumber - MIDI_NUMBER_C0) % NOTES_IN_OCTAVE;
  var octave = Math.floor((midiNumber - MIDI_NUMBER_C0) / NOTES_IN_OCTAVE);
  var pitchName = SORTED_PITCHES[pitchIndex];
  return {
    note: "".concat(pitchName).concat(octave),
    pitchName: pitchName,
    octave: octave,
    midiNumber: midiNumber,
    isAccidental: ACCIDENTAL_PITCHES.includes(pitchName)
  };
}

function buildMidiNumberAttributesCache() {
  return just_range_default()(MIN_MIDI_NUMBER, MAX_MIDI_NUMBER + 1).reduce(function (cache, midiNumber) {
    cache[midiNumber] = buildMidiNumberAttributes(midiNumber);
    return cache;
  }, {});
}

var midiNumberAttributesCache = buildMidiNumberAttributesCache(); // Returns an object containing various attributes for a given MIDI number.
// Throws error for invalid midiNumbers.

function getAttributes(midiNumber) {
  var attrs = midiNumberAttributesCache[midiNumber];

  if (!attrs) {
    throw Error('Invalid MIDI number');
  }

  return attrs;
} // Returns all MIDI numbers corresponding to natural notes, e.g. C and not C# or Bb.


var NATURAL_MIDI_NUMBERS = just_range_default()(MIN_MIDI_NUMBER, MAX_MIDI_NUMBER + 1).filter(function (midiNumber) {
  return !getAttributes(midiNumber).isAccidental;
});
var MidiNumbers = {
  fromNote: fromNote,
  getAttributes: getAttributes,
  MIN_MIDI_NUMBER: MIN_MIDI_NUMBER,
  MAX_MIDI_NUMBER: MAX_MIDI_NUMBER,
  NATURAL_MIDI_NUMBERS: NATURAL_MIDI_NUMBERS
};

var Key =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Key, _React$Component);

  function Key() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Key);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Key)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onPlayNoteInput", function () {
      _this.props.onPlayNoteInput(_this.props.midiNumber);
    });

    _defineProperty(_assertThisInitialized(_this), "onStopNoteInput", function () {
      _this.props.onStopNoteInput(_this.props.midiNumber);
    });

    return _this;
  }

  _createClass(Key, [{
    key: "getAbsoluteKeyPosition",
    // Key position is represented by the number of natural key widths from the left
    value: function getAbsoluteKeyPosition(midiNumber) {
      var OCTAVE_WIDTH = 7;

      var _MidiNumbers$getAttri = MidiNumbers.getAttributes(midiNumber),
          octave = _MidiNumbers$getAttri.octave,
          pitchName = _MidiNumbers$getAttri.pitchName;

      var pitchPosition = this.props.pitchPositions[pitchName];
      var octavePosition = OCTAVE_WIDTH * octave;
      return pitchPosition + octavePosition;
    }
  }, {
    key: "getRelativeKeyPosition",
    value: function getRelativeKeyPosition(midiNumber) {
      return this.getAbsoluteKeyPosition(midiNumber) - this.getAbsoluteKeyPosition(this.props.noteRange.first);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          naturalKeyWidth = _this$props.naturalKeyWidth,
          accidentalWidthRatio = _this$props.accidentalWidthRatio,
          midiNumber = _this$props.midiNumber,
          gliss = _this$props.gliss,
          useTouchEvents = _this$props.useTouchEvents,
          accidental = _this$props.accidental,
          active = _this$props.active,
          disabled = _this$props.disabled,
          children = _this$props.children; // Need to conditionally include/exclude handlers based on useTouchEvents,
      // because otherwise mobile taps double fire events.

      return react.createElement("div", {
        className: classnames_default()('ReactPiano__Key', {
          'ReactPiano__Key--accidental': accidental,
          'ReactPiano__Key--natural': !accidental,
          'ReactPiano__Key--disabled': disabled,
          'ReactPiano__Key--active': active
        }),
        style: {
          left: ratioToPercentage(this.getRelativeKeyPosition(midiNumber) * naturalKeyWidth),
          width: ratioToPercentage(accidental ? accidentalWidthRatio * naturalKeyWidth : naturalKeyWidth)
        },
        onMouseDown: useTouchEvents ? null : this.onPlayNoteInput,
        onMouseUp: useTouchEvents ? null : this.onStopNoteInput,
        onMouseEnter: gliss ? this.onPlayNoteInput : null,
        onMouseLeave: this.onStopNoteInput,
        onTouchStart: useTouchEvents ? this.onPlayNoteInput : null,
        onTouchCancel: useTouchEvents ? this.onStopNoteInput : null,
        onTouchEnd: useTouchEvents ? this.onStopNoteInput : null
      }, react.createElement("div", {
        className: "ReactPiano__NoteLabelContainer"
      }, children));
    }
  }]);

  return Key;
}(react.Component);

_defineProperty(Key, "propTypes", {
  midiNumber: (prop_types_default()).number.isRequired,
  naturalKeyWidth: (prop_types_default()).number.isRequired,
  // Width as a ratio between 0 and 1
  gliss: (prop_types_default()).bool.isRequired,
  useTouchEvents: (prop_types_default()).bool.isRequired,
  accidental: (prop_types_default()).bool.isRequired,
  active: (prop_types_default()).bool.isRequired,
  disabled: (prop_types_default()).bool.isRequired,
  onPlayNoteInput: (prop_types_default()).func.isRequired,
  onStopNoteInput: (prop_types_default()).func.isRequired,
  accidentalWidthRatio: (prop_types_default()).number.isRequired,
  pitchPositions: (prop_types_default()).object.isRequired,
  children: (prop_types_default()).node
});

_defineProperty(Key, "defaultProps", {
  accidentalWidthRatio: 0.65,
  pitchPositions: {
    C: 0,
    Db: 0.55,
    D: 1,
    Eb: 1.8,
    E: 2,
    F: 3,
    Gb: 3.5,
    G: 4,
    Ab: 4.7,
    A: 5,
    Bb: 5.85,
    B: 6
  }
});

function ratioToPercentage(ratio) {
  return "".concat(ratio * 100, "%");
}

var Keyboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Keyboard, _React$Component);

  function Keyboard() {
    _classCallCheck(this, Keyboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(Keyboard).apply(this, arguments));
  }

  _createClass(Keyboard, [{
    key: "getMidiNumbers",
    // Range of midi numbers on keyboard
    value: function getMidiNumbers() {
      return just_range_default()(this.props.noteRange.first, this.props.noteRange.last + 1);
    }
  }, {
    key: "getNaturalKeyCount",
    value: function getNaturalKeyCount() {
      return this.getMidiNumbers().filter(function (number) {
        var _MidiNumbers$getAttri = MidiNumbers.getAttributes(number),
            isAccidental = _MidiNumbers$getAttri.isAccidental;

        return !isAccidental;
      }).length;
    } // Returns a ratio between 0 and 1

  }, {
    key: "getNaturalKeyWidth",
    value: function getNaturalKeyWidth() {
      return 1 / this.getNaturalKeyCount();
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.props.width ? this.props.width : '100%';
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      if (!this.props.width) {
        return '100%';
      }

      var keyWidth = this.props.width * this.getNaturalKeyWidth();
      return "".concat(keyWidth / this.props.keyWidthToHeight, "px");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var naturalKeyWidth = this.getNaturalKeyWidth();
      return react.createElement("div", {
        className: classnames_default()('ReactPiano__Keyboard', this.props.className),
        style: {
          width: this.getWidth(),
          height: this.getHeight()
        }
      }, this.getMidiNumbers().map(function (midiNumber) {
        var _MidiNumbers$getAttri2 = MidiNumbers.getAttributes(midiNumber),
            note = _MidiNumbers$getAttri2.note,
            isAccidental = _MidiNumbers$getAttri2.isAccidental;

        var isActive = !_this.props.disabled && _this.props.activeNotes.includes(midiNumber);

        return react.createElement(Key, {
          naturalKeyWidth: naturalKeyWidth,
          midiNumber: midiNumber,
          noteRange: _this.props.noteRange,
          active: isActive,
          accidental: isAccidental,
          disabled: _this.props.disabled,
          onPlayNoteInput: _this.props.onPlayNoteInput,
          onStopNoteInput: _this.props.onStopNoteInput,
          gliss: _this.props.gliss,
          useTouchEvents: _this.props.useTouchEvents,
          key: midiNumber
        }, _this.props.disabled ? null : _this.props.renderNoteLabel({
          isActive: isActive,
          isAccidental: isAccidental,
          midiNumber: midiNumber
        }));
      }));
    }
  }]);

  return Keyboard;
}(react.Component);

_defineProperty(Keyboard, "propTypes", {
  noteRange: noteRangePropType,
  activeNotes: prop_types_default().arrayOf((prop_types_default()).number),
  onPlayNoteInput: (prop_types_default()).func.isRequired,
  onStopNoteInput: (prop_types_default()).func.isRequired,
  renderNoteLabel: (prop_types_default()).func.isRequired,
  keyWidthToHeight: (prop_types_default()).number.isRequired,
  className: (prop_types_default()).string,
  disabled: (prop_types_default()).bool,
  gliss: (prop_types_default()).bool,
  useTouchEvents: (prop_types_default()).bool,
  // If width is not provided, must have fixed width and height in parent container
  width: (prop_types_default()).number
});

_defineProperty(Keyboard, "defaultProps", {
  disabled: false,
  gliss: false,
  useTouchEvents: false,
  keyWidthToHeight: 0.33,
  renderNoteLabel: function renderNoteLabel() {}
});

function isNaturalMidiNumber(value) {
  if (typeof value !== 'number') {
    return false;
  }

  return MidiNumbers.NATURAL_MIDI_NUMBERS.includes(value);
}

function noteRangePropType(props, propName, componentName) {
  var _props$propName = props[propName],
      first = _props$propName.first,
      last = _props$propName.last;

  if (!first || !last) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". ").concat(propName, " must be an object with .first and .last values."));
  }

  if (!isNaturalMidiNumber(first) || !isNaturalMidiNumber(last)) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". ").concat(propName, " values must be valid MIDI numbers, and should not be accidentals (sharp or flat notes)."));
  }

  if (first >= last) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". ").concat(propName, ".first must be smaller than ").concat(propName, ".last."));
  }
}

var ControlledPiano =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ControlledPiano, _React$Component);

  function ControlledPiano() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ControlledPiano);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ControlledPiano)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMouseDown: false,
      useTouchEvents: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleNoteChanges", function (_ref) {
      var prevActiveNotes = _ref.prevActiveNotes,
          nextActiveNotes = _ref.nextActiveNotes;

      if (_this.props.disabled) {
        return;
      }

      var notesStopped = lodash_difference_default()(prevActiveNotes, nextActiveNotes);
      var notesStarted = lodash_difference_default()(nextActiveNotes, prevActiveNotes);
      notesStarted.forEach(function (midiNumber) {
        _this.props.playNote(midiNumber);
      });
      notesStopped.forEach(function (midiNumber) {
        _this.props.stopNote(midiNumber);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getMidiNumberForKey", function (key) {
      if (!_this.props.keyboardShortcuts) {
        return null;
      }

      var shortcut = _this.props.keyboardShortcuts.find(function (sh) {
        return sh.key === key;
      });

      return shortcut && shortcut.midiNumber;
    });

    _defineProperty(_assertThisInitialized(_this), "getKeyForMidiNumber", function (midiNumber) {
      if (!_this.props.keyboardShortcuts) {
        return null;
      }

      var shortcut = _this.props.keyboardShortcuts.find(function (sh) {
        return sh.midiNumber === midiNumber;
      });

      return shortcut && shortcut.key;
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      // Don't conflict with existing combinations like ctrl + t
      if (event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      }

      var midiNumber = _this.getMidiNumberForKey(event.key);

      if (midiNumber) {
        _this.onPlayNoteInput(midiNumber);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (event) {
      // This *should* also check for event.ctrlKey || event.metaKey || event.ShiftKey like onKeyDown does,
      // but at least on Mac Chrome, when mashing down many alphanumeric keystrokes at once,
      // ctrlKey is fired unexpectedly, which would cause onStopNote to NOT be fired, which causes problematic
      // lingering notes. Since it's fairly safe to call onStopNote even when not necessary,
      // the ctrl/meta/shift check is removed to fix that issue.
      var midiNumber = _this.getMidiNumberForKey(event.key);

      if (midiNumber) {
        _this.onStopNoteInput(midiNumber);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayNoteInput", function (midiNumber) {
      if (_this.props.disabled) {
        return;
      } // Pass in previous activeNotes for recording functionality


      _this.props.onPlayNoteInput(midiNumber, _this.props.activeNotes);
    });

    _defineProperty(_assertThisInitialized(_this), "onStopNoteInput", function (midiNumber) {
      if (_this.props.disabled) {
        return;
      } // Pass in previous activeNotes for recording functionality


      _this.props.onStopNoteInput(midiNumber, _this.props.activeNotes);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function () {
      _this.setState({
        isMouseDown: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      _this.setState({
        isMouseDown: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function () {
      _this.setState({
        useTouchEvents: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderNoteLabel", function (_ref2) {
      var midiNumber = _ref2.midiNumber,
          isActive = _ref2.isActive,
          isAccidental = _ref2.isAccidental;

      var keyboardShortcut = _this.getKeyForMidiNumber(midiNumber);

      return _this.props.renderNoteLabel({
        keyboardShortcut: keyboardShortcut,
        midiNumber: midiNumber,
        isActive: isActive,
        isAccidental: isAccidental
      });
    });

    return _this;
  }

  _createClass(ControlledPiano, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('keydown', this.onKeyDown);
      window.addEventListener('keyup', this.onKeyUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.onKeyDown);
      window.removeEventListener('keyup', this.onKeyUp);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.activeNotes !== prevProps.activeNotes) {
        this.handleNoteChanges({
          prevActiveNotes: prevProps.activeNotes || [],
          nextActiveNotes: this.props.activeNotes || []
        });
      }
    } // This function is responsible for diff'ing activeNotes
    // and playing or stopping notes accordingly.

  }, {
    key: "render",
    value: function render() {
      return react.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        },
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchStart: this.onTouchStart,
        "data-testid": "container"
      }, react.createElement(Keyboard, {
        noteRange: this.props.noteRange,
        onPlayNoteInput: this.onPlayNoteInput,
        onStopNoteInput: this.onStopNoteInput,
        activeNotes: this.props.activeNotes,
        className: this.props.className,
        disabled: this.props.disabled,
        width: this.props.width,
        keyWidthToHeight: this.props.keyWidthToHeight,
        gliss: this.state.isMouseDown,
        useTouchEvents: this.state.useTouchEvents,
        renderNoteLabel: this.renderNoteLabel
      }));
    }
  }]);

  return ControlledPiano;
}(react.Component);

_defineProperty(ControlledPiano, "propTypes", {
  noteRange: (prop_types_default()).object.isRequired,
  activeNotes: prop_types_default().arrayOf((prop_types_default()).number.isRequired).isRequired,
  playNote: (prop_types_default()).func.isRequired,
  stopNote: (prop_types_default()).func.isRequired,
  onPlayNoteInput: (prop_types_default()).func.isRequired,
  onStopNoteInput: (prop_types_default()).func.isRequired,
  renderNoteLabel: (prop_types_default()).func.isRequired,
  className: (prop_types_default()).string,
  disabled: (prop_types_default()).bool,
  width: (prop_types_default()).number,
  keyWidthToHeight: (prop_types_default()).number,
  keyboardShortcuts: prop_types_default().arrayOf(prop_types_default().shape({
    key: (prop_types_default()).string.isRequired,
    midiNumber: (prop_types_default()).number.isRequired
  }))
});

_defineProperty(ControlledPiano, "defaultProps", {
  renderNoteLabel: function renderNoteLabel(_ref3) {
    var keyboardShortcut = _ref3.keyboardShortcut,
        midiNumber = _ref3.midiNumber,
        isActive = _ref3.isActive,
        isAccidental = _ref3.isAccidental;
    return keyboardShortcut ? react.createElement("div", {
      className: classnames_default()('ReactPiano__NoteLabel', {
        'ReactPiano__NoteLabel--active': isActive,
        'ReactPiano__NoteLabel--accidental': isAccidental,
        'ReactPiano__NoteLabel--natural': !isAccidental
      })
    }, keyboardShortcut) : null;
  }
});

var Piano =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Piano, _React$Component);

  function Piano() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Piano);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Piano)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeNotes: _this.props.activeNotes || []
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlayNoteInput", function (midiNumber) {
      _this.setState(function (prevState) {
        // Need to be handled inside setState in order to set prevActiveNotes without
        // race conditions.
        if (_this.props.onPlayNoteInput) {
          _this.props.onPlayNoteInput(midiNumber, {
            prevActiveNotes: prevState.activeNotes
          });
        } // Don't append note to activeNotes if it's already present


        if (prevState.activeNotes.includes(midiNumber)) {
          return null;
        }

        return {
          activeNotes: prevState.activeNotes.concat(midiNumber)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStopNoteInput", function (midiNumber) {
      _this.setState(function (prevState) {
        // Need to be handled inside setState in order to set prevActiveNotes without
        // race conditions.
        if (_this.props.onStopNoteInput) {
          _this.props.onStopNoteInput(midiNumber, {
            prevActiveNotes: _this.state.activeNotes
          });
        }

        return {
          activeNotes: prevState.activeNotes.filter(function (note) {
            return midiNumber !== note;
          })
        };
      });
    });

    return _this;
  }

  _createClass(Piano, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Make activeNotes "controllable" by using internal
      // state by default, but allowing prop overrides.
      if (prevProps.activeNotes !== this.props.activeNotes && this.state.activeNotes !== this.props.activeNotes) {
        this.setState({
          activeNotes: this.props.activeNotes || []
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeNotes = _this$props.activeNotes,
          onPlayNoteInput = _this$props.onPlayNoteInput,
          onStopNoteInput = _this$props.onStopNoteInput,
          otherProps = _objectWithoutProperties(_this$props, ["activeNotes", "onPlayNoteInput", "onStopNoteInput"]);

      return react.createElement(ControlledPiano, _extends({
        activeNotes: this.state.activeNotes,
        onPlayNoteInput: this.handlePlayNoteInput,
        onStopNoteInput: this.handleStopNoteInput
      }, otherProps));
    }
  }]);

  return Piano;
}(react.Component);

_defineProperty(Piano, "propTypes", {
  noteRange: (prop_types_default()).object.isRequired,
  activeNotes: prop_types_default().arrayOf((prop_types_default()).number.isRequired),
  playNote: (prop_types_default()).func.isRequired,
  stopNote: (prop_types_default()).func.isRequired,
  onPlayNoteInput: (prop_types_default()).func,
  onStopNoteInput: (prop_types_default()).func,
  renderNoteLabel: (prop_types_default()).func,
  className: (prop_types_default()).string,
  disabled: (prop_types_default()).bool,
  width: (prop_types_default()).number,
  keyWidthToHeight: (prop_types_default()).number,
  keyboardShortcuts: prop_types_default().arrayOf(prop_types_default().shape({
    key: (prop_types_default()).string.isRequired,
    midiNumber: (prop_types_default()).number.isRequired
  }))
});

function createKeyboardShortcuts(_ref) {
  var firstNote = _ref.firstNote,
      lastNote = _ref.lastNote,
      keyboardConfig = _ref.keyboardConfig;
  var currentMidiNumber = firstNote;
  var naturalKeyIndex = 0;
  var keyboardShortcuts = [];

  while ( // There are still keys to be assigned
  naturalKeyIndex < keyboardConfig.length && // Note to be assigned does not surpass range
  currentMidiNumber <= lastNote) {
    var key = keyboardConfig[naturalKeyIndex];

    var _MidiNumbers$getAttri = MidiNumbers.getAttributes(currentMidiNumber),
        isAccidental = _MidiNumbers$getAttri.isAccidental;

    if (isAccidental) {
      keyboardShortcuts.push({
        key: key.flat,
        midiNumber: currentMidiNumber
      });
    } else {
      keyboardShortcuts.push({
        key: key.natural,
        midiNumber: currentMidiNumber
      });
      naturalKeyIndex += 1;
    }

    currentMidiNumber += 1;
  }

  return keyboardShortcuts;
}

var KeyboardShortcuts = {
  create: createKeyboardShortcuts,
  // Preset configurations
  BOTTOM_ROW: [{
    natural: 'z',
    flat: 'a',
    sharp: 's'
  }, {
    natural: 'x',
    flat: 's',
    sharp: 'd'
  }, {
    natural: 'c',
    flat: 'd',
    sharp: 'f'
  }, {
    natural: 'v',
    flat: 'f',
    sharp: 'g'
  }, {
    natural: 'b',
    flat: 'g',
    sharp: 'h'
  }, {
    natural: 'n',
    flat: 'h',
    sharp: 'j'
  }, {
    natural: 'm',
    flat: 'j',
    sharp: 'k'
  }, {
    natural: ',',
    flat: 'k',
    sharp: 'l'
  }, {
    natural: '.',
    flat: 'l',
    sharp: ';'
  }, {
    natural: '/',
    flat: ';',
    sharp: "'"
  }],
  HOME_ROW: [{
    natural: 'a',
    flat: 'q',
    sharp: 'w'
  }, {
    natural: 's',
    flat: 'w',
    sharp: 'e'
  }, {
    natural: 'd',
    flat: 'e',
    sharp: 'r'
  }, {
    natural: 'f',
    flat: 'r',
    sharp: 't'
  }, {
    natural: 'g',
    flat: 't',
    sharp: 'y'
  }, {
    natural: 'h',
    flat: 'y',
    sharp: 'u'
  }, {
    natural: 'j',
    flat: 'u',
    sharp: 'i'
  }, {
    natural: 'k',
    flat: 'i',
    sharp: 'o'
  }, {
    natural: 'l',
    flat: 'o',
    sharp: 'p'
  }, {
    natural: ';',
    flat: 'p',
    sharp: '['
  }, {
    natural: "'",
    flat: '[',
    sharp: ']'
  }],
  QWERTY_ROW: [{
    natural: 'q',
    flat: '1',
    sharp: '2'
  }, {
    natural: 'w',
    flat: '2',
    sharp: '3'
  }, {
    natural: 'e',
    flat: '3',
    sharp: '4'
  }, {
    natural: 'r',
    flat: '4',
    sharp: '5'
  }, {
    natural: 't',
    flat: '5',
    sharp: '6'
  }, {
    natural: 'y',
    flat: '6',
    sharp: '7'
  }, {
    natural: 'u',
    flat: '7',
    sharp: '8'
  }, {
    natural: 'i',
    flat: '8',
    sharp: '9'
  }, {
    natural: 'o',
    flat: '9',
    sharp: '0'
  }, {
    natural: 'p',
    flat: '0',
    sharp: '-'
  }, {
    natural: '[',
    flat: '-',
    sharp: '='
  }]
};


//# sourceMappingURL=react-piano.esm.js.map

;// CONCATENATED MODULE: ./src/components/widgets/PianoWidget.tsx
function PianoWidget(props){var{playTone}=props;var firstNote=MidiNumbers.fromNote("c4");var lastNote=MidiNumbers.fromNote("d5");/*
    const keyboardShortcuts = useMemo(
        () =>
            KeyboardShortcuts.create({
                firstNote: firstNote,
                lastNote: lastNote,
                keyboardConfig: KeyboardShortcuts.HOME_ROW,
            }),
        [firstNote, lastNote]
    )
    */var midiFrequencies=(0,react.useMemo)(()=>new Array(127).fill(0).map((_,x)=>440/32*Math.pow(2,(x-9)/12)),[]);var pianoId=(0,react.useId)();return/*#__PURE__*/react.createElement(Box/* default */.Z,{mb:1,mt:1},/*#__PURE__*/react.createElement(Piano,{id:pianoId,width:320,noteRange:{first:firstNote,last:lastNote},playNote:midiNumber=>{var frequency=midiFrequencies[midiNumber];playTone(frequency);},stopNote:()=>{// not supported
}//keyboardShortcuts={keyboardShortcuts}
}));}

/***/ }),

/***/ 34833:
/***/ (function(module) {

module.exports = range;

/*
  range(0, 5); // [0, 1, 2, 3, 4]
  range(5); // [0, 1, 2, 3, 4]
  range(-5); // [0, -1, -2, -3, -4]
  range(0, 20, 5) // [0, 5, 10, 15]
  range(0, -20, -5) // [0, -5, -10, -15]
*/

function range(start, stop, step) {
  if (start != null && typeof start != 'number') {
    throw new Error('start must be a number or null');
  }
  if (stop != null && typeof stop != 'number') {
    throw new Error('stop must be a number or null');
  }
  if (step != null && typeof step != 'number') {
    throw new Error('step must be a number or null');
  }
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (step == null) {
    step = stop > start ? 1 : -1;
  }
  var toReturn = [];
  var increasing = start < stop; //← here’s the change
  for (; increasing ? start < stop : start > stop; start += step) {
    toReturn.push(start);
  }
  return toReturn;
}


/***/ }),

/***/ 61478:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order of result values is determined by the
 * order they occur in the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = difference;


/***/ }),

/***/ 55555:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(60923);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 72830:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(55555)();
}


/***/ }),

/***/ 60923:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ })

}]);
//# sourceMappingURL=2886-4eeb7292ac20945e574c.js.map