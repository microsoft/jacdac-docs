"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9885],{

/***/ 45111:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m7 10 5 5 5-5z"
}), 'ArrowDropDown');
exports.Z = _default;

/***/ }),

/***/ 21596:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m10 17 5-5-5-5v10z"
}), 'ArrowRight');
exports.Z = _default;

/***/ }),

/***/ 62177:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning');
exports.Z = _default;

/***/ }),

/***/ 89757:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TreeView_TreeView; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(2734);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useId.js
var useId = __webpack_require__(27909);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(51705);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useControlled.js
var useControlled = __webpack_require__(49299);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@mui/lab/TreeView/TreeViewContext.js
var TreeViewContext = __webpack_require__(36915);
// EXTERNAL MODULE: ./node_modules/@mui/lab/TreeView/descendants.js
var descendants = __webpack_require__(92141);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
;// CONCATENATED MODULE: ./node_modules/@mui/lab/TreeView/treeViewClasses.js


function getTreeViewUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTreeView', slot);
}
const treeViewClasses = (0,generateUtilityClasses/* default */.Z)('MuiTreeView', ['root']);
/* harmony default export */ var TreeView_treeViewClasses = ((/* unused pure expression or super */ null && (treeViewClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/lab/TreeView/TreeView.js


const _excluded = ["children", "className", "defaultCollapseIcon", "defaultEndIcon", "defaultExpanded", "defaultExpandIcon", "defaultParentIcon", "defaultSelected", "disabledItemsFocusable", "disableSelection", "expanded", "id", "multiSelect", "onBlur", "onFocus", "onKeyDown", "onNodeFocus", "onNodeSelect", "onNodeToggle", "selected"];










const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTreeViewUtilityClass, classes);
};
const TreeViewRoot = (0,styled/* default */.ZP)('ul', {
  name: 'MuiTreeView',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  padding: 0,
  margin: 0,
  listStyle: 'none',
  outline: 0
});
function isPrintableCharacter(string) {
  return string && string.length === 1 && string.match(/\S/);
}
function findNextFirstChar(firstChars, startIndex, char) {
  for (let i = startIndex; i < firstChars.length; i += 1) {
    if (char === firstChars[i]) {
      return i;
    }
  }
  return -1;
}
function noopSelection() {
  return false;
}
const defaultDefaultExpanded = [];
const defaultDefaultSelected = [];
const TreeView = /*#__PURE__*/react.forwardRef(function TreeView(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTreeView'
  });
  const {
      children,
      className,
      defaultCollapseIcon,
      defaultEndIcon,
      defaultExpanded = defaultDefaultExpanded,
      defaultExpandIcon,
      defaultParentIcon,
      defaultSelected = defaultDefaultSelected,
      disabledItemsFocusable = false,
      disableSelection = false,
      expanded: expandedProp,
      id: idProp,
      multiSelect = false,
      onBlur,
      onFocus,
      onKeyDown,
      onNodeFocus,
      onNodeSelect,
      onNodeToggle,
      selected: selectedProp
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const theme = (0,useTheme/* default */.Z)();
  const isRtl = theme.direction === 'rtl';
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    defaultExpanded,
    defaultSelected,
    disabledItemsFocusable,
    disableSelection,
    multiSelect
  });
  const classes = useUtilityClasses(ownerState);
  const treeId = (0,useId/* default */.Z)(idProp);
  const treeRef = react.useRef(null);
  const handleRef = (0,useForkRef/* default */.Z)(treeRef, ref);
  const [focusedNodeId, setFocusedNodeId] = react.useState(null);
  const nodeMap = react.useRef({});
  const firstCharMap = react.useRef({});
  const [expanded, setExpandedState] = (0,useControlled/* default */.Z)({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'TreeView',
    state: 'expanded'
  });
  const [selected, setSelectedState] = (0,useControlled/* default */.Z)({
    controlled: selectedProp,
    default: defaultSelected,
    name: 'TreeView',
    state: 'selected'
  });

  /*
   * Status Helpers
   */
  const isExpanded = react.useCallback(id => Array.isArray(expanded) ? expanded.indexOf(id) !== -1 : false, [expanded]);
  const isExpandable = react.useCallback(id => nodeMap.current[id] && nodeMap.current[id].expandable, []);
  const isSelected = react.useCallback(id => Array.isArray(selected) ? selected.indexOf(id) !== -1 : selected === id, [selected]);
  const isDisabled = react.useCallback(id => {
    let node = nodeMap.current[id];

    // This can be called before the node has been added to the node map.
    if (!node) {
      return false;
    }
    if (node.disabled) {
      return true;
    }
    while (node.parentId != null) {
      node = nodeMap.current[node.parentId];
      if (node.disabled) {
        return true;
      }
    }
    return false;
  }, []);
  const isFocused = id => focusedNodeId === id;

  /*
   * Child Helpers
   */

  // Using Object.keys -> .map to mimic Object.values we should replace with Object.values() once we stop IE11 support.
  const getChildrenIds = id => Object.keys(nodeMap.current).map(key => {
    return nodeMap.current[key];
  }).filter(node => node.parentId === id).sort((a, b) => a.index - b.index).map(child => child.id);
  const getNavigableChildrenIds = id => {
    let childrenIds = getChildrenIds(id);
    if (!disabledItemsFocusable) {
      childrenIds = childrenIds.filter(node => !isDisabled(node));
    }
    return childrenIds;
  };

  /*
   * Node Helpers
   */

  const getNextNode = id => {
    // If expanded get first child
    if (isExpanded(id) && getNavigableChildrenIds(id).length > 0) {
      return getNavigableChildrenIds(id)[0];
    }
    let node = nodeMap.current[id];
    while (node != null) {
      // Try to get next sibling
      const siblings = getNavigableChildrenIds(node.parentId);
      const nextSibling = siblings[siblings.indexOf(node.id) + 1];
      if (nextSibling) {
        return nextSibling;
      }

      // If the sibling does not exist, go up a level to the parent and try again.
      node = nodeMap.current[node.parentId];
    }
    return null;
  };
  const getPreviousNode = id => {
    const node = nodeMap.current[id];
    const siblings = getNavigableChildrenIds(node.parentId);
    const nodeIndex = siblings.indexOf(id);
    if (nodeIndex === 0) {
      return node.parentId;
    }
    let currentNode = siblings[nodeIndex - 1];
    while (isExpanded(currentNode) && getNavigableChildrenIds(currentNode).length > 0) {
      currentNode = getNavigableChildrenIds(currentNode).pop();
    }
    return currentNode;
  };
  const getLastNode = () => {
    let lastNode = getNavigableChildrenIds(null).pop();
    while (isExpanded(lastNode)) {
      lastNode = getNavigableChildrenIds(lastNode).pop();
    }
    return lastNode;
  };
  const getFirstNode = () => getNavigableChildrenIds(null)[0];
  const getParent = id => nodeMap.current[id].parentId;

  /**
   * This is used to determine the start and end of a selection range so
   * we can get the nodes between the two border nodes.
   *
   * It finds the nodes' common ancestor using
   * a naive implementation of a lowest common ancestor algorithm
   * (https://en.wikipedia.org/wiki/Lowest_common_ancestor).
   * Then compares the ancestor's 2 children that are ancestors of nodeA and NodeB
   * so we can compare their indexes to work out which node comes first in a depth first search.
   * (https://en.wikipedia.org/wiki/Depth-first_search)
   *
   * Another way to put it is which node is shallower in a trémaux tree
   * https://en.wikipedia.org/wiki/Tr%C3%A9maux_tree
   */
  const findOrderInTremauxTree = (nodeAId, nodeBId) => {
    if (nodeAId === nodeBId) {
      return [nodeAId, nodeBId];
    }
    const nodeA = nodeMap.current[nodeAId];
    const nodeB = nodeMap.current[nodeBId];
    if (nodeA.parentId === nodeB.id || nodeB.parentId === nodeA.id) {
      return nodeB.parentId === nodeA.id ? [nodeA.id, nodeB.id] : [nodeB.id, nodeA.id];
    }
    const aFamily = [nodeA.id];
    const bFamily = [nodeB.id];
    let aAncestor = nodeA.parentId;
    let bAncestor = nodeB.parentId;
    let aAncestorIsCommon = bFamily.indexOf(aAncestor) !== -1;
    let bAncestorIsCommon = aFamily.indexOf(bAncestor) !== -1;
    let continueA = true;
    let continueB = true;
    while (!bAncestorIsCommon && !aAncestorIsCommon) {
      if (continueA) {
        aFamily.push(aAncestor);
        aAncestorIsCommon = bFamily.indexOf(aAncestor) !== -1;
        continueA = aAncestor !== null;
        if (!aAncestorIsCommon && continueA) {
          aAncestor = nodeMap.current[aAncestor].parentId;
        }
      }
      if (continueB && !aAncestorIsCommon) {
        bFamily.push(bAncestor);
        bAncestorIsCommon = aFamily.indexOf(bAncestor) !== -1;
        continueB = bAncestor !== null;
        if (!bAncestorIsCommon && continueB) {
          bAncestor = nodeMap.current[bAncestor].parentId;
        }
      }
    }
    const commonAncestor = aAncestorIsCommon ? aAncestor : bAncestor;
    const ancestorFamily = getChildrenIds(commonAncestor);
    const aSide = aFamily[aFamily.indexOf(commonAncestor) - 1];
    const bSide = bFamily[bFamily.indexOf(commonAncestor) - 1];
    return ancestorFamily.indexOf(aSide) < ancestorFamily.indexOf(bSide) ? [nodeAId, nodeBId] : [nodeBId, nodeAId];
  };
  const getNodesInRange = (nodeA, nodeB) => {
    const [first, last] = findOrderInTremauxTree(nodeA, nodeB);
    const nodes = [first];
    let current = first;
    while (current !== last) {
      current = getNextNode(current);
      nodes.push(current);
    }
    return nodes;
  };

  /*
   * Focus Helpers
   */

  const focus = (event, id) => {
    if (id) {
      setFocusedNodeId(id);
      if (onNodeFocus) {
        onNodeFocus(event, id);
      }
    }
  };
  const focusNextNode = (event, id) => focus(event, getNextNode(id));
  const focusPreviousNode = (event, id) => focus(event, getPreviousNode(id));
  const focusFirstNode = event => focus(event, getFirstNode());
  const focusLastNode = event => focus(event, getLastNode());
  const focusByFirstCharacter = (event, id, char) => {
    let start;
    let index;
    const lowercaseChar = char.toLowerCase();
    const firstCharIds = [];
    const firstChars = [];
    // This really only works since the ids are strings
    Object.keys(firstCharMap.current).forEach(nodeId => {
      const firstChar = firstCharMap.current[nodeId];
      const map = nodeMap.current[nodeId];
      const visible = map.parentId ? isExpanded(map.parentId) : true;
      const shouldBeSkipped = disabledItemsFocusable ? false : isDisabled(nodeId);
      if (visible && !shouldBeSkipped) {
        firstCharIds.push(nodeId);
        firstChars.push(firstChar);
      }
    });

    // Get start index for search based on position of currentItem
    start = firstCharIds.indexOf(id) + 1;
    if (start >= firstCharIds.length) {
      start = 0;
    }

    // Check remaining slots in the menu
    index = findNextFirstChar(firstChars, start, lowercaseChar);

    // If not found in remaining slots, check from beginning
    if (index === -1) {
      index = findNextFirstChar(firstChars, 0, lowercaseChar);
    }

    // If match was found...
    if (index > -1) {
      focus(event, firstCharIds[index]);
    }
  };

  /*
   * Expansion Helpers
   */

  const toggleExpansion = (event, value = focusedNodeId) => {
    let newExpanded;
    if (expanded.indexOf(value) !== -1) {
      newExpanded = expanded.filter(id => id !== value);
    } else {
      newExpanded = [value].concat(expanded);
    }
    if (onNodeToggle) {
      onNodeToggle(event, newExpanded);
    }
    setExpandedState(newExpanded);
  };
  const expandAllSiblings = (event, id) => {
    const map = nodeMap.current[id];
    const siblings = getChildrenIds(map.parentId);
    const diff = siblings.filter(child => isExpandable(child) && !isExpanded(child));
    const newExpanded = expanded.concat(diff);
    if (diff.length > 0) {
      setExpandedState(newExpanded);
      if (onNodeToggle) {
        onNodeToggle(event, newExpanded);
      }
    }
  };

  /*
   * Selection Helpers
   */

  const lastSelectedNode = react.useRef(null);
  const lastSelectionWasRange = react.useRef(false);
  const currentRangeSelection = react.useRef([]);
  const handleRangeArrowSelect = (event, nodes) => {
    let base = selected.slice();
    const {
      start,
      next,
      current
    } = nodes;
    if (!next || !current) {
      return;
    }
    if (currentRangeSelection.current.indexOf(current) === -1) {
      currentRangeSelection.current = [];
    }
    if (lastSelectionWasRange.current) {
      if (currentRangeSelection.current.indexOf(next) !== -1) {
        base = base.filter(id => id === start || id !== current);
        currentRangeSelection.current = currentRangeSelection.current.filter(id => id === start || id !== current);
      } else {
        base.push(next);
        currentRangeSelection.current.push(next);
      }
    } else {
      base.push(next);
      currentRangeSelection.current.push(current, next);
    }
    if (onNodeSelect) {
      onNodeSelect(event, base);
    }
    setSelectedState(base);
  };
  const handleRangeSelect = (event, nodes) => {
    let base = selected.slice();
    const {
      start,
      end
    } = nodes;
    // If last selection was a range selection ignore nodes that were selected.
    if (lastSelectionWasRange.current) {
      base = base.filter(id => currentRangeSelection.current.indexOf(id) === -1);
    }
    let range = getNodesInRange(start, end);
    range = range.filter(node => !isDisabled(node));
    currentRangeSelection.current = range;
    let newSelected = base.concat(range);
    newSelected = newSelected.filter((id, i) => newSelected.indexOf(id) === i);
    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }
    setSelectedState(newSelected);
  };
  const handleMultipleSelect = (event, value) => {
    let newSelected;
    if (selected.indexOf(value) !== -1) {
      newSelected = selected.filter(id => id !== value);
    } else {
      newSelected = [value].concat(selected);
    }
    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }
    setSelectedState(newSelected);
  };
  const handleSingleSelect = (event, value) => {
    const newSelected = multiSelect ? [value] : value;
    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }
    setSelectedState(newSelected);
  };
  const selectNode = (event, id, multiple = false) => {
    if (id) {
      if (multiple) {
        handleMultipleSelect(event, id);
      } else {
        handleSingleSelect(event, id);
      }
      lastSelectedNode.current = id;
      lastSelectionWasRange.current = false;
      currentRangeSelection.current = [];
      return true;
    }
    return false;
  };
  const selectRange = (event, nodes, stacked = false) => {
    const {
      start = lastSelectedNode.current,
      end,
      current
    } = nodes;
    if (stacked) {
      handleRangeArrowSelect(event, {
        start,
        next: end,
        current
      });
    } else if (start != null && end != null) {
      handleRangeSelect(event, {
        start,
        end
      });
    }
    lastSelectionWasRange.current = true;
  };
  const rangeSelectToFirst = (event, id) => {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }
    const start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    selectRange(event, {
      start,
      end: getFirstNode()
    });
  };
  const rangeSelectToLast = (event, id) => {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }
    const start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    selectRange(event, {
      start,
      end: getLastNode()
    });
  };
  const selectNextNode = (event, id) => {
    if (!isDisabled(getNextNode(id))) {
      selectRange(event, {
        end: getNextNode(id),
        current: id
      }, true);
    }
  };
  const selectPreviousNode = (event, id) => {
    if (!isDisabled(getPreviousNode(id))) {
      selectRange(event, {
        end: getPreviousNode(id),
        current: id
      }, true);
    }
  };
  const selectAllNodes = event => {
    selectRange(event, {
      start: getFirstNode(),
      end: getLastNode()
    });
  };

  /*
   * Mapping Helpers
   */
  const registerNode = react.useCallback(node => {
    const {
      id,
      index,
      parentId,
      expandable,
      idAttribute,
      disabled
    } = node;
    nodeMap.current[id] = {
      id,
      index,
      parentId,
      expandable,
      idAttribute,
      disabled
    };
  }, []);
  const unregisterNode = react.useCallback(id => {
    const newMap = (0,esm_extends/* default */.Z)({}, nodeMap.current);
    delete newMap[id];
    nodeMap.current = newMap;
    setFocusedNodeId(oldFocusedNodeId => {
      if (oldFocusedNodeId === id && treeRef.current === (0,ownerDocument/* default */.Z)(treeRef.current).activeElement) {
        return getChildrenIds(null)[0];
      }
      return oldFocusedNodeId;
    });
  }, []);
  const mapFirstChar = react.useCallback((id, firstChar) => {
    firstCharMap.current[id] = firstChar;
  }, []);
  const unMapFirstChar = react.useCallback(id => {
    const newMap = (0,esm_extends/* default */.Z)({}, firstCharMap.current);
    delete newMap[id];
    firstCharMap.current = newMap;
  }, []);

  /**
   * Event handlers and Navigation
   */

  const handleNextArrow = event => {
    if (isExpandable(focusedNodeId)) {
      if (isExpanded(focusedNodeId)) {
        focusNextNode(event, focusedNodeId);
      } else if (!isDisabled(focusedNodeId)) {
        toggleExpansion(event);
      }
    }
    return true;
  };
  const handlePreviousArrow = event => {
    if (isExpanded(focusedNodeId) && !isDisabled(focusedNodeId)) {
      toggleExpansion(event, focusedNodeId);
      return true;
    }
    const parent = getParent(focusedNodeId);
    if (parent) {
      focus(event, parent);
      return true;
    }
    return false;
  };
  const handleKeyDown = event => {
    let flag = false;
    const key = event.key;

    // If the tree is empty there will be no focused node
    if (event.altKey || event.currentTarget !== event.target || !focusedNodeId) {
      return;
    }
    const ctrlPressed = event.ctrlKey || event.metaKey;
    switch (key) {
      case ' ':
        if (!disableSelection && !isDisabled(focusedNodeId)) {
          if (multiSelect && event.shiftKey) {
            selectRange(event, {
              end: focusedNodeId
            });
            flag = true;
          } else if (multiSelect) {
            flag = selectNode(event, focusedNodeId, true);
          } else {
            flag = selectNode(event, focusedNodeId);
          }
        }
        event.stopPropagation();
        break;
      case 'Enter':
        if (!isDisabled(focusedNodeId)) {
          if (isExpandable(focusedNodeId)) {
            toggleExpansion(event);
            flag = true;
          } else if (multiSelect) {
            flag = selectNode(event, focusedNodeId, true);
          } else {
            flag = selectNode(event, focusedNodeId);
          }
        }
        event.stopPropagation();
        break;
      case 'ArrowDown':
        if (multiSelect && event.shiftKey && !disableSelection) {
          selectNextNode(event, focusedNodeId);
        }
        focusNextNode(event, focusedNodeId);
        flag = true;
        break;
      case 'ArrowUp':
        if (multiSelect && event.shiftKey && !disableSelection) {
          selectPreviousNode(event, focusedNodeId);
        }
        focusPreviousNode(event, focusedNodeId);
        flag = true;
        break;
      case 'ArrowRight':
        if (isRtl) {
          flag = handlePreviousArrow(event);
        } else {
          flag = handleNextArrow(event);
        }
        break;
      case 'ArrowLeft':
        if (isRtl) {
          flag = handleNextArrow(event);
        } else {
          flag = handlePreviousArrow(event);
        }
        break;
      case 'Home':
        if (multiSelect && ctrlPressed && event.shiftKey && !disableSelection && !isDisabled(focusedNodeId)) {
          rangeSelectToFirst(event, focusedNodeId);
        }
        focusFirstNode(event);
        flag = true;
        break;
      case 'End':
        if (multiSelect && ctrlPressed && event.shiftKey && !disableSelection && !isDisabled(focusedNodeId)) {
          rangeSelectToLast(event, focusedNodeId);
        }
        focusLastNode(event);
        flag = true;
        break;
      default:
        if (key === '*') {
          expandAllSiblings(event, focusedNodeId);
          flag = true;
        } else if (multiSelect && ctrlPressed && key.toLowerCase() === 'a' && !disableSelection) {
          selectAllNodes(event);
          flag = true;
        } else if (!ctrlPressed && !event.shiftKey && isPrintableCharacter(key)) {
          focusByFirstCharacter(event, focusedNodeId, key);
          flag = true;
        }
    }
    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleFocus = event => {
    // if the event bubbled (which is React specific) we don't want to steal focus
    if (event.target === event.currentTarget) {
      const firstSelected = Array.isArray(selected) ? selected[0] : selected;
      focus(event, firstSelected || getNavigableChildrenIds(null)[0]);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const handleBlur = event => {
    setFocusedNodeId(null);
    if (onBlur) {
      onBlur(event);
    }
  };
  const activeDescendant = nodeMap.current[focusedNodeId] ? nodeMap.current[focusedNodeId].idAttribute : null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TreeViewContext/* default.Provider */.Z.Provider, {
    // TODO: fix this lint error
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    value: {
      icons: {
        defaultCollapseIcon,
        defaultExpandIcon,
        defaultParentIcon,
        defaultEndIcon
      },
      focus,
      toggleExpansion,
      isExpanded,
      isExpandable,
      isFocused,
      isSelected,
      isDisabled,
      selectNode: disableSelection ? noopSelection : selectNode,
      selectRange: disableSelection ? noopSelection : selectRange,
      multiSelect,
      disabledItemsFocusable,
      mapFirstChar,
      unMapFirstChar,
      registerNode,
      unregisterNode,
      treeId
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(descendants/* DescendantProvider */.w, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeViewRoot, (0,esm_extends/* default */.Z)({
        role: "tree",
        id: treeId,
        "aria-activedescendant": activeDescendant,
        "aria-multiselectable": multiSelect,
        className: (0,clsx_m/* default */.Z)(classes.root, className),
        ref: handleRef,
        tabIndex: 0,
        onKeyDown: handleKeyDown,
        onFocus: handleFocus,
        onBlur: handleBlur,
        ownerState: ownerState
      }, other, {
        children: children
      }))
    })
  });
});
 false ? 0 : void 0;
/* harmony default export */ var TreeView_TreeView = (TreeView);

/***/ }),

/***/ 36915:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


/**
 * @ignore - internal component.
 */
const TreeViewContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
if (false) {}
/* harmony default export */ __webpack_exports__["Z"] = (TreeViewContext);

/***/ }),

/***/ 92141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": function() { return /* binding */ useDescendant; },
/* harmony export */   "w": function() { return /* binding */ DescendantProvider; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);


const _excluded = ["element"];




/** Credit: https://github.com/reach/reach-ui/blob/86a046f54d53b6420e392b3fa56dd991d9d4e458/packages/descendants/README.md
 *  Modified slightly to suit our purposes.
 */

// To replace with .findIndex() once we stop IE11 support.

function findIndex(array, comp) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }
  return -1;
}
function binaryFindElement(array, element) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (array[middle].element === element) {
      return middle;
    }

    // eslint-disable-next-line no-bitwise
    if (array[middle].element.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return start;
}
const DescendantContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
if (false) {}
function usePrevious(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
const noop = () => {};

/**
 * This hook registers our descendant by passing it into an array. We can then
 * search that array by to find its index when registering it in the component.
 * We use this for focus management, keyboard navigation, and typeahead
 * functionality for some components.
 *
 * The hook accepts the element node
 *
 * Our main goals with this are:
 *   1) maximum composability,
 *   2) minimal API friction
 *   3) SSR compatibility*
 *   4) concurrent safe
 *   5) index always up-to-date with the tree despite changes
 *   6) works with memoization of any component in the tree (hopefully)
 *
 * * As for SSR, the good news is that we don't actually need the index on the
 * server for most use-cases, as we are only using it to determine the order of
 * composed descendants for keyboard navigation.
 */
function useDescendant(descendant) {
  const [, forceUpdate] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  const {
    registerDescendant = noop,
    unregisterDescendant = noop,
    descendants = [],
    parentId = null
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DescendantContext);

  // This will initially return -1 because we haven't registered the descendant
  // on the first render. After we register, this will then return the correct
  // index on the following render and we will re-register descendants
  // so that everything is up-to-date before the user interacts with a
  // collection.
  const index = findIndex(descendants, item => item.element === descendant.element);
  const previousDescendants = usePrevious(descendants);

  // We also need to re-register descendants any time ANY of the other
  // descendants have changed. My brain was melting when I wrote this and it
  // feels a little off, but checking in render and using the result in the
  // effect's dependency array works well enough.
  const someDescendantsHaveChanged = descendants.some((newDescendant, position) => {
    return previousDescendants && previousDescendants[position] && previousDescendants[position].element !== newDescendant.element;
  });

  // Prevent any flashing
  (0,_mui_material_utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(() => {
    if (descendant.element) {
      registerDescendant((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, descendant, {
        index
      }));
      return () => {
        unregisterDescendant(descendant.element);
      };
    }
    forceUpdate({});
    return undefined;
  }, [registerDescendant, unregisterDescendant, index, someDescendantsHaveChanged, descendant]);
  return {
    parentId,
    index
  };
}
function DescendantProvider(props) {
  const {
    children,
    id
  } = props;
  const [items, set] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
  const registerDescendant = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(_ref => {
    let {
        element
      } = _ref,
      other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref, _excluded);
    set(oldItems => {
      let newItems;
      if (oldItems.length === 0) {
        // If there are no items, register at index 0 and bail.
        return [(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, other, {
          element,
          index: 0
        })];
      }
      const index = binaryFindElement(oldItems, element);
      if (oldItems[index] && oldItems[index].element === element) {
        // If the element is already registered, just use the same array
        newItems = oldItems;
      } else {
        // When registering a descendant, we need to make sure we insert in
        // into the array in the same order that it appears in the DOM. So as
        // new descendants are added or maybe some are removed, we always know
        // that the array is up-to-date and correct.
        //
        // So here we look at our registered descendants and see if the new
        // element we are adding appears earlier than an existing descendant's
        // DOM node via `node.compareDocumentPosition`. If it does, we insert
        // the new element at this index. Because `registerDescendant` will be
        // called in an effect every time the descendants state value changes,
        // we should be sure that this index is accurate when descendent
        // elements come or go from our component.

        const newItem = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, other, {
          element,
          index
        });

        // If an index is not found we will push the element to the end.
        newItems = oldItems.slice();
        newItems.splice(index, 0, newItem);
      }
      newItems.forEach((item, position) => {
        item.index = position;
      });
      return newItems;
    });
  }, []);
  const unregisterDescendant = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(element => {
    set(oldItems => oldItems.filter(item => element !== item.element));
  }, []);
  const value = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    descendants: items,
    registerDescendant,
    unregisterDescendant,
    parentId: id
  }), [items, registerDescendant, unregisterDescendant, id]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DescendantContext.Provider, {
    value: value,
    children: children
  });
}
 false ? 0 : void 0;

