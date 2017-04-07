import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyDxCV8ILBhAFn8VHmeABISg_AzXRI9M-Hk",
  authDomain: "ingram-a614b.firebaseapp.com",
  databaseURL: "https://ingram-a614b.firebaseio.com",
  projectId: "ingram-a614b",
  storageBucket: "ingram-a614b.appspot.com",
  messagingSenderId: "846483020855"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
