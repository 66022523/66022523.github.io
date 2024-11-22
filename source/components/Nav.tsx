import { useState, useLayoutEffect } from "preact/hooks";
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  ArchiveBoxIcon,
  AcademicCapIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export function Nav() {
  const [activeId, setActiveId] = useState("");

  const offset = 0;
  const anchors = [
    {
      id: "home",
      label: "บ้าน",
      icon: HomeIcon,
    },
    {
      id: "about",
      label: "เกี่ยวกับ",
      icon: UserIcon,
    },
    {
      id: "skills",
      label: "ทักษะ",
      icon: CodeBracketIcon,
    },
    {
      id: "portfolio",
      label: "ผลงาน",
      icon: ArchiveBoxIcon,
    },
    {
      id: "experience",
      label: "ประสบการณ์",
      icon: AcademicCapIcon,
    },
    {
      id: "contact",
      label: "ติดต่อ",
      icon: PhoneIcon,
    },
  ];

  useLayoutEffect(() => {
    const clamp = (value: number) => Math.max(0, value);
    const isBetween = (value: number, floor: number, ceil: number) =>
      value >= floor && value <= ceil;
    const listener = () => {
      const scroll = window.scrollY;

      const position = anchors
        .map(({ id }) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [anchors, offset]);

  return (
    <nav class="fixed bottom-0 left-0 top-0 z-40 flex items-center p-4">
      <ul class="menu rounded-box bg-base-200/50 shadow-xl backdrop-blur">
        {anchors.map(({ id, label, icon: Icon }) => (
          <li>
            <a
              href={`#${id}`}
              class={`${activeId === id ? "active" : ""} tooltip tooltip-right`}
              data-tip={label}
              aria-label={label}
            >
              <Icon class="size-5" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