/***/ }),

/***/ 55329:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AnnounceFlagsTreeItem; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_StyledTreeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25981);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36807);
/* harmony import */ var _DeviceActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42714);
function AnnounceFlagsTreeItem(props){var{device,showIdentify}=props;var{announceFlags,id,deviceId,restartCounter,proxy}=device;var text=[deviceId,proxy&&"proxy",announceFlags&_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .ControlAnnounceFlags.IsClient */ .P99.IsClient&&"client",announceFlags&_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .ControlAnnounceFlags.SupportsACK */ .P99.SupportsACK&&"acks",announceFlags&_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .ControlAnnounceFlags.SupportsBroadcast */ .P99.SupportsBroadcast&&"broadcast",announceFlags&_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .ControlAnnounceFlags.SupportsFrames */ .P99.SupportsFrames&&"frames",(announceFlags&_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .ControlAnnounceFlags.StatusLightRgbFade */ .P99.StatusLightRgbFade)===_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .ControlAnnounceFlags.StatusLightMono */ .P99.StatusLightMono&&"mono status LED",(announceFlags&_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .ControlAnnounceFlags.StatusLightRgbFade */ .P99.StatusLightRgbFade)===_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .ControlAnnounceFlags.StatusLightRgbNoFade */ .P99.StatusLightRgbNoFade&&"rgb no fade status LED",(announceFlags&_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .ControlAnnounceFlags.StatusLightRgbFade */ .P99.StatusLightRgbFade)===_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .ControlAnnounceFlags.StatusLightRgbFade */ .P99.StatusLightRgbFade&&"rgb fade status LED",restartCounter<0xf?"restart#"+restartCounter:undefined].filter(f=>!!f).join(", ");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_StyledTreeItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{nodeId:id+":flags",labelText:text,actions:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeviceActions__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{device:device,showReset:true,showProxy:true,hideIdentity:!showIdentify})});}

