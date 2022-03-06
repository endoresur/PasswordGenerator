import React from "react";

import icon from '../../assets/images/refresh.png'

const RefreshIcon = () => {
    return (
        <div style={{cursor: 'pointer'}}>
            <img src={icon} height='46px' width='46px' alt=''/>
        </div>
    );
}

export default RefreshIcon;