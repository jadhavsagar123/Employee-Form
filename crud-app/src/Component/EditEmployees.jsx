import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployee, editEmployee } from '../Service/api';

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
        margin-top: 20px
`;

const EditEmployees = () => {
    const [employee, setEmployee] = useState(initialValue);
    const { name, email, address,employeeId, phone } = employee;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadEmployeeDetails();
    }, []);

    const loadEmployeeDetails = async() => {
        const response = await getEmployee(id);
        setEmployee(response.data);
    }

    const editEmployeeDetails = async() => {
        const response = await editEmployee(id, employee);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setEmployee({...employee, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address</InputLabel>
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
                <Button variant="contained" color="primary" onClick={() => editEmployeeDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditEmployees;