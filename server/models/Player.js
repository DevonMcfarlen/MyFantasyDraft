const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
    name: {
        type:String,
        required:true,
        trim: true,
    },
    playerName: {
        type: String,
        required: true,
        trim: true,
    },
    jersey: {
        type: String,
        required: true,
        trim: true,
    },
    stats: {
        type: String,
        required: true,
        trim: true,
    }
});
  
const Player = model('Player', playerSchema);
  
module.exports = Player;
  