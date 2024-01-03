import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import './App.css'
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />

    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







//Fake comments
// function emitComment(id) {
//     setInterval(() => {
//       window.dispatchEvent(
//         new CustomEvent(`lesson-${id}`,{
//           detail: `Nội dung comment của lesson ${id}`
//         })
//       )
//     }, 2000)
// }

// emitComment(1)
// emitComment(2)
// emitComment(3)


// root.render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <Router>

//         <App />

//       </Router>
//     </ThemeProvider>
//   </React.StrictMode>
// );


