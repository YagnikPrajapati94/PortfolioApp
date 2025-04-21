import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share'; // Custom main icon

const actions = [
  {
    icon: <GitHubIcon />,
    name: 'GitHub',
    url: 'https://github.com/your-username'
  },
  {
    icon: <LinkedInIcon />,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/your-profile'
  }
];

export default function SocialSpeedDial() {
  const handleActionClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <SpeedDial
      ariaLabel="Social Media SpeedDial"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<ShareIcon />} // Replaced plus with ShareIcon
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handleActionClick(action.url)}
        />
      ))}
    </SpeedDial>
  );
}
