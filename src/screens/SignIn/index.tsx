import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

import { Container, Account, Title, Subtitle } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Alert } from 'react-native';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateSignInUserAccount(){
    auth().createUserWithEmailAndPassword(email, password)
    .then(() => Alert.alert("Usuario criado com sucesso!"))
    .catch(error => {
      console.log(error.code)

      if(error.code === 'auth/email-already-in-use'){
        return Alert.alert('E-mail não disponivel. Escolha outro e-mail para cadastrar!')
      }
    })
  }

  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista de compra te ajudar nas compras</Subtitle>

      <Input
        placeholder="e-mail"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Input
        placeholder="senha"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={() => { }} />

      <Account>
        <ButtonText title="Recuperar senha" onPress={() => { }} />
        <ButtonText title="Criar minha conta" onPress={handleCreateSignInUserAccount} />
      </Account>
    </Container>
  );
}