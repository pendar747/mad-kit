import React from '../../../lib/node_modules/react';
import renderPage from '../../../lib/node_modules/mad';
import { MessagesTypes } from '../interface';

renderPage('registration', ({ targetElement, sendMessage }) => {
  const component = (
    <form action="">
      <label htmlFor="username"></label>
      <input type="text" />
      <label htmlFor="password"></label>
      <input type="password" />
      <button onClick={() => sendMessage(MessagesTypes.RegisterUser, { username, password })}>Submit</button>
    </form>
  );
  return React.render(component, targetElement);
});