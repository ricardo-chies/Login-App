import React, { useEffect, useContext } from "react";
import { Container, LoadingIcon } from './styles';
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";

import Api from "../../services/Api";
import UserContext from "../../contexts/UserContext";

import AjvLogo from '../../assets/ajvlogo.svg'

export default () => {
    const {dispath: userDispath } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect (() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token !== null) {
                let res = await Api.checkToken(token);
                if(res.token) {
                    await AsyncStorage.setItem('token', res.token);

                    userDispath({
                        type: 'setAvatar',
                        payload:{
                            avatar: res.data.avatar
                        }
                    });

                    navigation.reset({
                        routes:[{name: 'MainTab'}]
                    });

                } else {
                    navigation.navigate('SignIn')
                }
                
            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <AjvLogo width="100%" height="160" />
            <LoadingIcon size="large" color="#ffffff" />
        </Container>
    )
}