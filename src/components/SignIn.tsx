import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Container
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          py: 3
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 400,
            boxShadow: 3,
            borderRadius: 2
          }}
        >
          <CardContent sx={{ p: 4 }}>
            {/* Title */}
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 1,
                color: '#1a1a1a'
              }}
            >
              Sign in
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                color: '#666',
                mb: 4,
                fontSize: '0.9rem'
              }}
            >
              Please login to continue to your account.
            </Typography>

            {/* Form Fields */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Email Field */}
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                type="email"
                defaultValue="jonas.kahnwald@gmail.com"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1
                  }
                }}
              />

              {/* Password Field */}
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1
                  }
                }}
              />

              {/* Checkbox */}
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: '#666',
                      '&.Mui-checked': {
                        color: '#1976d2',
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: '0.9rem', color: '#666' }}>
                    Keep me logged in
                  </Typography>
                }
                sx={{ alignSelf: 'flex-start' }}
              />

              {/* Sign In Button */}
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#1976d2',
                  color: 'white',
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 'medium',
                  borderRadius: 1,
                  textTransform: 'none',
                  boxShadow: 2,
                  '&:hover': {
                    bgcolor: '#1565c0',
                    boxShadow: 3
                  }
                }}
              >
                Sign in
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default SignIn;
