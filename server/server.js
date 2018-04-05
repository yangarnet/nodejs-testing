import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/user', (req, res) => {
    res.send(
        JSON.stringify({
            firstName: 'John',
            lastName: 'cena'
        })
    );
});

app.listen(3000);


export default app;
