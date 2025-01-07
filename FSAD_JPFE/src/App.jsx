import React, { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Select from 'react-select';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        showLogin: true,
        selectedSkill: null,
        selectedLocation: null,
        isPopupVisible: false 
    };

    skillOptions = [
        { value: 'react', label: 'React.js' },
        { value: 'node', label: 'Node.js' },
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'javascript', label: 'JavaScript' },
    ];

    locationOptions = [
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'hyderabad', label: 'Hyderabad' },
        { value: 'chennai', label: 'Chennai' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'delhi', label: 'Delhi' },
    ];

    customStyles = {
        control: (provided) => ({
            ...provided,
            border: 'none',
            boxShadow: 'none',
            backgroundColor: 'transparent'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#00796b' : state.isFocused ? '#e0f2f1' : 'white',
            color: state.isSelected ? 'white' : '#333'
        })
    };

    showSignin = () => {
        this.setState({ isPopupVisible: true });
    }

    closeSignin = (event) => {
        if (event.target.id === "popup") {
            this.setState({ isPopupVisible: false });
        }
    }

    toggleForm = () => {
        this.setState({ showLogin: !this.state.showLogin });
    }

    handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/raja-sai-nammalwar-kurapati-9001202a4', '_blank');
    }

    handleTwitterClick = () => {
        window.open('https://x.com/NammalwarSai', '_blank');
    }

    handleSkillChange = (selectedOption) => {
        this.setState({ selectedSkill: selectedOption });
    };

    handleLocationChange = (selectedOption) => {
        this.setState({ selectedLocation: selectedOption });
    };

    render() {
        return (
            <div id='container'>
                {this.state.isPopupVisible && (
                    <div 
                        id="popup" 
                        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{ 
                            backgroundColor: 'rgba(0,0,0,0.5)', 
                            zIndex: 1000 
                        }}
                        onClick={this.closeSignin}
                    >
                        <div 
                            className="card shadow"
                            style={{ width: '400px', maxWidth: '90%' }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="card-header bg-success text-white text-center py-3">
                                <h5 className="mb-0">{this.state.showLogin ? 'LOGIN TO YOUR ACCOUNT' : 'CREATE YOUR ACCOUNT WITH US'}</h5>
                            </div>
                            <div className="card-body p-4">
                                {this.state.showLogin ? (
                                    // Login Form
                                    <div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="loginUsername" placeholder="Username" />
                                            <label htmlFor="loginUsername">Username</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                                            <label htmlFor="loginPassword">Password</label>
                                        </div>
                                        <div className="d-flex justify-content-end mb-3">
                                            <a href="#" className="text-success">Forgot Password?</a>
                                        </div>
                                        <button className="btn btn-success w-100 mb-3">Sign In</button>
                                        <div className="text-center">
                                            <p className="mb-0">
                                                Don't have an account? {' '}
                                                <button 
                                                    className="btn btn-link text-success p-0"
                                                    onClick={this.toggleForm}
                                                >
                                                    Sign Up
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    // Sign Up Form
                                    <div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="signupUsername" placeholder="Username" />
                                            <label htmlFor="signupUsername">Username</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="signupEmail" placeholder="Email" />
                                            <label htmlFor="signupEmail">Email</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="signupPassword" placeholder="Password" />
                                            <label htmlFor="signupPassword">Password</label>
                                        </div>
                                        <button className="btn btn-success w-100 mb-3">Create Account</button>
                                        <div className="text-center">
                                            <p className="mb-0">
                                                Already have an account? {' '}
                                                <button 
                                                    className="btn btn-link text-success p-0"
                                                    onClick={this.toggleForm}
                                                >
                                                    Sign In
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <motion.div 
                    id='header'
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <motion.img 
                        className='logo' 
                        src='/logo.png' 
                        alt='' 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                        className='logoText'
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span>Job</span> Portal
                    </motion.div>
                    <img className='signinIcon' src='/user.png' alt='' onClick={this.showSignin} />
                    <label className='signinText' onClick={this.showSignin}>Sign In</label>
                </motion.div>

                <div id='content'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div 
                            className='text1'
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            INDIA'S #1 JOB PLATFORM
                        </motion.div>
                        <div className='text2'>Your Job search ends here</div>
                        <div className='text3'>Discover career opportunities</div>
                    </motion.div>
                    
                    <motion.div 
                        className='search-container'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        whileHover={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                        style={{ display: 'flex', alignItems: 'center', maxWidth: '800px', margin: '0 auto', padding: '20px', borderRadius: '10px' }}
                    >
                        <Select
                            className='select-skill'
                            value={this.state.selectedSkill}
                            onChange={this.handleSkillChange}
                            options={this.skillOptions}
                            placeholder="Search by skills..."
                            isSearchable={true}
                            styles={this.customStyles}
                        />
                        <Select
                            className='select-location'
                            value={this.state.selectedLocation}
                            onChange={this.handleLocationChange}
                            options={this.locationOptions}
                            placeholder="Select location..."
                            isSearchable={true}
                            styles={this.customStyles}
                        />
                        <motion.button 
                            className='btn btn-success search-btn'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            style={{ whiteSpace: 'nowrap', marginLeft: '10px' }}
                        >
                            Search Jobs
                        </motion.button>
                    </motion.div>
                </div>
                <motion.div 
                    id='footer'
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <label className='copyrightText'>Copyright © 2024. All rights reserved.</label>
                    <motion.img 
                        className='socialmediaIcon' 
                        src='/linkedin.png' 
                        alt='LinkedIn' 
                        onClick={this.handleLinkedInClick}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                    <motion.img 
                        className='socialmediaIcon' 
                        src='/twitter.png' 
                        alt='Twitter' 
                        onClick={this.handleTwitterClick}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </motion.div>
            </div>
        );
    }
}

export default App;