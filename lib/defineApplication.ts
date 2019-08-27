import express from 'express';

const defineApplication = () => {

  const app = express();

  return () => {
    app.listen(() => {
      console.log('Application start');
    });
  }

}

export default defineApplication;