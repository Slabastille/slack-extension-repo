import retrieveChannels from './slackApi';

async function topMessages (channel, token, cursor){
     let allMessagesWithReactions = []
     let verifier = true
     let counter = 1;
     //this while loop gets the messages that have a reaction and store them in all messages
     while (verifier === true && counter != 4){
        //Initial api call to get 100 messaged
        //console.log(counter, 'coiUNNTERRR')
        let message = await retrieveChannels(channel, token, cursor)
        //Filters through the 100 messages and only returns the messages with a reaction
        let messagesArr = message.messages.filter((mess)=>
                mess.reactions
            )
        // adds all messages with a reaction together
        allMessagesWithReactions.push(...messagesArr)
        if (message.has_more){
                cursor = message.response_metadata.next_cursor
                counter +=1
            }
        else{
            verifier = false
        }
    }
     const sortFunction=(a,b)=>{
        let aCount = 0;
        let bCount = 0;
        for(let i of a.reactions){
            aCount += i.count;
        }
        for(let i of b.reactions){
            bCount += i.count;
        }
        console.log('aaaaa', aCount)
        console.log('bbbbb', bCount)
        if(aCount > bCount){
            return a - b
        }
        else if(bCount > aCount){
            return b - a
        }
     }
    // let finalMessages = allMessagesWithReactions.sort((a,b)=>{
    //     return b.reactions.length - a.reactions.length
    // }).slice(0,3)
    let finalMessages = allMessagesWithReactions.sort(sortFunction).slice(0,3)

   return finalMessages
}
export default topMessages