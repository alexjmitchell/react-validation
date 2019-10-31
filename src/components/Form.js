import React, { useState } from "react"
import validator from "validator"
import ThankYou from "./ThankYouPage"
import App from "./App"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../styles/base.css"

function Form() {
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
  let formIsValid = useState(true)

  function handleSubmit(event) {
    event.preventDefault()
    console.log("---> formIsValid Before", formIsValid)
    if (name !== "") {
      if (
        !validator.isAlpha(name) &&
        validator.isEmpty(name, { ignore_whitespace: true })
      ) {
        formIsValid = false
        setNameError("Cannot use those Characters")
      }
    } else {
      formIsValid = false
      setNameError("Cannot be Blank")
    }

    if (email !== "") {
      if (!validator.isEmail(email)) {
        formIsValid = false
        setEmailError("Must use proper email")
      }
    } else {
      formIsValid = false
      setEmailError("Cannot be Blank")
    }

    if (username !== "") {
      if (!validator.isAlphanumeric(username)) {
        formIsValid = false
        setUsernameError("do not use those Chars")
      }
    } else {
      formIsValid = false
      setUsernameError("Cannot be Blank")
    }

    if (password !== "") {
      if (validator.isLength(name, { min: 6, max: 20 })) {
        formIsValid = false
        setPasswordError(
          "password must be a min of 6 characters long and max of 20 characters."
        )
      }
    } else {
      formIsValid = false
      setPasswordError("Cannot be Blank")
    }

    if (confirmPassword !== "") {
      if (confirmPassword !== password) {
        formIsValid = false
        setConfirmPasswordError("password must be the same")
      }
    } else {
      formIsValid = false
      setConfirmPasswordError("Cannot be Blank")
    }

    if (website !== "") {
      if (!validator.isURL(website)) {
        formIsValid = false
        setWebsiteError("Must be a proper URL")
      }
    } else {
      formIsValid = false
      setWebsiteError("Cannot be Blank")
    }
    console.log("---> formIsValid After", formIsValid)

    if (formIsValid) {
      return (document.location.pathname = "/thankyou")
    }

    if (!formIsValid) {
      let label = document.querySelectorAll("label")
      label = label.forEach(tag => tag.classList.toggle("error"))
      let input = document.querySelectorAll("input")
      input = input.forEach(tag => tag.classList.toggle("error"))
    }
  }

  return (
    <Router>
      <div className="container">
        <h2>Profile Form - All Fields Required ****</h2>
        <form className="profile-form" onSubmit={handleSubmit} noValidate>
          <article className="forms">
            <section>
              <label>
                Name:&nbsp;
                <span>{nameError}</span>
              </label>
              <br />
              <input
                className="name "
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
            {/* <Link to="/thankyou"> */}
            <button type="submit">Submit</button>
            {/* </Link> */}
          </article>
        </form>
      </div>
    </Router>
  )
}

export default Form
