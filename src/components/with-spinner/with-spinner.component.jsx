import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

const withSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
  return isLoading ? (
      <SpinnerOverlay>
          <SpinnerContainer />
      </SpinnerOverlay>
  ) : (
      <WrappedComponent {...otherProps}/>
  );
};

// const withSpinner = wrappedComponent => {
//     const spinner = ({isLoading, ...otherProps}) => {
//         return isLoading ? (
//             <SpinnerOverlay>
//                 <SpinnerContainer />
//             </SpinnerOverlay>
//         ) : (
//             <wrappedComponent {...otherProps}/>
//         )
//       }
//       return spinner;
// };

export default withSpinner;