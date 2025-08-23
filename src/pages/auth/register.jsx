import React, { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const formData = {
        username: username,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        if (email.indexOf('@') === -1) {
            alert('Please enter a valid email');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        console.log(formData);
    }


    return (
        <div className='register_page'>
            <div className="sign_up">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">First Name</label>
                        <input type="text" id="username"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter your first name"
                            name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Last Name</label>
                        <input type="text" id="username"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter your last name"
                            name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input type="email" id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Password</label>
                        <input type="password" id="username"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Confirm Password</label>
                        <input type="password" id="username"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            name="username" />
                    </div>
                    <button type="submit" className='btn'>Register</button>
                </form>
            </div>

        </div>
    )
}

export default Register
