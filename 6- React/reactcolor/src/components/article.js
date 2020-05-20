import React, {Component} from 'react';
import './article.css';

class Article extends Component{
   
    state = {
        InputValue: ""
    }
    ChangeColor(ev){
        //console.log(ev.target)
        this.setState({
            InputValue: ev.target.value
        })
    }
    render(){
        return(
            <div className="Article">
                <input type="text" placeholder="Enter a color" className="inputTitle" onChange={e=>{
                    this.ChangeColor(e)
                }}/>
                <div style={{width:"500px", height:"200px", border:"1px solid #ccc", backgroundColor:this.state.InputValue}}></div>
            </div>
        )
    }
}


export default Article