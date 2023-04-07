import {Dimensions, StyleSheet, Platform} from 'react-native';
import fonts from '../../../assets/fonts';
let DeviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top_section: {
    backgroundColor: '#F4F1EE',
    height: 160,
  },
  //   ==========
  user_card: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 30,
    alignItems: 'center',
  },
  userInfo: {
    marginLeft: 15,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  user_name: {
    fontFamily: fonts.PrimaryBold,
    fontSize: 20,
    color: '#333',
  },
  user_rewards: {
    flexDirection: 'row',
  },
  regular_text: {
    fontFamily: fonts.PrimaryRegular,
    fontSize: 15,
    color: '#333',
  },
  bold_text: {
    fontFamily: fonts.PrimaryBold,
    fontSize: 15,
    color: '#333',
    marginHorizontal: 5,
  },
  //   ============body section
  body_section: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    height: DeviceHeight - 140,
  },
  tabs_view: {
    flex: 1,
  },
  bottons_group: {
    backgroundColor: '#E4E2DF',
    height: 45,
    flexDirection: 'row',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  btn: {
    height: 45,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    fontFamily: fonts.PrimarySemiBold,
    fontSize: 17,
    color: '#333',
    marginHorizontal: 5,
  },
  //   ========add button
  add_button: {
    position: 'absolute',
    right: 40,
    bottom: Platform.OS === 'ios' ? 90 : 40,
    width: 60,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  add_icon: {
    fontSize: 35,
    color: '#fff',
  },
  //   ========modal
  modal: {
    backgroundColor: '#000000',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: DeviceHeight - 140,
    paddingHorizontal: 20,
  },
  heding: {
    fontFamily: fonts.PrimarySemiBold,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  lable: {
    fontFamily: fonts.PrimaryRegular,
    fontSize: 15,
    color: '#AC895A',
    marginBottom: 10,
    marginLeft: 5,
  },
  input_box: {
    height: 50,
    borderColor: '#AC895A',
    borderWidth: 1,
    marginBottom: 20,
  },
  input_message_box: {
    height: 100,
    borderColor: '#AC895A',
    borderWidth: 1,
    marginBottom: 20,
  },
  submit_button: {
    height: 40,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  submit_text: {
    fontFamily: fonts.PrimarySemiBold,
    fontSize: 17,
    color: '#333',
  },
  //   close button
  close_button: {
    position: 'absolute',
    right: 40,
    bottom: Platform.OS === 'ios' ? 90 : 40,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close_icon: {
    fontSize: 25,
    color: '#fff',
  },
});
export default styles;
