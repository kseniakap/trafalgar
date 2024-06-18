import React from 'react';

export interface Props {
  statusCode: number;
  message?: string;
}

const MESSAGES: Record<number, string> = {
  404: 'Страница не найдена',
};

const ErrorPage: React.FC<Props> = (props) => {
  const message = props.message || MESSAGES[props.statusCode] || null;
  return (
    <>
      <h3>Error {props.statusCode}</h3>
      {message && <p>{message}</p>}
    </>
  );
};

export default ErrorPage;
