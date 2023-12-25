// material-ui
import { Container, Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Animation from './Animation';

// assets
import imgfeature1 from 'assets/images/landing/img-feature1.svg';
import imgfeature2 from 'assets/images/landing/img-feature2.svg';
import imgfeature3 from 'assets/images/landing/img-feature3.svg';

// ==============================|| LANDING - FEATURE PAGE ||============================== //

const FeatureBlock = () => (
  <Container>
    <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
      <Grid item xs={12}>
        <Grid container spacing={1} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
          <Grid item sm={10} md={6}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={12}>
                <Typography variant="subtitle1" color="primary">
                  Elevate360 nailed it!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2" sx={{ mb: 2 }}>
                  Why Elevate360?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  We offer unparalleled efficiency and a user-friendly design, setting a new benchmark for workplace excellence
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Animation
          variants={{
            hidden: { opacity: 0, translateY: 550 },
            visible: { opacity: 1, translateY: 0 }
          }}
        >
          <MainCard contentSX={{ p: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img src={imgfeature1} alt="feature" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                  User-Friendly Interfaces
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="secondary">
                  Elevate360 stands out with its intuitive design.
                </Typography>
              </Grid>
            </Grid>
          </MainCard>
        </Animation>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Animation
          variants={{
            hidden: { opacity: 0, translateY: 550 },
            visible: { opacity: 1, translateY: 0 }
          }}
        >
          <MainCard contentSX={{ p: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img src={imgfeature2} alt="feature" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                  Comprehensive Task Management
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="secondary">
                  Elevate360 goes beyond basic task tracking.
                </Typography>
              </Grid>
            </Grid>
          </MainCard>
        </Animation>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Animation
          variants={{
            hidden: { opacity: 0, translateY: 550 },
            visible: { opacity: 1, translateY: 0 }
          }}
        >
          <MainCard contentSX={{ p: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img src={imgfeature3} alt="feature" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                  Dynamic Charts and Analyticsn
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="secondary">
                  Delivering real-time insights into task completion rates and employee performance.
                </Typography>
              </Grid>
            </Grid>
          </MainCard>
        </Animation>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Animation
          variants={{
            hidden: { opacity: 0, translateY: 550 },
            visible: { opacity: 1, translateY: 0 }
          }}
        >
          <MainCard contentSX={{ p: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img src={imgfeature3} alt="feature" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                  Multi-Level User Roles
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="secondary">
                  Elevate360 excels in providing a tailored experience for admins streamlining onboarding.
                </Typography>
              </Grid>
            </Grid>
          </MainCard>
        </Animation>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Animation
          variants={{
            hidden: { opacity: 0, translateY: 550 },
            visible: { opacity: 1, translateY: 0 }
          }}
        >
          <MainCard contentSX={{ p: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img src={imgfeature3} alt="feature" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                  Multi-Level User Roles
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="secondary">
                  Elevate360 excels in providing a tailored experience for admins streamlining onboarding.
                </Typography>
              </Grid>
            </Grid>
          </MainCard>
        </Animation>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Animation
          variants={{
            hidden: { opacity: 0, translateY: 550 },
            visible: { opacity: 1, translateY: 0 }
          }}
        >
          <MainCard contentSX={{ p: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img src={imgfeature3} alt="feature" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                  Multi-Level User Roles
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="secondary">
                  Elevate360 excels in providing a tailored experience for admins streamlining onboarding.
                </Typography>
              </Grid>
            </Grid>
          </MainCard>
        </Animation>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Animation
          variants={{
            hidden: { opacity: 0, translateY: 550 },
            visible: { opacity: 1, translateY: 0 }
          }}
        >
          <MainCard contentSX={{ p: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img src={imgfeature3} alt="feature" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                  Multi-Level User Roles
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="secondary">
                  Elevate360 excels in providing a tailored experience for admins streamlining onboarding.
                </Typography>
              </Grid>
            </Grid>
          </MainCard>
        </Animation>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Animation
          variants={{
            hidden: { opacity: 0, translateY: 550 },
            visible: { opacity: 1, translateY: 0 }
          }}
        >
          <MainCard contentSX={{ p: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img src={imgfeature3} alt="feature" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                  Multi-Level User Roles
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="secondary">
                  Elevate360 excels in providing a tailored experience for admins streamlining onboarding.
                </Typography>
              </Grid>
            </Grid>
          </MainCard>
        </Animation>
      </Grid>
    </Grid>
  </Container>
);

export default FeatureBlock;
