import React, {Component,useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link, useHistory } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import CheckoutForm from './CheckoutForm'
import { Container, Col, Row } from "reactstrap"
import ContactInfo from './ContactInfo'
import ShippingMethod from './ShippingMethod'
import Payment from './Payment';
import Billing from './Billing';
import Cart from './cart'	
export default function Checkout() {
    const { isAuthenticated } = useAuth0();
    const history = useHistory()

    useEffect(() => {
        if(!isAuthenticated) history.push('/')
    }, [isAuthenticated, history]);

    if(isAuthenticated) {
        return (
            <Breadcrumbs>
                <Link to="/">Home</Link>
                Checkout
            </Breadcrumbs>
<Container>
                <Row>
                    <Col className="left-col-container" md="6">
                        <ContactInfo />
                        <ShippingMethod />
                        <Payment />
                        <Billing />
                    </Col>
                    <Col className="right-col-container pb-4" md="6">
                        <Cart />
                    </Col>
                </Row>
            </Container>
		);
	}

    }


   
  


