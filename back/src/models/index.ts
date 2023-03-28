import sequelize from '../config/db'
import crypto from 'crypto'
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
  isVerified: boolean
  confirmationCode: string
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
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    confirmationCode: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: crypto.randomBytes(128).toString('hex'),
    },
  },
  {
    timestamps: false,
    underscored: true,
  },
)

/**
 * Entity models
 */
export interface UserEntity {
  uuid: string
  email: string
  password: string
}
