import { useEffect, useState } from 'react'
import { Footer, Header } from './components'
import { useDispatch } from 'react-redux'
import authService from './appwriteServices/authServices/AuthService'
import { login, logout } from './store/slice/AuthSlice/authSlice'
import { Outlet } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    const {
        register,
        formState : { errors }, 
        handleSubmit
    } = useForm()

    const fomrSubmit = (data) => {
        console.log(data)
    }
    console.log(123,errors)
    

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if(userData) {
                    dispatch(login({userData}))
                } else {
                    dispatch(logout())
                }
            })
            .finally(() => setLoading(false))
    }, [])


  return loading ? null : (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
    
          {/* <Outlet/> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App
