import { createFileRoute } from "@tanstack/react-router";
import "./About.css";

export const Route = createFileRoute("/about/")({
  component: About,
});

function About() {
  return (
    <div className="about__container">
      <span>
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span>− George Orwell, 1984</span>
    </div>
  );
}
