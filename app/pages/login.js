import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import Head from 'next/head';
import Link from 'next/link'

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [signupValidation, setSignupValidation] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    //call api
    fetch('http://localhost:8080/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((r) => {
        
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, {expires: 10});
          setSignupValidation("You are registered, you will be redirected");
            setTimeout(() => {
              Router.push('/');
          }, 2000);
        }
      });
  }
  return (

    <div class="grid place-items-center">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>Login</title>
      </Head>
      
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
        </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="username"
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required="required"
      />
      <label class="mt-4 block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required="required"
      />
      {loginError && <p style={{color: 'red'}}>{loginError}</p>}
      {signupValidation && <p style={{color: 'green'}}>{signupValidation}</p>}
      <div className='flex justify-evenly mt-4'>

      
      <input type="submit" value="Submit" class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none " />
      <p className='mt-auto text-sm mb-auto text-gray-700'><Link href="/signup">No account ?</Link></p>
      </div>
    </form>
    </div>
  );
};

export default Login;