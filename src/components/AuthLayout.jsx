import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthLayout({childern, authentication = true}) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=> {
        if(authentication && authStatus !== authentication) {
            navigate("/login")
        }else if(authentication && authStatus === authentication) {
            navigate("/")
        }
        setLoading(false)
    }, [authentication, navigate, authStatus])

  return  loading ? <h1>loading...</h1> : <>{childern}</>
  
}

export default AuthLayout