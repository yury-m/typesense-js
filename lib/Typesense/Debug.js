'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var RESOURCEPATH = '/debug';

var Debug = /*#__PURE__*/function () {
  function Debug(apiCall) {
    (0, _classCallCheck2.default)(this, Debug);
    this._apiCall = apiCall;
  }

  (0, _createClass2.default)(Debug, [{
    key: "retrieve",
    value: function retrieve() {
      return this._apiCall.get(RESOURCEPATH);
    }
  }]);
  return Debug;
}();

exports.default = Debug;
//# sourceMappingURL=Debug.js.map
