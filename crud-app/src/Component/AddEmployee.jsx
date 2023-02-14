import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addEmployee } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    email: '',
    address: '',
    employeeId:'',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddEmployee = () => {
    const [employee, setEmployee] = useState(initialValue);
    const { name, email, address,employeeId, phone } = employee;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value})
    }

    const addEmployeeDetails = async() => {
        await addEmployee(employee);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add Employee</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address' value={address} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">employeeId</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='employeeId' value={employeeId} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addEmployeeDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddEmployee;