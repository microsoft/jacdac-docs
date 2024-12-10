"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6016],{

/***/ 92486:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ Slider_Slider; }
});

// UNUSED EXPORTS: SliderMark, SliderMarkLabel, SliderRail, SliderRoot, SliderThumb, SliderTrack, SliderValueLabel

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/base/utils/useSlotProps.js + 3 modules
var useSlotProps = __webpack_require__(34261);
// EXTERNAL MODULE: ./node_modules/@mui/base/utils/isHostComponent.js
var isHostComponent = __webpack_require__(28442);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/ownerDocument.js
var ownerDocument = __webpack_require__(57094);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useControlled.js
var useControlled = __webpack_require__(8925);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useIsFocusVisible.js
var useIsFocusVisible = __webpack_require__(99962);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useForkRef.js
var useForkRef = __webpack_require__(30067);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(16600);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useEventCallback.js
var useEventCallback = __webpack_require__(73633);
;// CONCATENATED MODULE: ./node_modules/@mui/utils/esm/visuallyHidden.js
const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
};
/* harmony default export */ var esm_visuallyHidden = (visuallyHidden);
;// CONCATENATED MODULE: ./node_modules/@mui/base/SliderUnstyled/useSlider.js



const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function asc(a, b) {
  return a - b;
}
function clamp(value, min, max) {
  if (value == null) {
    return min;
  }
  return Math.min(Math.max(min, value), max);
}
function findClosest(values, currentValue) {
  var _values$reduce;
  const {
    index: closestIndex
  } = (_values$reduce = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null)) != null ? _values$reduce : {};
  return closestIndex;
}
function trackFinger(event, touchId) {
  // The event is TouchEvent
  if (touchId.current !== undefined && event.changedTouches) {
    const touchEvent = event;
    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }

  // The event is MouseEvent
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values,
  newValue,
  index
}) {
  const output = values.slice();
  output[index] = newValue;
  return output.sort(asc);
}
function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  var _sliderRef$current, _doc$activeElement;
  const doc = (0,ownerDocument/* default */.Z)(sliderRef.current);
  if (!((_sliderRef$current = sliderRef.current) != null && _sliderRef$current.contains(doc.activeElement)) || Number(doc == null ? void 0 : (_doc$activeElement = doc.activeElement) == null ? void 0 : _doc$activeElement.getAttribute('data-index')) !== activeIndex) {
    var _sliderRef$current2;
    (_sliderRef$current2 = sliderRef.current) == null ? void 0 : _sliderRef$current2.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
const axisProps = {
  horizontal: {
    offset: percent => ({
      left: `${percent}%`
    }),
    leap: percent => ({
      width: `${percent}%`
    })
  },
  'horizontal-reverse': {
    offset: percent => ({
      right: `${percent}%`
    }),
    leap: percent => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: percent => ({
      bottom: `${percent}%`
    }),
    leap: percent => ({
      height: `${percent}%`
    })
  }
};
const Identity = x => x;

// TODO: remove support for Safari < 13.
// https://caniuse.com/#search=touch-action
//
// Safari, on iOS, supports touch action since v13.
// Over 80% of the iOS phones are compatible
// in August 2020.
// Utilizing the CSS.supports method to check if touch-action is supported.
// Since CSS.supports is supported on all but Edge@12 and IE and touch-action
// is supported on both Edge@12 and IE if CSS.supports is not available that means that
// touch-action will be supported
let cachedSupportsTouchActionNone;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === undefined) {
    if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function') {
      cachedSupportsTouchActionNone = CSS.supports('touch-action', 'none');
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }
  return cachedSupportsTouchActionNone;
}
/**
 *
 * Demos:
 *
 * - [Unstyled Slider](https://mui.com/base/react-slider/#hook)
 *
 * API:
 *
 * - [useSlider API](https://mui.com/base/api/use-slider/)
 */
function useSlider(parameters) {
  const {
    'aria-labelledby': ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = 'horizontal',
    ref,
    scale = Identity,
    step = 1,
    tabIndex,
    value: valueProp
  } = parameters;
  const touchId = react.useRef();
  // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transferred when inversing a range slider.
  const [active, setActive] = react.useState(-1);
  const [open, setOpen] = react.useState(-1);
  const [dragging, setDragging] = react.useState(false);
  const moveCount = react.useRef(0);
  const [valueDerived, setValueState] = (0,useControlled/* default */.Z)({
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : min,
    name: 'Slider'
  });
  const handleChange = onChange && ((event, value, thumbIndex) => {
    // Redefine target to allow name and value to be read.
    // This allows seamless integration with the most popular form libraries.
    // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
    // Clone the event to not override `target` of the original event.
    const nativeEvent = event.nativeEvent || event;
    // @ts-ignore The nativeEvent is function, not object
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, 'target', {
      writable: true,
      value: {
        value,
        name
      }
    });
    onChange(clonedEvent, value, thumbIndex);
  });
  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map(value => clamp(value, min, max));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({
    value: min + step * index
  })) : marksProp || [];
  const marksValues = marks.map(mark => mark.value);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = (0,useIsFocusVisible/* default */.Z)();
  const [focusedThumbIndex, setFocusedThumbIndex] = react.useState(-1);
  const sliderRef = react.useRef();
  const handleFocusRef = (0,useForkRef/* default */.Z)(focusVisibleRef, sliderRef);
  const handleRef = (0,useForkRef/* default */.Z)(ref, handleFocusRef);
  const createHandleHiddenInputFocus = otherHandlers => event => {
    var _otherHandlers$onFocu;
    const index = Number(event.currentTarget.getAttribute('data-index'));
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusedThumbIndex(index);
    }
    setOpen(index);
    otherHandlers == null ? void 0 : (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
  };
  const createHandleHiddenInputBlur = otherHandlers => event => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusedThumbIndex(-1);
    }
    setOpen(-1);
    otherHandlers == null ? void 0 : (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
  };
  (0,useEnhancedEffect/* default */.Z)(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      var _document$activeEleme;
      // This is necessary because Firefox and Safari will keep focus
      // on a disabled element:
      // https://codesandbox.io/s/mui-pr-22247-forked-h151h?file=/src/App.js
      // @ts-ignore
      (_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }
  const createHandleHiddenInputChange = otherHandlers => event => {
    var _otherHandlers$onChan;
    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute('data-index'));
    const value = values[index];
    const marksIndex = marksValues.indexOf(value);

    // @ts-ignore
    let newValue = event.target.valueAsNumber;
    if (marks && step == null) {
      newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
    }
    newValue = clamp(newValue, min, max);
    if (marks && step == null) {
      const currentMarkIndex = marksValues.indexOf(values[index]);
      newValue = newValue < values[index] ? marksValues[currentMarkIndex - 1] : marksValues[currentMarkIndex + 1];
    }
    if (range) {
      // Bound the new value to the thumb's neighbours.
      if (disableSwap) {
        newValue = clamp(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index
      });
      let activeIndex = index;

      // Potentially swap the index if needed.
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }
      focusThumb({
        sliderRef,
        activeIndex
      });
    }
    setValueState(newValue);
    setFocusedThumbIndex(index);
    if (handleChange) {
      handleChange(event, newValue, index);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  };
  const previousIndex = react.useRef();
  let axis = orientation;
  if (isRtl && orientation === 'horizontal') {
    axis += '-reverse';
  }
  const getFingerNewValue = ({
    finger,
    move = false
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width,
      height,
      bottom,
      left
    } = slider.getBoundingClientRect();
    let percent;
    if (axis.indexOf('vertical') === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }
    if (axis.indexOf('-reverse') !== -1) {
      percent = 1 - percent;
    }
    let newValue;
    newValue = percentToValue(percent, min, max);
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp(newValue, min, max);
    let activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values, newValue);
      } else {
        activeIndex = previousIndex.current;
      }

      // Bound the new value to the thumb's neighbours.
      if (disableSwap) {
        newValue = clamp(newValue, values[activeIndex - 1] || -Infinity, values[activeIndex + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index: activeIndex
      });

      // Potentially swap the index if needed.
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }
    return {
      newValue,
      activeIndex
    };
  };
  const handleTouchMove = (0,useEventCallback/* default */.Z)(nativeEvent => {
    const finger = trackFinger(nativeEvent, touchId);
    if (!finger) {
      return;
    }
    moveCount.current += 1;

    // Cancel move in case some other element consumed a mouseup event and it was not fired.
    // @ts-ignore buttons doesn't not exists on touch event
    if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleTouchEnd(nativeEvent);
      return;
    }
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }
    if (handleChange && newValue !== valueDerived) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = (0,useEventCallback/* default */.Z)(nativeEvent => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);
    if (!finger) {
      return;
    }
    const {
      newValue
    } = getFingerNewValue({
      finger,
      move: true
    });
    setActive(-1);
    if (nativeEvent.type === 'touchend') {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }
    touchId.current = undefined;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    stopListening();
  });
  const handleTouchStart = (0,useEventCallback/* default */.Z)(nativeEvent => {
    if (disabled) {
      return;
    }
    // If touch-action: none; is not supported we need to prevent the scroll manually.
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(nativeEvent, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = (0,ownerDocument/* default */.Z)(sliderRef.current);
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });
  const stopListening = react.useCallback(() => {
    const doc = (0,ownerDocument/* default */.Z)(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  react.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener('touchstart', handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      // @ts-ignore
      slider.removeEventListener('touchstart', handleTouchStart, {
        passive: doesSupportTouchActionNone()
      });
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  react.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const createHandleMouseDown = otherHandlers => event => {
    var _otherHandlers$onMous;
    (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
    if (disabled) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }

    // Only handle left clicks
    if (event.button !== 0) {
      return;
    }

    // Avoid text selection
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange) {
        handleChange(event, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = (0,ownerDocument/* default */.Z)(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove);
    doc.addEventListener('mouseup', handleTouchEnd);
  };
  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;
  const getRootProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(otherHandlers || {})
    };
    const mergedEventHandlers = (0,esm_extends/* default */.Z)({}, otherHandlers, ownEventHandlers);
    return (0,esm_extends/* default */.Z)({
      ref: handleRef
    }, mergedEventHandlers);
  };
  const createHandleMouseOver = otherHandlers => event => {
    var _otherHandlers$onMous2;
    (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute('data-index'));
    setOpen(index);
  };
  const createHandleMouseLeave = otherHandlers => event => {
    var _otherHandlers$onMous3;
    (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous3.call(otherHandlers, event);
    setOpen(-1);
  };
  const getThumbProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(otherHandlers || {}),
      onMouseLeave: createHandleMouseLeave(otherHandlers || {})
    };
    return (0,esm_extends/* default */.Z)({}, otherHandlers, ownEventHandlers);
  };
  const getHiddenInputProps = (otherHandlers = {}) => {
    var _parameters$step;
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(otherHandlers || {}),
      onFocus: createHandleHiddenInputFocus(otherHandlers || {}),
      onBlur: createHandleHiddenInputBlur(otherHandlers || {})
    };
    const mergedEventHandlers = (0,esm_extends/* default */.Z)({}, otherHandlers, ownEventHandlers);
    return (0,esm_extends/* default */.Z)({
      tabIndex,
      'aria-labelledby': ariaLabelledby,
      'aria-orientation': orientation,
      'aria-valuemax': scale(max),
      'aria-valuemin': scale(min),
      name,
      type: 'range',
      min: parameters.min,
      max: parameters.max,
      step: (_parameters$step = parameters.step) != null ? _parameters$step : undefined,
      disabled
    }, mergedEventHandlers, {
      style: (0,esm_extends/* default */.Z)({}, esm_visuallyHidden, {
        direction: isRtl ? 'rtl' : 'ltr',
        // So that VoiceOver's focus indicator matches the thumb's dimensions
        width: '100%',
        height: '100%'
      })
    });
  };
  return {
    active,
    axis: axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks: marks,
    open,
    range,
    trackLeap,
    trackOffset,
    values
  };
}
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(41796);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(2734);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/shouldSpreadAdditionalProps.js
var shouldSpreadAdditionalProps = __webpack_require__(96285);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(98216);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Slider/sliderClasses.js


function getSliderUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiSlider', slot);
}
const sliderClasses = (0,generateUtilityClasses/* default */.Z)('MuiSlider', ['root', 'active', 'colorPrimary', 'colorSecondary', 'disabled', 'dragging', 'focusVisible', 'mark', 'markActive', 'marked', 'markLabel', 'markLabelActive', 'rail', 'sizeSmall', 'thumb', 'thumbColorPrimary', 'thumbColorSecondary', 'track', 'trackInverted', 'trackFalse', 'thumbSizeSmall', 'valueLabel', 'valueLabelOpen', 'valueLabelCircle', 'valueLabelLabel', 'vertical']);
/* harmony default export */ var Slider_sliderClasses = (sliderClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Slider/SliderValueLabel.js






const useValueLabelClasses = props => {
  const {
    open
  } = props;
  const utilityClasses = {
    offset: (0,clsx_m/* default */.Z)(open && Slider_sliderClasses.valueLabelOpen),
    circle: Slider_sliderClasses.valueLabelCircle,
    label: Slider_sliderClasses.valueLabelLabel
  };
  return utilityClasses;
};

/**
 * @ignore - internal component.
 */
function SliderValueLabel(props) {
  const {
    children,
    className,
    value
  } = props;
  const classes = useValueLabelClasses(props);
  if (!children) {
    return null;
  }
  return /*#__PURE__*/react.cloneElement(children, {
    className: (0,clsx_m/* default */.Z)(children.props.className)
  }, /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [children.props.children, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: (0,clsx_m/* default */.Z)(classes.offset, className),
      "aria-hidden": true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: classes.circle,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: classes.label,
          children: value
        })
      })
    })]
  }));
}
 false ? 0 : void 0;
;// CONCATENATED MODULE: ./node_modules/@mui/material/Slider/Slider.js


const _excluded = ["aria-label", "aria-valuetext", "aria-labelledby", "component", "components", "componentsProps", "color", "classes", "className", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "size", "step", "scale", "slotProps", "slots", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat"];
















const Slider_valueToPercent = (value, min, max) => (value - min) * 100 / (max - min);
function Slider_Identity(x) {
  return x;
}
const SliderRoot = (0,styled/* default */.ZP)('span', {
  name: 'MuiSlider',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`color${(0,capitalize/* default */.Z)(ownerState.color)}`], ownerState.size !== 'medium' && styles[`size${(0,capitalize/* default */.Z)(ownerState.size)}`], ownerState.marked && styles.marked, ownerState.orientation === 'vertical' && styles.vertical, ownerState.track === 'inverted' && styles.trackInverted, ownerState.track === false && styles.trackFalse];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  borderRadius: 12,
  boxSizing: 'content-box',
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer',
  touchAction: 'none',
  color: (theme.vars || theme).palette[ownerState.color].main,
  WebkitTapHighlightColor: 'transparent'
}, ownerState.orientation === 'horizontal' && (0,esm_extends/* default */.Z)({
  height: 4,
  width: '100%',
  padding: '13px 0',
  // The primary input mechanism of the device includes a pointing device of limited accuracy.
  '@media (pointer: coarse)': {
    // Reach 42px touch target, about ~8mm on screen.
    padding: '20px 0'
  }
}, ownerState.size === 'small' && {
  height: 2
}, ownerState.marked && {
  marginBottom: 20
}), ownerState.orientation === 'vertical' && (0,esm_extends/* default */.Z)({
  height: '100%',
  width: 4,
  padding: '0 13px',
  // The primary input mechanism of the device includes a pointing device of limited accuracy.
  '@media (pointer: coarse)': {
    // Reach 42px touch target, about ~8mm on screen.
    padding: '0 20px'
  }
}, ownerState.size === 'small' && {
  width: 2
}, ownerState.marked && {
  marginRight: 44
}), {
  '@media print': {
    colorAdjust: 'exact'
  },
  [`&.${Slider_sliderClasses.disabled}`]: {
    pointerEvents: 'none',
    cursor: 'default',
    color: (theme.vars || theme).palette.grey[400]
  },
  [`&.${Slider_sliderClasses.dragging}`]: {
    [`& .${Slider_sliderClasses.thumb}, & .${Slider_sliderClasses.track}`]: {
      transition: 'none'
    }
  }
}));
 false ? 0 : void 0;

const SliderRail = (0,styled/* default */.ZP)('span', {
  name: 'MuiSlider',
  slot: 'Rail',
  overridesResolver: (props, styles) => styles.rail
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'block',
  position: 'absolute',
  borderRadius: 'inherit',
  backgroundColor: 'currentColor',
  opacity: 0.38
}, ownerState.orientation === 'horizontal' && {
  width: '100%',
  height: 'inherit',
  top: '50%',
  transform: 'translateY(-50%)'
}, ownerState.orientation === 'vertical' && {
  height: '100%',
  width: 'inherit',
  left: '50%',
  transform: 'translateX(-50%)'
}, ownerState.track === 'inverted' && {
  opacity: 1
}));
 false ? 0 : void 0;

const SliderTrack = (0,styled/* default */.ZP)('span', {
  name: 'MuiSlider',
  slot: 'Track',
  overridesResolver: (props, styles) => styles.track
})(({
  theme,
  ownerState
}) => {
  const color =
  // Same logic as the LinearProgress track color
  theme.palette.mode === 'light' ? (0,colorManipulator/* lighten */.$n)(theme.palette[ownerState.color].main, 0.62) : (0,colorManipulator/* darken */._j)(theme.palette[ownerState.color].main, 0.5);
  return (0,esm_extends/* default */.Z)({
    display: 'block',
    position: 'absolute',
    borderRadius: 'inherit',
    border: '1px solid currentColor',
    backgroundColor: 'currentColor',
    transition: theme.transitions.create(['left', 'width', 'bottom', 'height'], {
      duration: theme.transitions.duration.shortest
    })
  }, ownerState.size === 'small' && {
    border: 'none'
  }, ownerState.orientation === 'horizontal' && {
    height: 'inherit',
    top: '50%',
    transform: 'translateY(-50%)'
  }, ownerState.orientation === 'vertical' && {
    width: 'inherit',
    left: '50%',
    transform: 'translateX(-50%)'
  }, ownerState.track === false && {
    display: 'none'
  }, ownerState.track === 'inverted' && {
    backgroundColor: theme.vars ? theme.vars.palette.Slider[`${ownerState.color}Track`] : color,
    borderColor: theme.vars ? theme.vars.palette.Slider[`${ownerState.color}Track`] : color
  });
});
 false ? 0 : void 0;

