/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { signupUser } from '../../store/auth/authSlice';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';

const signupHook = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [full_name, setfull_name] = useState('');
  const [phone, setPhone] = useState('');
  const [password_confirmation, setpassword_confirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const onChangeName = (e) => setfull_name(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangePasswordConfirm = (e) => setpassword_confirmation(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (full_name === '' || email === '' || password === '' || password_confirmation === '') {
      toast.error("Please complete your data");
      return;
    }
    if ( password_confirmation !==  password ) {
      toast.error("Password Confirmation incorrect");
      return;
    }

    setIsPress(true);
    setLoading(true);

    await dispatch(signupUser({ email, password, full_name, phone,password_confirmation }));

    setLoading(false);
    setIsPress(false);
  };

  const res = useSelector(state => state.auth.user);
console.log(res)
  useEffect(() => {
    if (!loading && res) {
      if (res.data?.data.access_token) {
        localStorage.setItem("token", res.data.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

         
        if (res.data?.message === "Password Confirmation incorrect") {
          toast.error("Password Confirmation incorrect");
        }
      }
      setLoading(true);
    }
  }, [loading, res]);

  return {
    email,
    password,
    full_name,
    password_confirmation,
    loading,
    isPress,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangePasswordConfirm,
    onChangePhone,
    phone,
    onSubmit,
  };
};

export default signupHook;
