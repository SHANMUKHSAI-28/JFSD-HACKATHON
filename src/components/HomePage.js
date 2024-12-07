import React from "react";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Container,
  Grid,
} from "@mui/material";

export function Homepage() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Navbar Section */}
      <AppBar
        position="sticky"
        sx={{
          background: "#2C3E50",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Toolbar>
          {/* Left-side buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              onClick={() => scrollToSection("about-us")}
              sx={{
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  color: "#F39C12",
                },
              }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              onClick={() => scrollToSection("contact-us")}
              sx={{
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  color: "#F39C12",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>

          {/* Centered Title */}
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              color: "#ECF0F1",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Placement Portal
          </Typography>

          {/* Admin Login Button */}
          <Box>
            <Button
              href="/admin-login"
              variant="outlined"
              color="inherit"
              sx={{
                borderRadius: "20px",
                padding: "5px 15px",
                textTransform: "none",
                border: "2px solid #ECF0F1",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#F39C12",
                  color: "#2C3E50",
                },
              }}
            >
              Admin Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(to right, #1C2833, #34495E)",
          padding: "50px 0",
          color: "#ECF0F1",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Empowering Careers, Connecting Opportunities
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", margin: "20px 0" }}
          >
            Discover the best placement solutions tailored for students and recruiters.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              href="/student-login"
              variant="contained"
              sx={{
                backgroundColor: "#F39C12",
                color: "#2C3E50",
                fontWeight: "bold",
                marginRight: "10px",
                "&:hover": {
                  backgroundColor: "#D35400",
                },
              }}
            >
              Student Login
            </Button>
            <Button
              href="/student-register"
              variant="outlined"
              sx={{
                color: "#F39C12",
                border: "2px solid #F39C12",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#F39C12",
                  color: "#2C3E50",
                },
              }}
            >
              Register Now
            </Button>
          </Box>
        </Container>
      </div>

      {/* Sections */}
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          {/* Student Section */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#3498DB" }}
                >
                  Student Section
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Access job opportunities and track applications seamlessly.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href="/student-login"
                  variant="contained"
                  sx={{
                    backgroundColor: "#3498DB",
                    color: "#FFF",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#2980B9",
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  href="/student-register"
                  variant="outlined"
                  sx={{
                    color: "#3498DB",
                    border: "2px solid #3498DB",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#3498DB",
                      color: "#FFF",
                    },
                  }}
                >
                  Register
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Recruiter Section */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#28B463" }}
                >
                  Recruiter Section
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Find and recruit talented students efficiently.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href="/employer-login"
                  variant="contained"
                  sx={{
                    backgroundColor: "#28B463",
                    color: "#FFF",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#1D8348",
                    },
                  }}
                >
                  Login
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* About Us Section */}
      <div
        id="about-us"
        style={{
          padding: "50px 0",
          backgroundColor: "#F7F9F9",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#2C3E50" }}
          >
            About Us
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "#34495E" }}>
            We are dedicated to providing the best platform for students and recruiters to
            connect and achieve their goals. Our portal is designed to streamline the placement
            process and create opportunities for everyone.
          </Typography>
        </Container>
      </div>

      {/* Contact Us Section */}
      <div
        id="contact-us"
        style={{
          padding: "50px 0",
          backgroundColor: "#E5E8E8",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#2C3E50" }}
          >
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "#34495E" }}>
            For any inquiries, feel free to reach out to us:
          </Typography>
          <ul style={{ listStyleType: "none", padding: 0, marginTop: 15 }}>
            <li>Email: saishanmuk28@gmail.com</li>
            <li>Phone: +91-7382918887</li>
            <li>Admission Number: 22200030054</li>
          </ul>
        </Container>
      </div>
    </div>
  );
}
