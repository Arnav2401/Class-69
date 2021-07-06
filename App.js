import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Transaction from './Screens/transaction';
import Search from './Screens/search';

export default class App extends React.Component{
  render(){
    return(
      <Container/>
    )
  }
}


const tab = createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
})

const Container = createAppContainer(tab)