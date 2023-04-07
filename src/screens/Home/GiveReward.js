import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Tabs from './Tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

function ModalGiveReward(props) {
  const GiveReward = () => {
    Alert.alert('Success!', 'Your reward has been successfully given. Enjoy!', [
      {
        text: 'Okay',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };
  return (
    <Animatable.View style={styles.modal} animation={'fadeInUp'} duration={500}>
      <Text style={styles.heding}>Give Reward</Text>
      <Text style={styles.lable}>To</Text>
      <TextInput style={styles.input_box} />
      <Text style={styles.lable}>Amount</Text>
      <TextInput style={styles.input_box} />
      <Text style={styles.lable}>Message</Text>
      <TextInput style={styles.input_message_box} />
      <TouchableOpacity
        style={styles.submit_button}
        onPress={() => GiveReward()}>
        <Text style={styles.submit_text}>Give</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.close_button}
        onPress={() => props.setActiveTab('FEED')}>
        <Ionicons name="close" style={styles.close_icon} />
      </TouchableOpacity>
    </Animatable.View>
  );
}
export default ModalGiveReward;
