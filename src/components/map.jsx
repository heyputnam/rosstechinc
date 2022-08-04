import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 39.280229589291,
    lng: -76.81756862667811,
  },
  zoom: 16,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div style={{ height: '60vh', width: '100%' }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: 'AIzaSyBBz8VR5v2ueJFciDQQ3n_Nk6LWdWNYoM8' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={39.280229589291}
        lng={-76.81756862667811}
        text={'RTS Office'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
