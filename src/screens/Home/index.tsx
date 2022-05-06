import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const Index = () => {
  const [data, setData] = useState([]);
  const height = Dimensions.get('window').height;
  console.log(height);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/?page=2')
      .then(response => response.json())
      .then(e => setData(e.results));
  }, []);

  console.log(data);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          {data?.map(character => {
            return (
              <TouchableOpacity style={{padding: 20}} key={character.id}>
                <Image
                  source={{uri: character?.image}}
                  style={{height: 200, width: 200, borderRadius: 5}}
                />
                <Text style={{marginTop: 8, fontSize: 18, fontWeight: '800'}}>
                  {character.name}
                </Text>
                <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
                  Gender: {character.gender}
                </Text>
                <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
                  Type: {character.type}
                </Text>

                {character.status == 'Alive' ? (
                  <Text
                    style={{
                      marginTop: 2,
                      fontSize: 15,
                      fontWeight: '500',
                      color: 'green',
                    }}>
                    Status: {character.status}
                  </Text>
                ) : (
                  <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
                    Status: {character.status}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
