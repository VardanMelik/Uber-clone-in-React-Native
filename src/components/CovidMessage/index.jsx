import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if nessary</Text>
            <Text style={styles.text}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </Text>
            <Text style={styles.learnMore}>
                Learn more
            </Text>
        </View>
    )
}

export default CovidMessage;