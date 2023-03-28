import { config } from 'dotenv'
import { Sequelize } from 'sequelize'
import { DbConfig } from '../types'

config()

/**
 * Get db config depending on current env
 */
const getConfig = (): DbConfig => {
  const dbConfig = {
    host: process.env.DEV_PG_HOST as string,
    port: process.env.DEV_PG_PORT as string,
    database: process.env.DEV_PG_DB as string,
    user: process.env.DEV_PG_USER as string,
    password: process.env.DEV_PG_PASSWORD as string,
  }

  return dbConfig
}

const dbConfig = getConfig()
const { user, password, host, port, database } = dbConfig

const sequelize = new Sequelize(`postgres://${user}:${password}@${host}:${port}/${database}`)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

export default sequelize
