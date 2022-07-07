import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';

// Global styles
import 'sanitize.css/sanitize.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    // Can delete <React.StrictMode> to avoid "findDOMNode is deprecated" warning...
    // But it's not the best choice
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
