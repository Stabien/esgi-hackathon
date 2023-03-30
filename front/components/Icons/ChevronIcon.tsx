import React from "react";

const ChevronIcon = ({ size = "20", color = "currentColor", rotation = 0 }) => {
    return (
<svg width={size}height={size} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" transform={`rotate(${rotation})`}>
<path d="M6.13945 8.06641C6.40312 8.33008 6.84258 8.33008 7.10625 8.06641L12.8191 2.38281C13.0828 2.08984 13.0828 1.65039 12.8191 1.38672L12.1453 0.712891C11.8816 0.449219 11.4422 0.449219 11.1492 0.712891L6.6375 5.22461L2.09648 0.712891C1.80352 0.449219 1.36406 0.449219 1.10039 0.712891L0.426562 1.38672C0.16289 1.65039 0.16289 2.08984 0.426562 2.38281L6.13945 8.06641Z" fill={color}/>
</svg>
        );
    };
    export default ChevronIcon;