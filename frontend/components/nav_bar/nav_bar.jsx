import React from 'react';

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

    personalGreeting() {
        return (
            <nav className="nav-greeting">
                <h2>Hi, {this.props.currentUser}!</h2>
            </nav>
        );
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="logo-box">
                    <img src=""></img>
                    AvailableSurface
                </div>

                {this.props.currentUser ? 
                this.personalGreeting() : 
                this.sessionLinks()}
            </div>
        )
    };
}

// const NavBar = ({ userId, logout, openModal, users }) => {
//     let currentUser;
//     if (userId) currentUser = users[userId];

//     const sessionLinks = () => (
//         <nav className="login-signup">
//             <button onClick={() => openModal('signup')}>Sign Up</button>
//             <button onClick={() => openModal('login')}>Sign In</button>
//         </nav>
//     );

//     const personalGreeting = () => (
//         <nav>
//             <h2>Hi, {currentUser}!</h2>
//         </nav>
//     )

//     return (
//         <div>
//             Logo

//             {currentUser ? 
//             personalGreeting(currentUser, logout) : 
//             sessionLinks()}
//         </div>
//     )
// };

export default NavBar;