import React from 'react';
import {Text, FlatList} from 'react-native';

function List({data}) {
    return (
        <FlatList
          data = {data}
          renderItem={({item}) => <Text>{item.value}</Text>}
        />
    );
}

export default List;