/** Controllers */
import { Application } from 'express'
import { getUserByUuid, authentication, registration } from '../controllers/userController'
import { checkUserModel, checkUserTokenFormat, checkUserTokenUuid } from '../middlewares'
/** Models */

/** Middlewares */

/** Router */
const routes = (app: Application) => {
  app.route('/api/user/authentication').post(authentication)
  app.route('/api/user/registration').post(registration)
  app.route('/api/user/:uuid').get(checkUserTokenUuid, getUserByUuid)
}

export default routes
