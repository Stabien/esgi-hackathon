/** Controllers */
import { Application } from 'express'
import {
  getUserById,
  authentication,
  registration,
  emailConfirmation,
} from '../controllers/userController'
import { checkUserModel, checkUserTokenFormat, checkUserTokenUuid } from '../middlewares'
/** Models */

/** Middlewares */

/** Router */
const routes = (app: Application) => {
  app.route('/api/user/authentication').post(authentication)
  app.route('/api/user/registration').post(checkUserModel, registration)
  app.route('/api/user/:uuid').get(checkUserTokenUuid, getUserById)
  app.route('/api/user/confirmation/:confirmationCode').get(emailConfirmation)
}

export default routes
