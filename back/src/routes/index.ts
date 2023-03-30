/** Controllers */
import { Application } from 'express'
import {
  addContent,
  deleteContent,
  getAllContents,
  getContentByTags,
  getContentByUuid,
  updateContent,
} from '../controllers/contentController'
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

  app.route('/api/content/:uuid').get(getContentByUuid).put(updateContent).delete(deleteContent)
  app.route('/api/content').post(addContent)
  app.route('/api/contents').get(getAllContents)
  app.route('/api/content/tags').get(getContentByTags)
}

export default routes
