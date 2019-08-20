import React from 'react';
import renderPage from 'mad';

renderPage('login', ({ targetElement }) => {
    const component = (
        <form action="">
            <label htmlFor="username"></label>
            <input type="text"/>
            <label htmlFor="password"></label>
            <input type="password"/>
            <button onClick={}>Submit</button>
        </form>
    );
    return React.render(component, targetElement);
});