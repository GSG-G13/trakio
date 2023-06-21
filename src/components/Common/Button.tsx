import React from 'react';
import { Button } from '@mui/material';

interface ButtonProps {
    onClick: () => void;
    label: string;
  }

const CustomButton: React.FC<ButtonProps> = ({ onClick, label }) => (
  <Button variant="contained" onClick={onClick}>
    {label}
  </Button>
);

export default CustomButton;
