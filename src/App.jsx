import './App.css'
import EmployeeList from './components/EmployeeList'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {




  return (
    <div className='container'>

      <div className='homePage'>
          <h1>Home Page</h1>
          <Header/>
          <SearchBar/>

          <div className='list of workers'>
            <EmployeeList/>
            <EmployeeList/>
            <EmployeeList/>
            <EmployeeList/>
            <EmployeeList/>
          </div>
      </div>

      <div className='employeePage'>
        <p>EmployeePage in progress ...</p>
      </div>
      
    </div>
  )
}

export default App
