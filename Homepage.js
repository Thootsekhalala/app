import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, FontAwesome5, FontAwesome6, EvilIcons } from '@expo/vector-icons';

export default function Homepage({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.storiesContainer}>
          <View style={styles.story}>
            <Image source={require('./story1.png')} style={styles.storyImage} />
            <Text style={styles.storyText}>Reabetsoe</Text>
          </View>
          <View style={styles.story}>
            <Image source={require('./story2.png')} style={styles.storyImage} />
            <Text style={styles.storyText}>Sephekola</Text>
          </View>
          <View style={styles.story}>
            <Image source={require('./story3.png')} style={styles.storyImage} />
            <Text style={styles.storyText}>Small Sello</Text>
          </View>
          <View style={styles.story}>
            <Image source={require('./story4.png')} style={styles.storyImage} />
            <Text style={styles.storyText}>Malitsoako</Text>
          </View>
          <View style={styles.story}>
            <Image source={require('./story5.png')} style={styles.storyImage} />
            <Text style={styles.storyText}>Boithatelo Motelle</Text>
          </View>
          <View style={styles.story}>
            <Image source={require('./story6.png')} style={styles.storyImage} />
            <Text style={styles.storyText}>Letshekha</Text>
          </View>
          <View style={styles.story}>
            <Image source={require('./story7.png')} style={styles.storyImage} />
            <Text style={styles.storyText}>Sophia</Text>
          </View>
          <View style={styles.story}>
            <Image source={require('./story8.png')} style={styles.storyImage} />
            <Text style={styles.storyText}>Matela </Text>
          </View>
          <View style={styles.story}>
            <Image source={require('./story9.png')} style={styles.storyImage} />
            <Text style={styles.storyText}>Rethabile</Text>
          </View>
          <View style={styles.story}>
            <Image source={require('./story10.png')} style={styles.storyImage} />
            <Text style={styles.storyText}>Teboho</Text>
          </View>
          <View style={styles.story}>
            <Image source={require('./story11.png')} style={styles.storyImage} />
            <Text style={styles.storyText}>Rose</Text>
          </View>
        </View>

        <View style={styles.profile}>
          <View style={styles.profileInfo}>
            <Image source={require('./Science.png')} style={styles.profilePicture} />
            <View>
              <Text>Toka Lethunya</Text>
              <Text>11 hrs ago</Text>
            </View>
          </View>
        </View>

        <Text style={styles.description}>
          "This is the day the Lord has made; we will rejoice and be glad in it." - Psalm 118:24. Blessed to be surrounded by such a wonderful church family. ❤️
        </Text>

        <Image source={require('./Img.png')} style={styles.postImage} />

        <View style={styles.interactions}>
          <View style={styles.interaction}>
            <EvilIcons name="like" size={24} color="black" />
            <Text>62 Likes</Text>
          </View>
          <View style={styles.interaction}>
            <FontAwesome6 name="comment-alt" size={24} color="black" />
            <Text>9 Comments</Text>
          </View>
          <View style={styles.interaction}>
            <FontAwesome5 name="share" size={24} color="black" />
            <Text>3 Shares</Text>
          </View>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  storiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  story: {
    alignItems: 'center',
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  storyText: {
    fontSize: 12,
  },
  profile: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profilePicture: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    marginRight: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    marginBottom: 20,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 20,
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  interaction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
