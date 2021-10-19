"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = (0, tslib_1.__importDefault)(require("dotenv"));
dotenv_1.default.config();
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const morgan_1 = (0, tslib_1.__importDefault)(require("morgan"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const index_1 = (0, tslib_1.__importDefault)(require("./routes/index"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(index_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.listen(3000);
console.log("server was started on port " + 3000);
//# sourceMappingURL=index.js.map