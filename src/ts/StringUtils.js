/**
 * Created by bob on 2016-10-13.
 */
"use strict";
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.isUnique = function (str) {
        var num = [0, 0, 0, 0], checker = [0, 0, 0, 0];
        for (var i = 0; i < str.length; i++) {
            var idx = parseInt((str.charCodeAt(i) / 32).toPrecision(1));
            num[idx] = str.charCodeAt(i) % 32;
            console.log(str.charAt(i) + " : " + str.charCodeAt(i) + " to " + num[idx]);
            if ((checker[idx] & (1 << num[idx])) > 0)
                return false;
            checker[idx] |= (1 << num[idx]);
        }
        return true;
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
