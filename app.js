let express  =  require('express');
let routes =  require('./route/index');
let mongo = require('mongoose');

let app = express();
let port = 7440;
let hostname =  "localhost";
const dbUrl  = 'mongodb://127.0.0.1:27017/zomatoclone';
const atlasDbUrl = 'mongodb+srv://SainathJalnila:Honda7440@cluster0.bjk7t.mongodb.net/ZomatoClone?retryWrites=true&w=majority';


app.use(express.json());

app.use('/',  routes);

mongo.connect( atlasDbUrl,{
    
})
 .then(res =>
    {
        app.listen(port, hostname ,()=>
{
    console.log(`Server has started ${port} ${hostname}`);
})
    }).catch(err => console.log(err));
