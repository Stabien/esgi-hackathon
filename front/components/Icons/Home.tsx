import React from "react";

const HomeIcon = ({ size = "30", color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_61_70)">
        <path
          d="M19.4037 7.78396V18.8887C19.4037 19.9062 18.5797 20.7301 17.5623 20.7301H2.77777C1.7603 20.7301 0.93634 19.9062 0.93634 18.8887V7.78396C0.93634 7.17223 1.23908 6.60107 1.7447 6.25931L9.13695 1.25312C9.76116 0.830217 10.5789 0.830217 11.2015 1.25312L18.5938 6.25931C19.0994 6.60263 19.4021 7.17379 19.4021 7.78396H19.4037Z"
          stroke={color}
          stroke-linejoin="round"
        />
        <path
          d="M7.00677 20.7301V13.5236C7.00677 12.8245 7.57325 12.258 8.27237 12.258H12.0691C12.7683 12.258 13.3347 12.8245 13.3347 13.5236V20.7301"
          stroke={color}
          stroke-miterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_61_70">
          <rect width="20.34" height="21.6664" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeIcon;
