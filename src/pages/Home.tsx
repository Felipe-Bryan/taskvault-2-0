import React, { useEffect } from 'react';
import { Fab, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import TasksList from '../components/TasksList';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const loggedUser = useSelector((state: any) => state.loggedUserReducer);

  if (loggedUser) {
    return (
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <ResponsiveAppBar />
        </Grid>

        <Grid item xs={12}>
          <Typography marginLeft={2} variant="h5" className="animate__animated animate__slideInLeft">
            Bem vindo, {loggedUser.name}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} style={{ margin: '0px 7px' }}>
          <TasksList data={loggedUser.tasks ?? []} />
        </Grid>

        <Fab
          sx={{ position: 'fixed', bottom: 20, right: 20 }}
          color="primary"
          aria-label="add"
          // onClick={handleOpenDialog}
          className="animate__animated animate__zoomIn animate__delay-2s	2s"
          size="large"
        >
          <AddIcon />
        </Fab>

        {/* <AddTaskDialog
          onKeyDownAction={handleKeyDown}
          enableButton={!enableButton}
          detailError={detailError}
          detailErrorText={detailErrorText}
          descriptionError={descriptionError}
          descriptionErrorText={descriptionErrorText}
          actionConfirm={!editTask ? saveTask : saveEdit}
          confirmButtonTitle={!editTask ? 'Salvar' : 'Editar'}
          cancelButtonTitle="Cancelar"
          title={!editTask ? 'Adicionar novo recado' : 'Editar recado'}
          openDialog={openDialog}
          actionCancel={() => {
            setOpenDialog(false);
            setEditTask(false);
            dispatch(editUserTask(-1));
            handleClearNewTaskInputs();
          }}
          onChange1={handleTaskDetail}
          onChange2={handleTaskDescription}
          valueInput1={taskDetail}
          valueInput2={taskDescription}
        /> */}
      </Grid>
    );
  } else {
    useEffect(() => navigate('/'));
    return <></>;
  }
};

export default Home;
