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
        const data = this.state.data;
        var itemList = '';
        if(data){
            var results = data.results;
            for(var i =0; i< results.length; i++){
                itemList += results[i].item + ', ';
            }
        }
        return React.createElement('div', null, `React is bad: ${itemList}`)
    }
}
//
export default Home;