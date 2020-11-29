import React, { Fragment } from 'react'

function index({ name, label, type, handleOnchange, value }) {
    return (
        <Fragment>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} value={value} onChange={handleOnchange} />
        </Fragment>
    )
}

index.defautlProps = {
    type: 'text'
}

export default index
