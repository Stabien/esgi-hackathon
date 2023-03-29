import React from "react";

const RightArrowIcon = ({ size = "20", color = "currentColor", rotation = "0deg"}) => {
    return (
<svg width={size} height={size} viewBox="0 0 42 42" fill={color} xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="41" height="41" rx="3.5" fill="white"/>
<mask id="mask0_84_1943" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="11" y="11" width="20" height="20">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 13.5C16.8578 13.5 13.5 16.8579 13.5 21C13.5 25.1421 16.8578 28.5 21 28.5C25.1421 28.5 28.5 25.1421 28.5 21C28.5 16.8579 25.1421 13.5 21 13.5ZM11.8333 21C11.8333 15.9374 15.9374 11.8333 21 11.8333C26.0626 11.8333 30.1666 15.9374 30.1666 21C30.1666 26.0626 26.0626 30.1667 21 30.1667C15.9374 30.1667 11.8333 26.0626 11.8333 21Z" fill="#5E82B6"/>
<path d="M21.5892 17.0774C21.2638 16.752 20.7362 16.752 20.4107 17.0774C20.0853 17.4029 20.0853 17.9305 20.4107 18.2559L22.3215 20.1667H17.6666C17.2064 20.1667 16.8333 20.5398 16.8333 21C16.8333 21.4602 17.2064 21.8333 17.6666 21.8333H22.3215L20.4107 23.7441C20.0853 24.0695 20.0853 24.5972 20.4107 24.9226C20.7362 25.248 21.2638 25.248 21.5892 24.9226L24.9226 21.5893C25.248 21.2638 25.248 20.7362 24.9226 20.4107L21.5892 17.0774Z" fill="#5E82B6"/>
</mask>
<g mask="url(#mask0_84_1943)">
<rect x="11" y="11" width="20" height="20" fill="#5E82B6"/>
</g>
<rect x="0.5" y="0.5" width="41" height="41" rx="3.5" stroke="#E1E5EA"/>
</svg>
        );
    };
    export default RightArrowIcon;