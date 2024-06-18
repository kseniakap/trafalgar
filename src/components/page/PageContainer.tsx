import cn from 'classnames';
import React from 'react';
import styled from 'styled-components';

const PageContainer: React.FC<React.BaseHTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  return (
    <Div className={cn(['page-container', className, props])} {...props}>
      {children}
    </Div>
  );
};

const Div = styled.div`
  &.page-container {
    padding: 20px 32px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

export default PageContainer;