/***/ }),

/***/ 25241:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yw": function() { return /* binding */ DeviceTreeItem; },
  "qX": function() { return /* binding */ RegisterTreeItem; }
});

// UNUSED EXPORTS: EventTreeItem, ServiceMembersTreeItems, ServiceTreeItem

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(62070);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(9680);
// EXTERNAL MODULE: ./src/jacdac/useEventCount.ts
var useEventCount = __webpack_require__(67768);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./src/jacdac/useEventRaised.ts
var useEventRaised = __webpack_require__(88286);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./src/components/devices/useDeviceName.ts
var useDeviceName = __webpack_require__(83100);
// EXTERNAL MODULE: ./src/components/ui/StyledTreeItem.tsx + 4 modules
var StyledTreeItem = __webpack_require__(25981);
// EXTERNAL MODULE: ./src/components/services/useInstanceName.ts
var useInstanceName = __webpack_require__(28709);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(36807);
// EXTERNAL MODULE: ./src/jacdac/useServiceSpecification.ts
var useServiceSpecification = __webpack_require__(75706);
;// CONCATENATED MODULE: ./src/components/hooks/useBestRegister.ts
function useBestRegister(service){var specification=(0,useServiceSpecification/* useServiceSpecification */.a)(service);return (0,react.useMemo)(()=>{var hasReading=specification===null||specification===void 0?void 0:specification.packets.some(reg=>(0,spec/* isReading */.vz)(reg));if(hasReading)return service.register(specconstants/* SystemReg.Reading */.ZJq.Reading);var hasValue=specification===null||specification===void 0?void 0:specification.packets.some(reg=>(0,spec/* isValue */.wh)(reg));if(hasValue)return service.register(specconstants/* SystemReg.Value */.ZJq.Value);var hasIntensity=specification===null||specification===void 0?void 0:specification.packets.some(reg=>(0,spec/* isValueOrIntensity */.sX)(reg));if(hasIntensity)return service.register(specconstants/* SystemReg.Intensity */.ZJq.Intensity);return undefined;},[service,specification]);}
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(18763);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 1 modules
var DeviceAvatar = __webpack_require__(30841);
// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__(11352);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/catalog.ts + 1 modules
var catalog = __webpack_require__(5018);
;// CONCATENATED MODULE: ./src/components/devices/DeviceInformationTreeItem.tsx
function DeviceProductInformationTreeItem(props){var{device}=props;var{id}=device;var specification=(0,useDeviceSpecification/* default */.ZP)(device);if(!specification)return null;var to="/devices/"+(0,catalog/* identifierToUrlPath */.uM)(specification.id);return/*#__PURE__*/react.createElement(StyledTreeItem/* default */.Z,{nodeId:id+":catalog",labelTo:to,labelText:specification.name,labelInfo:specification.company});}
// EXTERNAL MODULE: ./src/components/devices/AnnounceFlagsTreeItem.tsx
var AnnounceFlagsTreeItem = __webpack_require__(55329);
// EXTERNAL MODULE: ./src/jacdac/useDeviceDescription.ts
var useDeviceDescription = __webpack_require__(69461);
;// CONCATENATED MODULE: ./src/components/tools/JDomTreeViewItems.tsx
var _excluded=["device","serviceFilter"],_excluded2=["service","registerFilter","eventFilter"];// tslint:disable-next-line: no-submodule-imports match-default-export-name
function DeviceTreeItem(props){var{device,serviceFilter}=props,other=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);var{id,isPhysical}=(0,react.useMemo)(()=>device,[device]);var name=(0,useDeviceName/* default */.Z)(device,true);var description=(0,useDeviceDescription/* default */.Z)(device);var kind=isPhysical?"device":"virtualdevice";var lost=(0,useEventRaised/* default */.Z)([constants/* LOST */.XWw,constants/* FOUND */.a6y],device,dev=>!!(dev!==null&&dev!==void 0&&dev.lost));var services=(0,useEventRaised/* default */.Z)(constants/* ANNOUNCE */.oNX,device,_=>_.services({mixins:false}).filter(srv=>!serviceFilter||serviceFilter(srv)));var stats=(0,useChange/* default */.Z)(device,_=>_.stats);var dropped=(0,useChange/* default */.Z)(stats,_=>_.dropped);var restarts=(0,useChange/* default */.Z)(stats,_=>_.restarts);var serviceNames=(0,utils/* ellipseJoin */.VA)(services.filter(srv=>!(0,spec/* isInfrastructure */.lz)(srv.specification)).map(service=>service.name),26);var alert=lost?"lost device":restarts>1?restarts+" restarts":dropped>2?(0,utils/* roundWithPrecision */.JI)(dropped,1)+" pkt lost":undefined;var warning=restarts>1||dropped>2;var labelInfo=serviceNames;return/*#__PURE__*/react.createElement(StyledTreeItem/* default */.Z,{nodeId:id,labelText:name,labelCaption:description,labelInfo:labelInfo,warning:warning,alert:alert,kind:kind,icon:/*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z,{device:device,size:"small",center:false})},/*#__PURE__*/react.createElement(DeviceProductInformationTreeItem,{device:device}),/*#__PURE__*/react.createElement(AnnounceFlagsTreeItem/* default */.Z,{device:device}),services===null||services===void 0?void 0:services.map(service=>/*#__PURE__*/react.createElement(ServiceTreeItem,Object.assign({key:service.nodeId,service:service,showSpecification:true},other))));}function ServiceMembersTreeItems(props){var{service,registerFilter,eventFilter}=props,other=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded2);var{specification,mixins}=(0,react.useMemo)(()=>service,[service]);var packets=specification===null||specification===void 0?void 0:specification.packets;var registers=packets===null||packets===void 0?void 0:packets.filter(pkt=>!pkt.client&&(0,spec/* isRegister */.x5)(pkt)).map(info=>service.register(info.identifier)).filter(reg=>!reg.notImplemented).filter(reg=>!registerFilter||registerFilter(reg)).sort((l,r)=>l.name.localeCompare(r.name));var events=packets===null||packets===void 0?void 0:packets.filter(pkt=>!pkt.client&&(0,spec/* isEvent */.cO)(pkt)).map(info=>service.event(info.identifier)).filter(ev=>!eventFilter||eventFilter(ev));return/*#__PURE__*/react.createElement(react.Fragment,null,registers===null||registers===void 0?void 0:registers.map(register=>/*#__PURE__*/react.createElement(RegisterTreeItem,Object.assign({key:register.id,register:register},other))),events===null||events===void 0?void 0:events.map(event=>/*#__PURE__*/react.createElement(EventTreeItem,Object.assign({key:event.id,event:event},other))),mixins===null||mixins===void 0?void 0:mixins.map(mixin=>/*#__PURE__*/react.createElement(ServiceTreeItem,Object.assign({key:mixin.id,service:mixin},other))));}function ServiceSpecificationTreeItem(props){var{service}=props;var{id,specification}=service;if(!specification)return null;var{classIdentifier}=specification;var nodeId=id+":spec";var labelText=((specification===null||specification===void 0?void 0:specification.notes["short"])||specification.name).split(".",1)[0]+".";var labelTo="/services/"+specification.shortId+"/";return/*#__PURE__*/react.createElement(StyledTreeItem/* default */.Z,{nodeId:nodeId,labelText:labelText,labelInfo:"id: 0x"+classIdentifier.toString(16),labelTo:labelTo});}function ServiceTreeItem(props){var{service,showSpecification,showMembersOnly}=props;var{isMixin,name,id}=(0,react.useMemo)(()=>service,[service]);var instanceName=(0,useInstanceName/* default */.Z)(service);var readingRegister=useBestRegister(service);var reading=(0,useRegisterValue/* useRegisterHumanValue */.e_)(readingRegister,{visible:true,maxLength:18});var labelText=name+(instanceName?" "+instanceName:"");var members=/*#__PURE__*/react.createElement(react.Fragment,null,showSpecification&&/*#__PURE__*/react.createElement(ServiceSpecificationTreeItem,{service:service}),/*#__PURE__*/react.createElement(ServiceMembersTreeItems,Object.assign({service:service},props)));if(showMembersOnly)return members;return/*#__PURE__*/react.createElement(StyledTreeItem/* default */.Z,{nodeId:id,labelText:labelText,labelInfo:reading,kind:isMixin?constants/* SERVICE_MIXIN_NODE_NAME */.mLn:constants/* SERVICE_NODE_NAME */.M_U},members);}function RegisterTreeItem(props){var{register}=props;var{specification,id,notImplemented}=register;var optional=!!(specification!==null&&specification!==void 0&&specification.optional);var labelText=(0,jdspec/* humanify */.lW)(""+((specification===null||specification===void 0?void 0:specification.name)||id)+(optional?"?":""));var humanValue=(0,useRegisterValue/* useRegisterHumanValue */.e_)(register,{visible:true});var handleClick=(0,react.useCallback)(()=>register.sendGetAsync(),[register]);var attempts=(0,useEventRaised/* default */.Z)(constants/* GET_ATTEMPT */.tDM,register,_=>_===null||_===void 0?void 0:_.lastGetAttempts);var failedGet=attempts>2;// not implemented
if(notImplemented)return null;// if register is optional and no data, hide
if(optional&&failedGet&&humanValue===undefined)return null;return/*#__PURE__*/react.createElement(StyledTreeItem/* default */.Z,{nodeId:id,labelText:labelText,labelInfo:humanValue||attempts>0&&"#"+attempts||"",kind:(specification===null||specification===void 0?void 0:specification.kind)||constants/* REGISTER_NODE_NAME */.nJc,alert:failedGet&&!optional&&humanValue===undefined&&"???",onClick:handleClick});}function EventTreeItem(props){var{event}=props;var{specification,id}=event;var count=(0,useEventCount/* default */.Z)(event);var labelText=(0,jdspec/* humanify */.lW)((specification===null||specification===void 0?void 0:specification.name)||event.id);return/*#__PURE__*/react.createElement(StyledTreeItem/* default */.Z,{nodeId:id,labelText:labelText,labelInfo:(count||"")+"",kind:constants/* EVENT_NODE_NAME */.Yuh});}

