import { createContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    const loadUser = () => {
    fetch('/me')
      .then(r => {
        if(r.ok){
          r.json().then(setUser)
        }else{
          r.json().then(error => console.log("Errors"))
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
            } else{
                r.json().then((err) => console.log(`${Object.keys(err)}: ${Object.values(err)}`))
            }
        })
    }

    const logoutUser = () => {
        fetch('/logout', {
            method: "DELETE"
            }).then((r) => {
                if (r.ok) {
                    setUser(null);
                }
            })
        }

    return (
        <UserContext.Provider value={{ user, setUser, loadUser, loginUser, logoutUser }}>
            { children }
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };