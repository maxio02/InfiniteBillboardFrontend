import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

var center = [0, 0];
if (window.location.pathname.match(/\/-?\d+,-?\d+\/?/)) {
  const locations = window.location.pathname.split('/')[1].split(',');
  center[0] = parseInt(locations[0]);
  center[1] = parseInt(locations[1]);
}

root.render(
  <React.StrictMode>
    <App center={center}  />
  </React.StrictMode>
);
window.addEventListener('paste', e => {
  const upload = document.getElementById("fileUpload");
  console.log(e.clipboardData.files);
  upload.files = e.clipboardData.files;
  upload.dispatchEvent(new Event("change", {bubbles: true}))
});
document.body.addEventListener('dragover', e => {
  e.preventDefault();
})
document.body.addEventListener('drop', e => {
  e.preventDefault();
  e.stopPropagation();
  const upload = document.getElementById("fileUpload");
  console.log(e.dataTransfer.files);
  upload.files = e.dataTransfer.files;
  upload.dispatchEvent(new Event("change", {bubbles: true}))
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
