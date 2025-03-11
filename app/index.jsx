import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

import styled from "styled-components/native";

export default function App(){
    return(
    <Tela >
        <Titulo >Login</Titulo>
        <ContainerCampoTexto >
            <CampoTexto 
                placeholder="Digite seu e-mail..." 
                placeholderTextColor={'#000000'}
               
            />
            <CampoTexto 
                placeholder="Digite sua senha..." 
                placeholderTextColor={'#000000'}
               
            />
        </ContainerCampoTexto>
        <ContainerBotoes >
            <Botao>
                <TextoBotao >Entrar</TextoBotao>
            </Botao>
            <Links >Cadastre-se</Links>
            <Links >Esqueci a senha</Links>
        </ContainerBotoes>
    </Tela>)
}

const Tela = styled.View`
    flex: 1;
    background-color:#CCCCCC ;
    padding: 26px;
    text-align: center;
`

const Titulo = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: #000000;
    margin: 80px 0px;
`
const ContainerCampoTexto = styled.View`
    gap: 25px;
`
const CampoTexto = styled.TextInput`
    background-color: #fff;
    font-size: 18px;
    padding: 20px;
`
const ContainerBotoes = styled.View`
    margin-top: 65px;
    gap: 20px;
` 
const Botao = styled.Pressable`
    background-color: #000000;
    padding: 20px;
    border-radius: 15px;
`
const TextoBotao = styled.Text`
    text-align: center;
    font-size: 24;
    font-weight: bold;
    color: #fff;
`
const Links = styled.View`
    text-align: center;
    color: #000000;
    font-size: 16px;
`

