"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxReactState = require("3box-react-state");

var _effects = require("./effects");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EnableEthereum = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var enabled = (0, _effects.useEnableEffect)(box);
  /* --- Effects --- */

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
    onClick: () => box.enable()
  }, !enabled.dispatched && !enabled.ready ? !_react.default.isValidElement(props.componentIsDisconnected) ? _react.default.createElement(props.componentIsDisconnected) : props.componentIsDisconnected || null : null), _react.default.createElement("span", null, enabled.dispatched && !enabled.ready ? !_react.default.isValidElement(props.componentIsLoading) ? _react.default.createElement(props.componentIsLoading) : props.componentIsLoading || null : null), enabled.ready && _react.default.createElement("span", null, props.children || !_react.default.isValidElement(props.componentIsConnected) ? _react.default.createElement(props.componentIsConnected) : props.componentIsConnected || null));
};

EnableEthereum.defaultProps = {
  componentIsDisconnected: _react.default.createElement(_designSystemAtoms.Span, {
    variants: ['tag'],
    effects: ['white', 'pointer']
  }, "Enable"),
  componentIsLoading: _react.default.createElement(_designSystemAtoms.Span, {
    variants: ['tag'],
    effects: ['white']
  }, "Loading"),
  componentIsConnected: _react.default.createElement(_designSystemAtoms.Span, {
    variants: ['tag'],
    effects: ['white', 'pointer']
  }, "Etheruem Enabled")
};
EnableEthereum.propTypes = {
  spaceAuto: PropTypes.bool
};

var _default = props => _react.default.createElement(_boxReactState.BoxInject, null, _react.default.createElement(EnableEthereum, props));

exports.default = _default;