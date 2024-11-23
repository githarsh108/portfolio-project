const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

//dot env config
dotenv.config();

//rest object creation
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname, './client/build')))

//routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'))

app.get('*', function(req,res){
    res.send(sendFile(path.join(__dirname,'./client/build/index.html')))
});

//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT,() => {
    console.log(`Server running on PORT ${PORT}`);
})