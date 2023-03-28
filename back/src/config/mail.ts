import nodemailer from 'nodemailer'
import { config } from 'dotenv'

config()

const transporter = nodemailer.createTransport({
  service: 'maildev',
  port: 1025,
  ignoreTLS: true
})

export default transporter
