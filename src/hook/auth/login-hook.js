import React, { useState, useEffect } from 'react'
 import { useDispatch, useSelector } from 'react-redux';
import {loginUser } from '../../store/auth/authSlice';
import { toast } from "react-toastify";
 
const LoginHook = () => {
    const dispatch = useDispatch();
  
    const [phoneEmail, setphoneEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [isPress, setIsPress] = useState(false)
    const onChangeEmail = (e) => {
        setphoneEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = async (e) => {
      e.preventDefault();
      if(phoneEmail === '' || password ==='' ){
        toast.error("Please complete your data")
        console.log("Please complete your data")
      } 
       
        setIsPress(true)
        setLoading(true)
        await dispatch(loginUser({
            phoneEmail,
            password
        }))
         setLoading(false)
        setIsPress(false)
    }
    const res = useSelector(state => state.auth.user)
     useEffect(() => {
        if (loading === false) {
             if (res) {
                 if (res.data.data.access_token) {
                  

                    localStorage.setItem("token", res.data.data.access_token)
                    localStorage.setItem("user", JSON.stringify(res.data.data))
                     setTimeout(() => {
                        window.location.href = "/"
                    }, 1500);
                } else {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                }

                if (res?.data.message === "Incorrect email or password") {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    toast.error("Incorrect email or password")

                 }
                 setLoading(true)
            }
         }

    }, [loading])

    return [phoneEmail, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress]
}

export default LoginHook