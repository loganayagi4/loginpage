import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import './Signup.css'

const Signup=() =>
{
  const formik = useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      mailid:'',
      password:'',
      confirmpassword:'',
      mobilenumber:'',
    },
    validationSchema:yup.object({
      firstname:yup.string()
       .required("First Name is Required")
       .uppercase()
       .min(4,"Minimum 4 characters")
       .max(10,"Maximum 10 characters only")
       .strict()
       .trim("Space should not be added"),
       lastname:yup.string()
       .required("Last Name is Required")
       .min(1,"Minimum 1 characters")
       .max(5,"Maximum 5 characters only")
       .strict()
       .trim("Space should not be added"),
      mailid:yup.string()
       .email()
       .required()
       .strict()
       .trim(),
      password:yup.string()
       .required("Password is required")
       .max(8,"*8 characters only")
       .min(8,"*Minimum 8 characters required")
       .strict()
       .trim()
       .matches( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Password must contain one special character,one number,one Uppercase & lowercase"),
      confirmpassword:yup.string()
       .required("Confirm password is required")
       .oneOf([yup.ref('password'), null],"Password and Confirm password must be same")
       .strict()
       .trim(),
      mobilenumber:yup.string()
       .strict()
       .trim()

    }),
    onSubmit:(userInputData) =>
    {
      console.log(userInputData);
    },
  
  })
  return(
<div className="container">
<div className="row">
  <div className="col-sm-2"></div>
  <div className="col-sm-7">
  <h1>SignUp form</h1>
  <div className="card">
  <div className="card-body content_border">
  <form  action="#" method="POST" onSubmit={formik.handleSubmit}>
   <div className="form-group">
   <label>First Name<span className="text-danger">*</span></label> 
   <input type="text" placeholder="Enter ur firstname" name="firstname" className="form-control" onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur} />
   {formik.touched.firstname && formik.errors.firstname ? <span className="text-danger"><h4>{formik.errors.firstname}</h4></span>: null}
   </div>

   <div className="form-group">
   <label>Last Name<span className="text-danger">*</span></label>
   <input type="text" placeholder="Enter ur lastname" name="lastname" className="form-control" onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur} />
   {formik.touched.lastname && formik.errors.lastname ? <span className="text-danger"> <h4>{formik.errors.lastname}</h4></span>: null}</div>

   <div className="form-group">
   <label>Email id<span className="text-danger">*</span></label>
   <input type="email" placeholder="you@gmail.com" name="mailid"  className="form-control" onChange={formik.handleChange} value={formik.values.mailid} onBlur={formik.handleBlur} />
   {formik.touched.mailid && formik.errors.mailid ? <span className="text-danger"><h4>{formik.errors.mailid}</h4></span>: null}</div>

   <div className="form-group">
   <label>Password<span className="text-danger">*</span></label>
   <input type="password" placeholder="Minimum 8 Characters only" name="password" className="form-control" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
   {formik.touched.password && formik.errors.password ? <span className="text-danger"> <h4>{formik.errors.password}</h4></span>: null}
   </div>

   <div className="form-group">
   <label>Confirm Password<span className="text-danger">*</span></label>
   <input type="password" placeholder="Enter ur confirm password" name="confirmpassword" className="form-control" onChange={formik.handleChange} value={formik.values.confirmpassword} onBlur={formik.handleBlur} />
   {formik.touched.confirmpassword && formik.errors.confirmpassword ? <span className="text-danger"><h4>{formik.errors.confirmpassword}</h4></span>: null}
   </div>

   <div className="form-group">
   <label>Mobile Number<small className="text-muted text-info !important">(Optional)</small></label>
   <input type="number" placeholder="9123456789" name="mobilenumber" className="form-control" onChange={formik.handleChange} value={formik.values.mobilenumber} onBlur={formik.handleBlur} />
   {formik.touched.mobilenumber && formik.errors.mobilenumber? <span className="text-danger"> <h4>{formik.errors.mobilenumber}</h4></span>: null}
   </div>

   
   <div className="form-group text-center">
   <button type="reset" className="btn btn-lg btn-info">Reset</button>&nbsp;&nbsp;
   <button type="submit" className="btn btn-primary btn-lg">Signin</button>
   </div>
  </form>

  </div>
  </div>

  </div>
  </div>
</div>

  );
}
export default Signup;
