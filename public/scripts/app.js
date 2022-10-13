"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var IndecisonApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisonApp, _React$Component);
  var _super = _createSuper(IndecisonApp);
  function IndecisonApp(props) {
    var _this;
    _classCallCheck(this, IndecisonApp);
    _this = _super.call(this, props);
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.handleSingleDeleteOption = _this.handleSingleDeleteOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: props.options
    };
    return _this;
  }
  _createClass(IndecisonApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);
        this.setState(function () {
          return {
            options: options
          };
        });
      } catch (e) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("The component will unmount");
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleSingleDeleteOption",
    value: function handleSingleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return 'Please enter a valid input';
      } else if (this.state.options.indexOf(option) > -1) {
        "";
        return 'The data already exists';
      }

      // this.setState((prevState) => {
      //     return {
      //         options: prevState.options.concat([option])
      //  };
      // });

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = 'Indecison App';
      var subtitle = 'Let the computer think ';
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        subtitle: subtitle
      }), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handlePick: this.handlePick
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions,
        handleSingleDeleteOption: this.handleSingleDeleteOption
      }), /*#__PURE__*/React.createElement(AddOptionsForm, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);
  return IndecisonApp;
}(React.Component);
var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("h2", null, props.subtitle));
};
Header.defaultProps = {
  title: 'Indecision App'
};

//class Header extends React.Component {
//  render()
//{
//console.log(this.props);

// }
//}

var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handlePick,
    disabled: !props.hasOptions
  }, "Tell me what shall I select"));
};
var Options = function Options(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handleDeleteOptions
  }, "Remove this"), props.options.length === 0 && /*#__PURE__*/React.createElement("p", null, "Please add an option to get started"), props.options.map(function (option) {
    return /*#__PURE__*/React.createElement(AddNewOptions, {
      key: option,
      optionText: option,
      handleSingleDeleteOption: props.handleSingleDeleteOption
    });
  }));
};
var AddNewOptions = function AddNewOptions(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, props.optionText, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      props.handleSingleDeleteOption(props.optionText);
    }
  }, "delete")));
};

// class AddNewOptions extends React.Component {
//     render()
//     {
//         return(
//             <div>
//              {
//              <p>{this.props.optionText}</p>
//              }
//             </div>
//         );
//     }
// }
var AddOptionsForm = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddOptionsForm, _React$Component2);
  var _super2 = _createSuper(AddOptionsForm);
  function AddOptionsForm(props) {
    var _this2;
    _classCallCheck(this, AddOptionsForm);
    _this2 = _super2.call(this, props);
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: undefined
    };
    return _this2;
  }
  _createClass(AddOptionsForm, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });

      // this.setState( () => {
      //     return {error};
      // });
      if (!error) {
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleAddOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);
  return AddOptionsForm;
}(React.Component);
IndecisonApp.defaultProps = {
  options: []
};
ReactDOM.render( /*#__PURE__*/React.createElement(IndecisonApp, null), document.getElementById('app'));
