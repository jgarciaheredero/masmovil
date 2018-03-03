import React from 'react';
import { ErrorOutline } from 'material-ui-icons';

const styleIcon = {
    color: '#333',
    width: '6.5rem',
    height: 'auto'
}

const ErrorComponent = () => (
    <div className="error">
    <h2 className="error__title">Se ha producido un error. Vuelve a intentarlo más tarde.</h2>
        <ErrorOutline style={ styleIcon }/>
    </div>
);

export default ErrorComponent;