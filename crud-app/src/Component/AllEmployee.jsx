import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getEmployee,deleteEmployee } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: blue;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllEmployee = () => {
    const [employee, setEmployee] = useState([]);
    
    useEffect(() => {
        getAllEmployee();
    }, []);

    const deleteEmployeeData = async (id) => {
        await deleteEmployee(id);
        getAllEmployee();
    }

    const getAllEmployee = async () => {
        let response = await getEmployee();
        setEmployee(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>EmployeeId</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {employee.map((employee) => (
                    <TRow key={employee.id}>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.address}</TableCell>
                        <TableCell>{employee.employeeId}</TableCell>
                        <TableCell>{employee.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${employee._id}`}>Edit</Button> 
                            <Button color="secondary" variant="contained" onClick={() => deleteEmployeeData(employee._id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllEmployee;