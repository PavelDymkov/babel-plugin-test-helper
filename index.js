var babel = require("@babel/core");
var spaces = /\s+/g;

module.exports = function createFor(target, defaultOptions, type = "plugin") {
    return function isEqual(input, expected, options) {
        var babelOptions = {
            [`${type}s`]: [[target, options || defaultOptions || {}]],
        };
        var output = babel.transform(input, babelOptions).code;

        return output.replace(spaces, "") == expected.replace(spaces, "");
    };
};
