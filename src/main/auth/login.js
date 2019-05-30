import { Component } from 'react';
import '../../css/login.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { login } from '../../redux/actions/loginActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';

var React = require('react');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false
        }
    }
    componentWillReceiveProps(nextProps, prevState) {

        if (nextProps.status === 200) {
            this.props.history.push('/');
          } else if (nextProps.status === 301) {              
            alert('Invalid email or passwrod');
          }else if (nextProps.status === undefined){
            alert('Network request failed');
          }
    }
    onSubmit = async () => {
        if (this.state.email === '') {
            alert('email is required');
        } else if (this.state.password === '') {
            alert('password is required');
        } else {
            await this.props.login({ ...this.state });
        }
    }

    render() {
        const { loading } = this.props
        return (
            <div className="mainDiv">
                <div className="header">
                    <label className="header_title">Resource Request System</label>
                </div>
                <div className="formDiv">
                    <MuiThemeProvider >
                        <div>
                            <TextField
                                hintText="Enter your email"
                                floatingLabelText="Email"
                                onChange={(event, newValue) => this.setState({ email: event.target.value })}
                            />
                            <br />
                            <TextField
                                type="password"
                                hintText="Enter your password"
                                floatingLabelText="Password"
                                onChange={(event, newValue) => this.setState({ password: event.target.value })}
                                id="authPassword"
                            />
                            <br />
                            <br />
                            <br />
                        <br />
                            <div onClick = { () => this.props.history.push('/signup') }>
                                <label className="forgot_password">Don't have an account ?</label>
                            </div>
                            <br />
                            <RaisedButton
                                label=""
                                primary={true}
                                fullWidth={true}
                                className="formDiv_button"
                                onClick={this.onSubmit}
                            >
                                {loading ? <CircularProgress size = {20} /> : <label className="formDiv_button">Login</label>}
                            </RaisedButton>

                        </div>
                    </MuiThemeProvider>
                </div>
            </div>

        )
    }
}
const mapStateToProps = state => {    
    let data = state.loginReducer
    return {
      loading: data.loading,
      status: data.status,
      error: data.error,
      loginData: data.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

