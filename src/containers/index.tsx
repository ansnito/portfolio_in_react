import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import Header from '../components/header';
import {
  ABOUT,
  BLOGS,
  CONTACTME,
  HOME,
  PROJECTS,
  SKILLS,
} from '../configs/constants/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/CheckCircleTwoTone';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import gmailIcon from '../assets/gmail.png';
import mePhoto from '../assets/me.png';
import aboutMePhoto from '../assets/aboutme.png';
import skillsPhoto from '../assets/skills.png';
import FEImage from '../assets/fe.png';
import QAImage from '../assets/qa.png';
import UXImage from '../assets/ux.png';
import EducationImage from '../assets/education.png';
import ExperienceImage from '../assets/experience.png';
import KingstonImage from '../assets/kingston.png';
import MGImage from '../assets/mg.png';
import EmpressImage from '../assets/empress.png';
import TeachMateImage from '../assets/teachmate.png';
import NestieImage from '../assets/nestie.png';
// import Footer from "../components/footer"

interface Blog {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  enclosure: any; // You can specify a more specific type if needed
  categories: string[]; // You can specify a more specific type if needed
}

const sections = [HOME, SKILLS, ABOUT, PROJECTS, BLOGS, CONTACTME];
export default function IndexPage() {
  const location = useLocation();
  const defaultTab = location.hash.replace('#', '') || HOME;
  const [value, setValue] = React.useState(defaultTab);
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [isNestie, setIsNestie] = React.useState<Boolean>(false)
  const [isTeachMate, setIsTeachMate] = React.useState<Boolean>(false)


  const navigate = useNavigate();
  // Event listener to update the URL based on scroll position
  const handleScroll = () => {
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          console.log(section);
          navigate(`#${section}`);
          setValue(section);
        }
      }
    });
  };

  const handleTabChange = (newValue: string) => {
    // Update the URL hash when a tab is selected
    navigate(`#${newValue}`);
    setValue(newValue);
    const sectionElement = document.getElementById(newValue);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (!blogs.length) {
      fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ansnitomaria'
      )
        .then((resp) => resp.json())
        .then((data) => {
          setBlogs(data.items);
        });
    }
  }, [blogs]);

  const openMediumPost = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <Box>
      <Header section={value} handleTabChange={handleTabChange} />
      <Box p={8}>
        <Box
          key={HOME}
          id={HOME}
          sx={{
            mb: 20,
            display: 'flex',
            mt: 20,
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Box>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Typography variant="h2" gutterBottom>
                      Hi, I'm Ans Nito
                    </Typography>
                  </Grid>
                  <Grid item sx={{ mt: 6 }}>
                    <Typography variant="h1" gutterBottom color="primary.main">
                      Frontend Developer & <br /> UI/UX Designer
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" gutterBottom>
                      Front-End Developer & UI/UX Designer with a passion for
                      crafting captivating web and mobile applications using
                      JavaScript/React JS. Proficient in both manual and
                      automated testing for impeccable quality assurance{' '}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <List>
                      <ListItem
                        disableGutters
                        sx={{ display: 'flex', alignItems: 'flex-start' }}
                      >
                        <CheckIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="subtitle2" gutterBottom>
                          Skilled in Frontend Development using HTML, CSS,
                          Javascript and React JS delivering user centered
                          product within time frame.
                        </Typography>
                      </ListItem>
                      <ListItem
                        disableGutters
                        sx={{ display: 'flex', alignItems: 'flex-start' }}
                      >
                        <CheckIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="subtitle2" gutterBottom>
                          Skilled in conducting user research, creating
                          wireframes, prototypes to deliver intuitive and
                          visually appealing products.
                        </Typography>
                      </ListItem>
                      <ListItem
                        disableGutters
                        sx={{ display: 'flex', alignItems: 'flex-start' }}
                      >
                        <CheckIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="subtitle2" gutterBottom>
                          Committed to continously expanding knowledge and
                          staying up-to-date with the latest industry trends.
                        </Typography>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid container direction="row" item>
                    <IconButton
                      href="https://github.com/ansnito"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                    >
                      <img
                        src={githubIcon}
                        alt="GitHub"
                        style={{
                          width: '40px',
                          height: '40px',
                          marginRight: '10px',
                        }}
                      />
                    </IconButton>
                    <IconButton
                      href="https://www.linkedin.com/in/ans-nito-366819171/"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                    >
                      <img
                        src={linkedinIcon}
                        alt="Linkedin"
                        style={{
                          width: '40px',
                          height: '40px',
                          marginRight: '10px',
                        }}
                      />
                    </IconButton>
                    <IconButton
                      href="mailto:ansnitomaria@gmail.com"
                      target="_blank"
                      color="primary"
                    >
                      <img
                        src={gmailIcon}
                        alt="Gmail"
                        style={{
                          width: '40px',
                          height: '40px',
                          marginRight: '10px',
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item sx={{ mt: 3 }}>
                    <Button
                      sx={{ textTransform: 'capitalize' }}
                      variant="contained"
                    >
                      My Resume
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={mePhoto} style={{ width: '80%' }} alt="me" />
            </Grid>
          </Grid>
        </Box>

        <Box
          key={SKILLS}
          id={SKILLS}
          sx={{
            mb: 20,
            display: 'flex',
            mt: 20,
          }}
        >
          <Grid container direction="row" spacing={3} alignItems="center">
            <Grid
              item
              xs={5}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <img
                src={skillsPhoto}
                style={{ width: '100%', marginTop: 20 }}
                alt="aboutme"
              />
            </Grid>
            <Grid item xs={7}>
              <Box display="flex" flexDirection="column">
                <Typography
                  color="primary.dark"
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: '600' }}
                >
                  Skills!! &#128187;
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  color="text.secondary"
                  sx={{ mt: 5, textDecoration: 'underline' }}
                >
                  Frontend Development
                </Typography>
                <img
                  src={FEImage}
                  style={{ width: 340, marginTop: 20, marginBottom: 20 }}
                  alt="fe"
                />
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="body2"
                  gutterBottom
                  color="text.secondary"
                  sx={{ mt: 5, textDecoration: 'underline' }}
                >
                  UI/UX Design
                </Typography>
                <img
                  src={UXImage}
                  style={{ width: 340, marginTop: 20, marginBottom: 20 }}
                  alt="ux"
                />
                <Typography variant="caption" gutterBottom color="text.primary">
                  UX Research - User Interviews, Information Architecture, User
                  Personas, Customer Journey Map, Story Board, User Stories, UI
                  testing.
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="body2"
                  gutterBottom
                  color="text.secondary"
                  sx={{ mt: 5, textDecoration: 'underline' }}
                >
                  Software Testing- Manual & Automation
                </Typography>
                <img
                  src={QAImage}
                  style={{ width: 340, marginTop: 20, marginBottom: 20 }}
                  alt="qa"
                />
                <Typography variant="caption" gutterBottom color="text.primary">
                  Requirement Gathering, Test Plan, Test Cases, Test Report,
                  Documentation.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          key={ABOUT}
          id={ABOUT}
          display="flex"
          flexDirection="column"
          sx={{
            mb: 20,
            display: 'flex',
            mt: 20,
            alignItems: 'center',
          }}
        >
          <Grid container direction="row" spacing={3} alignItems="center">
            <Grid item xs={8}>
              <Typography
                color="primary.dark"
                variant="h6"
                gutterBottom
                sx={{ fontWeight: '600' }}
              >
                About Me!! &#128526;
              </Typography>
              <Typography variant="body2" gutterBottom>
                A frontend developer & UI/UX designer who made a significant
                shift in my professional trajectory to further enhance my skills
                in web development . My aim is to deliver exceptional user
                experiences, which led me to pursue a Master's degree in User
                Experience Design at Kingston University in London.
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <img
                src={aboutMePhoto}
                style={{ width: '100%', marginTop: 20 }}
                alt="aboutme"
              />
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ mt: 12 }}
            direction="column"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <img src={EducationImage} alt="education" style={{ width: 60 }} />
            </Grid>
            <Grid item xs={12} sx={{ width: '100%' }}>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                spacing={10}
              >
                <Grid
                  item
                  xs={5}
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <img
                    src={KingstonImage}
                    style={{ width: 120 }}
                    alt="kingston"
                  />
                </Grid>
                <Grid
                  item
                  xs={7}
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: '500' }}
                    >
                      Kingston Univeristy, London
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Master of User Experience Design
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      January 2022-January 2023
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ width: '100%', mt: 10 }}>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                spacing={10}
              >
                <Grid
                  item
                  xs={5}
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <img src={MGImage} style={{ width: 120 }} alt="mg" />
                </Grid>
                <Grid
                  item
                  xs={7}
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: '500' }}
                    >
                      Mahatma Gandhi Univeristy, India
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Bachelor of Engineering in Information Technology
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      June 2010-June 2014
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ mt: 10 }}
            spacing={2}
          >
            <Grid item xs={12}>
              <img
                src={ExperienceImage}
                alt="experience"
                style={{ width: 60 }}
              />
            </Grid>
            <Grid item xs={12} sx={{ width: '100%' }}>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                spacing={10}
              >
                <Grid
                  item
                  xs={5}
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <img
                    src={EmpressImage}
                    style={{ width: 120 }}
                    alt="empress"
                  />
                </Grid>
                <Grid
                  item
                  xs={7}
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: '500' }}
                    >
                      Quality Analyst
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Manual & Automation Testing
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Feb 2019- Nov 2021
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box key={PROJECTS} id={PROJECTS}></Box>

        <Box
          display="flex"
          flexDirection="column"
          sx={{
            mb: 20,
            display: 'flex',
            mt: 20,
            alignItems: 'center',
          }}
        >
          <Box>
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              sx={{ mb: 5 }}
            >
              <Grid item xs={6}>
                <Typography
                  color="primary.dark"
                  variant="h6"
                  sx={{ fontWeight: '600' }}
                >
                  Projects &#128197;
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" gutterBottom>
                  UI Design
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={3} alignItems="center">
              <Grid item xs={6}>
               {isNestie ?  <Box
                  sx={{
                    margin: 'auto',
                    borderStyle: 'none',
                    height: '100%',
                    display: 'block',
                  }}
                >
                  <iframe
                    style={{
                      border: 'none',
                    }}
                    width="100%"
                    height="1087"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FtFgnEjcg9IA1famn7rkofT%2FNestie%3Ftype%3Ddesign%26node-id%3D100-2677%26t%3DAgN9alqzuoKBQBUg-1%26scaling%3Dmin-zoom%26page-id%3D2%253A4%26starting-point-node-id%3D100%253A2677%26mode%3Ddesign%26hide-ui=1"
                  ></iframe>
                </Box>:
                   <img src={NestieImage} alt='teachmate' style={{width: '100%'}}></img>
                }
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ color: '#03BC85' }}>
                  Nesite
                </Typography>
                <Typography variant="subtitle1">
                  An Application designed to simplify the life of international
                  students in Shared Residences.
                </Typography>
                <Button onClick={() => setIsNestie(true)} variant='contained' sx={{backgroundColor: '#03BC85', mt: 5}} disableElevation>View</Button>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={3} alignItems="center">
              <Grid item xs={6}>
                { isTeachMate ? 
                <Box
                  sx={{
                    margin: 'auto',
                    borderStyle: 'none',
                    height: '100%',
                    display: 'block',
                  }}
                >
                  <iframe
                    style={{
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                    }}
                    width="100%"
                    height="1087"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fep52iT0bx0MRfp4dJWVDVl%2FTeach-Mate%3Ftype%3Ddesign%26node-id%3D1-19%26t%3DWRZwKFClXDglJgfm-1%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A19%26mode%3Ddesign%26hide-ui=1"
                  ></iframe>
                </Box>:
                
                <img src={TeachMateImage} alt='teachmate' style={{width: '100%'}}></img>
                }
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" color="primary.main">
                  TeachMate
                </Typography>
                <Typography variant="subtitle1">
                  An Application for Indian teachers is to provide a better
                  solution to teachers by designing an application providing
                  employment opportunities, and knowledge about training
                  institutes in the nearest locality based on reviews and
                  ratings. The project also aims at enhancing the career skills
                  of the teachers through e-learning as well as incorporating a
                  community platform to establish a social rapport with
                  co-teachers who have similar interests.
                </Typography>
                <Button onClick={() => setIsTeachMate(true)} variant='contained' sx={{ mt: 5}} disableElevation>View</Button>

              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          key={BLOGS}
          id={BLOGS}
          display="flex"
          flexDirection="column"
          sx={{
            mb: 20,
            display: 'flex',
            mt: 20,
            alignItems: 'center',
          }}
        >
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            sx={{ mb: 5 }}
          >
            <Grid item xs={6}>
              <Typography
                color="primary.dark"
                variant="h6"
                sx={{ fontWeight: '600' }}
              >
                Blogs &#128240;
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {blogs?.map((blog) => (
              <Grid item xs={6} key={blog.guid}>
                <Card sx={{ height: 400 }}>
                  <CardActionArea onClick={() => openMediumPost(blog.link)}>
                    <CardMedia
                      component="img"
                      alt={blog.title}
                      height={300}
                      image={blog.thumbnail}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {blog.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {blog.pubDate}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          key={CONTACTME}
          id={CONTACTME}
          display="flex"
          flexDirection="column"
          sx={{
            display: 'flex',
            mt: 20,
            alignItems: 'center',
          }}
        >
          <Grid container direction="row" item justifyContent="center">
            <IconButton
              href="https://github.com/ansnito"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                style={{
                  width: '40px',
                  height: '40px',
                  marginRight: '10px',
                }}
              />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/ans-nito-366819171/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <img
                src={linkedinIcon}
                alt="Linkedin"
                style={{
                  width: '40px',
                  height: '40px',
                  marginRight: '10px',
                }}
              />
            </IconButton>
            <IconButton
              href="mailto:ansnitomaria@gmail.com"
              target="_blank"
              color="primary"
            >
              <img
                src={gmailIcon}
                alt="Gmail"
                style={{
                  width: '40px',
                  height: '40px',
                  marginRight: '10px',
                }}
              />
            </IconButton>
          </Grid>
        </Box>
      </Box>
      <Box bgcolor="primary.main" width="100%" height={100} display='flex' justifyContent='center' alignItems='center'>
        <Typography color='secondary.main' variant='caption' sx={{textAlign: 'center'}}>60 havelock Street<br/> Aylesbury<br/> HP199AW<br/> United Kingdom</Typography>
      </Box>
    </Box>
  );
}
