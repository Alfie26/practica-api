import { useState } from "react";
import s from "./Login.module.scss";

const Login = () => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // fetch("https://dummyjson.com/auth/login", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     username: { Login },
  //     password: { Password },
  //     expiresInMins: 2,
  //   }),
  //   credentials: "include",
  // })
  //   .then((res) => res.json())
  //   .then(console.log);
  return (
    <div className={s.wrapper}>
      <form action="submit" className={s.formBox}>
        <div className={s.innerForm}>
          <h1 className={s.h1}>Login</h1>
          <input
            type="text"
            placeholder="Login"
            className={s.input}
            value={""}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password"
            className={s.input}
            value={""}
          />
          <button className={s.loginButton}>Войти</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
