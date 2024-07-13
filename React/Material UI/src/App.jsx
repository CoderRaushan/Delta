
import './App.css'
import Button from '@mui/material/Button';
// for start icon button
import DeleteIcon from '@mui/icons-material/Delete';
// for send icon button
import SendIcon from '@mui/icons-material/Send';
// alert message
import Alert from '@mui/material/Alert';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';
function App() {
  return (
    <>
      <div>
      {/* <h1>Material UI</h1> */}
      {/* <Button variant="text">Text</Button> &nbsp; */}
      {/* <Button variant="contained">Contained</Button>&nbsp; */}
      {/* disabled button */}
      {/* <Button variant="outlined" disabled>disabled</Button>&nbsp; */}
      {/* color error */}
      {/* <Button variant="contained" color='success'>success</Button>&nbsp; */}
      {/* size different */}
      {/* <Button variant="contained" color='error' size='small'>small</Button>&nbsp; */}
      {/* <Button variant="contained" size='medium'>medium</Button>&nbsp; */}
      {/* <Button variant="contained" color='success' size='large' >large</Button>&nbsp; */}
      {/* iocn button */}
      {/* <br /><br />
      <Button variant="contained" color='success' size='large' startIcon={<DeleteIcon/>}>large</Button>&nbsp;
      <Button variant="contained" color='success' size='large' endIcon={<SendIcon />}>SendIcon</Button>&nbsp;

      <Alert severity="success">This is a success Alert.</Alert>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="warning">This is a warning Alert.</Alert>
      <Alert severity="error">Delete Option is given</Alert> */}
       <WeatherApp/>
      </div>
    </>
  )
}

export default App
