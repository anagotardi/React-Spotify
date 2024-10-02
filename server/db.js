import mongoose from 'mongoose';

export default async function conectaNaDb(){
    mongoose.connect("mongodb+srv://gotardiana:JEr1ZM4jkP39t3LA@cluster0.6l4el.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
}

