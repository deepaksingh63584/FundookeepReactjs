import React, { Component } from 'react';
import firebase from '../firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import '../Css Files/logInPage.css';

class ForgatePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailid: "",
            errors: {},
        };
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    forgatePassword = () => {
        let errors = {};
        firebase.auth().sendPasswordResetEmail(this.state.emailid).then(() => {
            alert("Congratulation ! \n Your password has reset and new password send to the your Email-id");
            this.props.history.push('/')
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Error code : ' + errorCode);
            console.log('Error Msg : ' + errorMessage);
            alert(error.code)
            errors["emailid"] = errorMessage;
            this.setState({
                errors: errors
            });
        });
    }

    validateEmail = () => {
        let errors = {};
        var validform = true;

        if (!this.state.emailid) {
            validform = false;
            errors["emailid"] = "please Enter your Email:"
        }

        if (typeof this.state.emailid !== "undefined") {
            //regex used for email validation
            var pattern = new RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
            if (!pattern.test(this.state.emailid)) {
                validform = false;
                errors["emailid"] = "please Enter a valid email:";
            }
        }
        this.setState({
            errors: errors
        });
        return validform;
    }

    submitForm(event) {
        event.preventDefault();
        if (this.validateEmail()) {
            this.setState({
                [event.target.name]: event.target.value,
                [event.target.formvalid]: !event.target.formvalid
            })
        }
    }

    render() {
        return (
            <div className="fullView">
                <div className="initialView">
                    <Container maxWidth="sm">
                        <div className="containerView">
                            <div className="tilteView">
                                <form style={{ color: '#4285F4' }}>F</form>
                                <form style={{ color: '#DB4437' }}>u</form>
                                <form style={{ color: '#F4B400' }}>n</form>
                                <form style={{ color: '#4285F4' }}>d</form>
                                <form style={{ color: '#0F9D58' }}>o</form>
                                <form style={{ color: '#DB4437' }}>o</form>
                            </div>
                            <div className="subtilteView">
                                <text>Find your email</text>
                            </div>
                            <div className="recovery">
                                <text>Enter your phone number or recovery email</text>
                            </div>
                            <div className="emailId">
                                <TextField
                                    id="outlined-basic"
                                    margin="dense"
                                    label="Enter email"
                                    variant="outlined"
                                    value={this.state.emailid}
                                    onChange={this.handleChange}
                                    name="emailid"
                                    error={this.state.errors.emailid}
                                    helperText={this.state.errors.emailid}
                                    fullWidth={true}
                                />
                            </div>
                            <div className="nextRef" >
                                <Button margin="dense" variant="contained" color="primary"
                                    onClick={this.forgatePassword}
                                >
                                    Next
                                </Button>
                                <p></p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}
export default ForgatePassword;