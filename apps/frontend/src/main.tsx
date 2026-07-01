import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx';
import './styles/styles.css';


// Entry point where root component is rendered into the DOM


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Auth0Provider
        useRefreshTokens={true}
        cacheLocation="localstorage"
        domain="dev-5lulvzdq837joipn.us.auth0.com"
        clientId="udvE8BqM9O1WqXWiE9gsfvFHRePvdXI5"
        authorizationParams={{
            redirect_uri: window.location.origin + '/directory',
            audience: '/api',
            scope: 'openid profile email offline_access',
        }}
    >
        <App />
    </Auth0Provider>
);