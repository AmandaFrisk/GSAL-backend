import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'


const router = Router()

/*-------- Public Routes -----------*/


/*-------- Protected Routes -----------*/

// const ctrls = require('../controllers')

// router.get('/', ctrls.profiles.index);
// router.post('/', ctrls.profiles.create);
// router.delete('/:id', ctrls.profiles.destroy);
// router.put('/:id', ctrls.profiles.update );
// router.get('/:id', ctrls.profiles.show );


export { router }
