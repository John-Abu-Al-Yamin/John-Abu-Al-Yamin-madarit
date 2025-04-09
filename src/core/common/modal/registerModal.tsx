
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../imageWithBasePath";
 import "react-country-state-city/dist/react-country-state-city.css";
import signupHook from "../../../hook/auth/signup-hook";
 
type PasswordField = "password" | "confirmPassword";
const RegisterModal = () => {
  const {full_name, 
    email, 
    password, 
    password_confirmation, 
    address, 
    nationality, 
     ipAddress, 
    phone, 
    userType, 
    loading, 
    isPress, 
    handleChange, 
    onSubmit 
  }=signupHook();
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

   

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  return (
    <>
      {/* <ToastContainer /> */}
       <div className="modal fade" id="register-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
              <Link to="#" data-bs-dismiss="modal">
                <i className="ti ti-x fs-20" />
              </Link>
            </div>
            <div className="modal-body p-4 pt-0">
              <form onSubmit={onSubmit}>
                <div className="text-center border-bottom mb-3">
                  <h5 className="mb-1">Sign Up</h5>
                  <p className="mb-3">Create your DreamsTour </p>
                </div>
                <div className="mb-2">
                  <label className="form-label">Name</label>
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <i className="isax isax-user" />
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Full Name"
                      name="full_name"
                      value={full_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="form-label">Email</label>
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <i className="isax isax-message" />
                    </span>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label">Phone</label>
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <i className="isax isax-message" />
                    </span>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label">Password</label>
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <i className="isax isax-lock" />
                    </span>

                    <input
                      type={passwordVisibility.password ? "text" : "password"}
                      className="form-control form-control-lg pass-input"
                      placeholder="Enter Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                    <span
                      className={`isax toggle-passwords ${
                        passwordVisibility.password
                          ? "isax-eye"
                          : "isax-eye-slash"
                      }`}
                      onClick={() => togglePasswordVisibility("password")}
                    ></span>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <i className="isax isax-lock" />
                    </span>

                    <input
                      type={
                        passwordVisibility.confirmPassword ? "text" : "password"
                      }
                      className="form-control form-control-lg pass-input"
                      placeholder="Enter Password"
                      name="password_confirmation"
                      value={password_confirmation}
                      onChange={handleChange}
                    />
                    <span
                      className={`isax toggle-passwords ${
                        passwordVisibility.confirmPassword
                          ? "isax-eye"
                          : "isax-eye-slash"
                      }`}
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                    ></span>
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label">Nationality</label>
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <i className="isax isax-message" />
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Nationality"
                      name="nationality"
                      value={nationality}
                      onChange={handleChange}
                    />
                    {/* <CountrySelect
                      containerClassName="form-group"
                      inputClassName="form-control form-control-lg"
                      value={country}
                      onChange={(selectedCountry) => setCountry(selectedCountry)}                       onTextChange={(_txt) => console.log(_txt)}
                      placeHolder="Select Country"
                    /> */}
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label">Address</label>
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <i className="isax isax-message" />
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Address"
                      name="address"
                      value={address}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label">IpAddress</label>
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <i className="isax isax-message" />
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter IpAddress"
                      name="ipAddress"
                      value={ipAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mt-3 mb-3">
                  <div className="d-flex">
                    <div className="form-check d-flex align-items-center mb-2">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        defaultValue=""
                        id="agree"
                      />
                      <label
                        className="form-check-label ms-2 text-gray-9 fs-14"
                        htmlFor="agree"
                      >
                        I agree with the&nbsp;
                        <Link to="#" className="link-primary fw-medium">
                          Terms Of Service.
                        </Link>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    // data-bs-dismiss="modal"
                    className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
                  >
                    Register
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
                    Already have an account?{" "}
                    <Link
                      to="#"
                      className="link-primary fw-medium"
                      data-bs-toggle="modal"
                      data-bs-target="#login-modal"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Register Modal */}
    </>
  );
};

export default RegisterModal;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ImageWithBasePath from "../imageWithBasePath";
//  import { toast } from "react-toastify";
 
 
// import "react-country-state-city/dist/react-country-state-city.css";
// import axiosInstance from "../../../Api/axiosInstance";

// type PasswordField = "password" | "confirmPassword";
// const RegisterModal = () => {
//   const [passwordVisibility, setPasswordVisibility] = useState({
//     password: false,
//     confirmPassword: false,
//   });

//   const [country, setCountry] = useState<any>(null); 
//   const [formData, setFormData] = useState({
//     full_name: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//     address: "",
//     nationality: "",
//     userType: "user",
//     ipAddress: "55225",
//     phone: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
  
//     try {
//       const response = await axiosInstance.post("/Auth/Register", formData); 
   
//       if (response.status === 200) {
//         localStorage.setItem("token", response.data.data.access_token);
//         console.log("Login successful:", response.data.data.access_token);
//         toast.success("Login successful");
//       } else {
//         console.error("Login failed:", response.data);
//         toast.error("Login failed. Please check your credentials.");
//       }
//     } catch (error: any) {
//       if (error.response) {
//         console.error("Error during request:", error.response.data);
//         toast.error(error.response.data.message || "An error occurred. Please try again later.");
//       } else {
//         console.error("Unexpected error:", error);
//         toast.error("An unexpected error occurred.");
//       }
//     }
//   };

//   const togglePasswordVisibility = (field: PasswordField) => {
//     setPasswordVisibility((prevState) => ({
//       ...prevState,
//       [field]: !prevState[field],
//     }));
//   };
//   return (
//     <>
//       {/* <ToastContainer /> */}
//        <div className="modal fade" id="register-modal">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
//               <Link to="#" data-bs-dismiss="modal">
//                 <i className="ti ti-x fs-20" />
//               </Link>
//             </div>
//             <div className="modal-body p-4 pt-0">
//               <form onSubmit={handleSubmit}>
//                 <div className="text-center border-bottom mb-3">
//                   <h5 className="mb-1">Sign Up</h5>
//                   <p className="mb-3">Create your DreamsTour </p>
//                 </div>
//                 <div className="mb-2">
//                   <label className="form-label">Name</label>
//                   <div className="input-icon">
//                     <span className="input-icon-addon">
//                       <i className="isax isax-user" />
//                     </span>
//                     <input
//                       type="text"
//                       className="form-control form-control-lg"
//                       placeholder="Enter Full Name"
//                       name="full_name"
//                       value={formData.full_name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-2">
//                   <label className="form-label">Email</label>
//                   <div className="input-icon">
//                     <span className="input-icon-addon">
//                       <i className="isax isax-message" />
//                     </span>
//                     <input
//                       type="email"
//                       className="form-control form-control-lg"
//                       placeholder="Enter Email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-2">
//                   <label className="form-label">Phone</label>
//                   <div className="input-icon">
//                     <span className="input-icon-addon">
//                       <i className="isax isax-message" />
//                     </span>
//                     <input
//                       type="tel"
//                       className="form-control form-control-lg"
//                       placeholder="Enter Phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
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
//                       type={passwordVisibility.password ? "text" : "password"}
//                       className="form-control form-control-lg pass-input"
//                       placeholder="Enter Password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                     />
//                     <span
//                       className={`isax toggle-passwords ${
//                         passwordVisibility.password
//                           ? "isax-eye"
//                           : "isax-eye-slash"
//                       }`}
//                       onClick={() => togglePasswordVisibility("password")}
//                     ></span>
//                   </div>
//                 </div>
//                 <div className="mb-2">
//                   <label className="form-label">Confirm Password</label>
//                   <div className="input-icon">
//                     <span className="input-icon-addon">
//                       <i className="isax isax-lock" />
//                     </span>

//                     <input
//                       type={
//                         passwordVisibility.confirmPassword ? "text" : "password"
//                       }
//                       className="form-control form-control-lg pass-input"
//                       placeholder="Enter Password"
//                       name="password_confirmation"
//                       value={formData.password_confirmation}
//                       onChange={handleChange}
//                     />
//                     <span
//                       className={`isax toggle-passwords ${
//                         passwordVisibility.confirmPassword
//                           ? "isax-eye"
//                           : "isax-eye-slash"
//                       }`}
//                       onClick={() =>
//                         togglePasswordVisibility("confirmPassword")
//                       }
//                     ></span>
//                   </div>
//                 </div>

//                 <div className="mb-2">
//                   <label className="form-label">Nationality</label>
//                   <div className="input-icon">
//                     <span className="input-icon-addon">
//                       <i className="isax isax-message" />
//                     </span>
//                     <input
//                       type="text"
//                       className="form-control form-control-lg"
//                       placeholder="Enter Nationality"
//                       name="nationality"
//                       value={formData.nationality}
//                       onChange={handleChange}
//                     />
//                     {/* <CountrySelect
//                       containerClassName="form-group"
//                       inputClassName="form-control form-control-lg"
//                       value={country}
//                       onChange={(selectedCountry) => setCountry(selectedCountry)}                       onTextChange={(_txt) => console.log(_txt)}
//                       placeHolder="Select Country"
//                     /> */}
//                   </div>
//                 </div>

//                 <div className="mb-2">
//                   <label className="form-label">Address</label>
//                   <div className="input-icon">
//                     <span className="input-icon-addon">
//                       <i className="isax isax-message" />
//                     </span>
//                     <input
//                       type="text"
//                       className="form-control form-control-lg"
//                       placeholder="Enter Address"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-2">
//                   <label className="form-label">IpAddress</label>
//                   <div className="input-icon">
//                     <span className="input-icon-addon">
//                       <i className="isax isax-message" />
//                     </span>
//                     <input
//                       type="text"
//                       className="form-control form-control-lg"
//                       placeholder="Enter IpAddress"
//                       name="ipAddress"
//                       value={formData.ipAddress}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-3 mb-3">
//                   <div className="d-flex">
//                     <div className="form-check d-flex align-items-center mb-2">
//                       <input
//                         className="form-check-input mt-0"
//                         type="checkbox"
//                         defaultValue=""
//                         id="agree"
//                       />
//                       <label
//                         className="form-check-label ms-2 text-gray-9 fs-14"
//                         htmlFor="agree"
//                       >
//                         I agree with the&nbsp;
//                         <Link to="#" className="link-primary fw-medium">
//                           Terms Of Service.
//                         </Link>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <button
//                     type="submit"
//                     // data-bs-dismiss="modal"
//                     className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
//                   >
//                     Register
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
//                     Already have an account?{" "}
//                     <Link
//                       to="#"
//                       className="link-primary fw-medium"
//                       data-bs-toggle="modal"
//                       data-bs-target="#login-modal"
//                     >
//                       Sign In
//                     </Link>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Register Modal */}
//     </>
//   );
// };

// export default RegisterModal;
