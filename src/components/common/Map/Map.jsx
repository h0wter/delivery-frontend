import { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete';

export const Map = ({ address }) => {
  const [coordinates, setCoordinates] = useState(null);
  const mapRef = useRef();
  const onLoad = useCallback(map => (mapRef.current = map), []);
  console.log('state coord', coordinates);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const result = await getGeocode({
        address,
      });
      console.log(result);
      const coordinates = await getLatLng(result[0]);
      setCoordinates(coordinates);
    };
    fetchCoordinates();
  }, [address]);

  return (
    <>
      <GoogleMap
        mapContainerStyle={{ width: '400px', height: '400px' }}
        center={coordinates}
        zoom={8}
        onLoad={onLoad}
      >
        {coordinates && <Marker position={coordinates} />}
      </GoogleMap>
    </>
  );
};
