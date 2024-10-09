import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../assets/Style/Style';


const profile = () =>{
    return(
        <View>
            <Image 
                source={require('../assets/img/profile.jpg')} 
                style={styles.profileImage}
            />
            <Text style={{fontSize: 35, fontWeight: 'bold'}}>Daniel</Text>
            <Text style={{fontSize: 40, color: 'grey'}}>Jayson</Text>
        </View>
    );
}

export default profile;