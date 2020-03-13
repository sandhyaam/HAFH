import {Router} from 'express'

import admin from './Admin'
import owner from './Owner'
import renter from './Renter'

const router=new Router();

router.use('/admin',admin)
router.use('/owner',owner)
router.use('/renter',renter)

export default router;