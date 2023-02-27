//THIS IS FOR THE CHANNEL ID
chrome.tabs.onUpdated.addListener((tabId, tab)=>{
    //console.log("this is change info" , changeInfo)
     if(tab.url && tab.url.includes("app.slack.com/client")){
  
          const getChannelName = (tabUrl)=>{
            let preUrl = tabUrl.split('client/')[1]
            let channelName = preUrl.split('/')[1]
            return channelName
          }
         const channelName = getChannelName(tab.url)
         console.log("the channel name is: ", channelName)
         console.log("I SEE THE TABB DUDES AND DUDETTEssssS", tab.url)
  
        //  chrome.tabs.sendMessage(tabId, {
        //    type: "NEW",
        //    channelId: channelName
        //  })
      }
    })
    