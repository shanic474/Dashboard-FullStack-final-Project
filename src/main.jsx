import './index.css';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import ToastProvider from './components/ui/ToastProvider.jsx';


createRoot(document.getElementById('root')).render(   
    <>
    <ToastProvider />
        <App />
        </>
)
