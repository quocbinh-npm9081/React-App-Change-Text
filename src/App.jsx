import './App.css';
import { Component } from 'react';
import ColorPicker from './Components/ColorPicker';
import SizeSetting from './Components/SizeSetting';
import Reset from './Components/Reset';
import Result from './Components/Result';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    };
    this.onReceiveColor = this.onReceiveColor.bind(this);
    this.onResetColor = this.onResetColor.bind(this);
    this.onSetFontSize = this.onSetFontSize.bind(this);
  }

  onReceiveColor(color) {
    this.setState({
      color: color
    })
  }

  onResetColor() {
    this.setState({
      color: 'red',
      fontSize: 12
    })
  }

  onSetFontSize(size) {
    if (this.state.fontSize >= 8 && this.state.fontSize <= 36) {
      this.setState({
        fontSize: this.state.fontSize + size
      })
    }
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color}
            onReceiveColor={this.onReceiveColor}
          />
          <SizeSetting fontSize={this.state.fontSize}
            onSetFontSize={this.onSetFontSize}
          />
        </div >
        <div className=' col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='row'>
            <p className='detail'>Color: {this.state.color} - Font size : {this.state.fontSize}px</p>
            <Reset onResetColor={this.onResetColor} />
          </div>
          <Result color={this.state.color}
            fontSize={this.state.fontSize}
          />
        </div>
      </div >
    )
  }

}

export default App;
