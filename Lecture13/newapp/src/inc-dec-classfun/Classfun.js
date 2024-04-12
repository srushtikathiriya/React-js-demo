import React, { Component } from 'react'

export default class Classfun extends Component {
    constructor(){
        super()
        this.state = {
             count : 0,
        }
    }
    increment = () => {
        // console.log("increment");
        this.setState({count: this.state.count + 1});
    }
    render() {
    return (
      <div className='text-center mt-[200px]'>
        <h2 className='text-3xl'>Class component</h2>
        <h2 className='text-2xl mt-5 mb-5'>{this.state.count}</h2>
        <button className='border-2 border-blue-400 rounded-lg p-1 bg-sky-300 text-white' onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
