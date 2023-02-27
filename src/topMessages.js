import retrieveChannels from './retrieveChannels';

async function topMessages (channel, token){
    function itsFunny(mess){
        if (mess.reactions){
            return mess
        }
    }
   let message = await retrieveChannels(channel, token)
   let funnyMessages = message.messages.filter(itsFunny)
   if(message.has_more){
    
    console.log('yessss')
   }
   return funnyMessages
}
export default topMessages