import React from 'react'
import { Container, Col, Row } from "reactstrap"
import ContactInfo from './ContactInfo'
import ShippingMethod from './ShippingMethod'
import Payment from './Payment';
import Billing from './Billing';

import Cart from './cart'
import InfoReel from './InfoReel';

function Checkout() {
	
return (
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
                        <InfoReel />
                    </Col>
                </Row>
            </Container>
		);
	}


export default Checkout;

	

	

	

	

	

	

	

	

	

	

	

	

	

	

		

}

export default CheckoutForm;

    



		