/***/ }),

/***/ 25981:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ StyledTreeItem; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(12981);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(41796);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(51705);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/lab/TreeView/TreeViewContext.js
var TreeViewContext = __webpack_require__(36915);
// EXTERNAL MODULE: ./node_modules/@mui/lab/TreeView/descendants.js
var descendants = __webpack_require__(92141);
;// CONCATENATED MODULE: ./node_modules/@mui/lab/TreeItem/useTreeItem.js


function useTreeItem(nodeId) {
  const {
    focus,
    isExpanded,
    isExpandable,
    isFocused,
    isDisabled,
    isSelected,
    multiSelect,
    selectNode,
    selectRange,
    toggleExpansion
  } = react.useContext(TreeViewContext/* default */.Z);
  const expandable = isExpandable ? isExpandable(nodeId) : false;
  const expanded = isExpanded ? isExpanded(nodeId) : false;
  const focused = isFocused ? isFocused(nodeId) : false;
  const disabled = isDisabled ? isDisabled(nodeId) : false;
  const selected = isSelected ? isSelected(nodeId) : false;
  const handleExpansion = event => {
    if (!disabled) {
      if (!focused) {
        focus(event, nodeId);
      }
      const multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey);

      // If already expanded and trying to toggle selection don't close
      if (expandable && !(multiple && isExpanded(nodeId))) {
        toggleExpansion(event, nodeId);
      }
    }
  };
  const handleSelection = event => {
    if (!disabled) {
      if (!focused) {
        focus(event, nodeId);
      }
      const multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey);
      if (multiple) {
        if (event.shiftKey) {
          selectRange(event, {
            end: nodeId
          });
        } else {
          selectNode(event, nodeId, true);
        }
      } else {
        selectNode(event, nodeId);
      }
    }
  };
  const preventSelection = event => {
    if (event.shiftKey || event.ctrlKey || event.metaKey || disabled) {
      // Prevent text selection
      event.preventDefault();
    }
  };
  return {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection
  };
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/lab/TreeItem/TreeItemContent.js


