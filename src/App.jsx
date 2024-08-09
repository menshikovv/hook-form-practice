import './App.scss';
import { useForm } from 'react-hook-form';
import Error from './Error/Error';

function App() {
  const { formState, register, handleSubmit, reset } = useForm({
    mode: 'onBlur'
  });

  const nameError = formState.errors['name']?.message;
  const surnameError = formState.errors['surname']?.message;
  const emailError = formState.errors['email']?.message;

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <>
      <h1>Feedback form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Welcome</h2>
          <h3>Let's create your account!</h3>

          <input type="text" placeholder='First name'
            {...register('name', {
              required: "Это поле обязательно к заполнению",
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                message: 'Имя может содержать только буквы'
              }
            })}
          />
          {nameError && <Error error={nameError} />}
          
          <input type="text" placeholder='Last name'
            {...register('surname', {
              required: "Это поле обязательно к заполнению",
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                message: 'Фамилия может содержать только буквы'
              }
            })}
          />
          {surnameError && <Error error={surnameError} />}

          <input type="email" placeholder='Email'
            {...register('email', {
              required: "Это поле обязательно к заполнению",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Неверный адрес электронной почты"
              }
            })}
          />
          {emailError && <Error error={emailError} />}

          <button type='submit'>SUBMIT</button>
      </form>
    </>
  )
}

export default App;
