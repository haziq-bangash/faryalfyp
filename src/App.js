import logo from './logo.svg';
import './App.css';

import Avatars from './component/avatars'
import Container from './component/UploadScript/container'
import UserForm from './component/userform'
import DataTable from './component/datatable'

function App() {
  return (
    <>
      <Avatars />
      <Container />
      <UserForm />
      <DataTable />
    </>
  );
}

export default App;
