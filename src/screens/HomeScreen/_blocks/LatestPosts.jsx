import {Card} from '@rneui/base';
import React, {Fragment, useEffect, useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Loader} from '../../../components/Loader';
import {HEIGHT} from '../../../constants/config';
import {BLACK, BRAND, LIGHTGRAY} from '../../../constants/color';

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setLoader(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoader(false);
      });
  }, []);

  const renderItem = ({item}) => (
    <Card>
      <Card.Title style={{color: BLACK, textAlign: 'left'}}>
        {item.title}
      </Card.Title>
      <Text style={styles.body}>{item.body}</Text>
      <View style={styles.tagsContainer}>
        {item.tags.map((tag, index) => (
          <Text key={index} style={styles.tag}>
            #{tag}
          </Text>
        ))}
      </View>
    </Card>
  );

  return (
    <Fragment>
      {loader ? (
        <ActivityIndicator
          style={{
            marginTop: HEIGHT * 0.08,
          }}
          size="large"
          color={BRAND}
        />
      ) : (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={() => <View style={{height: HEIGHT * 0.1}} />}
        />
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 10,
    fontSize: 16,
    color: LIGHTGRAY,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    color: BRAND,
  },
});

export default LatestPosts;
