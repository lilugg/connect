import React,{Component} from 'react'
const SyncRouter=(cbk)=>{
   return class SyncIndex extends Component{
       state={
           Com:null
       }
       componentDidMount(){
            cbk().then((res)=>{
                console.log(res.default)
                this.setState({
                    Com: res.default
                })
            })
       }
       render () {
           const {Com} = this.state;
           return(<div>{
               Com?<Com/>:null
           }</div>)
       }
   }
}
export default SyncRouter