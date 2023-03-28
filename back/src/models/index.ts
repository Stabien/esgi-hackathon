import sequelize from '../config/db'
import { DataTypes, Model } from 'sequelize'

/**
 * Entity rules
 */
export const regexUuid =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
export const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
export const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

export const userRules = {
  email: regexEmail,
  password: regexPassword,
}

interface UserModel extends Model {
  uuid: string
  email: string
  password: string
  firstname: string
  lastname: string
  role: string
  profession: string
  children: number
  sport: string
}

/**
 * Sequelize models
 */
export const User = sequelize.define<UserModel>(
  'User',
  {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    children: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    sport: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    underscored: true,
  },
)