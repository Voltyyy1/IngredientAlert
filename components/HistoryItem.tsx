import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';

const HistoryItem = ({ product, onItemPress }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onItemPress(product)}>
            <Image source={require('../../assets/images/dummyProduct.png')} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
    },
});

export default HistoryItem;