const _excluded = ["classes", "className", "displayIcon", "expansionIcon", "icon", "label", "nodeId", "onClick", "onMouseDown"];





/**
 * @ignore - internal component.
 */


const TreeItemContent = /*#__PURE__*/react.forwardRef(function TreeItemContent(props, ref) {
  const {
      classes,
      className,
      displayIcon,
      expansionIcon,
      icon: iconProp,
      label,
      nodeId,
      onClick,
      onMouseDown
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection
  } = useTreeItem(nodeId);
  const icon = iconProp || expansionIcon || displayIcon;
  const handleMouseDown = event => {
    preventSelection(event);
    if (onMouseDown) {
      onMouseDown(event);
    }
  };
  const handleClick = event => {
    handleExpansion(event);
    handleSelection(event);
    if (onClick) {
      onClick(event);
    }
  };
  return (
    /*#__PURE__*/
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions -- Key event is handled by the TreeView */
    (0,jsx_runtime.jsxs)("div", (0,esm_extends/* default */.Z)({
      className: (0,clsx_m/* default */.Z)(className, classes.root, expanded && classes.expanded, selected && classes.selected, focused && classes.focused, disabled && classes.disabled),
      onClick: handleClick,
      onMouseDown: handleMouseDown,
      ref: ref
    }, other, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: classes.iconContainer,
        children: icon
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: classes.label,
        children: label
      })]
    }))
  );
});
 false ? 0 : void 0;
