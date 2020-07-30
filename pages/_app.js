import * as React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "semantic-ui-css/semantic.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
