import React, { Component } from "react";


class SizeSetting extends Component {

    handelSetFontSize(size) {
        this.props.onSetFontSize(size)
    }

    render() {
        return (
            <div className='col-12 col-sx-12 col-sm-6 col-md-6 col-lg-6'>
                <div className="panel panel-default ">
                    <div className="panel-heading ">Size Setting <span>{this.props.fontSize} px</span></div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-primary" onClick={() => this.handelSetFontSize(1)}>Increase(+)</button>
                        <button type="button" className="btn btn-danger ml-10" onClick={() => this.handelSetFontSize(-1)}>Decrease(-)</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SizeSetting;