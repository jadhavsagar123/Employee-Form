import Employee from '../model/Employee.js'

// Get all users
export const getEmployee = async (request, response) => {
    try{
        const employees = await Employee.find();
        response.status(200).json(employees);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
export const addEmployee = async (request, response) => {
    const employee = request.body;
    
    const newEmployee = new Employee(employee);
    try{
        await newEmployee.save();
        response.status(201).json(newEmployee);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a user by id
export const getEmployeeById = async (request, response) => {
    try{
        const employee = await Employee.findById(request.params.id);
        response.status(200).json(employee);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editEmployee = async (request, response) => {
    let employee = request.body;

    const editEmployee = new Employee(employee);
    try{
        await Employee.updateOne({_id: request.params.id}, editEmployee);
        response.status(201).json(editEmployee);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteEmployee = async (request, response) => {
    try{
        await Employee.deleteOne({_id: request.params.id});
        response.status(201).json("Employee deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}