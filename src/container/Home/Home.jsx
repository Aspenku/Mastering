import React,{Component} from 'react';
//import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
//import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends Component {


    state={
        showComponent:true

    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                showComponent:false
            })
            
        }, 3000);
    }
    render(){

        return(
            <div>
               {/* <p>Props Materi</p>

                <hr></hr>
                <YouTubeComp 
                time="11.19" 
                title="Tutorail 1"   
                desc="3 Jam lalu"/>   
                
                <YouTubeComp  
                time='9.10' 
                title="Tutorail 1"   
                desc="2 Jam lalu"/>    
                
                <YouTubeComp  
                time="10.10" 
                title="Tutorail 1"  
                desc="10 Jam lalu"/>    
                
                <YouTubeComp  />    
                
                
                
                <p>Counter</p>
                <hr/>
                <Product />

               */}
            

                <p>Life Cycle Component</p>
                <hr/>

                <LifeCycleComp />
            </div>
          
           )
    }                                                                                                                                                                                                                                                               
}

export default Home;