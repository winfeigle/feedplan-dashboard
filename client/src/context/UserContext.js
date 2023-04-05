import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ errors, setErrors ] = useState([]);
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

    const signUp = (newUser) => {
      fetch('/signup', {
            method: "POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify(newUser)
        }).then((r) => {
            if (r.ok) {
              r.json().then((user) => {
                  loginUser(user)
                  loadUser();
                });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
    }

    const loginUser = (loginData) =>{
        const { username, password } = loginData
        fetch('/login', {
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
                navigate('/restaurants')
            } else{
                r.json().then((err) => setErrors(Object.values(err)))
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
        <UserContext.Provider value={{ errors, user, setUser, loadUser, loginUser, signUp, logoutUser }}>
            { children }
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };