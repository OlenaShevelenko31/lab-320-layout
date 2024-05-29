import '../App.css'
import EmployeeList from './EmployeeList';


function Employee (){
    return (
        <div className='employee'>
            <EmployeeList/>
            <EmployeeList/>
            <EmployeeList/>
            <EmployeeList/>
            <EmployeeList/>
            <EmployeeList/>
        </div>    
    )
}
 
export default Employee;