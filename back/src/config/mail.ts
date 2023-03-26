import nodemailer from 'nodemailer'
import { config } from 'dotenv'

config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.DEV_EMAIL_ADDRESS,
    pass: process.env.DEV_EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

export default transporter
