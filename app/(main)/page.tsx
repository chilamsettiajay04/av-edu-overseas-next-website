import About from "./About/page";
import Services from "./Services/page";
import Trust from "./Testimonials/page";
import Process from "./Process/page";
import Home from "../Home/page";

export default function MainEntry() {
  return (
    <>
      <Home />
      <main className="flex-1 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col min-h-dvh items-center justify-center bg-color-background">
          <About />
          <Services />
          <Process />
          <Trust />
        </div>
      </main>
    </>
  );
}
