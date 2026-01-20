import About from "./About/page";
import Services from "./services/page";
import Trust from "./Testimonials/page";
import Process from "./Process/page";

export default function MainEntry() {
  return (
    <div className="flex flex-col min-h-dvh items-center justify-center bg-color-background">
      <About />
      <Services />
      <Process />
      <Trust />
    </div>
  );
}
