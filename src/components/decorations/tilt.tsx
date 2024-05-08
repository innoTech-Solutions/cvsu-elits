"use client"
import Tilt from 'react-parallax-tilt';

export function ParallaxTilt({
    children,
    className
  }: {
    children: React.ReactNode;
    className : string
  }) {

    return(
        <Tilt
        trackOnWindow={true}
        tiltEnable={true}
        className={className}
        >
            {children}
        </Tilt>
    );
};