import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitDemo = this.submitDemo.bind(this);
    };

    update(field) {
        return e => (this.setState({
            [field]: e.target.value,
        }));
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        .then(this.props.closeModal);
    }

    submitDemo(e) {
        e.preventDefault();
        const user = { email: 'demo@gmail.com', password: 'password' }
        this.props.login(user)
        .then(this.props.closeModal);
    }

    render() {
        const errors = this.props.errors.map(error => (
            <div>{error}</div>
        ));

        return (
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    <h2>Welcome to AvailableSurface!</h2>
                    <div className="divider" />
                    <br />
                    {errors}
                    <div className="session-form">
                        <br />
                        <input
                            type="text"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                            placeholder='First Name'
                        />
                        <br />
                        <input
                            type="text"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                            placeholder="Last Name"
                            />
                        <br />
                        <input
                            type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            />
                        <br />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            />
                        <br />
                        <button className="form-submit">Sign Up</button>
                    </div>
                </form>
                <br />
                <div className="session-options">
                    <p>Don't want to complete the form?</p>
                    <button className="demo-button" onClick={this.submitDemo}>Demo Account</button>
                    <p>Already have an account? <span className="other-form-link" onClick={this.props.otherForm}>Sign In</span></p>
                </div>
            </div>
        )
    }
}

export default SignupForm;