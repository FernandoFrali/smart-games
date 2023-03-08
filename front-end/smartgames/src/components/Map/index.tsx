import React from 'react';
import '../../styles/global.css';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '300px',
  height: '300px',
};

const center = {
  lat: -23.5766585,
  lng: -46.6898241,
};

const marker = {
  lat: -23.5766585,
  lng: -46.6898241,
};

const Map: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD-yvZKIuLYsNrdg94-gofO3kR-mKRa0r0',
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={marker} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
