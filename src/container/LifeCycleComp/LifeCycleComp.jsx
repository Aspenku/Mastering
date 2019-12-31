import React, {Component} from 'react';

import './LifeCycleComp.css'; 



class LifeCycleComp extends Component {

    constructor(props){
        super(props);
        
        this.state={
            count:1
        }

    }
    getDerivedStateFormProps(props,state){
        console.log('getDerivedStateFormProps')
        return null;

    }

    componentDidMount(){
        console.log('componentDidMount')
        setTimeout(()=>{
           this.setState({
           count:2
           })
       },3000)
        
        // this.setState({
        //     count:2
        // })
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){

        console.log('componentDidUpdate')
        return null;

    }
    render(){
        console.log('render')
        return(
        <button className="btn" onClick={this.changeCount }>Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComp;