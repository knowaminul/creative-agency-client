import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Login.css';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <section className="login-block"  style={{ backgroundColor: '#F4FCF7' }}>
        <div className="container-fluid">
            <div className="text-center py-5">
              <img onClick={event =>  window.location.href='/home'} style={{ height: '47px', width: '150px', cursor: 'pointer' }} src={logo} alt=""/>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="auth-box card mb-5 py-5">
                        <div className="card-block">
                            <h4 style={{ fontSize: '24px' }} className="text-center pb-2" >Login With</h4>
                            <div className="row">
                                <div className="col-md-12"> <a className="btn btn-lg btn-google btn-block text-uppercase btn-outline" style={{ borderRadius: '10px', minWidth: '100%', border: '1px solid gray' }} onClick={handleGoogleSignIn}><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="/"/> Continue with Google</a> </div>
                            </div> <br/>
                            <p className="text-center">Don’t have an account? <a href="/login" data-abc="true">Create an account</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Login;