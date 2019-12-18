import React from 'react';

function Facebook() {
    return (
        <div className="facebook-feed">
            <iframe    
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofessionallawncarems%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
                width="320" 
                height="500" 
                style={{ border: "none" }} 
                scrolling="no" 
                frameBorder="0" 
                allowTransparency="true" 
                allow="encrypted-media"
                title="Professional Lawn Care Facebook Page Embedded">
            </iframe>
        </div>
    )
}

export default Facebook;