import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCIFL3N65ICNbq238DwJdQ-4CsQ2VHI4bA'
const RouteMap = (props) => {

    const origin = {
        latitude: 35.58699,
        longitude: -82.59433,

    };


    const destination = {
        latitude: 35.57846,
        longitude: -82.59435,


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


            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor={"black"}
            />

            <Marker
                coordinate={origin}
                title={"Pick Up"}
            />

            <Marker
                coordinate={destination}
                title={"Destination"}
            />
        </MapView>
    );
};

export default RouteMap;
