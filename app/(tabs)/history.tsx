import React from 'react';
import HistoryList from '../../components/HistoryList';
import mockData from '../../data/mockData.json';

const History = () => {
    const repeatedData = Array(20).fill(mockData); //creates an array with 20 repeated mock data items

    const handleItemPress = (product) => {
        //handle navigation to the detailed view of the product.
        console.log(product);
    };

    return <HistoryList data={repeatedData} onItemPress={handleItemPress} />;
};

export default History;
