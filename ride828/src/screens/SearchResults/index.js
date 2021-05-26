import React from "react";
import { View, Text } from "react-native";
import HomeMap from "../../components/HomeMap";
import CarTypes from "../../components/CarTypes";


const SearchResults = (props) => {
    return (
        <View>
            <HomeMap />

            <CarTypes />
        </View>
    );
};

export default SearchResults;
