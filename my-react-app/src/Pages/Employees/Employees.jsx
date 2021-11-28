import "./employees.css";
import { DataGrid } from '@mui/x-data-grid';

export default function Employees(){

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userName', headerName: 'User Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 220 },
        {
          field: 'salary',
          headerName: 'Salary',
          width: 90,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
      ];
      
      const rows = [
        { id: 1, userName: "Andrew Bond", email: "abond@companyname.com", salary: "$250,000", status: "active" },
        { id: 2, userName: "Randy Torres", email: "rtorres@companyname.com", salary: "$150,000", status: "active" },
        { id: 3, userName: "David Daniel", email: "ddaniel@companyname.com", salary: "$100,000", status: "active" },
        { id: 4, userName: "Jamie Rodriguez", email: "jrodriguez@companyname.com", salary: "$115,000", status: "inactive" },
        { id: 5, userName: "Joanna Arnold", email: "jarnold@companyname.com", salary: "$90,000", status: "active" },
        { id: 6, userName: "Edward Robinson", email: "erobinson@companyname.com", salary: "$165,000", status: "inactive" },
        { id: 7, userName: "Mary Trevino", email: "mtrevino@companyname.com", salary: "$85,000", status: "active" },
        { id: 8, userName: "Jason Patterson", email: "jpatterson@companyname.com", salary: "$200,000", status: "inactive" },
        { id: 9, userName: "Jon Romero", email: "jromero@companyname.com", salary: "$195,000", status: "active" },
       

      ];
    return(
        <div className="employees">
            <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]}checkboxSelection/>
        </div>

    )
}