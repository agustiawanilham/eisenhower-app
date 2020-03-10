import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}
function Login() {
  return (
    <div className="loginButton">
      <GoogleLogin
        clientId="595357943941-18fpfutgrauhomdjrb7kpdke76raddg5.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />,
    </div>
  );
}

export default Login;