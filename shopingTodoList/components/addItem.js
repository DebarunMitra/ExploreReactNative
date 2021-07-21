import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [itemName, setItemName] = useState('');
  const onChange = item => setItemName(item);

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
        value={itemName}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(itemName);
          setItemName('');
        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: '#F2D2BD',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: '#FF7F50',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
