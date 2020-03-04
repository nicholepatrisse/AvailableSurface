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
        return(
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    <h2>Please sign in</h2>
                    <div className="divider" />
                    <br/>
                    {this.props.errors}
                    <div className="session-form">
                        <br/>
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder='Email'
                        />
                        <br/>
                       <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br/>
                        <button>Sign In</button>
                    </div>
                </form>
                <br/>
                Don't want to complete the form?
                <button className="demo-button" onClick={this.submitDemo}>Demo Account</button>
                New to AvailableSurface? <p onClick={this.props.otherForm}>Create an account</p>
            </div>
        )
    }
}

export default LoginForm;