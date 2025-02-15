import React from 'react';
import Svg, { Path } from 'react-native-svg'; 

interface FavoriteIconProps {
  color?: string;
  size?: number;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ color = "#000", size = 24 }) => {
  return (
    <Svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
    >
      <Path
        d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"
        stroke={color} // The stroke color can be customized via props
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" // No fill to keep the hollow heart look
      />
    </Svg>
  );
};

export default FavoriteIcon;
