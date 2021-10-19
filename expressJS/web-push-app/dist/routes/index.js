"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const webpush_1 = (0, tslib_1.__importDefault)(require("../webpush"));
const router = (0, express_1.Router)();
let pushSubscription;
router.post("/subscription", async (req, res) => {
    console.log(req.body);
    pushSubscription = req.body;
    res.status(200).json();
    const payload = JSON.stringify({
        title: "my custon notification",
        body: "Hello world from server throught notification",
    });
    try {
        await webpush_1.default.sendNotification(pushSubscription, payload);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map