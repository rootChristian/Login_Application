/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
const router = require('express').Router();
const userController = require("../controllers/userController");
///const verifyToken = require('../middleware/verifyToken');

//Routes
// Secure all routes
///router.use(verifyToken);
router.get('/', userController.getAllUsers);
router.get('/:username', userController.getUser);
router.post('/', userController.createNewUser);
///router.patch('/', userController.updateUser);
///router.delete('/', userController.deleteUser);

module.exports = router;
