import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Brow } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Brow>
    <App />
  </Brow>
)
