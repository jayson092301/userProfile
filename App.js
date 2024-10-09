import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from './src/profile';
import styles from './assets/Style/Style.js';
import Header from './src/Header.js';
import ProfileIcon from './src/ProfileIcon.js';
import Setting from './src/Settings.js';
import SignOut from './src/SignOut.js';


export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Header/>
        </View>
        <View style={{flexDirection:"row", justifyContent:'space-around'}}>
          <Profile/>
          <View>
            <Text style={styles.textRight}>Joined</Text>
            <Text style={{ fontWeight: 'bold', fontSize:18 }}>1 year ago</Text>
          </View>
        </View>
        <View>
          <ProfileIcon/>
          <Setting/>
          <SignOut/>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

