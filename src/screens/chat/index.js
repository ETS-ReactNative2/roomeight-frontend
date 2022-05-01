import { Center, FlatList, HStack, Spacer } from 'native-base';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatListItem from '../../components/ChatListItem';
import CreateNewChat from '../../components/createNewChat';
import { ScreenContainer } from '../../components/screenContainer';
import { SmallHeading } from '../../components/theme';
import en from '../../resources/strings/en.json';

const Chat = ({ navigation }) => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.authState);
    const { isSearchingRoom } = useSelector(
        (state) => state.userprofileState.userprofile
    );
    const chats = useSelector((state) => state.chatState.chats);

    const renderItem = ({ item }) => {
        return <ChatListItem chat={chats[item]} key={item} />;
    };

    return (
        <ScreenContainer navigation={navigation} showNavBar>
            <HStack>
                <SmallHeading>{en.chat.heading}</SmallHeading>
                <Spacer />
                <CreateNewChat />
            </HStack>
            {chats && (
                <FlatList
                    data={Object.values(chats)
                        .sort((a, b) => b.timestamp - a.timestamp)
                        .map((chat) => chat._id)}
                    removeClippedSubviews
                    renderItem={renderItem}
                    keyExtractor={(index) => index}
                />
            )}
            {!chats && (
                <Center>
                    <SmallHeading style={{ paddingTop: '50%' }}>
                        {en.chat.noChats}
                    </SmallHeading>
                </Center>
            )}
        </ScreenContainer>
    );
};
export default Chat;
