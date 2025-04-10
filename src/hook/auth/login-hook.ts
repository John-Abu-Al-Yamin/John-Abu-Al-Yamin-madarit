import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser } from '../../core/redux/auth/authSlice';
import { AppDispatch, RootState } from '../../core/redux/store';

const LoginHook = (): [
  string,
  string,
  boolean,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
  boolean
] => {
  const dispatch = useDispatch<AppDispatch>();

  const [phoneEmail, setPhoneEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isPress, setIsPress] = useState<boolean>(false);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phoneEmail === '' || password === '') {
      toast.error('Please complete your data');
      return;
    }

    setIsPress(true);
    setLoading(true);

    try {
      // Dispatch login action
      await dispatch(loginUser({ phoneEmail, password }));
      
    } catch (error: any) {
      // Check if error is a known error type (400, 404)
      if (error?.response?.status === 400) {
        toast.error('Bad request: Please check your email or password');
      } else if (error?.response?.status === 404) {
        toast.error('Not found: User not found');
      } else {
        toast.error('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
      setIsPress(false);
    }
  };

  const res = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!loading && res) {
      if ((res as any)?.access_token) {
        localStorage.setItem('token', (res as any).access_token);
         setTimeout(() => {
          window.location.href = "/";
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

  return [phoneEmail, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress];
};

export default LoginHook;
