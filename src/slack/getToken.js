import React from 'react';
import topMessages from './topMessages';



 class GetToken extends React.Component{
    constructor(props){
        super(props)
        this.state = {value:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        //create function that takes in th evalue and does something with it here
        event.preventDefault();
      }
    
        
        //  function buttonclick(){
        //         let token = document.getElementById("token").value;
        //     //let message = channelMessages(token, currentChannel)
        //     console.log(token)}
          
    async render(){
        console.log('this is state',this.state)
        let channel = 'C039KTQKSCA'
        
        //console.log(token)
        let messages = await topMessages(channel,token)
        console.log('heree' ,messages)
        return(
    //if the token is good we add a button that takes them to the next page
            <div>
                <div>Imma need that token mayne</div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
    
}
export default GetToken


// let tab = await getActiveTabURL()
    // console.log('this is tab', tab)
    // console.log('IT WORKS HERE')
    //let channel = 'C04NDJL4TSL'
    //let token = 'xoxp-4737822716051-4750575042113-4853103095143-a657de2bd344bd622b07428df6b845d6'

   // let cursor = 'bmV4dF90czoxNjc1ODA1OTc1OTU5MzE5'
   //console.log('hereee ----', await topMessages(channel, token))
   // //console.log('hers top messages', topMessages)
   // let channels = await post(channel, token)
   // console.log(typeof(channels))
   // console.log('this is it mayne', channels.messages)