import React from "react";
import BackToTop from "react-back-to-top-button";
import ScrollArrow from '../images/scroll.png';

function Scroll() {
    return(
<>
<BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span>
            <img src={ScrollArrow} />
        </span>
      </BackToTop>
</>
    );

}

export default Scroll;