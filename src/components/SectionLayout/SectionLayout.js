/* eslint-disable react/prop-types */
import './SectionLayout.css';
import { Children, cloneElement } from 'react';

const Row = ({ children, extended = false, backgroundColor = 'FFFFFF' }) => {
   return (
      <div
         style={{
            backgroundColor: extended ? backgroundColor : 'FFFFFFF'
         }}
         className="section-container"
      >
         <div
            className="section-layout"
            style={{
               backgroundColor
            }}
         >
            {Children.map(children, (child) => {
               return cloneElement(child, {
                  props: {
                     ...child.props,
                     backgroundColor
                  }
               });
            })}
         </div>
      </div>
   );
};
const Column = ({ children, backgroundColor = 'FFFFFF', className = '' }) => {
   return (
      <div
         style={{
            backgroundColor
         }}
         className={`col ${className}`}
      >
         {children}
      </div>
   );
};

export { Row, Column };
