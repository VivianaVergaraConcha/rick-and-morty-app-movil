import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Character = ({character}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {
          character,
        });
      }}>
      <View
        style={{
          padding: 20,
          marginBottom: 20,
          backgroundColor: '#54ea0f',
        }}
        key={character.id}>
        <Image
          source={{uri: character.image}}
          style={{
            height: 200,
            width: 200,
            borderRadius: 200,
            marginRight: 15,
          }}
        />
        <Text
          style={{
            marginBottom: 8,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#292929',
            textAlign: 'center',
          }}>
          {character.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Character;
