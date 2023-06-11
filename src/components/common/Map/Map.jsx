import { useCallback, useEffect, useRef, useState } from 'react';
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import { getAddressFromCoordinates } from '../../../services/api';

export const Map = ({
  address,
  userAddress,
  setDuration,
  handleAddressPick,
}) => {
  const [coordinates, setCoordinates] = useState(null);
  const [userCoordinates, setUserCoordinates] = useState(null);
  const [directions, setDirections] = useState(null);
  const [showDirectionsService, setShowDirectionsService] = useState(false);
  const mapRef = useRef();
  const onLoad = useCallback(map => (mapRef.current = map), []);

  const handleMapClick = async event => {
    setShowDirectionsService(true);
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    const newAddress = await getAddressFromCoordinates(
      newMarker.lat,
      newMarker.lng
    );

    setUserCoordinates({ ...newMarker });
    handleAddressPick(newAddress);
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
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={coordinates}
        zoom={8}
        onLoad={onLoad}
        options={{
          disableDefaultUI: true,
          clickableIcons: false,
          gestureHandling: 'greedy',
        }}
        onClick={event => handleMapClick(event)}
      >
        {coordinates && !userCoordinates && (
          <Marker position={coordinates} title={address} />
        )}
        {coordinates && userCoordinates && showDirectionsService && (
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
                setShowDirectionsService(false);
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
