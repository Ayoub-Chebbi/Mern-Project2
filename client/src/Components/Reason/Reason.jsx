import React from 'react'
import "./Reason.css"
import graph from "../Images/graph.png"

const Reason = () => {
  return (
    <div>
        <div className='container'>
            <div style={{alignItems : "center"}} className='row'>
                <div className='col-xl-6'>
                    <img src={graph} alt='graph-image'/>
                </div>
                <div className='col-xl-6'>
                    <h4>Reasons Why you should Change Your car parts</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eum illo animi quam voluptates unde repudiandae porro iste commodi reprehenderit soluta ex dignissimos ipsum, quae minus corporis natus veniam nihil.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reason