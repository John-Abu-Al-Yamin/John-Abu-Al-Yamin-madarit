// import { useState } from "react";
// import { Link } from "react-router-dom";
// import ImageWithBasePath from "../imageWithBasePath";
// import LoginHook from "../../../hook/auth/login-hook";

// const LoginModal = () => {
//   const [phoneEmail, password, loading, onChangeEmail, onChangePassword, onSubmit]=LoginHook();
//   const [isPasswordVisible, setPasswordVisible] = useState(false);

   
//   const togglePasswordVisibility = () => {
//     setPasswordVisible((prevState) => !prevState);
//   };
//   return (
//     <>
//        {/* Login Modal */}
//       <div className="modal fade" id="login-modal">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
//               <Link to="#" data-bs-dismiss="modal">
//                 <i className="ti ti-x fs-20" />
//               </Link>
//             </div>
//             <div className="modal-body p-4 pt-0">
//               <form onSubmit={onSubmit}>
//                 <div className="text-center mb-3">
//                   <h5 className="mb-1">Sign In</h5>
//                   <p>Sign in to Start Manage your DreamsTour Account</p>
//                 </div>
//                 <div className="mb-2">
//                   <label className="form-label">Email or Phone</label>
//                   <div className="input-icon">
//                     <span className="input-icon-addon">
//                       <i className="isax isax-message" />
//                     </span>
//                     <input
//                       type="text"
//                       name="phoneEmail"
//                       className="form-control form-control-lg"
//                       placeholder="Enter Email"
//                       value={phoneEmail}
//                       onChange={onChangeEmail}
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-2">
//                   <label className="form-label">Password</label>
//                   <div className="input-icon">
//                     <span className="input-icon-addon">
//                       <i className="isax isax-lock" />
//                     </span>

//                     <input
//                       type={isPasswordVisible ? "text" : "password"}
//                       className="form-control form-control-lg pass-input"
//                       placeholder="Enter Password"
//                       name="password"
//                       value={password}
//                       onChange={onChangePassword}
//                     />
//                     <span
//                       className={`input-icon-addon toggle-password`}
//                       onClick={togglePasswordVisibility}
//                     >
//                       <i
//                         className={`isax ${
//                           isPasswordVisible ? "isax-eye" : "isax-eye-slash"
//                         }`}
//                       ></i>
//                     </span>
//                   </div>
//                 </div>
//                 <div className="mt-3 mb-3">
//                   <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
//                     <div className="form-check d-flex align-items-center mb-2">
//                       <input
//                         className="form-check-input mt-0"
//                         type="checkbox"
//                         defaultValue=""
//                         id="remembers_me"
//                       />
//                       <label
//                         className="form-check-label ms-2 text-gray-9 fs-14"
//                         htmlFor="remembers_me"
//                       >
//                         Remember Me
//                       </label>
//                     </div>
//                     <Link
//                       to="#"
//                       className="link-primary fw-medium fs-14 mb-2"
//                       data-bs-toggle="modal"
//                       data-bs-target="#forgot-modal"
//                     >
//                       Forgot Password?
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     // data-bs-dismiss="modal"
//                     className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
//                   >
//                     {loading ? "Logging in..." : "Login"}
//                     <i className="isax isax-arrow-right-3 ms-2" />
//                   </button>
//                 </div>
//                 <div className="login-or mb-3">
//                   <span className="span-or">Or</span>
//                 </div>
//                 <div className="d-flex align-items-center mb-3">
//                   <Link
//                     to="#"
//                     className="btn btn-light flex-fill d-flex align-items-center justify-content-center me-2"
//                   >
//                     <ImageWithBasePath
//                       src="assets/img/icons/google-icon.svg"
//                       className="me-2"
//                       alt="Img"
//                     />
//                     Google
//                   </Link>
//                   <Link
//                     to="#"
//                     className="btn btn-light flex-fill d-flex align-items-center justify-content-center"
//                   >
//                     <ImageWithBasePath
//                       src="assets/img/icons/fb-icon.svg"
//                       className="me-2"
//                       alt="Img"
//                     />
//                     Facebook
//                   </Link>
//                 </div>
//                 <div className="d-flex justify-content-center">
//                   <p className="fs-14">
//                     Don't you have an account?{" "}
//                     <Link
//                       to="#"
//                       className="link-primary fw-medium"
//                       data-bs-toggle="modal"
//                       data-bs-target="#register-modal"
//                     >
//                       Sign up
//                     </Link>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Login Modal */}
//     </>
//   );
// };

