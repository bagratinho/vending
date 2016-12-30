import 'normalize-css';
import '../css/css.less';
import '../css/fonts.css';
import React from 'react';
import {render} from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes.jsx';

render(<Router history={ hashHistory }>
        { routes }
    </Router>, document.getElementById("app") );