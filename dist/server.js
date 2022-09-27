"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const newSafe_1 = require("./newSafe");
const PORT = 7890;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/safe', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    console.log(req === null || req === void 0 ? void 0 : req.body);
    // check credentials
    try {
        console.log(req === null || req === void 0 ? void 0 : req.body);
        const result = yield (0, newSafe_1.newSafe)((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.userWallet, (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.payeerKey);
        console.log(result);
        res.send(`{"newSafeAddress": "${result}" }`).status(200).end();
    }
    catch (e) {
        console.error(e);
    }
}));
app.get('/', (req, res) => {
    res.send('Only post. OK?').status(200).end();
});
app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}`);
});
