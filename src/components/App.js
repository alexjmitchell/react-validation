import React, { useState } from "react"
import validator from "validator"
import "../styles/base.css"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [website, setWebsite] = useState("")
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [websiteError, setWebsiteError] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (name !== "") {
      if (!validator.isAlpha(name)) {
        setNameError("Cannot use those Characters")
      }
    } else {
      setNameError("Cannot be Blank")
    }

    if (email !== "") {
      if (!validator.isEmail(email)) {
        setEmailError("Must use proper email")
      }
    } else {
      setEmailError("Cannot be Blank")
    }

    if (username !== "") {
      if (!validator.isAlphanumeric(username)) {
        setUsernameError("do not use those Chars")
      }
    } else {
      setUsernameError("Cannot be Blank")
    }

    if (password !== "") {
      if (password.length < 6 || password.length >= 20) {
        setPasswordError(
          "password must be a min of 6 characters long and max of 20 characters."
        )
      }
    } else {
      setPasswordError("Cannot be Blank")
    }

    if (confirmPassword !== "") {
      if (confirmPassword !== password) {
        setConfirmPasswordError("password must be the same")
      }
    } else {
      setConfirmPasswordError("Cannot be Blank")
    }

    if (website !== "") {
      if (!validator.isURL(website)) {
        setWebsiteError("Must be a proper URL")
      }
    } else {
      setWebsiteError("Cannot be Blank")
    }
  }
  console.log(confirmPassword)
  return (
    <div className="container">
      <h2>Profile Form - All Fields Required ****</h2>
      <form className="profile-form" onSubmit={handleSubmit} noValidate>
        <article className="forms">
          <section>
            <label>
              Name:&nbsp;
              {nameError}{" "}
            </label>
            <br />
            <input
              className="name"
              type="text"
              size="42"
              value={name.toLowerCase()}
              onChange={event => setName(event.target.value)}
              placeholder="John Doe"
            />
          </section>
          <section>
            <label>Email:&nbsp;{emailError} </label>
            <br />
            <input
              type="email"
              size="42"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="johndoe@gmail.com"
            />
          </section>
          <section>
            <label>Username:&nbsp;{usernameError} </label>
            <br />
            <input
              type="text"
              size="42"
              value={username}
              onChange={event => setUsername(event.target.value)}
              placeholder="JohnDoe1951"
            />
          </section>
          <section>
            <label>Password:&nbsp;{passwordError} </label>
            <br />
            <input
              type="password"
              size="42"
              value={password}
              onChange={event => setPassword(event.target.value)}
              placeholder="123abc!@#"
            />
          </section>
          <section>
            <label>Confirm Password:&nbsp;{confirmPasswordError} </label>
            <br />
            <input
              type="password"
              size="42"
              value={confirmPassword}
              onChange={event => setConfirmPassword(event.target.value)}
              placeholder="123abc!@#"
            />
          </section>
          <section>
            <label>Website:&nbsp;{websiteError} </label>
            <br />
            <input
              type="url"
              size="42"
              value={website}
              onChange={event => setWebsite(event.target.value)}
              placeholder="http://www.johndoe.org/"
            />
          </section>
          <button type="submit">Submit</button>
        </article>
      </form>
    </div>
  )
}

export default App
