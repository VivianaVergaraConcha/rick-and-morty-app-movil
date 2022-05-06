import {Text, SafeAreaView, Image, ScrollView, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Index = () => {
  const route = useRoute();
  console.log(route.params.character);
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#292929',
        width: '100%',
        height: '100%',
        color: '#fff',
        alignItems: 'center',
      }}>
      <ScrollView>
        <Text
          style={{
            marginBottom: 8,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          {route.params.character.name}
        </Text>
        <Image
          source={{uri: route.params.character.image}}
          style={{width: 300, height: 300, borderRadius: 5}}
        />
        <View style={{padding:20}}>
          <Text style={{color: '#fff'}}>
            Gender: {route.params.character.gender}
          </Text>
          <Text style={{color: '#fff'}}>
            Species: {route.params.character.species}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              backgroundColor:
                route.params.character.status == 'Alive'
                  ? '#54ea0f'
                  : route.params.character.status == 'Dead'
                  ? '#EA0F0F'
                  : '#D3D3D3',
                  padding:3,
            }}>
            Status: {route.params.character.status}
          </Text>
          <Text style={{color: '#fff'}}>
            Origin: {route.params.character.origin.name}
          </Text>
          <Text style={{color: '#fff'}}>
            Location: {route.params.character.location.name}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
