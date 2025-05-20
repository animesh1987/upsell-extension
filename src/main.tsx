import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App'
import { ExtensionProvider } from './context/ExtensionContext';
import { extensionServiceInstance } from './service';

async function main() {
  await extensionServiceInstance.init();

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ExtensionProvider>
        <App />
      </ExtensionProvider>
    </React.StrictMode>
  ) 
}

main();
