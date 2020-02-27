import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../Css Files/signUpPage.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import sighUpLogo from './image/account.svg';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import firebase from '../firebase';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            emailid: '',
            passworditem: '',
            confirmpass: '',
            showpassword: 'false',
            errors: {},
        };
        this.newUser = this.newUser.bind(this);
    }
    render() {
        return (

            <div className="signupfullView">
                <div className="signupInitialview">
                    <Container maxWidth="lg">
                        <div className="headerview">
                            <form style={{ color: '#4285F4' }}>F</form>
                            <form style={{ color: '#DB4437' }}>u</form>
                            <form style={{ color: '#F4B400' }}>n</form>
                            <form style={{ color: '#4285F4' }}>d</form>
                            <form style={{ color: '#0F9D58' }}>o</form>
                            <form style={{ color: '#DB4437' }}>o</form>
                        </div>
                        <div className="headerviewAccount">
                            <form>Create Your Fundoo Account</form>
                        </div>
                        <div className="textimageview">
                            <div className="textview">
                                <div className="fname">
                                    <TextField id="outlined-basic"
                                        margin="dense"
                                        style={{ margin: 8 }}
                                        label="First Name"
                                        variant="outlined"
                                        value={this.state.firstname}
                                        onChange={this.handleChange}
                                        name="firstname"
                                        error={this.state.errors.firstname}
                                        helperText={this.state.errors.firstname} />
                                    <TextField id="outlined-basic"
                                        margin="dense"
                                        style={{ margin: 8 }}
                                        label="Last Name"
                                        variant="outlined"
                                        value={this.state.lastname}
                                        onChange={this.handleChange}
                                        name="lastname"
                                        error={this.state.errors.lastname}
                                        helperText={this.state.errors.lastname}
                                    />
                                </div>
                                <div>
                                    <p>  </p>
                                </div>

                                <div className="email">
                                    <TextField id="outlined-basic"
                                        margin="dense"
                                        style={{ margin: 8 }}
                                        label="Username"
                                        variant="outlined"
                                        value={this.state.emailid}
                                        onChange={this.handleChange}
                                        name="emailid"
                                        error={this.state.errors.emailid}
                                        helperText={this.state.errors.emailid} />
                                    <div className="emailPara">
                                        <p margin="dense">You can use letters, numbers & periods</p>
                                    </div>
                                </div>

                                <div className="password">
                                    <TextField id="outlined-basic"
                                        margin="dense"
                                        style={{ margin: 6 }}
                                        label="Password"
                                        variant="outlined"
                                        value={this.state.passworditem}
                                        onChange={this.handleChange}
                                        name="passworditem"
                                        type={!this.state.showpassword ? "text" : "password"}
                                        error={this.state.errors.password}
                                        helperText={this.state.errors.password} />
                                    <TextField id="outlined-basic"
                                        margin="dense"
                                        style={{ margin: 6 }}
                                        label="Confirm"
                                        variant="outlined"
                                        value={this.state.confirmpass}
                                        onChange={this.handleChange}
                                        name="confirmpass"
                                        type={!this.state.showpassword ? "text" : "password"}
                                        error={this.state.errors.confirmpassword}
                                        helperText={this.state.errors.confirmpassword} />
                                    <IconButton
                                        onClick={this.handleChangeShowPassword}
                                        onMouseDown={this.handleMouseDownPassword}>
                                        {this.state.showpassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </div>
                                <div className="passwordpara">
                                    <p margin="dense"> Use 6 or more characters with a mix of letters, numbers & symbols</p>
                                </div>

                                <div className="buttonlink">
                                    <Button
                                        margin="dense"
                                        onClick={() => {
                                            this.props.history.push('/')
                                        }}
                                    >Sign in instead
                                    </Button>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={this.register}>
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <p></p>
                    </Container>
                    <div className="imageview">
                        <Container className="image">
                            <img src={sighUpLogo} alt="hb"
                                fullWidth={true} />
                            <div>
                                <p style={{ textAlign: 'center' }}>
                                    One account. All of Google working for you.
                                </p>
                            </div>
                        </Container>
                    </div>
                </div >
            </div >
        );
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChangeShowPassword = () => {
        this.setState({
            showpassword: !this.state.showpassword
        })
    }

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    validation = () => {

        let errors = {};
        var validform = true;

        if (!this.state.firstname) {
            validform = false;
            errors["firstname"] = "Please enter your First Name.";
        }

        if (!this.state.lastname) {
            validform = false;
            errors["lastname"] = "Please enter your Last Name.";
        }

        if (!this.state.emailid) {
            validform = false;
            errors["emailid"] = "Please enter your emailID.";
        }

        if (typeof this.state.emailid !== "undefined") {
            //regex used for email validation
            var pattern = new RegExp(/^[a-zA-Z0-9-.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
            if (!pattern.test(this.state.emailid)) {
                validform = false;
                errors["emailid"] = "Please enter valid email in formate of number letter and specail charecter";
            }
        }

        if (!this.state.passworditem) {
            validform = false;
            errors["password"] = "Please enter your password.";
        }

        if (typeof this.state.passworditem !== "undefined") {
            if (!this.state.passworditem.match(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                validform = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        if (!this.state.confirmpass) {
            validform = false;
            errors["confirmpassword"] = "*Please confirm your password.";
        }

        if (typeof this.state.confirmpass !== "undefined") {
            if (this.state.confirmpass !== this.state.passworditem) {
                validform = false;
                errors["confirmpassword"] = "*Password does not match.";
            }
        }

        this.setState({
            errors: errors
        });
        //console.log("hfskjidghfdosigfhdfj");

        return validform;
    }

    register = (event) => {
        //console.log('resi1');

        event.preventDefault();
        if (this.validation()) {
            this.setState({
                [event.target.name]: event.target.value,
                [event.target.formvalid]: !event.target.formvalid
            })
            //console.log('caling user data');
            this.newUser();
        }
    }

    newUser() {
        //console.log("writedata1");

        firebase.auth().createUserWithEmailAndPassword(this.state.emailid, this.state.passworditem).then((success) => {
            firebase.database().ref('/users/' + success.user.uid + '/personalData/').set({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                emailid: this.state.emailid
            })
            this.props.history.push('/');
            //console.log("writedata2");

        })
            .catch((error) => {
                // Handle Errors here.
                console.log('Error code : ' + error.code);
                console.log('Error Msg : ' + error.message);
                // ...
            });
    }
}
export default Signup;