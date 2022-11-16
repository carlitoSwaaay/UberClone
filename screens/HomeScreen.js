import { View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {
  const dispach = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProfileScreen")}
          style={tw`bg-gray-100 absolute top-9 left-8 z-50 p-3 rounded-full shadow-lg`}
        >
          <Icon name="menu" />
        </TouchableOpacity>
        <Image style={{ width: 120, height: 120, resizeMode: "contain", alignSelf: "flex-end" }}
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