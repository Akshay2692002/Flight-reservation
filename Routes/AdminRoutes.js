const express= require('express');

const flightControllers = require('../controllers/flightControllers');

const router = express.Router();

//Login Routes user

router.post('/Signup',flightControllers.signup_user);

router.post('/Login',flightControllers.login_user);

//Admin
router.get('/Create',flightControllers.create_get);

router.post('/Create',flightControllers.create_flight_post)

router.get('/Booked_Det',flightControllers.Booked_get);

router.get('/Details',flightControllers.Detail_get)

router.post('/Details',flightControllers.Detail_filt);

router.delete('/Delete/:id',flightControllers.delete_id);

router.get('/Delete',flightControllers.delete_get);
//User
router.get('/Home',flightControllers.Home_get);

router.get('/Search_Flight',flightControllers.Search_get);

router.post('/Search_Flight',flightControllers.Search_filt);

router.get('/Book',flightControllers.Book_get);

router.post('/Book',flightControllers.Book_post)

router.get('/Cancel',flightControllers.Cancel_get);

router.delete('/Cancel/:id',flightControllers.Cancel_delete)

router.get('/Rules',flightControllers.Rules_get);

module.exports = router;

