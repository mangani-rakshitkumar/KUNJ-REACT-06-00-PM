import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Acc = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);

  return isLogin ? <Login onToggle={toggleForm} /> : <SignUp onToggle={toggleForm} />;
};

export default Acc;