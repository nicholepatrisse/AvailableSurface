import React from 'react';
import DropDown from './drop_down';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    sessionLinks() {
        return (
            <nav className="nav-links">
                <button className="signup-button" onClick={() => this.props.openModal('signup')}>Sign Up</button>
                <button className="login-button" onClick={() => this.props.openModal('login')}>Sign In</button>
            </nav>
        );
    }

    handleClick() {
        if (this.props.modal === 'dropDown') {
            document.addEventListener('click', this.props.closeModal)
        } else {
            document.removeEventListener('click', this.props.closeModal)
        }
    };

    personalGreeting() {
        return (
            <nav className="nav-greeting" onClick={() => this.props.openModal('dropDown')}>
                <h2 className="greeting">Hi, {this.props.currentUser}! ▼</h2>
                <DropDown />
            </nav>
        );
    }

    render() {
        return (
            <div className="nav-bar">
                {this.handleClick()}
                <div className="logo-box">
                    <img src={window.logo} className="nav-logo"/>
                    <div className="title">
                        AvailableSurface
                        <div className="sub-title">An OpenTable Clone</div>
                    </div>
                </div>

                {this.props.currentUser ? 
                this.personalGreeting() : 
                this.sessionLinks()}
            </div>
        )
    };
}

export default NavBar;