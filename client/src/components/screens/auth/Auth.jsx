import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Layout from '../../layout/Layout.jsx';
import Loader from '../../ui/Loader.jsx';
import Button from '../../ui/button/Button.jsx';
import Field from '../../ui/field/Field.jsx';

import styles from './Auth.module.scss';

const isLoading = false;
const isLoadingAuth = false;

const Auth = () => {
  const [type, setType] = useState('auth');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Layout heading={'Sing in'} bgImage={'/images/auth-bg.png'} />
      <div className={'wrapper-inner-page'}>
        {(isLoading || isLoadingAuth) && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.email?.message}
            name={'email'}
            register={register}
            options={{
              ...register('email', { required: 'Email is required' })
            }}
            type="text"
            placeholder="Enter email"
          />
          <Field
            error={errors?.password?.message}
            name={'password'}
            register={register}
            options={{
              ...register('password', { required: 'Password is required' })
            }}
            type="password"
            placeholder="Enter password"
          />
          <div className={styles.wrapperButtons}>
            <Button clickHandler={() => setType('auth')}>Sing in</Button>
            <Button clickHandler={() => setType('reg')}>Sing up</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
