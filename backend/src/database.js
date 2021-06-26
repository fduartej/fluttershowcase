const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://dbUser:Adivina1@cluster0.kexsc.mongodb.net/flutter-node-app?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database: Connected');
    }catch(e){
        console.error(e);
    }
    
}

module.exports = { connect }