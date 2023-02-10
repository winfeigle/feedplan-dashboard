import React from "react";

function LoginForm(){
    return(
        <div>
            <form>
                <label> Username
                    <input
                        placeholder="username"
                        name="username"
                        // value={username}
                        // onChange={handleFormChange}
                        />
                </label>
            </form>
        </div>
    );
}

export default LoginForm;