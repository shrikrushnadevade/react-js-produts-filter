import React from 'react'

const Form = (props) => {
    return (
        <>
            <tr>
                <th scope="row">{props.id}</th>
                <td>{props.name}</td>
                <td>{props.unitPrice}</td>
                <td>{props.sold}</td>
            </tr>

        </>
    )
}

export default Form;
