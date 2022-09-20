import { Box } from '@mui/material';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ title = 'OpenJira | Elis Antonio', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {/* Sidebar */}
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};
