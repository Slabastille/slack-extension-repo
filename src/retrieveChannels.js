import axios from 'axios'
import qs from 'qs'
const apiUrl = 'https://slack.com/api';

function getChannelMessages(channel, token, cursor=null){
    const greet = () => {
    let messageArgs = {
        channel: channel, 
        token: token,
        cursor: cursor
        
    };
    post(messageArgs);
    };
    const post = async (args) => { 
    const result = await axios.post(`${apiUrl}/conversations.history?`,qs.stringify(args));
    try {
        console.log(result.data);
    } catch(e) {
        console.log(e);
    }
    };
    greet()

}

export default getChannelMessages
