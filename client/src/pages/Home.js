import React, {Component} from 'react';

class Home extends Component{
    state = {
        data:null
    }

    componentDidMount(){
        this.callBackend();
    }

    callBackend = async () => {
        try{
            const resp = await fetch('/api');
            const respJson = await resp.json();
            console.log(respJson);
            this.setState({data:respJson});
        }catch(err){
            console.log(err);
        }
    }

    render(){
        return (
            <h1>Everyone hates react</h1>
        );
    }
}

export default Home;