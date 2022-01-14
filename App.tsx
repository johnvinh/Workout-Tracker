import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Exercises from './components/Exercises';
import Exercise from './components/Exercise';

const Stack = createNativeStackNavigator();

export default function App()
{
        return (
                <NavigationContainer>
                        <Stack.Navigator>
                                <Stack.Screen name="Exercises" component={Exercises} options={{title: 'Exercises'}}/>
                                <Stack.Screen name="Exercise" component={Exercise} options={{title: 'Exercise'}}/>
                        </Stack.Navigator>
                </NavigationContainer>
        );
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
        }
});
