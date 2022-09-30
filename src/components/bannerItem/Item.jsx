 import React from 'react'
import '../bannerItem/item.scss'

const Item = (props) => {
  return (
    <>
     
       <div className="box">
          <div className="img">
            <img src={props.photo} alt="" />
          </div>
          <div className="txt">
            <h4>{props.title}</h4>
            <p>{props.desc}</p>

          </div>
        </div>
       
     
    </>
  )
}

export default Item