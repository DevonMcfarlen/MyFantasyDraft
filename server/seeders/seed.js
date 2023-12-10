const db = require('../config/connection');
const {User} = require('../models');
const userSeeds = require('./userSeeds.json');
const playerSeeds = require('./playerSeeds.json');


db.once('open', async () => {
  try {
    
    await User.create(userSeeds);

    for (let i = 0; i < playerSeeds.length; i++) {
      const { playerName, jersey, stats} = playerSeeds[i];
      const user = await User.findOneAndUpdate(
        { username: 'Admin3' },
        {
          $addToSet: {
            players: {
              playerName,
              jersey,
              stats
            }
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