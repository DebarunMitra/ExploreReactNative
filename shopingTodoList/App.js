import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Alert} from 'react-native';
import Header from './components/header.js';
import ListItem from './components/listItem.js';
import AddItem from './components/addItem.js';
import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {
      id: Math.floor(Math.random() * 100) + Math.floor(Math.random()),
      name: 'Milk',
    },
    {
      id: Math.floor(Math.random() * 100) + Math.floor(Math.random()),
      name: 'Apple',
    },
    {
      id: Math.floor(Math.random() * 100) + Math.floor(Math.random()),
      name: 'Rice',
    },
    {
      id: Math.floor(Math.random() * 100) + Math.floor(Math.random()),
      name: 'Masterd Oil',
    },
  ]);

  const deleteItem = id => {
    console.log(id);
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = itemName => {
    if (!itemName) {
      Alert.alert(
        'No item entered',
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [
          {
            id: Math.floor(Math.random()) + Math.floor(Math.random()),
            name: itemName,
          },
          ...prevItems,
        ];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping Todo List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      {/* <Text style={styles.text}>Hello React Native</Text>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.img}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  text: {
    color: 'blue',
    fontSize: 30,
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default App;
