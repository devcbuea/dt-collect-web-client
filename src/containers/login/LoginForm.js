import React from 'react';

const LoginForm = () => (                              
     <div id="login">
          <div className="form-group"></div>
          <label>Username or Email</label>
          <input type="email" id="email"/>
          <label>Password</label>
          <input type="password" id="password" placeholder="Password"/>
          <button id="send">Send</button>
     </div>
);

export default LoginForm;