import { TYPE_LOG } from "./constants.js";
var log = function (message, type = TYPE_LOG) {
    console[type](message);
}

export default log;

