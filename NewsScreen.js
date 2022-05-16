import React from 'react';
import {Text,View} from 'react-native';

function NewsScreen(props) {
    return (
        <View style = {{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                News
            </Text>
        </View>
    );
}

export default NewsScreen;