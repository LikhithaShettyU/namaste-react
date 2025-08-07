import React from "react";
import ReactDOM from "react-dom/client";




const title = (
    
    <h1 className="heading" tabIndex="5">
        Namaste React using jsx
    </h1>
);

const number = 10000;

const HeadingComponent = () => (  
    <div id="container">
        {number}
    
        <h1>Namaste React Functional Component</h1>
    </div>
);





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


