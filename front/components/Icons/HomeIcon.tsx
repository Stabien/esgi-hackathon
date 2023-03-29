import React from "react";

const HomeIcon = ({ size = "20", color = "currentColor" }) => {
  return (
<svg 
width={size} height={size} viewBox="0 0 16 17" 
fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_80_29)">
<path d="M14.02 6.67L7.51 1L1 6.67" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.45001 15.18V8.88" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M12.57 15.18V8.88" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2.45001 15.18H12.57" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_80_29">
<rect width="15.02" height="16.18" fill="white"/>
</clipPath>
</defs>
</svg>

  );
};

export default HomeIcon;
