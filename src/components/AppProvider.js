import React from 'react'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import {StoreProvider} from '../context'
import Navbar from './Navbar'

const Footer = () => (
    <footer className="bg-gray-800">
        <div className="tw-container text-center py-6 text-sm md:text-base text-white tracking-widest">© 2021 Ecomm</div>
    </footer>
)

function Content({children}) {
    const { isLoading, error } = useAuth0()

    if(isLoading) return null;
    if(error) return 'error...';

    return(
        <>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default function AppProvider(props){

    return(
        <Auth0Provider
         domain="dev-as-8ebns.us.auth0.com"
         clientId="p8BTI0Yy9WjAiL4xIau26IpgZTP0jIYt"
         redirectUri={window.location.origin}
        >
            <StoreProvider>
                <Content {...props}/>
            </StoreProvider>
        </Auth0Provider>
    );
}
