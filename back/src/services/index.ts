import { mailOptions } from '../types'
import transporter from '../config/mail'

export const sendEmail = async (mailOptions: mailOptions): Promise<string | void> => {
  return await new Promise<string | void>((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err !== null) {
        console.log(err)
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
