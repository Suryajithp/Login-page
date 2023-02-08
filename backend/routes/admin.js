const express = require ('express')
const router = express.Router()
const adminController = require("../controller/admin_controller")


router.post('/', adminController.Adminlogin)
router.get('/userlist', adminController.Userlist)
router.get('/edit/:id', adminController.getEdit)
router.post('/update', adminController.updateUser)
router.post('/changestatus/:id', adminController.ChangeStatus)


module.exports = router