import { useCallback, useEffect, useRef, useState } from 'react';
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete';

export const Map = ({ address, userAddress, setDuration }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [userCoordinates, setUserCoordinates] = useState(null);
  const [directions, setDirections] = useState(null);
  const mapRef = useRef();
  const onLoad = useCallback(map => (mapRef.current = map), []);

  const handleMapClick = event => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setUserCoordinates(newMarker);
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      const result = await getGeocode({
        address,
      });
      const coordinates = await getLatLng(result[0]);
      setCoordinates(coordinates);
    };
    fetchCoordinates();
  }, [address]);

  useEffect(() => {
    if (userAddress) {
      const fetchCoordinates = async () => {
        const result = await getGeocode({
          address: userAddress,
        });
        const coordinates = await getLatLng(result[0]);
        setUserCoordinates(coordinates);
      };
      fetchCoordinates();
    }
  }, [userAddress]);

  return (
    <>
      <GoogleMap
        mapContainerStyle={{ width: '400px', height: '400px' }}
        center={coordinates}
        zoom={8}
        onLoad={onLoad}
        options={{
          disableDefaultUI: true,
          clickableIcons: false,
        }}
        onClick={event => handleMapClick(event)}
      >
        {coordinates && <Marker position={coordinates} title={address} />}
        {coordinates && userCoordinates && (
          <DirectionsService
            options={{
              destination: userCoordinates,
              origin: coordinates,
              travelMode: 'DRIVING',
              language: 'en',
            }}
            callback={(result, status) => {
              if (status === 'OK') {
                setDirections(result);
                const route = result.routes[0];
                const leg = route.legs[0];
                setDuration(leg.duration.text);
              }
            }}
          />
        )}
        {directions && (
          <DirectionsRenderer
            options={{
              directions: directions,
            }}
          />
        )}
      </GoogleMap>
    </>
  );
};
