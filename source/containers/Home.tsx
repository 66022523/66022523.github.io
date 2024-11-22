import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export function Home() {
  return (
    <section id="home" class="hero min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-xl">
          <img
            class="mask mask-circle mx-auto mb-2"
            src="./assets/profile.jpg"
            width="96px"
            height="96px"
            alt="Chaiwat Suwannarat Profile"
          />
          <div class="badge badge-success flex">CHASU</div>
          <h1 class="text-5xl font-bold">
            Chaiwat Suwannarat
            <div
              class="tooltip tooltip-right tooltip-primary"
              data-tip="หรือที่รู้จักกันในนาม Maseshi"
            >
              <span class="badge badge-primary ml-2 px-0.5 align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </span>
            </div>
          </h1>
          <p class="pb-6">Full Stacks, Designer, Developer, DevOps</p>
          <a class="text-primary" href="#about" aria-label="Scroll Down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="mx-auto size-8 animate-bounce"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <ul class="absolute bottom-0 right-0 flex gap-4 p-4">
            <li>
              <a
                href="https://www.facebook.com/chasu2005"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/chasu2005"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@chasu2005"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTiktok} size="2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/66022523"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
