var babel = require("@babel/core");
var spaces = /\s+/g;

module.exports = function createFor(plugin, defaultOptions) {
    return function isEqual(input, expected, options) {
        var babelOptions = {
            plugins: [[plugin, options || defaultOptions || {}]],
        };
        var output = babel.transform(input, babelOptions).code;

        return output.replace(spaces, "") == expected.replace(spaces, "");
    };
};
