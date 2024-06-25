import React from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
};

export interface ErrorBoundaryProps {
  fallback?: (err: Error, info: React.ErrorInfo) => React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }
  componentDidCatch(err: Error, info: React.ErrorInfo) {
    // set the the hasError state to true so on the next render it will display the `<div>Error occured.</div>` in the DOM.
    this.setState({ hasError: true, error: err, errorInfo: info });
  }
  render() {
    const { hasError, error, errorInfo } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      return fallback ? (
        fallback(error!, errorInfo!)
      ) : (
        <div>
          <div style={{ color: 'red' }}>Error occurred location {location.pathname}</div>
          <div style={{ color: 'red' }}>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state?.error && this.state?.error.toString()}
              <br />
              {this.state?.errorInfo?.componentStack}
            </details>
          </div>
        </div>
      );
    } else {
      return children;
    }
  }
}

export default ErrorBoundary;
