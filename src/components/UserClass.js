import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "http://dummy-photo.com"

            },
        };
        //console.log(" child Constuctor");
    }

    async componentDidMount() {
        //console.log("Child component did mount");

        const data = await fetch("https://api.github.com/users/LikhithaShettyU");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        //console.log(json);
    }

    componentDidUpdate() {
        //console.log("Component did update");
    }

    componentWillUnmount() {
        //console.log("component unmounted")
    }

    render() {

        const { name, location, avatar_url } = this.state.userInfo;
        

        //console.log("child Render");

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @Likhithashettyu</h4>
            </div>
        );
    }
}

export default UserClass;