import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
        lat: 56.321342, 
        lng: 22.883411
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '437px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCDErgX5iZNZFGk7QjOBZaCytzvlR4x2WM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={56.321342}
            lng={22.883411}
            text='My map'
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;