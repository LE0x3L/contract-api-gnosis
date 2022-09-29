# contract-api-gnosis

A simple Api test for [safe-core-sdk](https://github.com/safe-global/safe-core-sdk)

* install: `yarn install`
* build: `npm run build`

## Use as a service

* run ts: `npx ts-node src/server.ts`
* run js: `npx node dist/server.js`
* test: 
    ```sh
    curl --request POST 'http://127.0.0.1:7890/safe' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "userWallet" : "0x66aB6D9362d4F35596279692F0251Db635165871",
        "payeerKey" : "0x840bdb63e4e065597a3f5d5e5a3eed7b6b858400f2e262e83065bcec77049194"
    }'
    ```
## Use in front-end

* Copy `dist/safe-api.js` to your project
* Add it to your page. ex: `<script type="text/javascript" src="js/safe-api.js"></script>`
* Call exported functions using `gnosis` object. ex: 
    ```js
    gnosis.newSafe(
        "0x66aB6D9362d4F35596279692F0251Db635165871",
        "0x840bdb63e4e065597a3f5d5e5a3eed7b6b858400f2e262e83065bcec77049194"
    )
    ```