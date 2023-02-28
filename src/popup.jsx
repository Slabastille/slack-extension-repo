import React from 'react';
import { render } from 'react-dom';
import GetToken from './slack/getToken';


   function Popup() {
    
    return (
            <div>
                <GetToken/>
            </div>
        )
}
render(<Popup/>, document.getElementById("root") )

