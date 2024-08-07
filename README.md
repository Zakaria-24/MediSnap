# MediSnap

## Live Site: https://medi-snap-f3dd2.web.app

## MediSnap Server site: https://github.com/Zakaria-24/MediSnap-Server

## ![image](https://github.com/Zakaria-24/MediSnap/assets/155288423/2a4ca7f9-ed67-451b-a408-0872c995a05b)Concept/Overview
MediSnap is a multi-vendor e-commerce platform specializing in the sale of medicines and healthcare products. The platform is built using the MERN stack and aims to provide a seamless user experience for purchasing medications, submitting queries, and receiving expert advice.

## Project Setup:
- First of all install all the dependencies in package.json file.
- create a .env.local file in the root directory.
  * in this file you have to create firebase auth variable
  * create a VITE_API_URL= "your localhost port link"
  * ccreate VITE_IMGBB_API_KEY= "for upload a image in firebase(IMGBB site)
  * create VITE_STRIPE_PUBLISHABLE_KEY= "for stripe payment(Stripe)
- and In the server site :
   * build a connection on mongodb and set your unique DB_USER and DB_PASS code,
   * create  ACCESS_TOKEN_SECRET= "to get token",
   * create STRIPE_SECRET_KEY= "to get payment secret key"

## Admin Credentials
- **Admin email**: user@gmail.com
- **Admin Password**: 123lkj

## Seller Credentials
- **seller Username**: user2@gmail.com
- **seller Password**: 123lkj


## 🌟 Features & Highlights:
- Users can payment selected medicines using the stripe payment system and download the invoice as pdf.
- Implement a dynamic dashboard for admin, sellers and users . Admin has to control and manage this website, seller can add medicine and ask to admin to advertisement for his medicines.
- Implement pagination, sort by price, and search functionality for any information.

## 🔧 Key Technologies Used:
- **MongoDB**: Database
- **Express.js**: Backend framework
- **React.js**: Frontend library
- **Node.js**: Runtime environment
- **Firebase**: For social login authentication
- **Stripe**: For payment processing
- **Tanstack Query**: For data fetching
