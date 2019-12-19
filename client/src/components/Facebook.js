import React, { useState, useEffect } from 'react';

function Facebook() {
    const [ small, setSmall ] = useState(false)
    useEffect(() => {
        if(window.innerWidth < 350) {
            setSmall(true)
        } else if(small) {
            setSmall(false)
        }
    }, [small])
    return (
        small ? 
        <div className="facebook-feed">
            <iframe    
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofessionallawncarems%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
                width="300" 
                height="500" 
                style={{ border: "none" }} 
                scrolling="no" 
                frameBorder="0" 
                allow="encrypted-media"
                title="Professional Lawn Care Facebook Page Embedded">
            </iframe>
        </div>
        :
        <div className="facebook-feed">
            <iframe    
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofessionallawncarems%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
                width="320" 
                height="500" 
                style={{ border: "none" }} 
                scrolling="no" 
                frameBorder="0" 
                allow="encrypted-media"
                title="Professional Lawn Care Facebook Page Embedded">
            </iframe>
        </div>
    )
}

export default Facebook;