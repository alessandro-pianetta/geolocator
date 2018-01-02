import React from 'react'

const Map = (props) => {
  const { api, lat, lng } = props
  console.log(lat, lng)
  return (
    <div className="map">
      <iframe
        title="map"
        width="600"
        height="450"
        frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/view?zoom=12&center=${lat}%2C${lng}&key=${api}`}
      />
    </div>
  )
}

export default Map
