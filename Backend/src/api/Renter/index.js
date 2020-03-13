import { Router } from 'express'

import {
    renterLogin,
    renterRegistration,
    renterProfile,
    updateProfile,
    searchLocations,
    propertyNames,
    forgotpassword,
    renterFeedBack,
    addpayment,
    bookingHistory,
    editPayment,
    getPaymentData,

} from './controller'

const router = new Router();

router.get('/renterLogin', renterLogin)

router.post('/renterRegistration', renterRegistration)

router.get('/renterProfile', renterProfile)

router.put('/updateProfile/:id', updateProfile)

router.get('/forgotpassword', forgotpassword)

router.get('/editPayment/:id', editPayment)

router.post('/addpayment', addpayment);

router.get('/bookingHistory', bookingHistory);

router.get('/searchLocations', searchLocations)

router.get('/propertyNames', propertyNames)

router.post('/renterFeedBack', renterFeedBack)

router.get('/getPaymentData', getPaymentData)


export default router