import { useAppDispatch } from '../../../redux/store'
import { loginUserByEmailAction } from '../../../redux/auth/middleware'

const Login = () => {
  const dispatch = useAppDispatch()
  const handleLogIn = () => {
    dispatch(loginUserByEmailAction({ email: "baputest.spiral@gmail.com", password: "a@123" }))
  }

  return (
    <div>
      Login
      <br />
      <div>
        <button onClick={handleLogIn}>
          Log In
        </button>
      </div>
    </div>
  )
}

export default Login
