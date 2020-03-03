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

    render() {
        return (
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    <h2>Welcome to AvailableSurface!</h2>
                    <div className="divider" />
                    <br />
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
                        <button>Sign In</button>
                        <br />
                        Don't want to complete the form?
                        <button>Demo Account</button>
                        Already have an account? <p onClick={this.props.otherForm}>Sign in</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;