import React from 'react';

const Row = ({left, right}) => {
    return (
        <div className="row mt-4">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
}

export default Row;