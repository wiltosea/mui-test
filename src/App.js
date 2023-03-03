import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function App() {
  const MyButton = styled(Button)(({ theme }) => ({
    color: theme.palette.myCustomColor.superark,
    backgroundColor: theme.palette.myCustomColor.superLight,
    '&:hover': {
      backgroundColor: theme.palette.myCustomColor.main,
    },
  }));

  return (
    <>
      <Typography variant="myVariant">Hello From MUI V5</Typography>
      <Typography sx={{ color: 'myCustomColor.main' }}>
        Mensagem maior e mais extensa que o título
      </Typography>
      <Button sx={{ p: 4 }} variant="contained" color="secondary">
        Hello From MUI V5
      </Button>
      <MyButton>teste</MyButton>
    </>
  );
}

export default App;
