import React from "react";

class Audioplayer extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    this.audioRef.current.play();
  }

  render() {
    return (
      <audio ref={this.audioRef} controls>
        <source src={this.props.src} type="audio/mp3" />
      </audio>
    );
  }
}

export default Audioplayer;
