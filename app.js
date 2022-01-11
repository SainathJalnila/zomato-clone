let express  =  require('express');
let routes =  require('./route/index');
let mongo = require('mongoose');
let cors = require('cors');

let app = express();
const port = process.env.PORT || 4545; 

const atlasDbUrl = 'mongodb+srv://SainathJalnila:Honda7440@cluster0.bjk7t.mongodb.net/ZomatoClone?retryWrites=true&w=majority';


app.use(express.json());
app.use(cors());
app.use('/api',  routes);

mongo.connect( atlasDbUrl,{
    
})
 .then(res =>
    {
        app.listen(port,()=>
{
    console.log(`Server has started ${port} `);
})
    }).catch(err => console.log(err));
