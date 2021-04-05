import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useGlobal } from '../../providers/Global';
import loginApi from './login.api';
import './Login.styles.css';

function LoginPage() {
  const { dispatch } = useGlobal();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function authenticate(event) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      loginApi(username, password).then((res) => {
        dispatch({ type: 'login', payload: res});
        history.push('/');
        setLoading(false);
      }).catch((err) => {
        setLoading(false);
        setError(err.message);
      });
    }, 500);
  }

  return (
    <section className="login">
      {loading && <i className="fa fa-spinner"></i>}
      {error && 
      <div className="error">
        <i className="fa fa-exclamation-circle"></i>
        <span>{error}</span>
      </div>}
      <h1>Enter your credentials</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input required type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input required type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
