import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Browser extends Component {
  constructor(){
    super();
    this.state = {
      sm: false,
      md: false,
      lg: false
    };
  }
  
  componentDidMount() {
    this.setBrowseProps();
    window.addEventListener("resize", this.setBrowseProps.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setBrowseProps.bind(this));
  }
  
  setBrowseProps = () => this.setState({
    sm: window.innerWidth < 700,
    md: window.innerWidth >= 700 && window.innerWidth <= 1000,
    lg: window.innerWidth > 1000
  });

  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      browser: {
        sm: this.state.sm,
        md: this.state.md,
        lg: this.state.lg
      }
    });
    return (
      childrenWithProps
    );
  }
}

Browser.propTypes = {
  children: PropTypes.element.isRequired
};

export default Browser;
