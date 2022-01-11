let express  =  require('express');
let routes =  require('./route/index');
let mongo = require('mongoose');
let cors = require('cors');

let app = express();
let port = process.env.PORT || 5456;
let hostname =  "localhost";
const atlasDbUrl = 'mongodb+srv://SainathJalnila:Honda7440@cluster0.bjk7t.mongodb.net/ZomatoClone?retryWrites=true&w=majority';


app.use(express.json());
app.use(cors());
app.use('/api',  routes);

mongo.connect( atlasDbUrl,{
    
})
 .then(res =>
    {
        app.listen(port, hostname ,()=>
{
    console.log(`Server has started ${port} ${hostname}`);
})
    }).catch(err => console.log(err));
