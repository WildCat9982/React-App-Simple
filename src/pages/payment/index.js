import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Redirect, useRouteMatch } from "react-router";

import PaymentList from './PaymentList'
import PaymentCreate from './PaymentCreate'
import PaymentDelete from './PaymentDelete'
import PaymentEdit from "./PaymentEdit";

export const Payment = ({match}) => {
    return (
        <>
        <div>
            <h2>Payment</h2>
        </div>
        <ul>
            <li>
                <Link to={`${match.url}/add`}>Add</Link>
            </li>
            <li>
                <Link to={`${match.url}/edit/1`}>Edit 1</Link>
            </li>
            <li>
                <Link to={`${match.url}/delete/1`}>Delete 1</Link>
            </li>
        </ul>
        
        <Switch>
            <Route exact path={`${match.path}/`} component={PaymentList} />
            <Route exact path={`${match.path}/add`} component={PaymentCreate}/>
            <Route exact path={`${match.path}/edit/:id`} component={PaymentEdit} />
            <Route exact path={`${match.path}/delete/:id`} component={PaymentDelete} />
            <Redirect from="*" to="/404" />
        </Switch>

        </>
    )
}


export default Payment;