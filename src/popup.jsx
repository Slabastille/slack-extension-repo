import React from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import getChannelMessages from './retrieveChannels';



function Popup() {
    const a = 'hello samuel'
    console.log('IT WORKS HERE')
    let channel = 'C04NDJL4TSL'
    let token = 'xoxp-4737822716051-4750575042113-4731409169174-854760cc7fd60afab7f1388f769097e7'
    let cursor = 'bmV4dF90czoxNjc1ODA1OTc1OTU5MzE5'
    getChannelMessages(channel, token, cursor)
    
    return (<div>Hello world and {a}</div>)
}
render(<Popup/>, document.getElementById("root") )

