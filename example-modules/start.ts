import { defineApplication } from 'mad';
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
    }
  ]
});