const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
const mongoose = require('mongoose');


// console.log(app.get('env')); // part of the express framework to get the environment variable
// console.log(process.env)  // part of the node.js environment to get the environment variable

//Mongoose connect
mongoose.connect('mongodb://localhost:27017/my-students-2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log("Unable to connect.... ", err));

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
})
