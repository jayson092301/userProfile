import react from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import styles from "../assets/Style/Style";

const Setting = () =>{
    return(
        <View>
            <Text style={{fontSize:20, marginTop: 40, marginLeft: 20, marginBottom: 20}}>Settings</Text>
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <MaterialIcons name= 'circle-notifications' style={styles.settingIcon}/>
                    <Text style={{fontSize: 18, flexGrow: 9}}>Notifications</Text>
                    <MaterialIcons name= "chevron-right" size={25} style={{marginRight:20}}/></View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <MaterialIcons name= 'nightlight-round' style={styles.settingIcon1}/>
                    <Text style={{fontSize: 18, flexGrow: 9}}>Dark Mode</Text>
                    <MaterialIcons name= "chevron-right" size={25} style={{marginRight:20}}/>
                </View>
        </View>
    )
}
export default Setting;