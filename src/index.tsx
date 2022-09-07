import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
        <App />,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endposint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/*let a = {
    name: "Lyuda",
    age: 10,
    address: {
        city: "SBP",
        country: "Russia"
    }
};


let users = [
        {
    name: "Lyuda",
    age: 10,
    address: {
        city: "SBP",
        country: "Russia"
    }
    },
    {
    name: "Viktor",
    age: 13,
    address: {
        city: "SBP",
        country: "Russia"
    }
    }
]

let b: Array<string | number>;
b = [1, 2, 3, 4, 5];
b = 5;
b = ["Hello", "World", 5];
b = [true, false];
b = [];

console.log(b);*/
