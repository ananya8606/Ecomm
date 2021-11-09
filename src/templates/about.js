import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { Link } from 'react-router-dom'

const About = () => (
    <>
        <Breadcrumbs>
            <Link to="/">Home</Link>
            About
        </Breadcrumbs>
        <section id="about" className="py-16">
            <div className="tw-container grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16">
                <img
                    style={{height: '450px'}}
                    alt="bambooproducts"
                    className="object-cover rounded w-full bg-gray-100"
                    src='https://sendeyo.com/updownload/file/script/44ec04697f69748a39dc502498c9f046.webp'
                />
                <article>
                    <div>
                        <h2 className="font-bold">Our Story</h2>
                        <div className="w-24 h-1 mt-3 bg-blue-600"/>
                    </div>
                    <p className="mt-5 text-sm md:text-base lg:text-lg leading-loose">
                         Bundu (Jharkhand),a socially underdeveloped region, is predominantly inhabited by Scheduled Tribes (60%) and Scheduled caste (7%).
                         Significant number of families in Bundu are artisan.  They are engaged in traditional value addition of bamboo and make engage make tokri, sup, daliya, tapa, kumni.  Initial surveys reveals that these products have been manufactured by them for generations and have not changed with respect to product design and offerings.This Ecommerce-portal is made to help those artisans to sell their handmade quality bamboo products to different states of India. 
                    </p>
                </article>
            </div>
        </section>
    </>
)

export default About
