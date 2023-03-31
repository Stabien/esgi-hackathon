import sequelize from '../config/db'
import { DataTypes, Model } from 'sequelize'
import { ContentType, ProfessionCategory, SportCategory } from '../types'

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

export const professionCategories = [
  'Médical et paramédical',
  'Services financiers',
  'Éducation',
  'Ingénierie',
  "Technologie de l'information",
  'Marketing et publicité',
  'Médias et communication',
  'Droit',
  'Services publics',
  'Commerce de détail et de services',
  'Sans emploi',
]

export const sportCategories = ['Inactif', 'Faible activité', 'Actif', 'Très actif']
export const contentTypes = ['article', 'video', 'podcast']

export interface UserModel extends Model {
  uuid: string
  email: string
  password: string
  firstname: string
  lastname: string
  role: string
  profession: ProfessionCategory
  children: number
  sport: SportCategory
}

export interface ContentModel extends Model {
  uuid?: string
  type: ContentType
  title: string
  thumbnail: string
  creationDate: number //timestamp
  text?: string
  url?: string
  tags?: string[]
}

export interface ImpressionModel extends Model {
  contentUuid: string
}

export interface TagModel extends Model {
  contentUuid: string
  tagName: string
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
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profession: {
      type: DataTypes.ENUM(...professionCategories),
      allowNull: false,
    },
    children: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sport: {
      type: DataTypes.ENUM(...sportCategories),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    underscored: true,
  },
)

export const Content = sequelize.define<ContentModel>(
  'Content',
  {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    type: {
      type: DataTypes.ENUM(...contentTypes),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'content',
  },
)

export const Impression = sequelize.define<ImpressionModel>(
  'Impression',
  {
    contentUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: Content, // Can be both a string representing the table name or a Sequelize model
        key: 'uuid',
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    underscored: true,
  },
)

export const Tag = sequelize.define<TagModel>(
  'Tag',
  {
    contentUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: 'content', // Can be both a string representing the table name or a Sequelize model
        key: 'uuid',
      },
    },
    tagName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'tag',
  },
)

Content.hasMany(Tag)
