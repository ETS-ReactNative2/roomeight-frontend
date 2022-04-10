import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { useDispatch } from 'react-redux';

export const Heading = (props) => {
    return props.hidden ? (
        <Box />
    ) : (
        <Box>
            <Text style={{ ...styles.heading, ...props.style }}>
                {props.children}
            </Text>
        </Box>
    );
};

export const Title = (props) => (
    <Box>
        <Text style={{ ...styles.title, ...props.style }}>
            {props.children}
        </Text>
    </Box>
);

export const TextBlock = (props) => (
    <Box>
        <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
    </Box>
);

export const Box = (props) => (
    <View style={{ ...styles.textBox, ...props.style }}>{props.children}</View>
);

export const SemiBold = (props) => (
    <Text style={{ ...styles.semiBold, ...props.style }}>{props.children}</Text>
);

export const Padding = (props) => (
    <View style={{ ...styles.padding, ...props.style }}>{props.children}</View>
);

export const Container = (props) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container} {...props}>
            {props.children}
            {props.showLogout ? (
                <Button title="Logout" onPress={() => dispatch(logoutUser())} />
            ) : null}
        </View>
    );
};
export const Inner = (props) => (
    <View style={styles.inner} {...props}>
        {props.children}
    </View>
);
