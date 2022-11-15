import { StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { selectOrigin } from "../slices/navSlice";
import { selectDestination } from "../slices/navSlice";
import MapViewDirections from 'react-native-maps-directions';



const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

  //   //Zoom & fit to markers
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 30, right: 30, bottom: 30, left: 30 },
    });

  }, [origin, destination]);

  useEffect(() => {

    if (!origin || !destination) return;

    const getTravelTime = async () => {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destination=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
    };
  }, [origin, destination, GOOGLE_MAPS_APIKEY])

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />

      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,

          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {
        destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,

            }}
            title="Destination"
            description={destination.description}
            identifier="destination"
          />
        )
      }
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});