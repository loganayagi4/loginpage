import React from 'react';
import Signup from './Signup/Signup.js';
import LoginPage from './Loginform/Loginpage';
class LoginForm extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      LoginChange:true
    }
  }
 
  ChangePage=()=>
  {
      this.setState({
      LoginChange:false
  })
  }
  render()
  {
    return(
      <div className="content">
        {this.state.LoginChange ?
        (<div className="FirstContent">
          <LoginPage  Change={this.ChangePage}/>
        </div>)
        :
        (<div className="SecondContent">
          <Signup />
        </div>)
        }
        </div>
    );
  }
}
export default LoginForm;