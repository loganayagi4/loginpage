import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import '../App.js';

const LoginPage=(props) =>
{
  const formik = useFormik({
    initialValues:{
      mailid:'',
      password:'',
    },
    validationSchema:yup.object({
        mailid:yup.string()
       .email()
       .required("Email id is required")
       .strict()
       .trim(),
      password:yup.string()
       .required("Password is required")
       .max(8,"*8 characters only")
       .min(8,"*Minimum 8 characters required")
       .strict()
       .trim()
       .matches( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Password contain one speacial case one num ")
    }),
    onSubmit:(userInputData) =>
    {
      console.log(userInputData);
    },
  
  })
  return(<div className="container">
  <div className="row">
    <div className="col-sm-3"></div>
     <div className="col-sm-6">
  <h1>Login form</h1>
  <div className="card">
  <div className="card-body content_border">
    <form  action="#" method="POST" onSubmit={formik.handleSubmit}>
    <div className="form-group">
    <label for="email">Email id<span className="text-danger">*</span></label>
   <input type="email" placeholder="Enter ur mailid" name="mailid" id="email" className="form-control" onChange={formik.handleChange} value={formik.values.mailid} onBlur={formik.handleBlur} />
   {formik.touched.mailid && formik.errors.mailid ? <span className="text-danger"> <h4>{formik.errors.mailid}</h4></span>: null}</div>

   <div className="form-group">
   <label for="password">Password<span className="text-danger">*</span></label>
   <input type="password" placeholder="Enter ur password" name="password" id="password" className="form-control" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
   {formik.touched.password && formik.errors.password ? <span className="text-danger"> <h4>{formik.errors.password}</h4></span>: null}
   </div>
   <div className="form-group">
   <button type="submit" href="Login.html" className="btn btn-primary btn-block"><i className="fa fa-unlock-alt"></i>&nbsp;&nbsp;Login</button>
   </div>
   </form>
    </div>
    </div>
    </div>
    </div><br />
    <p className="text-muted text-center">Don't have account? Please , <a  style={{textDecoration:"none", cursor:"pointer", color:"blue"}} className="text-primary" href="#" onClick={props.Change}>Register Now</a></p>
    </div>
     );
    }
    export default LoginPage;
