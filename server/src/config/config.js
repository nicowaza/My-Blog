import 'dotenv/config'

const config = {
  production : {
    secret : process.env.secret,
    MONGO_URI : process.env.MONGO_URI,
    port : process.env.PORT
  },
  development : {
    secret: process.env.secret,
    MONGO_URI : 'mongodb://NicolasD:foxylady1480!@ds257851.mlab.com:57851/blog',
    port : 6543,
  }
}
export const getConfig = env => config[env] || config.development
