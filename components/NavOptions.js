import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const data = [
  {
    id: "123",
    title: "Get a Ride",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfkvzOKeeO_wELzeG83cViDABdyc2LNHQvc7vZogE0fytt4s5-Ytxxkoim3xaS7A1-Sg&usqp=CAU",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://www.iconbolt.com/preview/twitter/font-awesome-solid/utensils.svg",
    screen: "EatsScreen",
  },

];


const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={!origin}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

