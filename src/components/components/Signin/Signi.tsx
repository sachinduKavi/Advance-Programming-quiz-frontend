import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signin.css';

const TabbedSearchForm = () => {
    const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');

    // Handles tab switching
    const handleTabSwitch = (tab: 'signin' | 'signup') => {
        setActiveTab(tab);
    };

    return (
        <>
        <div className="container mt-5 mb-5 search" id="background">
            {/* Tab Navigation */}
            <div className="d-flex align-items-center">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'signin' ? 'active' : ''}`}
                            onClick={() => handleTabSwitch('signin')}
                        >
                           SIGN IN
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'signup' ? 'active' : ''}`}
                            onClick={() => handleTabSwitch('signup')}
                        >
                            SIGN UP
                        </button>
                    </li>
                </ul>
            </div>

            {/* Tab Content */}
            <div className="tab-content p-4 border border-top-0 shadow-sm ">
                {activeTab === 'signin' && (
                    <form className="row col-md-12 g-3 align-items-end bg-white">
                        <div className="col-md-12">
                            <label htmlFor="username" className="form-label fw-bold ">
                               User Name
                            </label>
                            <input type="text" className="form-control" id="username" name="username" placeholder="testuser@gamil.com" />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="password" className="form-label fw-bold ">
                                Password
                            </label>
                            <input type="password" className="form-control" id="password" name="passowrd" placeholder="password"/>
                        </div>
                        
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-danger w-100">Sign In</button>
                        </div>
                    </form>
                )}
                {activeTab === 'signup' && (
                    <form className="row col-md-12 g-3 align-items-end bg-white">
                        <div className="col-md-12">
                            <label htmlFor="name" className="form-label fw-bold ">
                                Full Name
                            </label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Mahindha Rajapaksha" />
                        </div>
                        
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label fw-bold ">
                                Email
                            </label>
                            <input type="text" className="form-control" id="email" name="email" placeholder='mahindha@gmail.com'/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="username" className="form-label fw-bold ">
                               User Name
                            </label>
                            <input type="text" className="form-control" id="username" name="username" placeholder="mahindharajapaksha" />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="phone" className="form-label fw-bold ">
                               Phone Number
                            </label>
                            <input type="text" className="form-control" id="phone" name="phone" placeholder="0712918247" />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="password" className="form-label fw-bold ">
                               Password
                            </label>
                            <input type="password" className="form-control" id="password" name="password"  placeholder='password'/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="confirmpassword" className="form-label fw-bold ">
                            Confirm Password
                            </label>
                            <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" placeholder='confirmpassword' />
                        </div>
                       
                        <div className="col-md-12 pt-3">
                            <button type="submit" className="btn btn-danger w-100">Sign Up</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
        
        </>
    );
};

export default TabbedSearchForm;
