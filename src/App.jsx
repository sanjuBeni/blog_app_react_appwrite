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
            <form class="max-w-sm mx-auto" onSubmit={handleSubmit(fomrSubmit)}>
                <div class="mb-5">
                    <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="text"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter email"
                        {...register("email", {
                            required : {value : true, message: "Email is required"},
                            minLength : {value : 3, message : "Minimum length is at least 3"}
                        })}
                    />
                </div>
                <div class="mb-5">
                <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your password
                </label>
                <input
                    type="password"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("password", {
                        required : true,
                        maxLength : 4 
                    })}
                />
                </div>
                <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                Submit
                </button>
            </form>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App
