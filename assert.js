/* assert.js
 *
 * http://d.hatena.ne.jp/m-hiyama/20080718/1216370414
 */

function __assert__(location, cond, msg) {
    if (!msg) {
        msg = "";
    }
    if (!cond) {
        var s = "Assertion failed!\n" + location + " " + msg;
        alert(s);
        throw new Error(s);
    } else {
        var s = "Assertion succeeded!\n";
    }
}

/* ASSERTという文字列マッチに引っかからないためのトリック */
window["ASS" + "ERT"] = function (cond, msg) {
    __assert__("", cond, msg);
}