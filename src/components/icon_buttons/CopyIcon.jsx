import React from "react";

import icon from '../../assets/images/copy.png'

const CopyIcon = () => {
    return(
        <div style={{cursor: 'pointer'}}>
            <img src={icon} height='46px' width='46px' alt=''/>
        </div>
    );
}

export default CopyIcon;