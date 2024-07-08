import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="shadow-xl p-5 rounded bg-white max-w-[25%] font-light mt-[100px] mx-auto">
      <span className="text-lg">
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span className="block mt-2.5">− George Orwell, 1984</span>
    </div>
  );
}
