import { Router } from 'express'

import {
    ownerlogin,
    forgotpassword,
    ownerRegistration,
    ownerProfile,
    updateProfile,
    ownerData,
    editProperty,
    addProperty,
    getPropertyData,
    updateProperty,
    deleleProperty,
    getFeedBack,
    paymentDetails,
    roomVacate

} from './controller'

const router = new Router();

router.get('/ownerlogin', ownerlogin)

router.get('/forgotpassword', forgotpassword)

router.post('/ownerRegistration', ownerRegistration)

router.get('/paymentDetails', paymentDetails)

router.get('/ownerProfile', ownerProfile)

router.put('/updateProfile/:id', updateProfile)

router.get('/ownerData', ownerData)

router.get('/editProperty/:id', editProperty)

router.post('/addProperty', addProperty)

router.get('/getPropertyData', getPropertyData)

router.put('/updateProperty/:id', updateProperty)

router.delete('/deleleProperty/:id', deleleProperty)

router.get('/getFeedBack', getFeedBack)

router.put('/roomVacate', roomVacate)

export default router