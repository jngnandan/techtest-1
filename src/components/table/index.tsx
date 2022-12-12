import React from 'react';

export enum TableStyle {
    StyleOne = "style-one",
    StyleTwo = "style-two"
}

function Table({title, data, style}: {title: string, data: any, style: TableStyle}) {

    return (
        <div>
            <h2>{title}</h2>
            <table className={`table table--${style}`}>

            </table>
        </div>
    );
}

export default Table;
