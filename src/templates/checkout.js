import React,{useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useHistory } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { Container, Col, Row } from "reactstrap";
import ContactInfo from './form_components/ContactInfo';
import ShippingMethod from './form_components/ShippingMethod';
import Payment from './form_components/Payment';
import Billing from './form_components/Billing';
import Cart from './cart';

 export default function Checkout() {  
const { isAuthenticated } = useAuth0();
    const history = useHistory()

    useEffect(() => {
        if(!isAuthenticated) history.push('/')
    }, [isAuthenticated, history]);

	constructor(props) {
        super(props);
        
        this.state = {
            data : ""
		};
    
    }

    formChild1(params) {
        this.setState({
          data : params
        })
      }

if(isAuthenticated) {
render() {
        return (
            <Breadcrumbs>
                <Link to="/">Home</Link>
                Checkout
            </Breadcrumbs>
            <Container>
                <Row>
                    <Col className="left-col-container" md="6">
                        <ContactInfo />
                        <ShippingMethod callback={this.formChild1.bind(this)} />
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
}
export default Checkout;
