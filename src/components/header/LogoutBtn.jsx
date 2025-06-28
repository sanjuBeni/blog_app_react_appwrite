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
    <button 
    className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full" 
    onClick={handleLogoutBtn}
    >
        Logout
    </button>
  )
}

export default LogoutBtn
