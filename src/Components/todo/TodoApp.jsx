import React, {Component } from 'react'
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent'
import ProductComponent from './ProductComponent'
import EditProductComponent from './EditProductComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'
import WishListComponent from './WishListComponent.jsx'
import AdminComponent from './AdminComponent.jsx'
import EditStoreInformation from './EditStoreInformation.jsx'
import StoreSignedInComponent from './StoreSignedInComponent.jsx'
import StoreSettingComponent from './StoreSettingComponent.jsx'
import ViewBlockComponent from './ViewBlocksComponent.jsx'


class TodoApp extends Component {
    render (){
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={ViewBlockComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/wishlist" component={WishListComponent}/>
                        <Route path="/product/:id" exact component={ProductComponent}/>
                        <Route path="/admin" exact component={AdminComponent}/>
                        <AuthenticatedRoute path="/product/edit/:id" component={EditProductComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/store/:id" component={StoreSettingComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <AuthenticatedRoute path="/EditStoreInformation" component={EditStoreInformation}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                
            </div>
        );
    }
}

export default TodoApp;