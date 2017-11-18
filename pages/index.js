//import axios from 'axios"
import 'isomorphic-fetch'
import React,{Component} from 'react'
import axios from 'axios';

class Index extends Component{
    static async getInitialProps () {
        const res = await fetch('http://api.carcaretoday.com/user/login',{
            method: 'POST',
            mode: 'no-cors',
            cache: 'default',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/json; charset=utf-8',
                'X-API-KEY' : 'wg008g8k4w8gkgkwcsgogosk4kwog8ckss8ksc8s'
            },
            body: JSON.stringify({'email':'porchn.chin@gmail.com','password':'1q2w3e4r'})
        })
        const json = await res.json()
        return json
    }

    componentWillMount(){
        //console.log(this.props);
    }

    handletest = async (e) => {
        const res = await fetch('http://api.carcaretoday.com/user/login',{
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/json; charset=utf-8',
                'X-API-KEY' : 'wg008g8k4w8gkgkwcsgogosk4kwog8ckss8ksc8s'
            },
            body: JSON.stringify({'email':'porchn.chin@gmail.com','password':'1q2w3e4r'})
        })
        const json = await res.json()
        console.log(json)
    }

    handleaxios = async(e)=>{
        const res = await axios({
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                'Content-Type': 'application/json; charset=utf-8',
                "X-API-KEY" : 'wg008g8k4w8gkgkwcsgogosk4kwog8ckss8ksc8s'
            },
            url: 'http://api.carcaretoday.com/user/login',
            data: {email:'porchn.chin@gmail.com',password:'1q2w3e4r'}
        });

        const json = await res.json()
        console.log(json)
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                <p onClick={this.handletest}>Preact has a ⭐️</p>
                <p onClick={this.handleaxios}>axios</p>
            </div>
        )
    }
}

export default Index