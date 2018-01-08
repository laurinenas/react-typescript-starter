import * as React from 'react';


interface IErrorBoundaryState {
    error?: Error;
    info?: React.ErrorInfo;
}

class ErrorBoundary extends React.Component<{ children: JSX.Element }, IErrorBoundaryState> {
    public state:IErrorBoundaryState = {error:undefined, info: undefined};

    public componentDidCatch(error:Error, info:React.ErrorInfo): void {
        this.setState({ error, info });
    }

    public render(): React.ReactNode {
        if (!!this.state.error) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
