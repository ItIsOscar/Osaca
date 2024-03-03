import express from 'express';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json({ type: 'application/json' }));

app.get('/api/users/all', (req, res) => {
    res.status(200).json({
        chingiz: {
            role: 'admin',
            age: 40,
            status: 'inactive'
        },
        oscar: {
            role: 'admin',
            age: 16,
            status: 'active'
        },
        dimon: {
            role: 'user',
            age: 100,
            status: 'active'
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running');
});