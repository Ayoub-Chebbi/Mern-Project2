import React from 'react'
import "./Map.css"
const Map = () => {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Our Partners</h1>
        <div className='map-edit'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25576.304761933243!2d10.216193085119814!3d36.74565666649514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd364271e82e4d%3A0x8ee133b15d562547!2sEconomic%20Auto%20Mazda!5e0!3m2!1sen!2stn!4v1695583366990!5m2!1sen!2stn" width="1200" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Map