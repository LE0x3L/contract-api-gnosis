import express from 'express';
import {newSafe} from './newSafe';

const PORT = 7890;

const app = express();
app.use(express.json());

app.post('/safe', async (req, res) => {
    console.log(req?.body);
    // check credentials
    try {
        console.log(req?.body);
        const result = await newSafe( req?.body?.userWallet, req?.body?.payeerKey );
        console.log(result);
        res.send( `{ "newSafeAddress": "${result}" }` ).status(200).end();
    } catch (e)
    {
        console.error(e);
    }
})

app.get('/', (req, res) => {
    res.send('Only post. OK?').status(200).end();
})

app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}`);
})
