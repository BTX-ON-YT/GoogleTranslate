import Client from './index';
import { Languages } from './index';

const client = new Client();

(async () => {
    const translated = client.translate('Hello', Languages.English, Languages.French).then((res) => {
        console.log(res);
    });
})();