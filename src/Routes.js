import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Feed from './pages/Feed'
import Cadastro from './pages/Cadastro'
import Perfil from './pages/Perfil'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                tabBarStyle:{
                    
                    position:'absolute',
                    backgroundColor:'#f5f5dc',
                    borderTopWidth: 0,

                    height:55,
                }    
            }}
        >
            <Tab.Screen 
                name="Feed"
                component={Feed}
                options={{
                    tabBarIcon: ({color,size,focused}) => {
                        if(focused){
                            return <Ionicons name='bookmarks-outline' size={40} color={'#ffa500'}/>
                        }
                        return <Ionicons name='bookmarks-outline' size={40} color={'#b87e14'}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Login" 
                component={Cadastro} 
                options={{
                    tabBarIcon: ({color,size,focused}) => {
                        if(focused){
                            return <Ionicons name='create-outline' size={40} color={'#ffa500'}/>
                        }
                        return <Ionicons name='create-outline' size={40} color={'#b87e14'}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Register" 
                component={Perfil}
                options={{
                    tabBarIcon: ({color,size,focused}) => {
                        if(focused){
                            return <Ionicons name='person-outline' size={40} color={'#ffa500'}/>
                        }
                        return <Ionicons name='person-outline' size={40} color={'#b87e14'}/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}