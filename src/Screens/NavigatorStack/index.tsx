import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {UserContext} from '~/Context/User';
import Loading from '~/Screens/Loading';
import Login from '~/Screens/Login';
import DDHome from '~/Screens/Home';



//스택 네비게이터 생성
const Stack = createStackNavigator();



//로그인 네비게이터 함수
const LoginNavigator = () => {
    return(
        <Stack.Navigator
        >
            <Stack.Screen
                name = 'Login'
                component = {Login}
                options = {{
                    title : 'Dingdong',
                    headerTransparent : true,
                    headerTintColor : '#E70915',
                    headerTitleStyle : {
                        fontWeight : 'bold',
                    },
                }}
            />
            
            
        </Stack.Navigator>
    );
};


//메인 네비게이터 생성 todo 내용추가
const HomeNavigator= () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "DDHome"
                component = {DDHome}
                options = {{
                    title : 'Dingdong',
                    headerTransparent : true,
                    headerTintColor : '#E70915',
                    headerTitleStyle : {
                        fontWeight : 'bold',
                    },
                }}
                
            />
                
            
        </Stack.Navigator>
            

        
    );
};



//userinfo에 usercontext담고 isLoading을 통해 로딩창 보여주며 로그인 상태 확인
export default () => {
    const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

    if(isLoading === false) {
        return <Loading/>;
    }
    
    return (
        <NavigationContainer>
            {userInfo ? <HomeNavigator/> : <LoginNavigator/>}
        </NavigationContainer>
    );
};