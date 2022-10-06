import styled from "styled-components";

interface Text {
    fontSize?: string,
    fontWeight?: string,
    color?: string,
    margin?: string,
}

const Text = styled.p<Text>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  margin: ${props => props.margin};
`

export default Text;
