import React,{Component,fragment} from 'react';
import '../Product/Product.css'; 
import '../Product/Product'; 


class CardProduct extends Component {
    
    //--------------- State FUll Component--------------------
    state={
        order:0,
        name:'Wila'
    }

    handleCounterChange=(newValue)=>{
        this.props.onCounterChange(newValue);
    }

    handlePlus=()=>{
        //alert('Plus Button');
        this.setState({
            order:this.state.order+1
        },()=>{
            this.handleCounterChange(this.state.order);
        })
      
    }

    handleMinus=()=>{
        //alert('Minus Button');
        if (this.state.order>0){
            this.setState({
            order:this.state.order-1
           },()=>{
               this.handleCounterChange(this.state.order);
           })
        }
    }
    render(){
        return(
            <fragment>
                    <div className="card">
                        <div className="img-thumb-prod" >
                            <img src="https://image.shutterstock.com/image-photo/nila-goreng-bumbu-pedas-asam-600w-1539143858.jpg" alt="product-image"/>
                        </div> 
                        <p className="product-title">Bumbu ayam rasa original kas Bali</p>
                        <p className="product-price">Rp. 34.000</p>
                        <div className="counter">
                                <button className="minus" onClick={this.handleMinus}>-</button>
                                <input type="text" value={this.state.order}></input>
                                <button className="plus" onClick={this.handlePlus}>+</button>
                        </div>

                    </div>
            </fragment>
        );
    }
}

export default CardProduct; 