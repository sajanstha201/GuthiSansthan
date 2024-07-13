import React from 'react';
import bgImage from '../../media/LoginSignin/rectangle.png'
import nepalLandmark from '../../media/LoginSignin/nepalLandmark.png'

export const Login = () => {
    return (
        <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${bgImage})`, backgroundAttachment: 'fixed' }}
        >
            <div className="container flex justify-center items-center h-full">
                <div className="row">
                    <div className="col-12 mb-[120px]">
                        <div className="relative">
                            <img
                                src={nepalLandmark}
                                className="img-fluid rounded float-start absolute w-[440px] h-auto"
                                alt="..."
                            />
                        </div>
                        <div className="ml-[140px]">
                            <h1 className="text-white font-bold ml-[280px]">Welcome Back !</h1>
                        </div>
                        <div className="bg-white flex flex-col justify-center rounded-3 w-[600px] ml-[300px] h-[300px]">
                            <div className="mb-5 ml-[180px] bod">
                                <label>Name</label>
                                <br />
                                <input type="text" className="rounded-3 w-[300px] h-[40px] border border-black" />
                                <br />
                                <br />
                                <label>Password</label>
                                <br />
                                <input type="password" className="rounded-3 w-[300px] h-[40px] border border-black" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end absolute" style={{ marginTop: '330px' }}>
                        <button
                            className="rounded-pill absolute font-bold text-white"
                            style={{
                                width: '120px',
                                height: '45px',
                                backgroundColor: 'rgb(59, 34, 181)',
                                marginRight: '120px',
                            }}
                        >
                            <h5>Log In</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
