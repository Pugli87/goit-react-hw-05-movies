//import{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import { App } from 'components/App';
import './styles.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
);
