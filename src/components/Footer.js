import React from "react";
import Styles from "./Styles"

let count=0;
let checker=true;
const valueswitch=()=>{
    checker=checker?false:true;
    console.log("check ",checker);
}
const test=()=>{
   
    if(count < 5){
     count++;
    }
    else{
        alert("Button clicked very frequently rest please");
        count = 0;
    }
}
class Footer extends React.Component{
    constructor(){
         super();
         this.state = {
            users: [
                {id:1,name:"dev",class:"A"},
                {id:2,name:"ved",class:"B"},
                {id:3,name:"roham",class:"C"},
                ]
        }

    }
   
    // state = {
    //     users: [
    //         {id:1,name:"dev",class:"A"},
    //         {id:2,name:"ved",class:"B"},
    //         {id:3,name:"roham",class:"C"},
    //         ]
    // }bahar bhi chlta hai
  render(){

    
    const numbers=[1,2,3,4,5];
    const newNumbers=numbers.map(function(numbers){
        return <li key={numbers}>{numbers}</li>;
    });// list concept how to made and how to copy it to another
         
    
    
    
    return(
                <React.Fragment> 
                    <h1>{this.state.msg} {this.props.name}</h1>
                    {this.props.children}
                    <button onClick={test}>Hello World</button>
                    {newNumbers}
                    
                    <ul>
                        {numbers.map((numbers) => <li key={numbers}>{numbers}</li>)}
                    </ul>
                    <ul>
                    {this.state.users.map(user =><li key={user.id}> {user.id}  {user.name} {user.class}</li>)}
                    </ul>
                    
                    {valueswitch()}
                    <Styles isvalue={checker} >
                    </Styles>
                    
                    
                </React.Fragment>//ye React.Fragment use kiya hai kyu ki extra div na use kare or multiple element return bhi ho jaye
                
            
        );
  }
}

export default Footer;