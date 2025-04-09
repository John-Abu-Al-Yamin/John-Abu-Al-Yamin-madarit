/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../core/redux/auth/authSlice';
import { AppDispatch, RootState } from '../../core/redux/store'; 

interface SignupFormData {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  address: string;
  nationality: string;
  ipAddress: string;
  phone: string;
  userType: string;
}
const signupHook = () => {
  const dispatch = useDispatch<AppDispatch>();
  const res = useSelector((state: RootState) => state.auth.user);

  const [formData, setFormData] = useState<SignupFormData>({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    address: "",
    nationality: "",
    ipAddress: "55225",
    phone: "",
    userType: "user",
  });

  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const {
      full_name, email, password, password_confirmation,
      address, nationality, phone,ipAddress
    } = formData;

    if (!full_name || !email || !password || !password_confirmation || !address || !nationality  || !phone || !ipAddress) {
      toast.error("Please complete all fields");
      return false;
    }

    if (password !== password_confirmation) {
      toast.error("Password Confirmation incorrect");
      return false;
    }

    return true;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsPress(true);
    setLoading(true);

    await dispatch(signupUser(formData));  

    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    if (!loading && res) {
      if (res?.data?.data?.access_token) {
        localStorage.setItem("token", res.data.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        // setTimeout(() => {
        //   window.location.href = "/";
        // }, 1500);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        if (res?.data?.message) {
          toast.error(res.data.message);
        }
      }
      setLoading(true);
    }
  }, [loading, res]);

  return {
    ...formData,
    loading,
    isPress,
    handleChange,
    onSubmit,
  };
};

export default signupHook;






