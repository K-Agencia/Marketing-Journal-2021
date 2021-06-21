import React from 'react';

function scrollUp(){
    let currentScroll = document.documentElement.scrollTop;
    console.log(currentScroll);
    if(currentScroll > 0){
        window.scrollTo (0,0);
    }
}

// window.onscroll = function() {
//     var y = window.scrollY;
//     console.log(y);
//   };

const Top = () => {
    // document.getElementById("go_top").addEventListener("click", scrollUp()); 

    return (
        <div className="go_top">
            <button className="arriba" onClick={scrollUp()}>Arriba</button>
        </div>
    );
};

export default Top;