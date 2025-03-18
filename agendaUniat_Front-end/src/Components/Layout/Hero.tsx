import { JSX } from "react";
import { Link } from "@arielgonzaguer/michi-router";

const Hero = (): JSX.Element => {
  return (
    <section aria-label="Botones de navegación">
      <Link to="/GreenRoom">Cuarto verde</Link>
      <Link to="/AudioRoom">Cuarto de audio</Link>
    </section>
  );
};

export default Hero;
