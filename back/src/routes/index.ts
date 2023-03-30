/** Controllers */
import { Application } from 'express'
import { addContent, getContentByUuid, updateContent } from '../controllers/contentController'
import {
  getUserByUuid,
  authentication,
  registration,
  updateUser,
} from '../controllers/userController'
import { checkUserTokenUuid } from '../middlewares'
/** Models */

/** Middlewares */

/** Router */
const routes = (app: Application) => {
  app.route('/api/user/authentication').post(authentication)
  app.route('/api/user/registration').post(registration)
  app
    .route('/api/user/:uuid')
    .get(checkUserTokenUuid, getUserByUuid)
    .put(checkUserTokenUuid, updateUser)

  app.route('/api/content/:uuid').get(getContentByUuid).put(updateContent).delete(getContentByUuid)
  app.route('/api/content/').post(addContent)
}

export default routes
