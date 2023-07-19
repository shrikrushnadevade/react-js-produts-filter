import React from 'react'

const Row = (props) => {

    return (
        <>
            <tr key={props.index}>
                <th scope="row">{props.index + 1}</th>
                <td>{props.name}</td>
                <td>&#8377; {props.unitPrice}</td>
                <td>&#8377; {props.sold}</td>
            </tr>

        </>
    )
}

export default Row;
