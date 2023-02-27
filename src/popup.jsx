import React from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import topMessages from './topMessages';
import post from './retrieveChannels';
import { getActiveTabURL } from './utils';


 async function Popup() {
     const a = 'hello samuel'
    // let tab = await getActiveTabURL()
    // console.log('this is tab', tab)
    // console.log('IT WORKS HERE')
     let channel = 'C04NDJL4TSL'
     let token = 'xoxp-4737822716051-4750575042113-4866701447379-fb886dfd42018b8e8e3252884587f16e'

    // let cursor = 'bmV4dF90czoxNjc1ODA1OTc1OTU5MzE5'
    console.log('hereee ----', await topMessages(channel, token))
    // //console.log('hers top messages', topMessages)
    // let channels = await post(channel, token)
    // console.log(typeof(channels))
    // console.log('this is it mayne', channels.messages)
    return (<div>Hello world and {a}</div>)
}
render(<Popup/>, document.getElementById("root") )

