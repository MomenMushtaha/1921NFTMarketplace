// Importing necessary libraries
import React from 'react';

/**
 * AdminTable component
 *
 * This component is responsible for rendering a table row with two cells.
 * The first cell displays the index and the second cell displays the address.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.index - The index of the row.
 * @param {string} props.address - The address to be displayed in the row.
 *
 * @returns {JSX.Element} A table row with two cells.
 */
const AdminTable = ({ address, index }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>&nbsp; {address} &nbsp; &nbsp;</td>
        </tr>
    );
}

// Exporting the AdminTable component
export default AdminTable;