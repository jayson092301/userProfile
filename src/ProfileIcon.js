import { View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import styles from "../assets/Style/Style";

const ProfileIcon = () =>{
    return(
        <View>
            <Text style={{fontSize: 20, margin: 20}}>Profile</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <MaterialIcons name= "radio-button-checked" style={styles.profileIcon}/>
                <Text style={{fontSize: 18, flexGrow: 9}}>Manage User</Text>
                <MaterialIcons name= "chevron-right" size={25} style={{marginRight:20}}/>
            </View>
        </View>
    )
}

export default ProfileIcon;