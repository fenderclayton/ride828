import React from "react";
import { View, Image, Text } from "react-native";
import styles from './styles.js';

import Ionicons from "react-native-vector-icons/Ionicons";


const CarTypeRow = (props) => {
const {type} = props;


const getImage = () => {
    if (type.type === 'YellowCab') {
        return require('../../assets/images/YellowCab.jpeg')
    }

    if (type.type === 'RedCab') {
        return require('../../assets/images/RedCab.jpeg')
    }

    if (type.type === 'BeaverLakeVan') {
        return require('../../assets/images/BeaverLakeVan.jpeg')
    }
}

    return (
      <View style={styles.container}>
          {/* Image */}
          <Image style = {styles.image}
                 source={getImage()}
             />

        <View style={styles.middleContainer}>
            <Text style={styles.type}>
                {type.type}{'  '}
                <Ionicons name={'person'} size={16} />
                3

            </Text>
            <Text>
               <Text style={styles.time}>
                8:03PM Drop Off
                </Text>
            </Text>
        </View>
        <View style={styles.rightContainer}>
             <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
               <Text style={styles.price}>
                   est. {type.price}
               </Text>
        </View>
     </View>
    );
};

export default CarTypeRow;
