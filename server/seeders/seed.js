const db = require('../config/connection');
const {User, Player } = require('../models');
const userSeeds = require('./userSeeds.json');
const playerSeeds = require('./playerSeeds.json');


db.once('open', async () => {
  try {
    
    await User.create(userSeeds);

    for (let i = 0; i < playerSeeds.length; i++) {
      const { _id, name } = await Player.create(playerSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: name },
        {
          $addToSet: {
            players: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});