/* harmony default export */ var TreeItem_TreeItemContent = (TreeItemContent);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
;// CONCATENATED MODULE: ./node_modules/@mui/lab/TreeItem/treeItemClasses.js


function getTreeItemUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTreeItem', slot);
}
const treeItemClasses = (0,generateUtilityClasses/* default */.Z)('MuiTreeItem', ['root', 'group', 'content', 'expanded', 'selected', 'focused', 'disabled', 'iconContainer', 'label']);
/* harmony default export */ var TreeItem_treeItemClasses = (treeItemClasses);
;// CONCATENATED MODULE: ./node_modules/@mui/lab/TreeItem/TreeItem.js


const TreeItem_excluded = ["children", "className", "collapseIcon", "ContentComponent", "ContentProps", "endIcon", "expandIcon", "disabled", "icon", "id", "label", "nodeId", "onClick", "onMouseDown", "TransitionComponent", "TransitionProps"];














const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    content: ['content'],
    expanded: ['expanded'],
    selected: ['selected'],
    focused: ['focused'],
    disabled: ['disabled'],
    iconContainer: ['iconContainer'],
    label: ['label'],
    group: ['group']
  };
  return (0,composeClasses/* default */.Z)(slots, getTreeItemUtilityClass, classes);
};
const TreeItemRoot = (0,styled/* default */.ZP)('li', {
  name: 'MuiTreeItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  outline: 0
});
const StyledTreeItemContent = (0,styled/* default */.ZP)(TreeItem_TreeItemContent, {
  name: 'MuiTreeItem',
  slot: 'Content',
  overridesResolver: (props, styles) => {
    return [styles.content, styles.iconContainer && {
      [`& .${TreeItem_treeItemClasses.iconContainer}`]: styles.iconContainer
    }, styles.label && {
      [`& .${TreeItem_treeItemClasses.label}`]: styles.label
    }];
  }
})(({
  theme
}) => ({
  padding: '0 8px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${TreeItem_treeItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity,
    backgroundColor: 'transparent'
  },
  [`&.${TreeItem_treeItemClasses.focused}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${TreeItem_treeItemClasses.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    },
    [`&.${TreeItem_treeItemClasses.focused}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`& .${TreeItem_treeItemClasses.iconContainer}`]: {
    marginRight: 4,
    width: 15,
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'center',
    '& svg': {
      fontSize: 18
    }
  },
  [`& .${TreeItem_treeItemClasses.label}`]: (0,esm_extends/* default */.Z)({
    width: '100%',
    // fixes overflow - see https://github.com/mui/material-ui/issues/27372
    minWidth: 0,
    paddingLeft: 4,
    position: 'relative'
  }, theme.typography.body1)
}));
const TreeItemGroup = (0,styled/* default */.ZP)(Collapse/* default */.Z, {
  name: 'MuiTreeItem',
  slot: 'Group',
  overridesResolver: (props, styles) => styles.group
})({
  margin: 0,
  padding: 0,
  marginLeft: 17
});
const TreeItem = /*#__PURE__*/react.forwardRef(function TreeItem(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTreeItem'
  });
  const {
      children,
      className,
      collapseIcon,
      ContentComponent = TreeItem_TreeItemContent,
      ContentProps,
      endIcon,
      expandIcon,
      disabled: disabledProp,
      icon,
      id: idProp,
      label,
      nodeId,
      onClick,
      onMouseDown,
      TransitionComponent = Collapse/* default */.Z,
      TransitionProps
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, TreeItem_excluded);
  const {
    icons: contextIcons = {},
    focus,
    isExpanded,
    isFocused,
    isSelected,
    isDisabled,
    multiSelect,
    disabledItemsFocusable,
    mapFirstChar,
    unMapFirstChar,
    registerNode,
    unregisterNode,
    treeId
  } = react.useContext(TreeViewContext/* default */.Z);
  let id = null;
  if (idProp != null) {
    id = idProp;
  } else if (treeId && nodeId) {
    id = `${treeId}-${nodeId}`;
  }
  const [treeitemElement, setTreeitemElement] = react.useState(null);
  const contentRef = react.useRef(null);
  const handleRef = (0,useForkRef/* default */.Z)(setTreeitemElement, ref);
  const descendant = react.useMemo(() => ({
    element: treeitemElement,
    id: nodeId
  }), [nodeId, treeitemElement]);
  const {
    index,
    parentId
  } = (0,descendants/* useDescendant */.Y)(descendant);
  const expandable = Boolean(Array.isArray(children) ? children.length : children);
  const expanded = isExpanded ? isExpanded(nodeId) : false;
  const focused = isFocused ? isFocused(nodeId) : false;
  const selected = isSelected ? isSelected(nodeId) : false;
  const disabled = isDisabled ? isDisabled(nodeId) : false;
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    expanded,
    focused,
    selected,
    disabled
  });
  const classes = useUtilityClasses(ownerState);
  let displayIcon;
  let expansionIcon;
  if (expandable) {
    if (!expanded) {
      expansionIcon = expandIcon || contextIcons.defaultExpandIcon;
    } else {
      expansionIcon = collapseIcon || contextIcons.defaultCollapseIcon;
    }
  }
  if (expandable) {
    displayIcon = contextIcons.defaultParentIcon;
  } else {
    displayIcon = endIcon || contextIcons.defaultEndIcon;
  }
  react.useEffect(() => {
    // On the first render a node's index will be -1. We want to wait for the real index.
    if (registerNode && unregisterNode && index !== -1) {
      registerNode({
        id: nodeId,
        idAttribute: id,
        index,
        parentId,
        expandable,
        disabled: disabledProp
      });
      return () => {
        unregisterNode(nodeId);
      };
    }
    return undefined;
  }, [registerNode, unregisterNode, parentId, index, nodeId, expandable, disabledProp, id]);
  react.useEffect(() => {
    if (mapFirstChar && unMapFirstChar && label) {
      mapFirstChar(nodeId, contentRef.current.textContent.substring(0, 1).toLowerCase());
      return () => {
        unMapFirstChar(nodeId);
      };
    }
    return undefined;
  }, [mapFirstChar, unMapFirstChar, nodeId, label]);
  let ariaSelected;
  if (multiSelect) {
    ariaSelected = selected;
  } else if (selected) {
    /* single-selection trees unset aria-selected on un-selected items.
     *
     * If the tree does not support multiple selection, aria-selected
     * is set to true for the selected node and it is not present on any other node in the tree.
     * Source: https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
     */
    ariaSelected = true;
  }
  function handleFocus(event) {
    // DOM focus stays on the tree which manages focus with aria-activedescendant
    if (event.target === event.currentTarget) {
      (0,ownerDocument/* default */.Z)(event.target).getElementById(treeId).focus({
        preventScroll: true
      });
    }
    const unfocusable = !disabledItemsFocusable && disabled;
    if (!focused && event.currentTarget === event.target && !unfocusable) {
      focus(event, nodeId);
    }
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TreeItemRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    role: "treeitem",
    "aria-expanded": expandable ? expanded : null,
    "aria-selected": ariaSelected,
    "aria-disabled": disabled || null,
    ref: handleRef,
    id: id,
    tabIndex: -1
  }, other, {
    ownerState: ownerState,
    onFocus: handleFocus,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTreeItemContent, (0,esm_extends/* default */.Z)({
      as: ContentComponent,
      ref: contentRef,
      classes: {
        root: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        focused: classes.focused,
        disabled: classes.disabled,
        iconContainer: classes.iconContainer,
        label: classes.label
      },
      label: label,
      nodeId: nodeId,
      onClick: onClick,
      onMouseDown: onMouseDown,
      icon: icon,
      expansionIcon: expansionIcon,
      displayIcon: displayIcon,
      ownerState: ownerState
    }, ContentProps)), children && /*#__PURE__*/(0,jsx_runtime.jsx)(descendants/* DescendantProvider */.w, {
      id: nodeId,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeItemGroup, (0,esm_extends/* default */.Z)({
        as: TransitionComponent,
        unmountOnExit: true,
        className: classes.group,
        in: expanded,
        component: "ul",
        role: "group"
      }, TransitionProps, {
        children: children
      }))
    })]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var TreeItem_TreeItem = (TreeItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__(11799);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Warning.js
var Warning = __webpack_require__(62177);
// EXTERNAL MODULE: ./node_modules/gatsby-material-ui-components/lib/index.js + 17 modules
var lib = __webpack_require__(3146);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(14563);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
;// CONCATENATED MODULE: ./src/components/ui/StyledTreeItem.tsx
var StyledTreeItem_excluded=["labelText","labelCaption","labelTo","labelTextVariant","kind","icon","labelInfo","color","bgColor","actions","nodeId","warning","alert"];var PREFIX="StyledTreeView";var classes={root:PREFIX+"root",content:PREFIX+"content",group:PREFIX+"group",expanded:PREFIX+"expanded",selected:PREFIX+"selected",label:PREFIX+"label",labelRoot:PREFIX+"labelRoot",labelIcon:PREFIX+"labelIcon",labelText:PREFIX+"labelText"};var Root=(0,styled/* default */.ZP)("div")(_ref=>{var{theme}=_ref;return{["& ."+classes.root]:{color:theme.palette.text.secondary,"&:hover > $content":{backgroundColor:theme.palette.action.hover},"&:focus > $content, &$selected > $content":{backgroundColor:"var(--tree-view-bg-color, "+theme.palette.grey+")",color:"var(--tree-view-color)"},"&:focus > $content $label, &:hover > $content $label, &$selected > $content $label":{backgroundColor:"transparent"}},["& ."+classes.content]:{color:theme.palette.text.secondary,fontWeight:theme.typography.fontWeightMedium,"$expanded > &":{fontWeight:theme.typography.fontWeightRegular}},["& ."+classes.group]:{marginLeft:0,"& $content":{paddingLeft:theme.spacing(1)}},["& ."+classes.expanded]:{},["& ."+classes.selected]:{fontWeight:theme.typography.fontWeightBold},["& ."+classes.label]:{fontWeight:"inherit",color:"inherit"},["&."+classes.labelRoot]:{display:"flex",alignItems:"center",padding:theme.spacing(0.5,0)},["& ."+classes.labelIcon]:{marginRight:theme.spacing(0.5)},["& ."+classes.labelText]:{fontWeight:"inherit",flexGrow:1,marginRight:theme.spacing(0.5)}};});function StyledTreeItem(props){var{labelText,labelCaption,labelTo,labelTextVariant,kind,icon,labelInfo,color,bgColor,actions,nodeId,warning,alert}=props,other=(0,objectWithoutPropertiesLoose/* default */.Z)(props,StyledTreeItem_excluded);var domId=(0,react.useId)();return/*#__PURE__*/react.createElement(TreeItem_TreeItem,Object.assign({id:domId,tabIndex:0,nodeId:nodeId,label:/*#__PURE__*/react.createElement(Root,{className:classes.labelRoot},kind&&!icon&&/*#__PURE__*/react.createElement(KindIcon/* default */.ZP,{kind:kind,className:classes.labelIcon,fontSize:"small"}),icon&&/*#__PURE__*/react.createElement("span",{className:classes.labelIcon},icon),warning&&/*#__PURE__*/react.createElement(Warning/* default */.Z,{color:"error",className:classes.labelIcon}),labelText&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"span",variant:labelTextVariant||"body2",className:classes.labelText},labelTo?/*#__PURE__*/react.createElement(lib/* Link */.rU,{color:"textPrimary",to:labelTo,underline:"hover"},labelText):labelText,labelCaption&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"span",variant:"caption"},", ",labelCaption)),alert&&"!",/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"span",variant:"caption",color:"inherit"},alert&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption",component:"span"},alert,","),(labelInfo===null||labelInfo===void 0?void 0:labelInfo.length)>18?/*#__PURE__*/react.createElement(Tooltip/* default */.Z,{title:labelInfo},/*#__PURE__*/react.createElement("span",null,(0,utils/* ellipse */.hr)(labelInfo,18))):labelInfo,actions)),style:{"--tree-view-color":color,"--tree-view-bg-color":bgColor},classes:{root:classes.root,content:classes.content,expanded:classes.expanded,selected:classes.selected,group:classes.group,label:classes.label}},other));}

/***/ }),

/***/ 67768:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEventCount; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
function useEventCount(event){var{0:count,1:setCount}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((event===null||event===void 0?void 0:event.count)||0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>event===null||event===void 0?void 0:event.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver,()=>{setCount(event.count);}),[event]);return count;}

/***/ }),

/***/ 75706:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ useServiceSpecificationFromServiceClass; },
/* harmony export */   "a": function() { return /* binding */ useServiceSpecification; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62070);
function useServiceSpecificationFromServiceClass(serviceClass){var specification=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass),[serviceClass]);return specification;}function useServiceSpecification(service){var serviceClass=service===null||service===void 0?void 0:service.serviceClass;var specification=useServiceSpecificationFromServiceClass(serviceClass);return specification;}

/***/ })

}]);
//# sourceMappingURL=2544c2700771a4c44b8ec71bb041eb4bb4b49cea-cd064fb8bb7141ec5729.js.map