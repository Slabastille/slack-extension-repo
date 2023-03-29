import axios from 'axios'
import qs from 'qs'
const apiUrl = 'https://slack.com/api';
    
const retrieveChannels = async (channel, token, cursor) => { 
    let messageArgs = {
                    channel: channel, 
                    token: token,
                    cursor: cursor
                 };
    const result = await axios.post(`${apiUrl}/conversations.history?`,qs.stringify(messageArgs));
    return result.data
    };

export default retrieveChannels
