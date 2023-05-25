const router = require('express').Router();
const {
    createAdmin,
  getSingleUser,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createAdmin).put(authMiddleware);

router.route('/login').post(login);

router.route('/admin').get(authMiddleware, getSingleUser);

module.exports = router;
