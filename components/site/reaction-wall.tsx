"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useInView } from "motion/react";
import { reactions } from "@/lib/testimonials";

const lanes = [reactions.slice(0, 5), reactions.slice(5, 10), reactions.slice(10)];

export function ReactionWall() {
  const frame = useRef<HTMLDivElement>(null);
  const visible = useInView(frame, { amount: 0.3 });
  const [paused, setPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  return (
    <div ref={frame}>
      <div
        aria-hidden="true"
        className="reaction-stream space-y-3 overflow-hidden py-4 sm:py-6"
        style={{ "--reaction-play": visible && pageVisible && !paused ? "running" : "paused" } as CSSProperties}
      >
        {lanes.map((lane, index) => (
          <div key={index} className="reaction-track flex w-max" style={{ animationDuration: `${[48, 54, 42][index]}s`, animationDirection: index === 1 ? "reverse" : "normal" }}>
            {[0, 1].map((copy) => (
              <div key={copy} className={`reaction-group flex shrink-0 gap-3 pr-3 ${copy ? "reaction-repeat" : ""}`}>
                {[...lane, ...lane].map((reaction, item) => (
                  <p key={`${reaction.handle}-${item}`} className={`mat-cap flex h-9 shrink-0 items-center whitespace-nowrap rounded-[9px] px-3.5 text-[12.5px] leading-none text-ink-2 ${item >= lane.length ? "reaction-repeat" : ""}`}>
                    {reaction.quote}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <ul className="sr-only" aria-label="Reactions from the launch conversation">
        {reactions.map((reaction) => <li key={reaction.handle}>{reaction.quote}</li>)}
      </ul>
      <div className="mt-1 flex justify-end motion-reduce:hidden">
        <button type="button" onClick={() => setPaused((value) => !value)} className="inline-flex min-h-11 items-center text-[11.5px] text-ink-3 hover:text-ink">
          {paused ? "Play reactions" : "Pause reactions"}
        </button>
      </div>
    </div>
  );
}
