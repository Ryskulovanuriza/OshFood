import React, { Component } from 'react'
import axios from 'axios';

const token = `2017702022:AAEQQGfOIj7_Z25Vy-SD5N6P5A6nJJ4A9UY`;
const chat_id =`1149407937`

export default class bot extends Component {
    componentDidMount(){ 
     axios.get(`https://api.telegram.org/bot${token}/getUpdates`)
     .then((v)=>{
         console.log(v);
     })
     axios.get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=hello bot`)
     .then((v)=>{
      console.log(v); 
    })













































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































           
    
  }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}