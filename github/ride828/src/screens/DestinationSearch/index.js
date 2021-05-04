import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles.js';

const DestinationSearch = (props) => {
    const [originPlace, setOriginPlace] = useState('')
    const [destinationPlace, setDestinationPlace] = useState('');

    useEffect(() => {
        console.warn( 'useEffect is called');
        if (originPlace && destinationPlace) {
            console.warn( 'Redirect to results');
        }
    }, [originPlace, destinationPlace])

    return (
   <SafeAreaView>
       <View style={styles.container}>

           <GooglePlacesAutocomplete
               placeholder='Where From?'
               onPress={(data, details = null) => {
                   setOriginPlace( {data, details});
                   console.log(data, details);
               }}
               styles={{
                   textInput: styles.textInput,
               }}
               fetchdetails
               query={{
                   key: 'AIzaSyCIFL3N65ICNbq238DwJdQ-4CsQ2VHI4bA',
                   language: 'en',
               }}
           />

            <GooglePlacesAutocomplete
                placeholder='Where To?'
                onPress={(data, details = null) => {
                    setDestinationPlace( {data, details});
                    console.log(data, details);
                }}
                styles={{
                    textInput: styles.textInput,
                }}
                fetchdetails
                query={{
                    key: 'AIzaSyCIFL3N65ICNbq238DwJdQ-4CsQ2VHI4bA',
                    language: 'en',
                }}
            />


        </View>
    </SafeAreaView>
   );
   };
export default DestinationSearch;

