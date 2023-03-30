import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ error, setError ] = useState("");
    const navigate = useNavigate();

    const loadUser = () => {
    fetch('/me')
      .then(r => {
        if(r.ok){
          r.json().then(setUser)
        }else{
          console.log("User not set...")
        }
      })
    }

    const loginUser = (loginData) =>{
        const { username, password } = loginData
        fetch('login', {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        })
          .then(r => {
            if(r.ok){
                r.json().then(data => setUser(data.user));
                loadUser();
                navigate('/dashboard')
            } else{
                r.json().then((err) => setError(`${Object.keys(err)}: ${Object.values(err)}`))
            }
        })
    }

    const logoutUser = () => {
        fetch('/logout', {
            method: "DELETE"
            }).then((r) => {
                if (r.ok) {
                    setUser(null);
                    navigate('/')
                }
            })
        }

    return (
        <UserContext.Provider value={{ error, user, setUser, loadUser, loginUser, logoutUser }}>
            { children }
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };