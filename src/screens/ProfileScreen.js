import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Ant from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux'
import ButtonCustom from '../components/common/ButtonCustom'
import { logoutUser } from '../actions/authActions'
const url = 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/116437552_2564729873838206_6347637951277764465_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=eRXA_UG4hAIAX8Wqkzg&_nc_oc=AQk8hc-B_WJbSSXNRss-5IpWBbG6X3yEL--B2WJtYYjs-B-SK_lPIQMOZtlQpRIulpw&_nc_ht=scontent.fsgn2-6.fna&oh=2e00f8228eed012639c6796a5ebf8065&oe=5F693F25'

const UserDetail = (custom) => {
  return (
    <View style={{ paddingTop: 20, flex: 2, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, alignItems: 'center', backgroundColor: 'white' }}>
      <Image source={{ uri: url }} style={{ width: 100, height: 100, borderRadius: 300 }} />
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Gia Vũ</Text>
      <Ant name='customerservice' size={40} color='black' />
    </View>

  )
}

const mockData = [
  {
    icon: 'heart',
    feature: 'Favorites'
  },
  {
    icon: 'unlock',
    feature: 'Remove Ads'
  },
  {
    icon: 'hourglass',
    feature: 'Restore Purchase'
  },
  {
    icon: 'star',
    feature: 'Rate this app'
  },
  {
    icon: 'tag',
    feature: 'Feedback'
  },
  {
    icon: 'sharealt',
    feature: 'Share this app'
  }
]


const FeatureRenderItem = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => { }}>
      <View style={{ padding: 16, flexDirection: 'row', paddingHorizontal: 4, borderColor: 'gray', borderWidth: 0.2, }}>
        <Ant style={{ paddingHorizontal: 30 }} name={`${item.icon}`} size={30} color='black' />
        <Text style={{ fontSize: 20, fontWeight: '400', alignSelf: 'center', paddingLeft: 10 }}>{item.feature}</Text>
      </View>
    </TouchableOpacity>

  )
}


export default function ProfileScreen() {
  const dispatch = useDispatch();
  const _handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>

      <UserDetail />
      <View style={{ flex: 8, marginTop: 30 }}>
        <FlatList
          data={mockData}
          renderItem={({ item }) => <FeatureRenderItem item={item} />}
        />
      </View>
      <ButtonCustom onPressHandle={_handleLogout} title='logout' />
    </SafeAreaView>
  )
}


