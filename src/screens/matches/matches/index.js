import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { ImageCard } from '../../../components/imageCard';
import { LikeButton } from '../../../components/likeButtons';
import { ProfileInfoBox } from '../../../components/profiles';
import { Box, Container, SmallHeading } from '../../../components/theme';
import flatprofiles from '../../../resources/flatprofiles';
import userprofiles from '../../../resources/userprofiles';
import { PublicProfileCard } from '../../../components/publicProfileCard';
import { useSelector } from 'react-redux';
import apiClient from '../../../helper/apiClient';

const Matches = ({ navigation }) => {
    const { userprofile } = useSelector((state) => state.userprofileState);
    userprofile.matches = flatprofiles;

    const res = useSelector((state) => state.matchesState);
    console.log(res);
    useEffect(() => {
        apiClient()
            .get(`/flatprofiles/${userprofile.matches[0]}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.warn(error));
    }, []);

    return (
        <Container navigation={navigation} showNavBar>
            <SmallHeading>Matches</SmallHeading>
            <Box />

            {userprofile.matches.map((profile) => (
                <ProfileInfoBox
                    profile={profile}
                    id={profile.id}
                    key={profile.id}
                    onPress={(id) => {
                        navigation.navigate('Match', { profile: profile });
                    }}
                />
            ))}
        </Container>
    );
};
export default Matches;
