import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.liView}>
        <Text style={styles.liText}>{item.name}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#D3D3D3',
    borderBottomWidth: 1,
    borderColor: 'black',
  },

  liView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  liText: {
    fontSize: 18,
  },
});

export default ListItem;
