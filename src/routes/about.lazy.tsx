import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="mt-[100px] mx-auto max-w-[25%] rounded bg-white p-5 font-light shadow-xl">
      <span className="text-lg">
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span className="mt-2.5 block">− George Orwell, 1984</span>
    </div>
  );
}
