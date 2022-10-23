import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./reset.css"
import App from './App';

ReactDom.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
,document.getElementById('root'))