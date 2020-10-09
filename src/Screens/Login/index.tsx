import React, {useContext, useEffect} from 'react';
import Styled from 'styled-components/native';
import {Linking} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigationProp} from '@react-navigation/stack';

import {UserContext} from '~/Context/User';

import Input from '~/Component/Input';
import Button from '~/Component/Button';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #cceaff;
  align-items: center;
  justify-content: center;
`;
const FormContainer = Styled.View`
  width: 100%;
  padding: 40px;
`;

const PasswordReset = Styled.Text`
  width: 100%;
  font-size: 12px;
  color: #000000;
  text-align: center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;

interface Props {
  navigation: NavigationProp;
}

const Login = ({navigation}: Props) => {
  const {login} = useContext<IUserContext>(UserContext);
  

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Container>
      <FormContainer>
        <Input style={{marginBottom: 16}} placeholder="이메일" />
        <Input
          style={{marginBottom: 16}}
          placeholder="비밀번호"
          secureTextEntry={true}
        />
        <Button
          style={{marginBottom: 24}}
          label="로그인"
          onPress={() => {
            login('dev.yakuza@gmail.com', 'password');   //api 통신
          }}
        />
        <Button
          style={{marginBottom: 24}}
          label="회원가입"
          onPress={() => {
            Linking.openURL('https://github.com/bjpublic/Reactnative/tree/master/ch8_MovieApp/src/Screens');
          }}
               //api 통신
          />
        <PasswordReset
          onPress={() => {
            Linking.openURL('https://github.com/bjpublic/Reactnative/tree/master/ch8_MovieApp/src/Screens');
          }}>
          비밀번호 재설정
        </PasswordReset>
      </FormContainer>
    </Container>
  );
};

export default Login;