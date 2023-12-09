import "./hero.css";
import React from 'react';
import googleIcon from "../../assets/google.svg"


const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="left">
                    <svg viewBox="0 0 24 24" fill="rgb(231, 233, 234)" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </div>
                <div className="right">
                    <div className="xIcon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-k200y r-1nao33i r-5sfk15 r-kzbkwu"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                    </div>
                    <h1>Happening Now</h1>
                    <p>Join today.</p>
                    <div className="buttons">
                        <div className="button-login sign-up__google">
                            <img src={googleIcon} alt="google" />
                            <span>
                                Sign up with Google
                            </span>
                        </div>
                        <div className="button-login sign-up__apple">
                            <svg viewBox="0 0 24 24" ><g><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path></g></svg>
                            <span>
                                Sign up with Apple
                            </span>
                        </div>
                        <div className="line"></div>
                        <button className="create-account">
                            Create account
                        </button>
                        <div className="warning">
                            By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including <span>Cookie Use.</span>
                        </div>
                        <div className="sign-in">
                            <span>Already have an account?</span>
                            <button>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero