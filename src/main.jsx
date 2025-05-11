import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const http = require('http');

const requestListener = (req, res) => {
    res.writeHead(200);
    res.end('Hello, Cloud Run!');
};

const server = http.createServer(requestListener);
server.listen(8080, () => {
    console.log('Server is running on port 8080');
});
/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/
