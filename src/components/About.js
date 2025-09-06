import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props) {
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent component did mount");
    }

    render() {
        console.log("Parent render");

        return (
        <div>
            <h1>About Class component</h1>
            <h2>This is namaste web series</h2>
            

            <UserClass name={"First (class)"} location={"Bangalore (class)"} />
            
        </div>
        );
    }
}

/*
- Parent Constructor
- Parent render

    - First Constructor
    - First Render

    - Second Constructor
    - Second Render

    <DOM UPDATED - IN SIGLE BATCH>

    - First ComponentDidMount
    - Second ComponentDidMount

- Parent ComponentDidMount
*/



export default About;