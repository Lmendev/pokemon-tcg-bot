const { Sequelize } = require('sequelize');

const connectDB = () => {
  try {
    //const sequelize = new Sequelize('')
    const sequelize = new Sequelize ('', {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
    console.log("Data base connected")
    
    return sequelize
  } catch (err) {
    
    console.log(`Error: ${err.message}`)
    process.exit(1)
  }
};

module.exports = connectDB