import { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../imageWithBasePath";
import LoginHook from "../../../hook/auth/login-hook";

const LoginModal = () => {
  const [phoneEmail, password, loading, onChangeEmail, onChangePassword, onSubmit]=LoginHook();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // const [formData, setFormData] = useState({
  //   phoneEmail: "",
  //   password: "",
  // });
  // const [isLoading, setLoading] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  
  //   try {
  //     const response = await axiosInstance.post("/Auth/Login", formData); 
  
  //     if (response.status === 200) {
  //       localStorage.setItem("token", response.data.data.access_token);
  //       console.log("Login successful:", response.data.data.access_token);
  //       toast.success("Login successful");
  //     } else {
  //       console.error("Login failed:", response.data);
  //       toast.error("Login failed. Please check your credentials.");
  //     }
  //   } catch (error: any) {
  //     if (error.response) {
  //       console.error("Error during request:", error.response.data);
  //       toast.error(error.response.data.message || "An error occurred. Please try again later.");
  //     } else {
  //       console.error("Unexpected error:", error);
  //       toast.error("An unexpected error occurred.");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  return (
    <>
       {/* Login Modal */}
      <div className="modal fade" id="login-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
              <Link to="#" data-bs-dismiss="modal">
                <i className="ti ti-x fs-20" />
              </Link>
            </div>
            <div className="modal-body p-4 pt-0">
              <form onSubmit={onSubmit}>
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
                    <input
                      type="text"
                      name="phoneEmail"
                      className="form-control form-control-lg"
                      placeholder="Enter Email"
                      value={phoneEmail}
                      onChange={onChangeEmail}
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
                      type={isPasswordVisible ? "text" : "password"}
                      className="form-control form-control-lg pass-input"
                      placeholder="Enter Password"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                    />
                    <span
                      className={`input-icon-addon toggle-password`}
                      onClick={togglePasswordVisibility}
                    >
                      <i
                        className={`isax ${
                          isPasswordVisible ? "isax-eye" : "isax-eye-slash"
                        }`}
                      ></i>
                    </span>
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
                    disabled={loading}
                    data-bs-dismiss="modal"
                    className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
                  >
                    {loading ? "Logging in..." : "Login"}
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
                    Don't you have an account?{" "}
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
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Login Modal */}
    </>
  );
};

export default LoginModal;
