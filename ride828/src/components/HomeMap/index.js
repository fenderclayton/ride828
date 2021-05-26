import React from "react";
import { Image,  } from "react-native";
import MapView, {PROVIDER_GOOGLE,  Marker} from "react-native-maps";

import cars from '../../assets/data/cars';

const HomeMap = (props) => {


	const getImage = (type) => {
		if (type === 'YellowCab') {
			return require('../../assets/images/YellPrius.png');
		}

		if (type === 'RedCab') {
			return require('../../assets/images/RedPrius.png');
		}

		if (type === 'BeaverLakeVan') {
			return require('../../assets/images/Top-BLVAN.png');

		}

		if (type === 'BlueBirdPrius') {
			return require('../../assets/images/BlueBirdPrius.png');
		}
	};

	return (
		<MapView
			style={{width: '100%', height: '100%'}}
			provider={PROVIDER_GOOGLE}
			initialRegion={{
				latitude: 35.586,
				longitude: -82.5943,
				latitudeDelta: 0.0199,
				longitudeDelta: 0.0121,
			}}>

			{cars.map((car) => (


		<Marker
			   key={car.id}
			   coordinate={{latitude: car.latitude, longitude: car.longitude}}
            >
			   <Image
					style={{width: 70, height: 70, resizeMode: 'contain'}}
					source={getImage(car.type)}
			  />
		</Marker>
	))}
        </MapView>
  );
};

export default HomeMap;

