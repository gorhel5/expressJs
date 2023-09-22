const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})



app.get('/user/:username', (req, res) => {
    let data = {
        username: req.params.username,
        hobbies: [
            'Football',
            'Skate',
            'Basketball'
        ]
    }

    res.render('user', data)
})

app.post('/check-user', (req, res) => {
    let username = req.body.username

    if (username == '')
        return res.redirect('/')
    else 
        return res.redirect('/user/' + username)
})

app.use((req, res) => {
    res.status(404).render('error')
})


app.listen(3000, () => {
    console.log('Server started: http://localhost:3000');
})
