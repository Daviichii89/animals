import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render (
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root'));

registerServiceWorker();

