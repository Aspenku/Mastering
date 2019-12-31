import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// import FirstTest from './component/TestComponent';
// import TestComponent from './component/TestComponent';
// import StateFullComponent from './container/StateFullComponent';
// import YouTubeComp from './component/YouTubeComp/YouTubeComp';
import Home from './container/Home/Home';
//import YouTubeComp from './component/YouTubeComp/YouTubeComp';

// const FirstTest =()=>{
//     return <p> ReactDOM</p>
// }

// const TestComponent=()=>{
//    return <p>TestComponent</p> 
// }

// class StateFullComponent extends React.Component{
//     render(){
//         return <p>StateFullComponent</p>
//     }
// }
// function TestComponent(){
//     return <p>Hello TestComponent</p>
// }

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Home />, document.getElementById('root')); // stateless dari function bukan dari class

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
