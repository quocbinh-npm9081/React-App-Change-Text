import React, { Component } from 'react';

class Reset extends Component {
    handelResetColor() {
        this.props.onResetColor();
    }
    render() {
        return (
            <button type="button"
                className="btn btn-primary ml-10"
                onClick={() => this.handelResetColor()}
            >
                Reset
            </button>
        );
    }
}

export default Reset;
