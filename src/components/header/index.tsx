import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Tab, Tabs, Typography, styled } from '@mui/material';
import {
  ABOUT,
  BLOGS,
  CONTACTME,
  HOME,
  PROJECTS,
  SKILLS,
} from '../../configs/constants/constants';

const TabStyled = styled(Tab)(({ theme }) => ({
  textTransform: 'capitalize',
  '&.MuiTab-root': {
    // Customize the styles of the Tab component
    fontWeight: theme.typography.subtitle2.fontWeight,
    fontSize: theme.typography.subtitle2.fontSize,
  },
}));

interface HeaderProps {
  section: string;
  handleTabChange: (newValue: string) => void;
}

export default function Header({ section, handleTabChange }: HeaderProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: 'secondary.main', boxShadow: 'none' }}
        position="fixed"
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1, pl: 2 , alignItems: 'center'}}>
          <Box flex={6} flexDirection="row" display="flex">
            {/* FIRST PART */}
            <Typography
              sx={{ fontWeight: 700, textTransform: 'uppercase' }}
              variant="subtitle1"
              color="text.primary"
            >
              ans
            </Typography>
            <Typography
              sx={{ fontWeight: 700, textTransform: 'uppercase' }}
              variant="subtitle1"
              color="primary.main"
            >
              nito
            </Typography>
          </Box>
          <Box flex={6}>
            <Tabs
              value={section}
              onChange={(_, newValue) => handleTabChange(newValue)}
            >
              <TabStyled label={HOME} value={HOME} />

              <TabStyled label={SKILLS} value={SKILLS} />
              <TabStyled label={ABOUT} value={ABOUT} />
              <TabStyled label={PROJECTS} value={PROJECTS} />
              <TabStyled label={BLOGS} value={BLOGS} />
              <TabStyled label={CONTACTME?.replace('_', ' ')} value={CONTACTME} />
            </Tabs>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
