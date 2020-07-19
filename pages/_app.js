import React from "react";
// import { AuthProvider } from "../utils/auth";
// import App from 'next/app';
// import cookie from "cookie";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.css';
import "semantic-ui-css/semantic.min.css";

// class TodoListApp extends App {
//     render() {
//         const { Component, pageProps, authenticated } = this.props;
//         return (
//         <AuthProvider authenticated={authenticated}>
//             <Component {...pageProps} />
//         </AuthProvider>
//         );
//     }
// }

// TodoListApp.getInitialProps = async (appContext) => {
//     let authenticated = false;
//     const request = appContext.ctx.req;
//     if (request) {
//         request.cookies = cookie.parse(request.headers.cookie || '');
//         authenticated = !!request.cookies.session;
//     }
//     // Call the page's `getInitialProps` and fill `appProps.pageProps`
//     const appProps = await App.getInitialProps(appContext);

//     return { ...appProps, authenticated };
// };
  
// export default TodoListApp;


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp;