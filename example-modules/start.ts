import { defineApplication } from '../lib/node_modules/mad';
import registration from './registration';
import profile from './profile';
import persistance from './persistance';

defineApplication({
  modules: [
    registration,
    profile,
    persistance
  ],
  routes: [
    {
      path: '/register',
      registration.pages.registration
    },
    {
      path: '/login',
      registration.pages.login
    },
    {
      path: '/forgotPassword',
      registration.pages.forgotPassword
    }
  ]
});