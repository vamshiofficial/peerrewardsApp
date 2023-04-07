import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import RewardCard from './rewardCard';
function Tabs(props) {
  return (
    <View style={styles.tabs_view}>
      <View style={styles.bottons_group}>
        <TouchableOpacity
          onPress={() => props.setActiveTab('FEED')}
          style={[
            styles.btn,
            {
              backgroundColor: props.ActiveTab == 'FEED' ? '#fff' : '#E4E2DF',
              borderTopLeftRadius: 25,
            },
          ]}>
          <Text
            style={[
              styles.btn_text,
              {
                color: props.ActiveTab == 'FEED' ? '#C1B4A7' : '#333',
              },
            ]}>
            Feed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setActiveTab('MYREWARDS')}
          style={[
            styles.btn,
            {
              backgroundColor:
                props.ActiveTab == 'MYREWARDS' ? '#fff' : '#E4E2DF',
              borderTopRightRadius: 25,
            },
          ]}>
          <Text
            style={[
              styles.btn_text,
              {
                color: props.ActiveTab == 'MYREWARDS' ? '#C1B4A7' : '#333',
              },
            ]}>
            My Rewards
          </Text>
        </TouchableOpacity>
      </View>
      {props.ActiveTab == 'FEED' ? (
        <FlatList
          data={props.FeedPosts}
          renderItem={RewardCard}
          keyExtractor={item => item.post_id}
        />
      ) : props.ActiveTab == 'MYREWARDS' ? (
        <FlatList
          data={props.MyRewardsPosts}
          renderItem={RewardCard}
          keyExtractor={item => item.post_id}
        />
      ) : null}
    </View>
  );
}
export default Tabs;
