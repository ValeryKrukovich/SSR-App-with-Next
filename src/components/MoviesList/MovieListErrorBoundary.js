import React from 'react';

export default function MovieListErrorBoundary(props) {
    const OopsText = () => <h2>Oops, something went wrong... We are doing our best to fix the issue</h2>

    let isListOk = true;

    return (
        <>
            {isListOk ? props.children : <OopsText />}
        </>
    )
}
