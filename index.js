var babel = require("@babel/core");
var spaces = /\s+/g;

module.exports = function createFor(plugin, defaultBabelOptions) {
    return function isEqual(input, expected, babelOptions) {
        var options = babelOptions || defaultBabelOptions || {};
        var output = babel.transform(input, options).code;

        return output.replace(spaces, "") == expected.replace(spaces, "");
    };
};
