"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const web_push_1 = (0, tslib_1.__importDefault)(require("web-push"));
web_push_1.default.setVapidDetails("mailto:jhon.figueroa@correouinivalle.edu.co", process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY);
console.log("PUBLIC_KEY: ", process.env.PUBLIC_VAPID_KEY, "PRIVATE_JEY: ", process.env.PRIVATE_VAPID_KEY);
exports.default = web_push_1.default;
//# sourceMappingURL=webpush.js.map