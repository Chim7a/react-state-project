import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Chima Ikegbulam",
        bio: "A passionate developer with a love for React.",
        imgSrc:
          "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Software Engineer",
      },
      shows: false,
      timeElapsed: 0,
    };
  }

  componentDidMount() {
    // Start a timer when the component mounts
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Welcome: Please click button to see profile</h1>

        {/* Button to toggle the profile visibility */}
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {/* Conditional rendering based on the 'shows' state */}
        {shows && (
          <div className="profile">
            <img
              style={{ width: 200, paddingTop: 22 }}
              src={imgSrc}
              alt={fullName}
            />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>
              <strong>Profession:</strong> {profession}
            </p>
          </div>
        )}

        {/* Display the time elapsed since the component was mounted */}
        <p>Time since mounted: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
