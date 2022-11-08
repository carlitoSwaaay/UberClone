import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination } from '../slices/navSlice';

const NavigateCard = () => {
  const dispach = useDispach();
  const navigation = useNavigation();

  return (

    <SafeAreaView style={tw`bg-white flex-1`}>

      <Text style={tw`text-center py-2 text-xl`}>Good Morning Carlos!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where to?'
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispach(setDestination({
                location: details.geometry.location,
                description: data.description,

              })
              );

              navigation.navigate('RideOptionsCard')

            }}
            enablePoweredByContainer={false}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
          />
        </View>
      </View>
    </SafeAreaView> 


  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});