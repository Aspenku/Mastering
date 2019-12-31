import React from 'react';
import './YouTubeComp.css';


const YouTubeComp=(props)=>{
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/_hopxgcz1AA/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCnRWhNbSf-IzTAybIRPNUcaWarqA://www.youtube.com/watch?v=GBvnzRwoizo&list=PLU4DS8KR-LJ03qEsHn9zV4qdhcWtusBqb&index=3" alt=""/>
                <p className="time">{props.time}</p>
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>

               
            </div>
           
        </div>

    )
}

YouTubeComp.defaultProps={
    time:"00.00",
    desc:"Baru diupload",
    title:"Tutorial React"


    
}


export default YouTubeComp; 