import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home | OpenJira EA'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title='Not started' />
            <CardContent>
              {/* add */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title='In progress' />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title='Completed' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
