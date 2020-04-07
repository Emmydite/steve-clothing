import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import  Homepage  from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
//import {auth, createUserProfileDocument} from './firebase/firebase.utils';
//import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser } from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';
import './App.css';
//import {selectCollectionsForPreview} from './redux/shop/shop.selectors';

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

    return (
      <div>
        <Header/>
         <Switch>
           <Route exact path='/' component={Homepage}/>
           <Route  path='/shop' component={ShopPage}/>
           <Route exact path='/checkout' component={CheckoutPage}/>
           <Route 
           exact 
           path='/signin' 
           render={()=> 
            currentUser ? (<Redirect to='/' />) 
            : (<SignInAndSignUpPage />)}/>
        </Switch>
      </div>
    );
  }



const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  //setCurrentUser : user => dispatch(setCurrentUser(user))
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps 
  )(App);
