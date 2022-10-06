import React, {FC} from 'react';
import styled from "styled-components";


interface LogoProps{
    src: string,
    alt: string,
    width?: string
    height?: string,
    position?: string,
    right?: string,
    marginBottom?: string,
    top?: string,
    justifySelf?: string,
    alignSelf?: string,
    left?: string,
    borderRadius?: string,
}

const StyledImg = styled.img<LogoProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  position: ${props => props.position || 'relative'};
  right: ${props => props.right};
  margin-bottom: ${props => props.marginBottom};
  top: ${props => props.top};
  left: ${props => props.left};
  justify-self: ${props => props.justifySelf};
  align-self: ${props => props.alignSelf};
  border-radius: ${props => props.borderRadius};
`

const Logo: FC <LogoProps> = ({src, alt, ...props}) => {
    return (
        <StyledImg
            src={src}
            alt={alt}
            {...props}
        />
    );
};

export default Logo;
