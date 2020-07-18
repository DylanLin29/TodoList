require("dotenv").config();
module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  
  env: {
    MONGO_URI: process.env.MONGO_URI
  }
};