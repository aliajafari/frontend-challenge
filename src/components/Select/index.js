import React, { Fragment } from 'react'

function index({ name, handleOnchange, value, label, options }) {
    return (
        <Fragment>
            <label htmlFor={name}>{label}</label>
            <select name={name} value={value} onChange={handleOnchange}>
                {options.map((item, i) => {
                    return <option key={i} value={item}>{item}</option>
                })}
            </select>
        </Fragment>
    )
}

index.defaultProps = {
    options: []
}

export default index
