import { View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Href, Redirect, useRootNavigationState } from 'expo-router';
import { extractUserData } from './login';
import { clerkUserDataRequiredProps } from '@/constants/content';
import { useAuth } from '@/context/AuthContext';

export default function Index() {
    const {user} = useUser();
    const RootNavigation = useRootNavigationState();
    
    const { userLoginData , setUserLoginData , authenticated } = useAuth() as {
        userLoginData: clerkUserDataRequiredProps;
        setUserLoginData: (data: clerkUserDataRequiredProps) => void;
        authenticated: boolean;
        setAuthenticated: (authenticated: boolean) => void;
      };

    React.useEffect(() => {
        checkNavigationLoaded();
        fetchData();
    }, [])
    
    function fetchData(){
        const data = extractUserData(user);
        setUserLoginData(data as clerkUserDataRequiredProps);
    }

    const checkNavigationLoaded = () => {
        if(!RootNavigation?.key){
            return null;
        }
    }
  return (
    <View style={{flex : 1}}>
        {
            user ? 
            <Redirect
                href={("/(tabs)/home") as Href}
            /> :  
            <Redirect
                href={("/login/index") as Href}
            />
        }
    </View>
  )
}

