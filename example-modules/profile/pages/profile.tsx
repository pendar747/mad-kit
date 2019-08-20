import React from 'react';
import renderPage from 'mad';

renderPage('profile', ({ targetElement }, { username, avatar }) => {
  const component = (
    <div>
      <img src={avatar} alt="avatar" />
      <h3>{username}</h3>
    </div>
  );
  return React.render(component, targetElement);
});