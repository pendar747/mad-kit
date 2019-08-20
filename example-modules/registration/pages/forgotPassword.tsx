import React from 'react';
import renderPage from 'mad';

renderPage('forgotPassword', ({ targetElement }) => {
    const component = (
        <form action="">
            <p>Please specify your username to send a reset link</p>
            <label htmlFor="username">username</label>
            <input type="text"/>
            <button onClick={}>Submit</button>
        </form>
    );
    return React.render(component, targetElement);
});