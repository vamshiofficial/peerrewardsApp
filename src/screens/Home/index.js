import {
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
import ModalGiveReward from './GiveReward';
const HomeScreen = () => {
  const userData = {
    name: 'Jane Doe',
    givenRewards: '$100',
    recievedRewards: '$250',
    userImageUrl:
      'https://m.media-amazon.com/images/M/MV5BNjk5NjE5NTczMV5BMl5BanBnXkFtZTcwODI0OTM0NA@@._V1_UY98_CR1,0,67,98_AL_.jpg',
  };
  const FeedPosts = [
    {
      post_id: '1',
      user_profile: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
      message: 'Big thanks for your help on the outagetoday!!',
      reward_by: 'David Greene Rewarded by John Chen',
      time: '4hrs ago',
    },
    {
      post_id: '2',
      user_profile:
        'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
      message:
        'Thanks for your help in creating the product overview deck. Your help to show cases in those scenarios really helped in closing the loop on the story.',
      reward_by: 'Alex Brown rewarded by Jane Doe',
      time: 'Feb 1,2021',
    },
  ];
  const MyRewardsPosts = [
    {
      post_id: '1',
      user_profile:
        'https://www.logiconme.com/assets/img-temp/400x450/img5.jpg',
      message: 'Big thanks for your help on the outagetoday!!',
      reward_by: ' Jane Doe Rewarded by John Chen',
      time: '9hrs ago',
    },
    {
      post_id: '2',
      user_profile: 'https://i.imgur.com/JFHjdNr.jpeg',
      message: 'Thanks for your help in creating the product overview deck..',
      reward_by: ' Jane Doe rewarded by John',
      time: 'Jan 21,2022',
    },
  ];

  const [ActiveTab, setActiveTab] = useState('FEED');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animatable.View style={styles.top_section} animation={'fadeIn'}>
          <View style={styles.user_card}>
            <Image
              style={styles.userImage}
              source={{
                uri: userData.userImageUrl,
              }}
            />
            <View style={styles.userInfo}>
              <Text style={styles.user_name}>{userData.name}</Text>
              <View style={styles.user_rewards}>
                <Text style={styles.regular_text}>Given</Text>
                <Text style={styles.bold_text}>{userData.givenRewards}</Text>
                <Text style={styles.regular_text}> / Recieved</Text>
                <Text style={styles.bold_text}>{userData.recievedRewards}</Text>
              </View>
            </View>
          </View>
        </Animatable.View>
        <View style={styles.body_section}>
          {ActiveTab == 'MODAL' ? (
            <ModalGiveReward setActiveTab={setActiveTab} />
          ) : (
            <>
              <Tabs
                FeedPosts={FeedPosts}
                MyRewardsPosts={MyRewardsPosts}
                ActiveTab={ActiveTab}
                setActiveTab={setActiveTab}
              />
              <TouchableOpacity
                style={styles.add_button}
                onPress={() => setActiveTab('MODAL')}>
                <Ionicons name="ios-add" style={styles.add_icon} />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
