import React, { useState } from 'react';
import { Text } from 'react-native';
import NavBar from '../../components/navbar';
import { Container, Screen } from '../../components/theme';

const Discover = ({ navigation }) => {
    return (
        <Screen navigation={navigation} showFooter>
            <Container>
                <Text>Discover</Text>
            </Container>
        </Screen>
    );
};
export default Discover;
