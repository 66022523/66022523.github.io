export function Canvas() {
  return (
    <div class="canvas">
      <div class="circles">
        <div class="circle research" />
        <div class="circle design" />
      </div>
      <svg
        class="overlay"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        viewBox="0 0 700 700"
        width="700"
        height="700"
      >
        <defs>
          <filter
            id="noise-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feTurbulence
              baseFrequency="0.102"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            />
            <feSpecularLighting
              surfaceScale="15"
              specularConstant="0.75"
              specularExponent="20"
              lighting-color="currentColor"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="100" />
            </feSpecularLighting>
          </filter>
        </defs>
        <rect
          width="700"
          height="700"
          fill="currentColor"
          filter="url(#noise-filter)"
        />
      </svg>
    </div>
  );
}
