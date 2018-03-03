import React from 'react';
import { ViewComfy, ViewCompact } from 'material-ui-icons';

const LoadingComponent = () => (
    <div className="loading">
        <h2 className="loading__title">Cargando datos...</h2>
        <div className="loading__icon">
            <span className="spinner"></span>
        </div>
    </div>
);

export default LoadingComponent;