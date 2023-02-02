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
exports.Rest = void 0;
const undici_1 = require("undici");
const google_translate_token_1 = __importDefault(require("google-translate-token"));
class Rest {
    getToken(text) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                google_translate_token_1.default.get(text).then((token) => {
                    resolve(token);
                });
            });
        });
    }
    translate(text, from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.getToken(text);
            const url = `https://translate.google.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}&tk=${token}`;
            const response = yield (0, undici_1.request)(url);
            const body = yield response.body.json();
            return {
                text: body[0][0][0],
                from: {
                    language: {
                        didYouMean: false,
                        iso: from
                    },
                    text: {
                        autoCorrected: false,
                        value: '',
                        didYouMean: false
                    }
                },
                raw: body
            };
        });
    }
}
exports.Rest = Rest;
