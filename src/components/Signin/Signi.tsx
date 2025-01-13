import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signin.css';
import { useNavigate } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';
import {Input, Form, Button} from 'antd'
import { authorizeUserQuery, registerUserQuery } from '../../services/userQueries';

const TabbedSearchForm = () => {
    const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
    const navigate = useNavigate()

    // Handles tab switching
    const handleTabSwitch = (tab: 'signin' | 'signup') => {
        setActiveTab(tab);
    };



    const [signInFormRef] = Form.useForm();
    // Handles sign in
    const handleSignUp = async (values: Object) => {
        const response = await registerUserQuery(values)
        if(response.status === 201) {
            // User created successfully put user created successfully message
            toast.success('User created successfully.')
        } else {
            // Error creating user, show error message
            toast.error('Something went wrong, please try again.')
        }
    }


    // Handles sign in
    const [signInForm] = Form.useForm()
    const authorizeUser = async (values: object) => {
        console.log(values)
        const response = await authorizeUserQuery(values)
        console.log(response)
        if(response.status === 200 && response.data.proceed) {
            // User authorized 
            // Redirect to dashboard
            navigate('/dashboard')
        } else {

        }
    }

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
                    <div className="row col-md-12 g-3 align-items-end bg-white">
                    <Form
                        form={signInForm}
                        layout="vertical"
                        onFinish={authorizeUser}
                        className="col-md-12"
                    >
                        <Form.Item
                            label={<span className="fw-bold">User Name</span>}
                            name="username"
                            rules={[
                                { required: true, message: 'Please input your username!' }
                            ]}
                        >
                            <Input placeholder="testuser@gmail.com" />
                        </Form.Item>
        
                        <Form.Item
                            label={<span className="fw-bold">Password</span>}
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="password" />
                        </Form.Item>
        
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-100" danger>
                                Sign In
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                )}
                {activeTab === 'signup' && (
                    <Form
                    layout="vertical"
                    form={signInFormRef}
                    onFinish={handleSignUp}
                    className="row col-md-12 g-3 align-items-end bg-white"
                >
                    <Form.Item
                        label="Full Name"
                        name="name"
                        rules={[
                            { required: true, message: 'Please enter your full name' },
                        ]}
                        className="col-md-12"
                    >
                        <Input placeholder="Mahindha Rajapaksha" />
                    </Form.Item>
        
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' },
                        ]}
                        className="col-md-12"
                    >
                        <Input placeholder="mahindha@gmail.com" />
                    </Form.Item>
        
                    <Form.Item
                        label="User Name"
                        name="username"
                        rules={[
                            { required: true, message: 'Please enter your username' },
                        ]}
                        className="col-md-12"
                    >
                        <Input placeholder="mahindharajapaksha" />
                    </Form.Item>
        
                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[
                            { required: true, message: 'Please enter your phone number' },
                            {
                                message: 'Please enter a valid phone number',
                            },
                        ]}
                        className="col-md-12"
                    >
                        <Input placeholder="0712918247" />
                    </Form.Item>
        
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: 'Please enter your password' },
                            { min: 6, message: 'Password must be at least 6 characters' },
                        ]}
                        className="col-md-12"
                    >
                        <Input.Password placeholder="password" />
                    </Form.Item>
        
                    <Form.Item
                        label="Confirm Password"
                        name="confirmpassword"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Please confirm your password' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error('Passwords do not match')
                                    );
                                },
                            }),
                        ]}
                        className="col-md-12"
                    >
                        <Input.Password placeholder="confirmpassword" />
                    </Form.Item>
        
                    <Form.Item className="col-md-12 pt-3">
                        <Button type="primary" htmlType="submit" className="w-100">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
                )}
            </div>
        </div>
        
        </>
    );
};

export default TabbedSearchForm;
