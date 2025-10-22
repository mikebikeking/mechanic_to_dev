import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gunmetal p-4">
          <div className="max-w-md w-full bg-gunmetal border-2 border-torch/30 rounded-lg p-6 text-center">
            <AlertTriangle className="text-torch mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-heading text-textPrimary mb-2">
              Oops! Something went wrong
            </h2>
            <p className="text-textSecondary mb-6">
              We encountered an unexpected error. This has been logged and we're working to fix it.
            </p>
            <button
              onClick={this.handleRetry}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-gunmetal font-heading hover:bg-torch transition-colors"
            >
              <RefreshCw size={20} />
              Try Again
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="text-blueprint cursor-pointer font-mono text-sm">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-3 bg-gunmetal/50 text-xs text-textSecondary overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
