import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Character from '../../components/Character';

const Index = () => {
  const [data, setData] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/?page=1')
      .then(response => response.json())
      .then(e => setData(e.results));
  }, []);

  console.log(data);
  return (
    <SafeAreaView style={{backgroundColor: '#292929'}}>
      <ScrollView>
        <Text
          style={{
            marginBottom: 8,
            fontSize: 30,
            fontWeight: 'bold',
            color: '#54ea0f',
          }}>
          Rick and Morty
        </Text>
        <View style={{alignItems: 'center'}}>
          {data?.map(character => {
            return <Character character={character} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
