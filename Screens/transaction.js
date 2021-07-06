import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
export default class Transaction extends React.Component{
  constructor(){
    super()
  this.state={
hascamerapermissions:null,
  scanned:false,
  scanneddata:'',
  buttonstate:'normal',
}
  }

   getcamerapermissions=async()=>{
const {status} = await Permissions.askAsync(Permissions.CAMERA)
console.log(status)
this.setState({hascamerapermissions:status==='granted',buttonstate:'click',scanned:false})
  }

  barcodescanner=async({type,data})=>{
  this.setState({scanneddata:data,scanned:true,buttonstate:'normal'})
  console.log(type,data)
  }

  render(){
    if(this.state.buttonstate==='click'&& this.state.hascamerapermissions){
      return(
        <BarCodeScanner style={StyleSheet.absoluteFillObject} onBarCodeScanned={this.state.scanned?(undefined):this.barcodescanner}/>
        )
    }
    else if(this.state.buttonstate==="normal"){
      return(
        <View style={styles.container}>
        <Text>This is a second Screen</Text>
        <Text style={styles.displaytext}>{this.state.hascamerapermissions===true?(this.state.scanneddata):'Request for camera permission'}</Text>
        <TouchableOpacity style={styles.scanbutton} onPress={
          ()=>{
            this.getcamerapermissions()
          }
        }>
          <Text>Scan</Text>
        </TouchableOpacity>
        </View>
      )
    }
    
  }
}

const styles = StyleSheet.create({
container:{
flex:1,
alignItems:'center',
justifyContent:'center',
},
displaytext:{
fontSize:18,
textDecorationLine:'underline'
},
scanbutton:{
margin:10,
padding:10,
backgroundColor:'orange',

}
})