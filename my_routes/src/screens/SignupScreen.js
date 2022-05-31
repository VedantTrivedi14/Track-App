import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SignupScreen;


// import React, { useState,useContext } from "react";
// import {View,StyleSheet} from 'react-native';
// import { Text,Input,Button } from "react-native-elements";
// import Spacer from "../components/Spacer";
// import { Context as AuthContext } from "../context/AuthContext";

// const SignupScreen =({navigation})=>{
//     const {state,signup} = useContext(AuthContext);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     return(
//         <View style={styles.container}> 
//             <Spacer>
//             <Text h3>sign up for Tracker</Text>
//             </Spacer>
//             <Input 
//             label="Email"
//             value={email}
//         onChangeText={setEmail}
//         autoCapitalize="none"
//         autoCorrect={false}/>
//             <Spacer/>
//             <Input 
//             secureTextEntry
//             label="Password"
//             value={password}
//             onChangeText={setPassword}
//             autoCapitalize="none"
//             autoCorrect={false}/>
//              {state.errorMessage ? (
//         <Text style={styles.errorMessage}>{state.errorMessage}</Text>
//       ) : null}
//             <Spacer>
//             <Button title="Sign Up" onPress={()=>signup({email,password})}/>
//             </Spacer>
//             {/* <Button title="go to signin" onPress={()=>navigation.navigate('Signin')}/>
//             <Button title="go to mainflow" onPress={()=>navigation.navigate('mainFlow')}/> */}
//         </View>
//     );
// };

// SignupScreen.navigationOptions = () => {
//     return{
//         headerShown:false 
//     };
// };

// const styles = StyleSheet.create({
//     container:{
//         flex :1,
//         justifyContent :'center',
//         marginBottom:200,
//     },
//     errorMessage: {
//         fontSize: 16,
//         color: 'red',
//         marginLeft: 15,
//         marginTop: 5,
//       },
// });

// export default SignupScreen;