const SliderThumb = (0,styled/* default */.ZP)('span', {
  name: 'MuiSlider',
  slot: 'Thumb',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.thumb, styles[`thumbColor${(0,capitalize/* default */.Z)(ownerState.color)}`], ownerState.size !== 'medium' && styles[`thumbSize${(0,capitalize/* default */.Z)(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  position: 'absolute',
  width: 20,
  height: 20,
  boxSizing: 'border-box',
  borderRadius: '50%',
  outline: 0,
  backgroundColor: 'currentColor',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: theme.transitions.create(['box-shadow', 'left', 'bottom'], {
    duration: theme.transitions.duration.shortest
  })
}, ownerState.size === 'small' && {
  width: 12,
  height: 12
}, ownerState.orientation === 'horizontal' && {
  top: '50%',
  transform: 'translate(-50%, -50%)'
}, ownerState.orientation === 'vertical' && {
  left: '50%',
  transform: 'translate(-50%, 50%)'
}, {
  '&:before': (0,esm_extends/* default */.Z)({
    position: 'absolute',
    content: '""',
    borderRadius: 'inherit',
    width: '100%',
    height: '100%',
    boxShadow: (theme.vars || theme).shadows[2]
  }, ownerState.size === 'small' && {
    boxShadow: 'none'
  }),
  '&::after': {
    position: 'absolute',
    content: '""',
    borderRadius: '50%',
    // 42px is the hit target
    width: 42,
    height: 42,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  [`&:hover, &.${Slider_sliderClasses.focusVisible}`]: {
    boxShadow: `0px 0px 0px 8px ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.16)` : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, 0.16)}`,
    '@media (hover: none)': {
      boxShadow: 'none'
    }
  },
  [`&.${Slider_sliderClasses.active}`]: {
    boxShadow: `0px 0px 0px 14px ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.16)` : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, 0.16)}`
  },
  [`&.${Slider_sliderClasses.disabled}`]: {
    '&:hover': {
      boxShadow: 'none'
    }
  }
}));
 false ? 0 : void 0;

const StyledSliderValueLabel = (0,styled/* default */.ZP)(SliderValueLabel, {
  name: 'MuiSlider',
  slot: 'ValueLabel',
  overridesResolver: (props, styles) => styles.valueLabel
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  [`&.${Slider_sliderClasses.valueLabelOpen}`]: {
    transform: 'translateY(-100%) scale(1)'
  },
  zIndex: 1,
  whiteSpace: 'nowrap'
}, theme.typography.body2, {
  fontWeight: 500,
  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.shortest
  }),
  transform: 'translateY(-100%) scale(0)',
  position: 'absolute',
  backgroundColor: (theme.vars || theme).palette.grey[600],
  borderRadius: 2,
  color: (theme.vars || theme).palette.common.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.25rem 0.75rem'
}, ownerState.orientation === 'horizontal' && {
  top: '-10px',
  transformOrigin: 'bottom center',
  '&:before': {
    position: 'absolute',
    content: '""',
    width: 8,
    height: 8,
    transform: 'translate(-50%, 50%) rotate(45deg)',
    backgroundColor: 'inherit',
    bottom: 0,
    left: '50%'
  }
}, ownerState.orientation === 'vertical' && {
  right: '30px',
  top: '24px',
  transformOrigin: 'right center',
  '&:before': {
    position: 'absolute',
    content: '""',
    width: 8,
    height: 8,
    transform: 'translate(-50%, 50%) rotate(45deg)',
    backgroundColor: 'inherit',
    right: '-20%',
    top: '25%'
  }
}, ownerState.size === 'small' && {
  fontSize: theme.typography.pxToRem(12),
  padding: '0.25rem 0.5rem'
}));
 false ? 0 : void 0;

const SliderMark = (0,styled/* default */.ZP)('span', {
  name: 'MuiSlider',
  slot: 'Mark',
  shouldForwardProp: prop => (0,styled/* slotShouldForwardProp */.Dz)(prop) && prop !== 'markActive',
  overridesResolver: (props, styles) => {
    const {
      markActive
    } = props;
    return [styles.mark, markActive && styles.markActive];
  }
})(({
  theme,
  ownerState,
  markActive
}) => (0,esm_extends/* default */.Z)({
  position: 'absolute',
  width: 2,
  height: 2,
  borderRadius: 1,
  backgroundColor: 'currentColor'
}, ownerState.orientation === 'horizontal' && {
  top: '50%',
  transform: 'translate(-1px, -50%)'
}, ownerState.orientation === 'vertical' && {
  left: '50%',
  transform: 'translate(-50%, 1px)'
}, markActive && {
  backgroundColor: (theme.vars || theme).palette.background.paper,
  opacity: 0.8
}));
 false ? 0 : void 0;

const SliderMarkLabel = (0,styled/* default */.ZP)('span', {
  name: 'MuiSlider',
  slot: 'MarkLabel',
  shouldForwardProp: prop => (0,styled/* slotShouldForwardProp */.Dz)(prop) && prop !== 'markLabelActive',
  overridesResolver: (props, styles) => styles.markLabel
})(({
  theme,
  ownerState,
  markLabelActive
}) => (0,esm_extends/* default */.Z)({}, theme.typography.body2, {
  color: (theme.vars || theme).palette.text.secondary,
  position: 'absolute',
  whiteSpace: 'nowrap'
}, ownerState.orientation === 'horizontal' && {
  top: 30,
  transform: 'translateX(-50%)',
  '@media (pointer: coarse)': {
    top: 40
  }
}, ownerState.orientation === 'vertical' && {
  left: 36,
  transform: 'translateY(50%)',
  '@media (pointer: coarse)': {
    left: 44
  }
}, markLabelActive && {
  color: (theme.vars || theme).palette.text.primary
}));
 false ? 0 : void 0;

const useUtilityClasses = ownerState => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track,
    classes,
    color,
    size
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', dragging && 'dragging', marked && 'marked', orientation === 'vertical' && 'vertical', track === 'inverted' && 'trackInverted', track === false && 'trackFalse', color && `color${(0,capitalize/* default */.Z)(color)}`, size && `size${(0,capitalize/* default */.Z)(size)}`],
    rail: ['rail'],
    track: ['track'],
    mark: ['mark'],
    markActive: ['markActive'],
    markLabel: ['markLabel'],
    markLabelActive: ['markLabelActive'],
    valueLabel: ['valueLabel'],
    thumb: ['thumb', disabled && 'disabled', size && `thumbSize${(0,capitalize/* default */.Z)(size)}`, color && `thumbColor${(0,capitalize/* default */.Z)(color)}`],
    active: ['active'],
    disabled: ['disabled'],
    focusVisible: ['focusVisible']
  };
  return (0,composeClasses/* default */.Z)(slots, getSliderUtilityClass, classes);
};
const Forward = ({
  children
}) => children;
const Slider = /*#__PURE__*/react.forwardRef(function Slider(inputProps, ref) {
  var _ref, _slots$root, _ref2, _slots$rail, _ref3, _slots$track, _ref4, _slots$thumb, _ref5, _slots$valueLabel, _ref6, _slots$mark, _ref7, _slots$markLabel, _ref8, _slots$input, _slotProps$root, _slotProps$rail, _slotProps$track, _slotProps$thumb, _slotProps$valueLabel, _slotProps$mark, _slotProps$markLabel, _slotProps$input;
  const props = (0,useThemeProps/* default */.Z)({
    props: inputProps,
    name: 'MuiSlider'
  });
  const theme = (0,useTheme/* default */.Z)();
  const isRtl = theme.direction === 'rtl';
  const {
      'aria-label': ariaLabel,
      'aria-valuetext': ariaValuetext,
      'aria-labelledby': ariaLabelledby,
      // eslint-disable-next-line react/prop-types
      component = 'span',
      components = {},
      componentsProps = {},
      color = 'primary',
      classes: classesProp,
      // eslint-disable-next-line react/prop-types
      className,
      disableSwap = false,
      disabled = false,
      getAriaLabel,
      getAriaValueText,
      marks: marksProp = false,
      max = 100,
      min = 0,
      orientation = 'horizontal',
      size = 'medium',
      step = 1,
      scale = Slider_Identity,
      slotProps,
      slots,
      track = 'normal',
      valueLabelDisplay = 'off',
      valueLabelFormat = Slider_Identity
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    isRtl,
    max,
    min,
    classes: classesProp,
    disabled,
    disableSwap,
    orientation,
    marks: marksProp,
    color,
    size,
    step,
    scale,
    track,
    valueLabelDisplay,
    valueLabelFormat
  });
  const {
    axisProps,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    open,
    active,
    axis,
    focusedThumbIndex,
    range,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap
  } = useSlider((0,esm_extends/* default */.Z)({}, ownerState, {
    ref
  }));
  ownerState.marked = marks.length > 0 && marks.some(mark => mark.label);
  ownerState.dragging = dragging;
  ownerState.focusedThumbIndex = focusedThumbIndex;
  const classes = useUtilityClasses(ownerState);

  // support both `slots` and `components` for backward compatibility
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : SliderRoot;
  const RailSlot = (_ref2 = (_slots$rail = slots == null ? void 0 : slots.rail) != null ? _slots$rail : components.Rail) != null ? _ref2 : SliderRail;
  const TrackSlot = (_ref3 = (_slots$track = slots == null ? void 0 : slots.track) != null ? _slots$track : components.Track) != null ? _ref3 : SliderTrack;
  const ThumbSlot = (_ref4 = (_slots$thumb = slots == null ? void 0 : slots.thumb) != null ? _slots$thumb : components.Thumb) != null ? _ref4 : SliderThumb;
  const ValueLabelSlot = (_ref5 = (_slots$valueLabel = slots == null ? void 0 : slots.valueLabel) != null ? _slots$valueLabel : components.ValueLabel) != null ? _ref5 : StyledSliderValueLabel;
  const MarkSlot = (_ref6 = (_slots$mark = slots == null ? void 0 : slots.mark) != null ? _slots$mark : components.Mark) != null ? _ref6 : SliderMark;
  const MarkLabelSlot = (_ref7 = (_slots$markLabel = slots == null ? void 0 : slots.markLabel) != null ? _slots$markLabel : components.MarkLabel) != null ? _ref7 : SliderMarkLabel;
  const InputSlot = (_ref8 = (_slots$input = slots == null ? void 0 : slots.input) != null ? _slots$input : components.Input) != null ? _ref8 : 'input';
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const railSlotProps = (_slotProps$rail = slotProps == null ? void 0 : slotProps.rail) != null ? _slotProps$rail : componentsProps.rail;
  const trackSlotProps = (_slotProps$track = slotProps == null ? void 0 : slotProps.track) != null ? _slotProps$track : componentsProps.track;
  const thumbSlotProps = (_slotProps$thumb = slotProps == null ? void 0 : slotProps.thumb) != null ? _slotProps$thumb : componentsProps.thumb;
  const valueLabelSlotProps = (_slotProps$valueLabel = slotProps == null ? void 0 : slotProps.valueLabel) != null ? _slotProps$valueLabel : componentsProps.valueLabel;
  const markSlotProps = (_slotProps$mark = slotProps == null ? void 0 : slotProps.mark) != null ? _slotProps$mark : componentsProps.mark;
  const markLabelSlotProps = (_slotProps$markLabel = slotProps == null ? void 0 : slotProps.markLabel) != null ? _slotProps$markLabel : componentsProps.markLabel;
  const inputSlotProps = (_slotProps$input = slotProps == null ? void 0 : slotProps.input) != null ? _slotProps$input : componentsProps.input;
  const rootProps = (0,useSlotProps/* default */.Z)({
    elementType: RootSlot,
    getSlotProps: getRootProps,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    additionalProps: (0,esm_extends/* default */.Z)({}, (0,shouldSpreadAdditionalProps/* default */.Z)(RootSlot) && {
      as: component
    }),
    ownerState: (0,esm_extends/* default */.Z)({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
    className: [classes.root, className]
  });
  const railProps = (0,useSlotProps/* default */.Z)({
    elementType: RailSlot,
    externalSlotProps: railSlotProps,
    ownerState,
    className: classes.rail
  });
  const trackProps = (0,useSlotProps/* default */.Z)({
    elementType: TrackSlot,
    externalSlotProps: trackSlotProps,
    additionalProps: {
      style: (0,esm_extends/* default */.Z)({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap))
    },
    ownerState: (0,esm_extends/* default */.Z)({}, ownerState, trackSlotProps == null ? void 0 : trackSlotProps.ownerState),
    className: classes.track
  });
  const thumbProps = (0,useSlotProps/* default */.Z)({
    elementType: ThumbSlot,
    getSlotProps: getThumbProps,
    externalSlotProps: thumbSlotProps,
    ownerState: (0,esm_extends/* default */.Z)({}, ownerState, thumbSlotProps == null ? void 0 : thumbSlotProps.ownerState)
  });
  const valueLabelProps = (0,useSlotProps/* default */.Z)({
    elementType: ValueLabelSlot,
    externalSlotProps: valueLabelSlotProps,
    ownerState: (0,esm_extends/* default */.Z)({}, ownerState, valueLabelSlotProps == null ? void 0 : valueLabelSlotProps.ownerState),
    className: classes.valueLabel
  });
  const markProps = (0,useSlotProps/* default */.Z)({
    elementType: MarkSlot,
    externalSlotProps: markSlotProps,
    ownerState,
    className: classes.mark
  });
  const markLabelProps = (0,useSlotProps/* default */.Z)({
    elementType: MarkLabelSlot,
    externalSlotProps: markLabelSlotProps,
    ownerState
  });
  const inputSliderProps = (0,useSlotProps/* default */.Z)({
    elementType: InputSlot,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: inputSlotProps,
    ownerState
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(RootSlot, (0,esm_extends/* default */.Z)({}, rootProps, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(RailSlot, (0,esm_extends/* default */.Z)({}, railProps)), /*#__PURE__*/(0,jsx_runtime.jsx)(TrackSlot, (0,esm_extends/* default */.Z)({}, trackProps)), marks.filter(mark => mark.value >= min && mark.value <= max).map((mark, index) => {
      const percent = Slider_valueToPercent(mark.value, min, max);
      const style = axisProps[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MarkSlot, (0,esm_extends/* default */.Z)({
          "data-index": index
        }, markProps, !(0,isHostComponent/* default */.Z)(MarkSlot) && {
          markActive
        }, {
          style: (0,esm_extends/* default */.Z)({}, style, markProps.style),
          className: (0,clsx_m/* default */.Z)(markProps.className, markActive && classes.markActive)
        })), mark.label != null ? /*#__PURE__*/(0,jsx_runtime.jsx)(MarkLabelSlot, (0,esm_extends/* default */.Z)({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !(0,isHostComponent/* default */.Z)(MarkLabelSlot) && {
          markLabelActive: markActive
        }, {
          style: (0,esm_extends/* default */.Z)({}, style, markLabelProps.style),
          className: (0,clsx_m/* default */.Z)(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, index);
    }), values.map((value, index) => {
      const percent = Slider_valueToPercent(value, min, max);
      const style = axisProps[axis].offset(percent);
      const ValueLabelComponent = valueLabelDisplay === 'off' ? Forward : ValueLabelSlot;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ValueLabelComponent, (0,esm_extends/* default */.Z)({}, !(0,isHostComponent/* default */.Z)(ValueLabelComponent) && {
          valueLabelFormat,
          valueLabelDisplay,
          value: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat,
          index,
          open: open === index || active === index || valueLabelDisplay === 'on',
          disabled
        }, valueLabelProps, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ThumbSlot, (0,esm_extends/* default */.Z)({
            "data-index": index,
            "data-focusvisible": focusedThumbIndex === index
          }, thumbProps, {
            className: (0,clsx_m/* default */.Z)(classes.thumb, thumbProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
            style: (0,esm_extends/* default */.Z)({}, style, {
              pointerEvents: disableSwap && active !== index ? 'none' : undefined
            }, thumbProps.style),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputSlot, (0,esm_extends/* default */.Z)({
              "data-index": index,
              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
              "aria-valuenow": scale(value),
              "aria-labelledby": ariaLabelledby,
              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
              value: values[index]
            }, inputSliderProps))
          }))
        }))
      }, index);
    })]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Slider_Slider = (Slider);

/***/ })

}]);
//# sourceMappingURL=9d257ea9d5f1e46cbaa13d3657e19100b363ef47-b01ffded5f2b21f53f5e.js.map