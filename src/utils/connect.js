import React,{Component} from 'react'
import Context from '../utils/context'
const connect=(cbk)=>{
    return (Com)=>{
        return  class extends Component{
                render(){
                    return(<div>
                        <Context.Consumer>
                        {
                            (store)=>{
                                let res=cbk(store)
                                return <Com {...res} {...this.props}/>
                            }
                        }
                        </Context.Consumer>
                        </div>)
                }
            }
    }
}
export default connect