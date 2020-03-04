import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        let user = Object.assign({}, this.state);
        this.props.processForm(user)
        .then(this.props.closeModal);
    }

    submitDemo(e) {
        e.preventDefault()
        let user = { email: 'demo@gmail.com', password: 'password' }
        this.props.processForm(user)
        .then(this.props.closeModal);
    }

    render() {
        const errors = this.props.errors.map(error => (
            <div>{error}</div>
        ));

        return(
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    <h2>Please sign in</h2>
                    <div className="divider" />
                    <br/>
                    {errors}
                    <div className="session-form">
                        <br/>
                        <input 
                            type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder='Email'
                            required type='email'
                        />
                        <br/>
                       <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            required
                        />
                        <br/>
                        <button className="form-submit">Sign In</button>
                    </div>
                </form>
                <br/>
                <div className="session-options">
                    <p>Don't want to complete the form?</p>
                    <button className="demo-button" onClick={this.submitDemo}>Demo Account</button>
                    <p>New to AvailableSurface? <span className="other-form-link" onClick={this.props.otherForm}>Create an account</span></p>
                </div>
            </div>
        )
    }
}

export default LoginForm;