import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  textRight: {
    marginTop: 50,
    fontSize: 24,
    color: 'grey'
  },
  iconStyle:{
    color: 'black',
    fontSize: 30,
  },
  viewIcon:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileIcon:{
    fontSize: 30,
    color: 'red',
    flexGrow: 1,
    marginLeft: 20
  }, 
  settingIcon:{
    fontSize: 30,
    color: '#8967B3',
    flexGrow: 1,
    marginLeft: 20,
    marginBottom:20
  },
  settingIcon1:{
    fontSize: 30,
    color: '#729762',
    flexGrow: 1,
    marginLeft: 20,
    marginBottom:20
  }
});

export default styles;