import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const CovidMessage = (props) => {
	return (
		<View style={styles.container}>
		 <Text style={styles.title}>
		   Travel Only If Necessary</Text>
		 <Text style={styles.text}>
		   Covid Is Serious, Please Only Travel If Necessary.
		   </Text>
		 <Text style={styles.learnMore}>
		   Click Here To Learn More
		   </Text> 
   	    </View>
  );
};

export default CovidMessage ;