# contract-api-gnosis

A simple Api test for [safe-core-sdk](https://github.com/safe-global/safe-core-sdk)

* install: `yarn install`
* build: `npx tsc`
* run ts: `npx ts-node src/server.ts`
* run js: `npx node dist/server.js`
* test: 
    ```sh
    curl --request POST 'http://127.0.0.1:7890/safe' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "userWallet" : "0xD84D74aF87Ef7aaE715B7193dA6AfAED28448B79",
        "payeerKey" : "0x840bdb63e4e065597a3f5d5e5a3eed7b6b858400f2e262e83065bcec77049194"
    }'
    ```
* generate a `js` to be used on the front-end: `npm run generatejs`
