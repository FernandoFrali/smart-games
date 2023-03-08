import React, { ReactNode } from 'react';
import '../../styles/global.css';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '350px',
  height: '200px',
};

const center = {
  lat: -23.55166385308341,
  lng: -46.638240568000825,
};

interface MapProps {
  stores?: string;
}

const Map: React.FC<MapProps> = ({ stores }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD-yvZKIuLYsNrdg94-gofO3kR-mKRa0r0',
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [actualStores, setActual] = React.useState<string[] | null>(null);

  const markers = [
    {
      store: 'Loja tambóre',
      location: {
        lat: -23.5044569,
        lng: -46.8346937,
      },
    },
    {
      store: 'Loja União',
      location: {
        lat: -23.5414534,
        lng: -46.7685945,
      },
    },
    {
      store: 'Loja Iguatemi',
      location: {
        lat: -23.5770795,
        lng: -46.6884185,
      },
    },
  ];

  React.useEffect(() => {
    const splitedStores = stores?.split('/') as string[];
    setActual(splitedStores);
  }, []);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {actualStores?.map((store: string) => {
        const selectedMarker = markers.find((marker) => store === marker.store);
        if (selectedMarker) {
          return <Marker position={selectedMarker.location} />;
        }
        return null;
      })}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
