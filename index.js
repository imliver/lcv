const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let userLogs = [];

app.post('/log-user', (req, res) => {
    const userData = req.body;
    userLogs.push(userData);
    console.log('User logged:', userData);
    res.sendStatus(200);
});

app.get('/admin-panel', (req, res) => {
    res.send(`
        <h1>Админ панель</h1>
        <h2>Логи пользователей:</h2>
        <pre>${JSON.stringify(userLogs, null, 2)}</pre>
    `);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
