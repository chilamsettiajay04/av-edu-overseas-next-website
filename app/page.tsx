import { About } from "./About/page";
import Home from "./Home/page";
import Services from "./services/page";

export default function MainEntry() {
  return (
    <div className="flex flex-col min-h-dvh items-center justify-center bg-color-background">
      <Home />
      <About />
      <Services />
    </div>
  );
}