// export default LoginModal;




import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ImageWithBasePath from '../imageWithBasePath';
import { loginUser } from '../../redux/auth/authSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { loginSchema } from '../../../utils/Validation';
 const LoginModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [loading, setLoading] = useState(false);

  const res = useSelector((state: RootState) => state.auth.user);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  useEffect(() => {
    if (!loading && res) {
      if ((res as any)?.access_token) {
        localStorage.setItem('token', (res as any).access_token);
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
      } else {
        localStorage.removeItem('token');
      }

      if ((res as any)?.message === 'Incorrect email or password') {
        localStorage.removeItem('token');
        toast.error('Incorrect email or password');
      }

      setLoading(true);
    }
  }, [loading, res]);

  const handleSubmit = async (
    values: { phoneEmail: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const { phoneEmail, password } = values;

    if (!phoneEmail || !password) {
      toast.error('Please complete your data');
      return;
    }

    setIsPress(true);
    setLoading(true);

    try {
      await dispatch(loginUser({ phoneEmail, password }));
    } catch (error: any) {
      if (error?.response?.status === 400) {
        toast.error('Bad request: Please check your email or password');
      } else if (error?.response?.status === 404) {
        toast.error('Not found: User not found');
      } else {
        toast.error('An error occurred. Please try again.');
      }
    } finally {
      setSubmitting(false);
      setIsPress(false);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="modal fade" id="login-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
              <Link to="#" data-bs-dismiss="modal">
                <i className="ti ti-x fs-20" />
              </Link>
            </div>
            <div className="modal-body p-4 pt-0">
              <Formik
                initialValues={{ phoneEmail: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="text-center mb-3">
                      <h5 className="mb-1">Sign In</h5>
                      <p>Sign in to Start Manage your DreamsTour Account</p>
                    </div>
                    <div className="mb-2">
                      <label className="form-label">Email or Phone</label>
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          <i className="isax isax-message" />
                        </span>
                        <Field
                          type="email"
                          name="phoneEmail"
                          className="form-control form-control-lg"
                          placeholder="Enter Email"
                          />
                        <ErrorMessage
                          name="phoneEmail"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <label className="form-label">Password</label>
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          <i className="isax isax-lock" />
                        </span>

                        <Field
                          type={isPasswordVisible ? 'text' : 'password'}
                          name="password"
                          className="form-control form-control-lg pass-input"
                          placeholder="Enter Password"
                        />
                        <span
                          className="input-icon-addon toggle-password"
                          onClick={togglePasswordVisibility}
                        >
                          <i
                            className={`isax ${
                              isPasswordVisible
                                ? 'isax-eye'
                                : 'isax-eye-slash'
                            }`}
                          ></i>
                        </span>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="mt-3 mb-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                        <div className="form-check d-flex align-items-center mb-2">
                          <input
                            className="form-check-input mt-0"
                            type="checkbox"
                            defaultValue=""
                            id="remembers_me"
                          />
                          <label
                            className="form-check-label ms-2 text-gray-9 fs-14"
                            htmlFor="remembers_me"
                          >
                            Remember Me
                          </label>
                        </div>
                        <Link
                          to="#"
                          className="link-primary fw-medium fs-14 mb-2"
                          data-bs-toggle="modal"
                          data-bs-target="#forgot-modal"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button
                        type="submit"
                        disabled={isSubmitting || loading}
                        className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
                      >
                        {loading ? 'Logging in...' : 'Login'}
                        <i className="isax isax-arrow-right-3 ms-2" />
                      </button>
                    </div>
                    <div className="login-or mb-3">
                      <span className="span-or">Or</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <Link
                        to="#"
                        className="btn btn-light flex-fill d-flex align-items-center justify-content-center me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/google-icon.svg"
                          className="me-2"
                          alt="Img"
                        />
                        Google
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-light flex-fill d-flex align-items-center justify-content-center"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/fb-icon.svg"
                          className="me-2"
                          alt="Img"
                        />
                        Facebook
                      </Link>
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="fs-14">
                        Don't you have an account?{' '}
                        <Link
                          to="#"
                          className="link-primary fw-medium"
                          data-bs-toggle="modal"
                          data-bs-target="#register-modal"
                        >
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
