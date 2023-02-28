import retrieveChannels from './retrieveChannels';

async function topMessages (channel, token){
    function itsFunny(mess){
        if (mess.reactions){
            return mess
        }
    }
    let verifier = true
    let messageArr = []
    let cursor=''
    let message;
    //let funnyMessages = message.messages.filter(itsFunny)
    while(verifier){
        //messageArr.push(message.messages)
        message = await retrieveChannels(channel, token, cursor)
        if(message.response_metadata.next_cursor){
            cursor = message.response_metadata.next_cursor
            console.log('this is verifier', verifier)
        }
        if(!message.response_metadata.next_cursor){
            verifier = false
        }
        console.log('cursorrrrr' ,cursor)
   }
   //get an array of all the messages (message)
   //channel token cursor(undefined for the first time) 
   //cursor is used to get the next set of 100 messages
   //if cursor is false then we have all the messages 
   //filter all the messages by the ones that have a reaction
   //sort the messages by the ones with the most reactions (fyi these messages come in as an object inside of an array)
   //we want to return the top 3 messages with the most reactions
   return message
}
export default topMessages