import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: ['red', 'yellow', 'green', 'blue']
        };
    }

    handleSetActiveColor(color) {
        this.props.onReceiveColor(color)
    }


    render() {
        var optionColor = this.state.color.map((color, index) => {
            return <div className={this.props.color === color ? 'active colorItem' : 'colorItem'}
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => this.handleSetActiveColor(color)}
            ></div>
        });
        return (
            <div className='col-12 col-sx-12 col-sm-6 col-md-6 col-lg-6'>
                <div className="panel panel-primary ">
                    <div className="panel-heading ">Color Picker</div>
                    <div className="panel-body row">
                        {optionColor}
                        <span className='colorItem'></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
