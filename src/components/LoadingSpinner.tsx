import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import "../components/styles/LoadingSpinner.css"

const LoadingSpinner = () => {

  return (
    <div className='loading-spinner'>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  </div>
  )
}

export default LoadingSpinner