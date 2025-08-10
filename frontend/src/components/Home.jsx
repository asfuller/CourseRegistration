import react from "react";
import "../assets/css/home.css"
import hero_img from "../assets/images/hero-img.jpg"
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Home = () => {
    return (
        <>
        <div className="container">
            <Grid container className="heroContainer" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={6}>
                    <div className="heroText">
                        <h6 className="heroSubTitle">Empower your learning journey with engaging, accessible courses anytime, anywhere.</h6>
                        <h1 className="heroTitle">Welcome to Schoobly: The best LMS for modern school systems</h1>
                        <p className="heroContent">
                            Learn smarter, Grow faster
                        </p>
                    </div>
                </Grid>
                <Grid  size={6}>
                    <img src={hero_img} className="heroImage" alt="Hero" />
                </Grid>
            </Grid>

            <div className="getStarted">
                <Button className="primaryButn" variant="contained">Get Started</Button>
            </div>
        </div>
        </>
    );
}

export default Home
