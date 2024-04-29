import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Passeios } from './pages/Passeios';
import { Cinema } from './pages/Cinema';
import { Lojas } from './pages/lojas';
import { Receita } from './pages/receita';
import { Ionicons } from '@expo/vector-icons/'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="receita"
                component={Receita}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="fast-food" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="fast-food-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Passeios"
                component={Passeios}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="airplane" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="airplane-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Cinema"
                component={Cinema}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="videocam" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="videocam-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Lojas"
                component={Lojas}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="shirt" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="shirt-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}