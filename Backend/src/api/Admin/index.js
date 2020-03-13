import { Router } from 'express'

import {
    adminLogin,
    getOwnersData,
    editOwnersData,
    updateOwners,
    getPropertyDetails,
    getFeedBack
} from './controller'

const router = new Router();

router.get('/', adminLogin)

router.get('/getOwnersData', getOwnersData)

router.get('/editOwnersData/:id', editOwnersData)

router.put('/updateOwners/:id', updateOwners)

router.get('/getPropertyDetails', getPropertyDetails)

router.get('/getFeedback', getFeedBack);

export default router