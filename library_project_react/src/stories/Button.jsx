import PropTypes, { string } from "prop-types"
import React from 'react'
import styled, {css} from 'styled-components'

// function Button({ label, backgroundColor, size, onClick}) {
// let scale = 1
// if (size = "small") {
//   scale = 0.75
// }
// if (size = "large") {

// scale = 1.5
// }

// const getVariantStyles = ({primary = false}) => 
// primary 
// ? css `
//   backgroundColor, 
//   border: "none";
//   color: "white"; 
//   borderRadius: "5px"; 
//   cursor: "pointer";` 
// :css `
// color: #333; 
// background-color: transparent;
// `;

// const getSizeStyles = ({ size = 'medium' }) => {
//   switch (size) {
//     case 'small': {
//       return css`
//         font-size: 12px;
//         padding: 10px 16px;
//       `;
//     }
//     case 'large': {
//       return css`
//         font-size: 16px;
//         padding: 12px 24px;
//       `;
//     }
//     default: {
//       return css`
//         font-size: 14px;
//         padding: 11px 20px;
//       `;
//     }
//   }
// };

// const StyledButton = styled.button`
//   font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
//   font-weight: 700;
//   border: 0;
//   border-radius: 3em;
//   cursor: pointer;
//   display: inline-block;
//   line-height: 1;

//   ${(props) => getVariantStyles(props)}
//   ${(props) => getSizeStyles(props)}
//   ${({ backgroundColor }) =>
//     backgroundColor &&
//     css`
//       background-color: ${backgroundColor};
//     `}
// `;

export const Button = ({ label, ...rest }) => <StyledButton {...rest}>{label}</StyledButton>;

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

// return (
// <button onClick = {onClick} style ={styledButton}>
// {label}
// </button>

// ); 


// Button.propTypes = {
// label: PropTypes.string, 
// backgroundColor: PropTypes.string, 
// size: PropTypes.oneOf(["small", "medium", "large"]), 
// onClick: PropTypes.func,
// }

export default Button;