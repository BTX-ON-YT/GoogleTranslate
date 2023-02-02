import { request } from 'undici';
import tokenGen from 'google-translate-token';

export class Rest {
    token: string;
    async getToken(text: string) {
        return new Promise((resolve, reject) => {
            tokenGen.get(text).then((token: string) => {
                resolve(token);
            });
        });
    }

    async translate(text: string, from: string, to: string) {
        const token = await this.getToken(text);
        const url = `https://translate.google.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}&tk=${token}`;
        const response = await request(url);
        const body = await response.body.json();
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
    }
}