import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { Section } from "../global"
import styled from "styled-components"

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const url =
  "https://zynrk5evjc.execute-api.us-east-1.amazonaws.com/dev/email/send"

function post(url, body, callback) {
  var req = new XMLHttpRequest()
  req.open("POST", url, true)
  req.setRequestHeader("Content-Type", "application/json")
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, JSON.parse(req.responseText))
    } else {
      callback(new Error("Request failed: " + req.statusText))
    }
  })
  req.send(JSON.stringify(body))
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      content: "",
    }
  }

  classes = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3),
    },
    content: {
      flexBasis: "10%",
    },
  }))

  success() {
    alert("Thanks for sending us a message! You should have received an email from arms.front@gmail.com. Otherwise, please contact us directly at arms.front@gmail.com")
    this.state.firstName = ""
    this.state.lastName = ""
    this.state.email = ""
  }

  error(err) {
    alert(
      "There was an error with sending your message. Please email us directly at arms.front@gmail.com."
    )
    console.log(err)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const payload = {
      name: this.state.firstName + " " + this.state.lastName,
      email: this.state.email,
      content: this.state.content,
    }
    post(url, payload, (err, res) => {
      if (err) {
        return this.error(err)
      }
      this.success()
    })
  }

  render() {
    return (
      <Section id="contact">
        <Container component="main" maxWidth="md" pt={10}>
          <CssBaseline />
          <div className={this.classes.paper}>
            <SectionTitle>Contact Us!</SectionTitle>
            <form
              className={this.classes.form}
              noValidate
              onSubmit={this.handleSubmit}
            >
              <Grid container spacing={2} direction="column" wrap="wrap">
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    onChange={(event) =>
                      this.setState({ firstName: event.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={(event) =>
                      this.setState({ lastName: event.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} className={this.classes.content}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="content"
                    label="Content"
                    name="content"
                    autoComplete="content"
                    onChange={(event) =>
                      this.setState({ content: event.target.value })
                    }
                    multiline
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={this.classes.submit}
              >
                Submit
              </Button>
            </form>
          </div>
        </Container>
      </Section>
    )
  }
}

export default Contact
