const express = require('express');
const app = express();
const morgan=require('morgan');
 
//confi
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//use morgan for get http calls in console 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
//test
app.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})
 
//init server
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});