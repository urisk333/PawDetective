import './Maps.css';
import React, { FunctionComponent } from 'react';
import { GoogleMap, InfoWindow } from '@react-google-maps/api';

import { useCallback, useState } from 'react';
import { formatRelative } from 'date-fns';
import { useRef } from 'react';
import MapMarker from './MapMarker';
import { FaLocationArrow } from 'react-icons/fa';
import { Paw, MapProps, MarkerProps, MarkerProps2 } from '../Interfaces';

const defaultTSObject = {
  lat: 0,
  lng: 0,
  time: new Date(),
};

const Map: FunctionComponent<MapProps> = ({
  setLat,
  setLong,
  profileMarker,
  pawsArray,
}: MapProps) => {
  const [marker, setMarker] = useState<MarkerProps>(defaultTSObject);
  const [selected, setSelected] = useState<MarkerProps2>(defaultTSObject);

  const markersArray = console.log(profileMarker);
  pawsArray &&
    pawsArray.length > 0 &&
    pawsArray.map((paw) => (
      <MapMarker
        key={paw._id}
        setSelected={setSelected}
        marker={{
          lat: paw.lat,
          lng: paw.long,
          time: new Date(paw.date),
        }}
      />
    ));
  const onMapClick = useCallback(
    (e) => {
      setMarker(() => ({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      }));
      if (setLat && setLong) {
        setLat(e.latLng.lat());
        setLong(e.latLng.lng());
      }
    },
    [setLat, setLong]
  );

  const mapContainerStyle = {
    width: '100%',
    height: '25em',
  };

  const center = {
    lat: 53.349804,
    lng: -6.26031,
  };

  const mapRef = useRef<google.maps.Map>();
  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current!.panTo({ lat, lng });
    mapRef.current!.setZoom(14);
  }, []);

  const Locate = ({ panTo }: any) => {
    // const Locate = () => {
    return (
      <button
        className="compass-button"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        <FaLocationArrow size={20} />
      </button>
    );
  };

  // Is structured the same as google docs?
  return (
    <div className="map-container rounded-lg overflow-hidden">
      <Locate panTo={panTo} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={
          profileMarker
            ? { lat: profileMarker.lat, lng: profileMarker.lng }
            : center
        }
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markersArray}
        {!pawsArray && !profileMarker && marker ? (
          <MapMarker marker={marker} setSelected={setSelected} />
        ) : null}

        {profileMarker ? (
          <MapMarker marker={profileMarker} setSelected={setSelected} />
        ) : null}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(defaultTSObject);
            }}
          >
            <div>
              <h2>Lost Paws!</h2>
              <p style={{ color: 'blue' }}>
                Time: {formatRelative(selected.time, new Date())}
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Map;
