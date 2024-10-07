import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from './src/profile';
import styles from './assets/Style/Style.js';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <View style={{flexDirection:"row", justifyContent:'space-around'}}>
        <Profile/>
        <View>
        <Text style={styles.textRight}>Joined</Text>
        <Text style={{ fontWeight: 'bold', fontSize:18 }}>1 year ago</Text>
        </View>
      </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

