// HistoryItem.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HistoryItem = ({ product, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={require('../assets/images/dummyProduct.png')} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
    },
    productImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    productName: {
        fontSize: 16,
    },
});

export default HistoryItem;
