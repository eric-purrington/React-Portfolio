import React from "react";
import Container from "../components/Container";
import HomeInfo from "../components/HomeInfo";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import Svg from "../components/Svg";
import icons from "../utils/icons.json";

function Home() {
    return (
        <div>
            <Container>
                <HomeInfo />
                <Technologies>
                    {icons.map(icon => (
                        <Svg
                        key={icon.name}
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
            <Footer />
        </div>
    )
}

export default Home;