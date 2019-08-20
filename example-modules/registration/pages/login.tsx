import React from 'react';
import renderPage from 'mad';

renderPage('login', ({ targetElement, goToPage }) => {
    const component = (
        <form action="">
            <label htmlFor="username"></label>
            <input type="text"/>
            <label htmlFor="password"></label>
            <input type="password"/>
            <button onClick={}>Submit</button>
            <button onClick={goToPage('forgotPassword')}>I forgot my password</button>
        </form>
    );
    return React.render(component, targetElement);
});