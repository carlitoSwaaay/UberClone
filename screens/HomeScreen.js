import { View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';



const HomeScreen = () => {
  const dispach = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <Image style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://mma.prnewswire.com/media/1671139/Uber_Logo.jpg?w=400",
          }}
        />
        <GooglePlacesAutocomplete 

          placeholder='Where From?'
          styles={{
            container: {
              flex: 0

            },
            textInput: {
              fontSize: 18,
            },

          }}
          onPress={(data, details = null) => {
            dispach(setOrigin({
              location: details.geometry.location, //check out redux docs for deets
              description: data.description
            }))

            dispach(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}

          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;