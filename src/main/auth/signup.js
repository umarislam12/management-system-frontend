import { Component } from "react";
import "../../css/login.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { signup } from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CircularProgress from "@material-ui/core/CircularProgress";

var React = require("react");

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "nadeem",
      last_name: "sajid",
      email: "nadeem.sajid@gmail.com",
      password: "123456",
      confirm_password: null,
      user_role: "engineer"
    };
  }

  componentWillReceiveProps(nextProps, prevState) {
    if (nextProps.status === 200) {
      this.props.history.push("/");
    } else if (nextProps.status === 301) {
      alert("Invalid email or passwrod");
    } else if (nextProps.status === undefined) {
      alert("Network request failed");
    }
  }

  onSubmit = async () => {
    if (this.state.name === "") {
      alert("First name is required");
    } else if (this.state.last_name === "") {
      alert("Last name is required");
    } else if (this.state.email === "") {
      alert("email is required");
    } else if (this.state.password === "") {
      alert("password is required");
    } else if (this.state.user_role === "") {
      alert("User role is required");
    } else {
      await this.props.signup({ ...this.state });
    }
  };
  render() {
    const { loading } = this.props;
    return (
      <div className="mainDiv">
        <div className="header">
          <label className="header_title">Resource Request System</label>
        </div>
        <div className="formDiv">
          <MuiThemeProvider>
            <div>
              <TextField
                type="text"
                hintText="Enter your first name"
                floatingLabelText="First Name"
                onChange={(event, newValue) =>
                  this.setState({ name: event.target.value })
                }
              />
              <br />
              <TextField
                type="text"
                hintText="Enter your last name"
                floatingLabelText="Last Name"
                onChange={(event, newValue) =>
                  this.setState({ last_name: event.target.value })
                }
              />
              <TextField
                hintText="Enter your email"
                floatingLabelText="Email"
                onChange={(event, newValue) =>
                  this.setState({ email: event.target.value })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: event.target.value })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Confirm your password"
                floatingLabelText="Confirm Password"
                onChange={(event, newValue) =>
                  this.setState({ confirm_password: event.target.value })
                }
              />
              <br />
              <TextField
                type="text"
                hintText="Enter your role"
                floatingLabelText="User Role"
                onChange={(event, newValue) =>
                  this.setState({ user_role: event.target.value })
                }
              />
              <br />
              <br />
              <br />
              <br />
              <div onClick={() => this.props.history.push("login")}>
                <label className="forgot_password">
                  Already have an account ?
                </label>
              </div>
              <br />
              <RaisedButton
                label=""
                primary={true}
                fullWidth={true}
                className="formDiv_button"
                onClick={this.onSubmit}
              >
                {loading ? (
                  <CircularProgress size={20} />
                ) : (
                  <label className="formDiv_button">Signup</label>
                )}
              </RaisedButton>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  let data = state.signupReducer;
  return {
    loading: data.loading,
    status: data.status,
    error: data.error,
    signupData: data.data
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signup }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
