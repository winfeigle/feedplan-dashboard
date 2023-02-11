import React from "react";

export default function login(username, password){
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
                r.json().then((admin) => console.log(admin))
            } else{
                r.json().then((err) => console.log(`${Object.keys(err)}: ${Object.values(err)}`))
            }
          })

}