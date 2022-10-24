import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./reset.css"
import { AutenticacaoProvider } from './context/AutenticacaoProvider';
import { UsuarioProvider } from './context/UsuarioProvider';
import {HabitosProvider} from './context/HabitosConcluidosProvider';

import App from './App';

ReactDom.render(
  <BrowserRouter>
    <AutenticacaoProvider>
      <UsuarioProvider>
        <HabitosProvider>
          <App/>
        </HabitosProvider>
      </UsuarioProvider>
    </AutenticacaoProvider>
  </BrowserRouter>
,document.getElementById('root'))