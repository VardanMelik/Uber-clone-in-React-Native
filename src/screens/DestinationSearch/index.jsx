import React, { useState, useEffect } from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearch = (props) => {

    const [fromText, setFromText] = useState();
    const [destinationText, setDestinationText] = useState();

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        console.warn('useEffect is deprecated');
        if ( originPlace && destinationPlace) {
            console.warn('Redirect to result')
        }

    }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <GooglePlacesAutocomplete
                    placeholder='Where from'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setOriginPlace({data, details});
                        console.warn(data, details);
                    }}
                    onFail={(error) => console.error(error)}
                    
                    //onPress={(data, details = null) => console.log(data)}
                    styles={{
                        textInput: styles.textInput
                    }}
                    query={{
                        key: 'AIzaSyDzE0DQ5s7BbITuzwyPh-QheFjPRtvn69U',
                        language: 'en',
                    }}
                    
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setDestinationPlace({data, details});
                        console.log(data, details);
                    }}
                    onFail={(error) => console.error(error)}
                    styles={{
                        textInput: styles.textInput
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyDzE0DQ5s7BbITuzwyPh-QheFjPRtvn69U',
                        language: 'en',
                    }}
                    
                />

            </View>
        </SafeAreaView>
    )
}

export default DestinationSearch;