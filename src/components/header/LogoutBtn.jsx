import React from 'react'
import authService from '../../appwriteServices/authServices/AuthService'
import {logout} from "../../store/slice/AuthSlice/authSlice"
import { useDispatch } from 'react-redux'

const LogoutBtn = () => {
    const dispatch = useDispatch()

    const handleLogoutBtn = () => {
        authService.logout()
            .then(() => dispatch(logout()))
    }

  return (
    <button onClick={handleLogoutBtn}>Logout</button>
  )
}

export default LogoutBtn
