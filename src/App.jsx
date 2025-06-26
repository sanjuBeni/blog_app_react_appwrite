import { useEffect, useState } from 'react'
import { Footer, Header } from './components'
import { useDispatch } from 'react-redux'
import authService from './appwriteServices/authServices/AuthService'
import { login, logout } from './store/slice/AuthSlice/authSlice'
import { Outlet } from 'react-router-dom'

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

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
        <Header/>
        <main>
        {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
