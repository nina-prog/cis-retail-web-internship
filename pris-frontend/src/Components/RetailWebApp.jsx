import React, {Component } from 'react'
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent'
import ProductComponent from './ProductComponent'
import EditProductComponent from './EditProductComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'
import WishListComponent from './WishListComponent.jsx'
import AdminComponent from './AdminComponent.jsx'
import StoreSettingComponent from './StoreSettingComponent.jsx'
import StoreEditComponent from './StoreEditComponent.jsx'
import StoreInfoComponent from './StoreInfoComponent.jsx'
import ViewBlockComponent from './ViewBlocksComponent.jsx'
import ContactAdmin from './ContactAdmin.jsx'
import CategoryComponent from './CategoryComponent.jsx'
import SearchComponent from './SearchComponent.jsx'


class RetailWebApp extends Component {
    render (){
        return(
            <div className="RetailWebApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={ViewBlockComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/wishlist" component={WishListComponent}/>
                        <Route path="/product/:id" exact component={ProductComponent}/>
                        <Route path="/store/:id" exact component={StoreInfoComponent}/>
                        <Route path="/search" component={SearchComponent}/>
                        <Route path="/contactadmin" exact component={ContactAdmin}/>
                        <AuthenticatedRoute path="/admin" exact component={AdminComponent}/>
                        <AuthenticatedRoute path="/category" exact component={CategoryComponent}/>
                        <AuthenticatedRoute path="/product/edit/:id" component={EditProductComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/store/edit/:id" component={StoreEditComponent}/>
                        <AuthenticatedRoute path="/store/settings/:id" component={StoreSettingComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                
            </div>
        );
    }
}

export default RetailWebApp;