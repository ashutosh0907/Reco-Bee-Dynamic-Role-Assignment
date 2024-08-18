import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Icon} from '@rneui/base';
import {RFValue} from 'react-native-responsive-fontsize';
import {BLACK} from '../../constants/color';
import {useSelector} from 'react-redux';

const Dropdown = ({options, placeholder, onValueChange, width = '90%'}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const role = useSelector(state => state.role);

  const handleSelect = value => {
    setSelectedValue(value);
    setIsVisible(false);
    onValueChange(value);
  };

  return (
    <View style={{width: width}}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsVisible(!isVisible)}>
        <Text style={styles.selectedText}>{role || placeholder}</Text>
        <Icon name={isVisible ? 'expand-less' : 'expand-more'} />
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.dropdownList}>
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleSelect(item)}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    width: '100%',
  },
  dropdownButton: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedText: {
    fontSize: RFValue(15),
    color: BLACK,
  },
  dropdownList: {
    marginTop: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    // maxHeight: 150,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Dropdown;
