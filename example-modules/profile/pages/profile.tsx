import React from '../../../lib/node_modules/react';
import renderPage from '../../../lib/node_modules/mad';

renderPage('profile', ({ injectDom }, { username, avatar }) => {
  const component = (
    <div>
      <img src={avatar} alt="avatar" />
      <h3>{username}</h3>
    </div>
  );
  const element = React.render(component);
  injectDom(element);
});