"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _Tools = require("../../Tools");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  button {\n    border: none;\n\n    &:hover {\n      ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Form = (0, _styledComponents.createGlobalStyle)(_templateObject(), _Tools.Cursor.hover);
var _default = Form;
exports.default = _default;