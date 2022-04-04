import React from 'react';
import { TextInput, Text } from 'react-native';
import { Box } from '../theme';
import styles from './style';

export const Input = (props) => (
    <Box>
        <Text style={styles.label}>{props.label}</Text>
        <StyledTextInput {...props} />
    </Box>
);

export const InputLabel = (props) => (
    <Text style={styles.label}>{props.label}</Text>
);

export const StyledTextInput = (props) => (
    <TextInput
        style={[
            styles.input,
            props.error ? styles.error : {},
            props.valid ? styles.valid : {},
            props.style,
        ]}
        {...props}
    />
);
