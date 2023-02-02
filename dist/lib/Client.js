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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Languages = void 0;
const Rest_1 = require("./Rest");
var Languages;
(function (Languages) {
    Languages["Automatic"] = "auto";
    Languages["Afrikaans"] = "af";
    Languages["Albanian"] = "sq";
    Languages["Amharic"] = "am";
    Languages["Arabic"] = "ar";
    Languages["Armenian"] = "hy";
    Languages["Azerbaijani"] = "az";
    Languages["Basque"] = "eu";
    Languages["Belarusian"] = "be";
    Languages["Bengali"] = "bn";
    Languages["Bosnian"] = "bs";
    Languages["Bulgarian"] = "bg";
    Languages["Catalan"] = "ca";
    Languages["Cebuano"] = "ceb";
    Languages["Chichewa"] = "ny";
    Languages["ChineseSimplified"] = "zh-CN";
    Languages["ChineseTraditional"] = "zh-TW";
    Languages["Corsican"] = "co";
    Languages["Croatian"] = "hr";
    Languages["Czech"] = "cs";
    Languages["Danish"] = "da";
    Languages["Dutch"] = "nl";
    Languages["English"] = "en";
    Languages["Esperanto"] = "eo";
    Languages["Estonian"] = "et";
    Languages["Filipino"] = "tl";
    Languages["Finnish"] = "fi";
    Languages["French"] = "fr";
    Languages["Frisian"] = "fy";
    Languages["Galician"] = "gl";
    Languages["Georgian"] = "ka";
    Languages["German"] = "de";
    Languages["Greek"] = "el";
    Languages["Gujarati"] = "gu";
    Languages["HaitianCreole"] = "ht";
    Languages["Hausa"] = "ha";
    Languages["Hawaiian"] = "haw";
    Languages["Hebrew"] = "iw";
    Languages["Hindi"] = "hi";
    Languages["Hmong"] = "hmn";
    Languages["Hungarian"] = "hu";
    Languages["Icelandic"] = "is";
    Languages["Igbo"] = "ig";
    Languages["Indonesian"] = "id";
    Languages["Irish"] = "ga";
    Languages["Italian"] = "it";
    Languages["Japanese"] = "ja";
    Languages["Javanese"] = "jw";
    Languages["Kannada"] = "kn";
    Languages["Kazakh"] = "kk";
    Languages["Khmer"] = "km";
    Languages["Korean"] = "ko";
    Languages["Kurdish"] = "ku";
    Languages["Kyrgyz"] = "ky";
    Languages["Lao"] = "lo";
    Languages["Latin"] = "la";
    Languages["Latvian"] = "lv";
    Languages["Lithuanian"] = "lt";
    Languages["Luxembourgish"] = "lb";
    Languages["Macedonian"] = "mk";
    Languages["Malagasy"] = "mg";
    Languages["Malay"] = "ms";
    Languages["Malayalam"] = "ml";
    Languages["Maltese"] = "mt";
    Languages["Maori"] = "mi";
    Languages["Marathi"] = "mr";
    Languages["Mongolian"] = "mn";
    Languages["Myanmar"] = "my";
    Languages["Nepali"] = "ne";
    Languages["Norwegian"] = "no";
    Languages["Pashto"] = "ps";
    Languages["Persian"] = "fa";
    Languages["Polish"] = "pl";
    Languages["Portuguese"] = "pt";
    Languages["Punjabi"] = "ma";
    Languages["Romanian"] = "ro";
    Languages["Russian"] = "ru";
    Languages["Samoan"] = "sm";
    Languages["ScotsGaelic"] = "gd";
    Languages["Serbian"] = "sr";
    Languages["Sesotho"] = "st";
    Languages["Shona"] = "sn";
    Languages["Sindhi"] = "sd";
    Languages["Sinhala"] = "si";
    Languages["Slovak"] = "sk";
    Languages["Slovenian"] = "sl";
    Languages["Somali"] = "so";
    Languages["Spanish"] = "es";
    Languages["Sundanese"] = "su";
    Languages["Swahili"] = "sw";
    Languages["Swedish"] = "sv";
    Languages["Tajik"] = "tg";
    Languages["Tamil"] = "ta";
    Languages["Telugu"] = "te";
    Languages["Thai"] = "th";
    Languages["Turkish"] = "tr";
    Languages["Ukrainian"] = "uk";
    Languages["Urdu"] = "ur";
    Languages["Uzbek"] = "uz";
    Languages["Vietnamese"] = "vi";
    Languages["Welsh"] = "cy";
    Languages["Xhosa"] = "xh";
    Languages["Yiddish"] = "yi";
    Languages["Yoruba"] = "yo";
    Languages["Zulu"] = "zu";
})(Languages = exports.Languages || (exports.Languages = {}));
class Client {
    constructor() {
        this.rest = new Rest_1.Rest();
    }
    translate(text, from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.rest.translate(text, from, to);
        });
    }
}
exports.Client = Client;
