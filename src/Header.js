import react from "react";
import { View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import styles from "../assets/Style/Style";

const Header = () =>{
    return(
        <View style={styles.viewIcon}>
            <MaterialIcons name="chevron-left" style={styles.iconStyle}/>
            <MaterialIcons name="more-vert" style={styles.iconStyle}/>
        </View>
    )
}

export default Header;