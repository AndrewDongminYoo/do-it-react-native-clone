import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
import color from 'color';

export const styles = StyleSheet.create({
  view: { flexDirection: 'row', backgroundColor: Colors.lime50, padding: 5 },
  leftView: { padding: 5 },
  rightView: { flex: 1, padding: 5, marginRight: 10 },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: Colors.blue500,
    borderWidth: 2,
  },
  nameEmailView: { flexDirection: 'row', alignItems: 'center' },
  name: {
    marginRight: 5,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Roboto',
    textTransform: 'lowercase',
  },
  email: {
    fontFamily: 'Roboto',
    color: Colors.blue500,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.blue500,
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
    marginTop: 5,
  },
  createDate: {},
  text: { fontSize: 14, fontFamily: 'Roboto' },
  comments: { marginTop: 10, fontSize: 16, fontFamily: 'Roboto' },
  image: { height: 200, marginTop: 15 },
  countsView: {
    flexDirection: 'row',
    padding: 3,
    justifyContent: 'space-around',
  },
  touchableIcon: { flexDirection: 'row', padding: 5, alignItems: 'center' },
  iconText: { color: Colors.deepPurple500, marginLeft: 3 },
  counts: {},
});
