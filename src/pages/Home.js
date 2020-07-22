import React from "react";
import Container from "../components/Container";
import HomeInfo from "../components/HomeInfo";
import Technologies from "../components/Technologies";
import Svg from "../components/Svg";
import icons from "../utils/icons.json";

function Home() {
    return (
        <Container>
            <HomeInfo />
            <Technologies>
                {icons.map(icon => (
                    <Svg
                    name={icon.name}
                    viewBox={icon.viewBox}
                    fill={icon.fill}
                    d={icon.d}
                    id={icon.id}
                    fillrule={icon.fillrule}
                    cliprule={icon.cliprule} />
                ))}
            </Technologies>
        </Container>
    )
}

export default Home;