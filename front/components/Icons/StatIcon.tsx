import React from "react";

const StatIcon = ({ size = "20", color = "currentColor" }) => {
    return (
<svg width={size} height={size} viewBox="0 0 11 11" fill={color} xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_80_270)">
<path d="M4.125 11V4.43501C4.125 3.67639 4.7025 3.04907 5.43125 3.04907H5.56875C6.28375 3.04907 6.875 3.6618 6.875 4.43501V11H4.125Z" fill="#00224B"/>
<path d="M0 11V6.59416C0 5.83554 0.5775 5.20822 1.30625 5.20822H1.44375C2.15875 5.20822 2.75 5.82095 2.75 6.59416V11H0Z" fill="#00224B"/>
<path d="M8.25 11V1.38594C8.25 0.627321 8.8275 0 9.55625 0H9.69375C10.4088 0 11 0.612732 11 1.38594V11H8.25Z" fill="#00224B"/>
</g>
<defs>
<clipPath id="clip0_80_270">
<rect width="11" height="11" fill="white"/>
</clipPath>
</defs>
</svg>

    );
};

export default StatIcon;