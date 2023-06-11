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
  const [directionsOptions, setDirectionsOptions] = useState(null);
  const [directions, setDirections] = useState(null);
  const mapRef = useRef();
  const onLoad = useCallback(map => (mapRef.current = map), []);

  const handleMapClick = async event => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    const newAddress = await getAddressFromCoordinates(
      newMarker.lat,
      newMarker.lng
    );

    setDirectionsOptions({
      destination: newMarker,
      origin: coordinates,
      travelMode: 'DRIVING',
      language: 'en',
    });
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
        const userCoordinates = await getLatLng(result[0]);
        setDirectionsOptions({
          destination: userCoordinates,
          origin: coordinates,
          travelMode: 'DRIVING',
          language: 'en',
        });
      };
      fetchCoordinates();
    }
  }, [userAddress, coordinates]);

  useEffect(() => {
    if (directionsOptions) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(directionsOptions, (result, status) => {
        if (status === 'OK') {
          setDirections(result);
          const route = result.routes[0];
          const leg = route.legs[0];
          setDuration(leg.duration.text);
        }
      });
    }
  }, [directionsOptions, setDuration]);

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
        {coordinates && !directions && (
          <Marker position={coordinates} title={address} />
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
