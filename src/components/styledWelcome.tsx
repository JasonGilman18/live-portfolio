import * as React from "react";
import "../styles/global.css";
import "../styles/styledWelcome.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";


type StyledWelcomeProps = {main: boolean}
export const StyledWelcome: React.FunctionComponent<StyledWelcomeProps> = (props) => (

    <Container className={"welcomeBoxLg " + (props.main ? "main" : "sub")}>
        <Container className={"welcomeBoxMd " + (props.main ? "main" : "sub")}>
            <Container className={"welcomeBoxSm " + (props.main ? "main" : "sub")}>
                {props.children}
            </Container>
        </Container>
    </Container>
);