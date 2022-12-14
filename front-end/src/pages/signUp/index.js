/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GenericButton, GenericInput } from '../../components';
import { userAuth } from '../../redux/actions/userActions';
import { registerUser } from '../../services/api';
import * as Styles from './styles';

function SignUp() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fieldsVerify = (data) => {
    const { name, email, password } = data;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password ? password.length >= Number('6') : '';
    const isNameValid = name ? name.length >= Number('12') : '';
    const fields = [email, password, name];
    const validateFields = fields.every((field) => field !== '');
    const isValid = isPasswordValid && isEmailValid && validateFields && isNameValid;
    return isValid
      ? setButtonDisabled(false)
      : setButtonDisabled(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await registerUser(registerData).then((response) => {
      const result = response.data;

      if (result.user) {
        localStorage.setItem('user', JSON.stringify(result.user));
        dispatch(userAuth(result.user));
        navigate('/customer/products');
      }
    }).catch((err) => {
      setError(err.response.data.message);
    });
  };

  useEffect(() => {
    fieldsVerify(registerData);
  }, [registerData]);

  return (
    <Styles.Container>
      <h1>Cadastro</h1>
      <Styles.FormContainer>
        <GenericInput
          domId="common_register__input-name"
          name="Nome"
          placeholder="Seu nome"
          size="sm"
          value={ registerData.name }
          onChange={ (event) => setRegisterData(
            { ...registerData, name: event.target.value },
          ) }
        />
        <GenericInput
          domId="common_register__input-email"
          name="Email"
          placeholder="email@trybeer.com.br"
          size="sm"
          type="email"
          value={ registerData.email }
          onChange={ (event) => setRegisterData(
            { ...registerData, email: event.target.value },
          ) }
        />
        <GenericInput
          domId="common_register__input-password"
          name="Senha"
          placeholder="**********"
          size="sm"
          mg="10px"
          type="password"
          value={ registerData.password }
          onChange={ (event) => setRegisterData(
            { ...registerData, password: event.target.value },
          ) }
        />
        <GenericButton
          readLine="Cadastrar"
          large
          hgt="4"
          dataTestid="common_register__button-register"
          disabled={ buttonDisabled }
          onClick={ handleSubmit }
        />
      </Styles.FormContainer>
      {error && (
        <p data-testid="common_register__element-invalid_register">{error}</p>
      )}
    </Styles.Container>
  );
}

export default SignUp;
