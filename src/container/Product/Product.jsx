import React,{Component,Fragment} from 'react';
import './Product.css'; 
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    
    // State FUll Component--------------------
    state={
        order:0,
        name:'Wila'
    }
    handleCounterChange=(newValue)=>{
        this.setState({
            order:newValue
        });
    }


    /*handlePlus=()=>{
        //alert('Plus Button');
        this.setState({
            order:this.state.order+1
        });
    }

    handleMinus=()=>{
        //alert('Minus Button');
        if (this.state.order>0){
            this.setState({
            order:this.state.order-1
           });
        }
    }
    */
    render(){
        console.log('render');
        return(
            <fragment>
                    <div className="header">
                        <div className="logo">
                            <img src="data:image/png;base64,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" />
                        </div>
                        <div className="troley">
                        <div className="count">{this.state.order}</div>
                            <img src="data:image/jpeg;base64,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" alt=""/>
                            
                        </div>

                    </div>


                    {/**-----card di pindah kan/d nuat terisah dengan header menjadi cardproduct class tersendiri ---*/}

                    {/* <div className="card">
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

                    </div> */}

                    <CardProduct onCounterChange={(value)=>this.handleCounterChange(value)}/>
            </fragment>
        );
    }
}

export default Product;