import React from 'react'

const Characters = ({characters = []}) => {
return (
    <div className="row">
        {
            characters.map((item,index)=>(
                <div key={index} className='col mb-5 ' >
                    <div className='card' style={{minWidth:"100px",width: "18rem"}}>
                        <img src={item.image} alt=""/>
                    </div>
                    <div className='card-body'>
                        <h5>{item.name}</h5>
                        <hr/>
                        <p>Species:{item.species}</p>
                        <p>location:{item.location.name}</p>
                        <p>Date: {item.created}</p>
                    </div>
                </div>
            ))}
    </div>
  );
};

export default Characters