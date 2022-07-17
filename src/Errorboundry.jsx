import React, { Component} from 'react'

class Errorboundry extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }
    componentDidCatch(){
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            <h1>oops there is an error</h1>
        }
        return this.props.children
    }
}
export default Errorboundry