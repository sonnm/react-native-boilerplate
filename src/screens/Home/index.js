import Foo from 'components/Foo';
import React from 'react';
import { Text, View } from 'react-native';

const Home = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Hello World!</Text>
    <Foo />
  </View>
);

export default Home;
