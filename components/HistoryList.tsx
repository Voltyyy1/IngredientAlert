import React from 'react';
import { FlatList, View } from 'react-native';
import HistoryItem from './HistoryItem';

const HistoryList = ({ data, onItemPress }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <HistoryItem product={item.product} onItemPress={onItemPress} />
                )}
            />
        </View>
    );
};

export default HistoryList;
