# Google Translate JS

## Instalation

```bash
// npm
npm i google-translate.js

// yarn
yarn add google-translate.js
```

## Example

### Promise

```js
const Translator = require('google-translate.js');

const translator = new Translator();

translator.translate('Hello', 'en', 'fr').then((res) => {
    console.log(res);
    
    /*
    expected output:
        {
            text: 'Bonjour',
            from: {
                language: { didYouMean: false, iso: 'en' },
                text: { autoCorrected: false, value: '', didYouMean: false }
            },
            raw: [ [ [Array] ], null, 'en', null, null, null, null, [] ]
        }
    */
});
```

### Async/Await

```js
const Translator = require('google-translate.js');

const translator = new Translator();

// This is a self-executing async function
// You can also use the async keyword in front of a function declaration
// async function foo() {}
(async () => {
    const res = await translator.translate('Hello', 'en', 'fr');
    
    console.log(res);
    
    /*
    expected output:
        {
            text: 'Bonjour',
            from: {
                language: { didYouMean: false, iso: 'en' },
                text: { autoCorrected: false, value: '', didYouMean: false }
            },
            raw: [ [ [Array] ], null, 'en', null, null, null, null, [] ]
        }
    */
})();
```
