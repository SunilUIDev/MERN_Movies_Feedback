import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import "./LandingStyles.css";

function LandingPage({ history }) {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h2 className="title">Movies Feedback</h2>
              <h3>
                <AiTwotoneLike className={"likeDislike"} />{" "}
                <AiTwotoneDislike className={"likeDislike"} />
              </h3>
              <p className="subtitle">
                One place for all your likes or dislikes.
              </p>
            </div>
            <div className="buttonContainer">
              <Button size="lg" className="landingbutton">
                Login
              </Button>
              <Button
                variant="outline-primary"
                size="lg"
                className="landingbutton"
              >
                Signup
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
