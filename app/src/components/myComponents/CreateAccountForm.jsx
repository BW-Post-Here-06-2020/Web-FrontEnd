import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../../utils/axiosWithAuth";
import M from "materialize-css/dist/js/materialize.min.js";

export default function LoginForm() {
  let history = useHistory();

  const [user, setUser] = useState({ username: "", phone: "", password: "" });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axiosWithAuth()
      .post("/register", user)
      .then((response) => {
        console.log(response);
        M.toast({
          html: `Account Created Successfully`,
          classes: "deep-purple darken-4",
        });
        setUser({ username: "", phone: "", password: "" });
        history.push("/");
      })
      .catch((error) =>
        M.toast({
          html: "Account Already Exists",
          classes: "deep-purple darken-4",
        })
      );
  };

  const alreadyMember = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="container" style={{ marginTop: "130px" }}>
      <form className="col s10" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field center offset-s3 col s7">
            <p className="login">Join Us!</p>
          </div>

          <div className="input-field center offset-s3 col s7">
            <i className="material-icons prefix icon">account_circle</i>
            <input
              id="username"
              type="text"
              name="username"
              value={user.username}
              onChange={onChange}
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="input-field center offset-s3 col s7">
            <i className="material-icons prefix icon">phone</i>
            <input
              id="phone"
              type="text"
              name="phone"
              value={user.phone}
              onChange={onChange}
            />
            <label htmlFor="password">Phone Number</label>
          </div>

          <div className="input-field center offset-s3 col s7">
            <i className="material-icons prefix icon">lock</i>
            <input
              id="password"
              type="password"
              name="password"
              value={user.password}
              onChange={onChange}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="row">
            <div className="input-field offset-s4 col s10">
              <button className="waves-effect wider waves-light btn-small deep-purple darken-4">
                Create Account
              </button>
              <br />
            </div>
          </div>

          <div className="row center lessMargin">
            <a
              className="deep-purple-text center offset-s1 col s11"
              onClick={alreadyMember}
            >
              Already a Member?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
