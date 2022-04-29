import { useContext } from "react";
import { UserContext } from "../../Context/User";

const Login = () => {
    const [user, setUser] = useContext(UserContext)
    return (
    <>
        <h1 className="text-danger">Login</h1>
        <p>{user.name}</p>
    </>
    );
  }
  
  export default Login;