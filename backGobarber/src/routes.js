import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import AvailableController from './app/controllers/AvailableController';

import verifyJwt from './app/middlewares/auth';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.put('/users', verifyJwt, UserController.update);

routes.post('/sessions', SessionController.store);

routes.get('/providers', verifyJwt, ProviderController.index);

routes.get(
  '/providers/:providerId/available',
  verifyJwt,
  AvailableController.index
);

routes.post('/appointments', verifyJwt, AppointmentController.store);
routes.get('/appointments', verifyJwt, AppointmentController.index);
routes.delete('/appointments/:id', verifyJwt, AppointmentController.delete);

routes.get('/schedule', verifyJwt, ScheduleController.index);

routes.get('/notifications', verifyJwt, NotificationController.index);
routes.put('/notifications/:id', verifyJwt, NotificationController.update);

routes.post('/files', verifyJwt, upload.single('file'), FileController.store);

export default routes;
