import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';

// project-import
import { ThemeMode } from 'config';

import logoDark from 'assets/images/logo.png';
import logo from 'assets/images/logo-light.png';

const LogoMain = () => {
  const theme = useTheme();
  return (

    <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Elevate360" width="100" />
  );
};

LogoMain.propTypes = {
  reverse: PropTypes.bool
};

export default LogoMain;
