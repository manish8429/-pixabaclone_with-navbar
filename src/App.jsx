import React, { Suspense } from "react";
// import Image from "";
import NavBar from "./HomePage/NavBar";
import Footer from "./HomePage/Footer";

const Lazyload = React.lazy(() => import('./HomePage/Image'))



function App() {


  return (
    <>
      <div>
        <NavBar/>
        <Suspense fallback ={ <div>
          /* From Uiverse.io by jeremyssocial */ 
<div className="terminal-loader">
  <div className="terminal-header">
    <div className="terminal-title">Status</div>
    <div className="terminal-controls">
      <div className="control close"></div>
      <div className="control minimize"></div>
      <div className="control maximize"></div>
    </div>
  </div>
  <div className="text">Loading...</div>
</div>

        </div> }>
        <Lazyload/>
        </Suspense>
        <Footer/>
      </div>
    </>
  );
}

export default App;
