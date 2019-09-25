import React,{Component} from 'react'
import Context from '../utils/context'
class Provider extends Component{
    render(){
        return (<div>
                <Context.Provider value={{...this.props.store}}>
                {this.props.children}
                </Context.Provider>
              </div>)
    }
}
export default Provider