import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-9 lg:px-12 text-white ">
      <a className="active" href="/">
        <svg
          className="h-10"
          viewBox="0 0 284 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M93.368 104.408C86.2 104.408 81.0373 102.872 77.88 99.8C74.7227 96.728 73.144 91.6933 73.144 84.696C73.144 80.344 73.6133 76.8453 74.552 74.2C75.4907 71.4693 77.24 69.3787 79.8 67.928C82.36 66.4773 86.0293 65.496 90.808 64.984C95.5867 64.3867 101.816 64.088 109.496 64.088H115.768V73.432H97.592C93.752 73.432 91.1067 73.944 89.656 74.968C88.2053 75.9067 87.48 77.7413 87.48 80.472V92.888H101.944C105.784 92.888 108.387 92.4187 109.752 91.48C111.203 90.5413 111.928 88.7067 111.928 85.976V50.904C109.197 50.0507 105.4 49.624 100.536 49.624C97.0373 49.624 93.368 49.88 89.528 50.392C85.7733 50.904 81.9333 51.7147 78.008 52.824L75.96 41.56C78.3493 40.7067 80.9947 39.9813 83.896 39.384C86.8827 38.7867 89.9973 38.36 93.24 38.104C96.4827 37.7627 99.64 37.592 102.712 37.592C108.771 37.592 113.635 38.232 117.304 39.512C120.973 40.7067 123.619 42.712 125.24 45.528C126.861 48.2587 127.672 51.928 127.672 56.536V103H120.12L116.024 96.6C112.952 99.2453 109.539 101.208 105.784 102.488C102.115 103.768 97.976 104.408 93.368 104.408ZM188.575 39V103H181.023L176.927 96.6C173.428 99.2453 169.631 101.208 165.535 102.488C161.439 103.768 156.831 104.408 151.711 104.408C145.738 104.408 141.343 103.256 138.527 100.952C135.711 98.5627 134.303 94.8507 134.303 89.816V39H150.047V92.888H163.231C166.9 92.888 169.418 92.4187 170.783 91.48C172.148 90.5413 172.831 88.8347 172.831 86.36V39H188.575ZM216.873 37.592C222.249 37.592 226.644 38.104 230.057 39.128C233.47 40.0667 236.116 41.7733 237.993 44.248C239.956 46.7227 241.321 50.136 242.089 54.488C242.942 58.7547 243.369 64.2587 243.369 71C243.369 77.8267 242.942 83.4587 242.089 87.896C241.321 92.3333 239.956 95.7893 237.993 98.264C236.116 100.739 233.47 102.445 230.057 103.384C226.644 104.408 222.249 104.92 216.873 104.92C212.18 104.92 208.254 104.365 205.097 103.256C202.025 102.147 199.593 100.355 197.801 97.88C196.009 95.32 194.729 91.864 193.961 87.512C193.193 83.0747 192.809 77.5707 192.809 71C192.809 64.5147 193.193 59.1387 193.961 54.872C194.729 50.52 196.009 47.1067 197.801 44.632C199.678 42.072 202.153 40.28 205.225 39.256C208.382 38.1467 212.265 37.592 216.873 37.592ZM233.513 50.008H215.209C212.99 50.008 211.454 50.264 210.601 50.776C209.833 51.2027 209.449 52.056 209.449 53.336V92.376H227.881C230.1 92.376 231.593 92.1627 232.361 91.736C233.129 91.3093 233.513 90.456 233.513 89.176V50.008ZM249.257 16.728V103H241.833L233.513 89.176V18.264L249.257 16.728ZM257.218 40.408L272.962 38.232V103H257.218V40.408ZM265.154 29.144C261.57 29.144 259.138 28.5467 257.858 27.352C256.578 26.072 255.938 23.6827 255.938 20.184C255.938 16.6 256.578 14.168 257.858 12.888C259.138 11.608 261.57 10.968 265.154 10.968C268.653 10.968 271.042 11.608 272.322 12.888C273.602 14.168 274.242 16.6 274.242 20.184C274.242 23.6827 273.602 26.072 272.322 27.352C271.127 28.5467 268.738 29.144 265.154 29.144Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.4055 67.7371C19.2598 67.2843 16.464 66.6022 14.018 65.691C9.25137 63.8797 5.77171 61.0197 3.57904 57.111C1.38637 53.2023 0.290039 48.1497 0.290039 41.953C0.290039 35.661 1.38637 30.6083 3.57904 26.795C5.77171 22.8863 9.25137 20.0263 14.018 18.215C18.88 16.3083 25.1244 15.355 32.751 15.355C38.4498 15.355 43.338 15.8363 47.4156 16.7989L59.492 7.48999L71.504 19.073L63.3888 29.3523C64.795 32.8201 65.498 37.0204 65.498 41.953C65.498 48.245 64.4017 53.3453 62.209 57.254C60.0164 61.0673 56.489 63.8797 51.627 65.691C48.3166 66.949 44.2705 67.7701 39.4887 68.1544L39.043 73.413C44.477 74.1757 48.9577 75.0337 52.485 75.987C56.0124 76.845 58.777 77.989 60.779 79.419C62.781 80.849 64.211 82.6603 65.069 84.853C65.927 86.9503 66.356 89.5243 66.356 92.575C66.356 96.6539 65.5844 100.129 64.0413 103H2.6451L4.72304 91.288C9.10837 92.5273 13.3507 93.433 17.45 94.005C21.5494 94.6723 25.601 95.006 29.605 95.006C32.2744 95.006 34.753 94.9107 37.041 94.72C39.329 94.5293 41.5694 94.3387 43.762 94.148V87.57C34.61 86.9027 28.0797 86.0447 24.171 84.996C20.2624 83.9473 18.308 82.565 18.308 80.849L22.4055 67.7371ZM35.325 55.109H24.314V34.374C24.314 32.1813 24.743 30.7037 25.601 29.941C26.459 29.083 28.032 28.654 30.32 28.654H41.474V49.532C41.474 51.534 40.9974 52.964 40.044 53.822C39.186 54.68 37.613 55.109 35.325 55.109Z"
            fill="white"
          />
        </svg>
      </a>
      <nav className="flex" aria-label="Main">
        <a
          className="mx-2 text-base font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4 "
          href="/blog"
        >
          Blog
        </a>
        <a
          className="mx-2 text-base font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4 "
          href="/docs/"
        >
          Docs
        </a>
        <a
          href="https://github.com/gaudiorg"
          className="mx-2 text-base font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4 hidden sm:block"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
