import React from "react";

const PlusIcon = ({ size = "20", color = "currentColor", rotation = 0 }) => {
  return (
    <svg
      transform={`rotate(${rotation})`}
      width={size}
      height={size}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.51833 14.1052V8.81092H0.905425C0.409824 8.81092 0 8.41944 0 7.92543C0 7.44075 0.400293 7.03995 0.905425 7.03995H5.54692V1.88549C5.54692 1.4008 5.94721 1 6.45235 1H6.54765C7.04325 1 7.45308 1.39148 7.45308 1.88549V7.04927H12.0946C12.5902 7.04927 13 7.44075 13 7.93475C13 8.41944 12.5997 8.82024 12.0946 8.82024H7.41496V14.1145C7.41496 14.5992 7.01466 15 6.50953 15H6.41422C5.91862 15 5.5088 14.6085 5.5088 14.1145L5.51833 14.1052Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusIcon;
