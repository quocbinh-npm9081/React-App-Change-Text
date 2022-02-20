import React, { Component } from 'react';

class Result extends Component {


    render() {
        return (
            <div className='content row mt-50'
                style={{ color: this.props.color, fontSize: this.props.fontSize }}
            >
                This is content
            </div>
        );
    }
}

export default Result;
