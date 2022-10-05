import { ReactNode } from 'react';
import styled from "styled-components";


interface FlexProps {
    children: ReactNode | any,
    onClick?: (event: any) => void,
    width?: string,
    height?: string,
    position?: string,
    left?: string,
    right?: string,
    bottom?: string,
    top?: string,
    flexDirection?: string,
    flexGrow?: number,
    flexShrink?: number,
    flexWrap?: string,
    flexBasis?: string,
    justifyContent?: string,
    alignItems?: string,
    margin?: string,
    marginRight?: string,
    marginLeft?: string,
    marginTop?: string,
    marginBottom?: string,
    padding?: string,
    paddingLeft?: string,
    paddingRight?: string,
    paddingTop?: string,
    paddingBottom?: string,
    backgroundColor?: string,
    rowGap?: string,
    columnGap?: string,
    lineHeight?: string,
    overflow?: string,
    textAlign?: string,
    alignSelf?: string,
    justifySelf?: string,
    gap?: string,
    whiteSpace?: string,
}

const BlockStyled =  styled.div<FlexProps>`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  position: ${props => props.position};
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  flex-direction: ${props => props.flexDirection || 'column'};
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => props.flexShrink};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  justify-self: ${props => props.justifySelf};
  align-items: ${props => props.alignItems};
  align-self: ${props => props.alignSelf};
  margin: ${props => props.margin};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  padding: ${props => props.padding};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  background-color: ${props => props.backgroundColor};
  row-gap: ${props => props.rowGap};
  column-gap: ${props => props.columnGap};
  line-height: ${props => props.lineHeight};
  overflow: ${props => props.overflow};
  text-align: ${props => props.textAlign};
  gap: ${props => props.gap};
  white-space: ${props => props.whiteSpace};
`;


const Flex = ({children, ...props}: FlexProps) => {
    return (
        <BlockStyled  {...props}>
            {children}
        </BlockStyled>
    );
};

export default Flex;
