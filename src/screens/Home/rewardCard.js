import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import fonts from '../../../assets/fonts';

import * as Animatable from 'react-native-animatable';
const RewardCard = ({item}) => {
  return (
    <Animatable.View style={styles.container} animation={'fadeInUp'}>
      <Image
        source={{
          uri: item.user_profile,
        }}
        style={styles.userImage}
      />
      <View style={styles.content}>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.name}>{item.reward_by}</Text>
        <Text style={styles.timestamp}>{item.time}</Text>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 12,
    marginBottom: 5,
    fontFamily: fonts.PrimaryRegular,
    color: '#aaa',
  },
  message: {
    fontSize: 16,
    fontFamily: fonts.PrimarySemiBold,
    color: 'black',
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#aaa',
    fontFamily: fonts.PrimaryRegular,
  },
});

export default RewardCard;
