import routerx from 'express-promise-router'
import userController from '../controllers/UserController'
import auth from '../service/auth'

const router = routerx()
// ,auth.verifyAdmin
router.post("/register",userController.register)
router.post("/login_tienda",userController.login)
router.post("/login_admin",userController.login)

export default router;