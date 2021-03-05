import React, { Component } from 'react';

class WithLogging extends Component {
        constructor(props) {
            super(props);
            // this.displayName = `WithLogging(${props.children.type.name || 'Component'})`;
        }

        componentDidMount() {
            let compName = this.props.children[1].type.name || 'Component';
            console.log(`Component ${compName} is mounted`);
        }

        componentWillUnmount() {
            let compName = this.props.children[1].type.name || 'Component';
            console.log(`Component ${compName} is going to unmount`);
        }

        render() {
            console.log(this.props);
            return this.props.children
        }
    }


export default WithLogging;
