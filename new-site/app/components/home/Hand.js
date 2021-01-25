const Hand = ({ className = "", style = "", variant = "" }) => {
  style = { ...style, maxWidth: "120rem" }
  className = `absolute hidden xl:block hand ${className}`
  switch (variant) {
    case "hero-rightarm":
      return (
        <svg
          width="982"
          height="208"
          viewBox="0 0 982 208"
          fill="none"
          style={style}
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M118 186.266C57.1274 212.236 18.5522 173.216 13.0004 127.51C4.00037 -25.3613 278.166 18.2916 278.166 18.2916C350.492 30.4269 393.243 51.884 434.035 68.0809C474.827 84.2777 543.902 117.65 594.286 127.51C644.671 137.37 674 139 736.5 107.031C799 75.0629 834.5 41 981 30.5"
            stroke="url(#hero-rightarm)"
            stroke-width="25"
          />
          <path
            d="M123.908 170.828C122.708 169.628 112.896 174.495 108.396 176.828L109.599 178.748C112.432 185.581 118.299 199.248 119.099 199.248C120.099 199.248 133.973 194.464 134.744 189.454C135.514 184.445 125.408 172.328 123.908 170.828Z"
            fill="var(--color-stop)"
          />
          <defs>
            <linearGradient
              id="hero-rightarm"
              x1="731"
              y1="13"
              x2="964.461"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color-stop)" />
              <stop offset="1" stop-color="var(--color-stop)" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )
    case "hero-righthand":
      return (
        <svg
          width="73"
          height="78"
          viewBox="0 0 73 78"
          fill="none"
          style={style}
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.2996 17.7102C18.2108 38.0297 22.4787 31.541 12.079 39.3321C-7.13906 51.8432 18.5344 67.6414 25.7152 67.1347C28.5706 67.2746 38.4463 60.8317 42.2092 57.6385C45.2196 55.084 55.4957 50.9048 60.2575 49.1345C63.768 47.5891 62.4191 43.5731 58.8336 44.3133C58.0285 44.3884 55.6507 45.0161 55.6507 45.0161C53.9749 45.3347 48.2552 47.5733 50.0333 43.9967C51.8114 40.4201 64.5421 30.6252 66.4046 28.8272C69.1266 26.1994 65.7759 22.9573 63.2114 25.0643C60.6469 27.1713 54.3288 33.445 52.7933 34.4001C50.8273 35.9638 49.4692 34.4661 51.267 32.837C52.1659 32.0224 63.3516 22.209 65.111 20.177C67.6244 17.2742 63.8834 14.8501 61.1874 17.2944C59.3902 18.9237 48.9446 28.8304 47.7743 29.3456C45.4712 30.7783 44.7018 29.1214 46.0795 27.7169C47.0439 26.7338 55.3373 19.8699 57.0967 17.838C60.6155 13.7741 56.365 11.734 53.604 14.3466C53.604 14.3466 44.2253 23.5046 42.6899 24.4596C40.7239 26.0232 39.928 23.58 40.892 22.5969C41.8561 21.6138 44.4211 19.507 47.3132 16.5572C51.0663 12.3902 46.3851 10.9587 43.9236 13.2999C41.462 15.641 39.2996 17.7102 39.2996 17.7102Z"
            fill="var(--color-stop)"
          />
        </svg>
      )
    case "hero-leftarm":
      return (
        <svg
          width="1558"
          height="298"
          viewBox="0 0 1558 298"
          fill="none"
          style={style}
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1509.43 12.3718C1508.28 13.6179 1513.52 23.2312 1516.03 27.6361L1517.9 26.3589C1524.62 23.2597 1538.05 16.8613 1538.02 16.0619C1537.98 15.0627 1532.65 1.38682 1527.62 0.813304C1522.58 0.239789 1510.87 10.8141 1509.43 12.3718Z"
            fill="var(--color-stop)"
          />
          <path
            d="M1527.54 20C1540.45 44.6976 1559.35 98.008 1527.54 136.79C1480.03 194.731 1380.34 219.066 1307.26 190.965C1237.79 159.126 1263.41 139.147 1064.97 52.7328C866.522 -33.6809 821.336 221.064 588.418 150.135C434.185 103.167 435.624 119.166 316.836 190.965C198.048 262.763 209.228 275.01 1 285"
            stroke="url(#hero-leftarm)"
            stroke-width="25"
          />
          <defs>
            <linearGradient
              id="hero-leftarm"
              x1="21.0309"
              y1="20.2654"
              x2="234.129"
              y2="20.1485"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color-stop)" stop-opacity="0" />
              <stop offset="1" stop-color="var(--color-stop)" />
            </linearGradient>
          </defs>
        </svg>
      )
    case "hero-lefthand":
      return (
        <svg
          width="63"
          height="56"
          viewBox="0 0 63 56"
          fill="none"
          style={style}
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.3105 6.17507C49.3993 26.4945 45.1314 20.0059 55.5312 27.797C74.7492 40.3081 49.0758 56.1063 41.8949 55.5995C39.0395 55.7394 29.1638 49.2965 25.4009 46.1034C22.3905 43.5489 12.1144 39.3696 7.35258 37.5993C3.84212 36.054 5.19099 32.0379 8.7765 32.7782C9.58161 32.8532 11.9594 33.4809 11.9594 33.4809C13.6352 33.7995 19.3549 36.0381 17.5768 32.4615C15.7987 28.8849 3.06797 19.09 1.20554 17.292C-1.51647 14.6643 1.83416 11.4221 4.39867 13.5291C6.96318 15.6362 13.2814 21.9099 14.8168 22.865C16.7828 24.4287 18.1409 22.9309 16.3431 21.3018C15.4442 20.4872 4.25849 10.6738 2.4991 8.64182C-0.0143295 5.73905 3.72669 3.31492 6.42269 5.75923C8.21987 7.3885 18.6655 17.2953 19.8358 17.8104C22.1389 19.2432 22.9083 17.5862 21.5306 16.1818C20.5662 15.1986 12.2728 8.33475 10.5134 6.30282C6.9946 2.23891 11.2451 0.19889 14.0061 2.81145C14.0061 2.81145 23.3848 11.9694 24.9202 12.9244C26.8862 14.488 27.6822 12.0448 26.7181 11.0617C25.754 10.0786 23.189 7.97183 20.2969 5.02205C16.5438 0.855054 21.225 -0.576457 23.6865 1.76471C26.1481 4.10588 28.3105 6.17507 28.3105 6.17507Z"
            fill="var(--color-stop)"
          />
        </svg>
      )
    case "concepts-right":
      return (
        <svg
          width="730"
          height="202"
          viewBox="0 0 730 202"
          fill="none"
          style={style}
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.044 98.5362C30.9131 100.099 41.6149 104.007 45.1834 104.605C57.6823 106.698 61.9164 132.109 49.8005 134.292L22.1683 138.449C16.379 138.815 14.973 137.685 14.4633 135.219C13.9536 132.753 15.4409 132.164 16.5863 131.861C17.7317 131.558 24.0936 131.006 23.8427 129.963C23.6468 129.148 22.101 129.729 19.8433 130.196C17.4729 130.686 10.9859 132.713 8.66418 131.339C6.34243 129.966 6.21071 126.329 8.91392 125.805C11.6171 125.281 16.5169 124.887 16.5169 124.887C18.6105 124.594 18.0852 122.767 16.023 123.055C16.023 123.055 11.1366 123.834 9.49261 123.969C7.84861 124.104 5.14852 124.904 4.67485 121.519C4.20118 118.135 8.30112 118.197 9.23311 118.067C10.1651 117.936 13.633 117.593 14.4988 117.33C15.3647 117.066 15.0021 115.834 14.2901 115.838C13.5781 115.843 11.4031 116.049 8.67302 116.188C6.79283 116.285 5.70429 115.591 5.54028 113.069C5.37627 110.546 6.39422 108.96 12.4562 109.185C17.6624 109.539 21.0714 109.75 21.7741 108.251C22.3253 107.075 19.9195 104.515 18.6305 102.778C16.4823 100.228 15.256 96.6248 15.2092 92.6994C15.4875 88.42 19.6254 88.0129 20.65 92.3951C22.1883 96.2029 25.1749 96.9729 28.044 98.5362Z"
            fill="var(--color-stop)"
          />
          <path
            d="M510.275 69.3963L520.526 76.5483L520.545 76.5223L520.563 76.4963L510.275 69.3963ZM473.37 124.365L462.754 117.766L473.37 124.365ZM274.006 104.417L286.492 103.822L274.006 104.417ZM288.849 63.966L296.595 73.777L288.849 63.966ZM326.006 133.508L328.511 145.754L326.006 133.508ZM261.143 128.244L257.08 140.065L261.143 128.244ZM214.043 104.417L217.996 92.5581L214.043 104.417ZM149.211 101.424L146.376 89.2502L149.211 101.424ZM77.6896 109.969C70.9629 111.521 66.7681 118.232 68.3205 124.959C69.8728 131.686 76.5843 135.881 83.3111 134.328L77.6896 109.969ZM510.275 69.3963C500.023 62.2443 500.023 62.2446 500.022 62.245C500.022 62.2453 500.022 62.2459 500.021 62.2465C500.021 62.2478 500.019 62.2496 500.018 62.252C500.014 62.2567 500.009 62.2636 500.003 62.2727C499.991 62.2908 499.972 62.3175 499.947 62.3525C499.899 62.4227 499.826 62.5264 499.732 62.6621C499.543 62.9334 499.265 63.3324 498.908 63.8463C498.194 64.8741 497.162 66.3615 495.887 68.2049C493.339 71.8908 489.816 77.0048 485.922 82.7171C478.174 94.0818 468.812 108.02 462.754 117.766L483.986 130.964C489.735 121.717 498.825 108.171 506.578 96.7997C510.434 91.1439 513.924 86.0768 516.45 82.4238C517.713 80.5977 518.734 79.126 519.438 78.1122C519.791 77.6053 520.064 77.2129 520.248 76.9479C520.34 76.8154 520.41 76.7148 520.457 76.6477C520.481 76.6141 520.498 76.5889 520.51 76.5723C520.516 76.564 520.52 76.5578 520.523 76.5538C520.524 76.5518 520.525 76.5503 520.526 76.5494C520.526 76.549 520.526 76.5487 520.526 76.5485C520.526 76.5483 520.526 76.5483 510.275 69.3963ZM462.754 117.766C450.596 137.324 437.187 151.937 421.701 161.693C406.34 171.37 388.263 176.697 365.982 176.697V201.697C392.543 201.697 415.322 195.259 435.027 182.846C454.606 170.511 470.47 152.708 483.986 130.964L462.754 117.766ZM365.982 176.697C350.442 176.697 330.789 167.853 314.356 153.127C297.919 138.397 287.267 120.095 286.492 103.822L261.52 105.011C262.73 130.417 278.434 154.505 297.672 171.745C316.916 188.99 342.258 201.697 365.982 201.697V176.697ZM286.492 103.822C286.1 95.6047 286.179 90.4197 287.439 86.0712C288.527 82.3191 290.755 78.3872 296.595 73.777L281.103 54.155C271.734 61.5518 266.153 69.7084 263.428 79.1114C260.875 87.9181 261.136 96.9549 261.52 105.011L286.492 103.822ZM296.595 73.777C300.989 70.308 310.95 68.9404 322.61 72.9575C334.206 76.9526 341.16 84.0946 342.472 90.0419L366.885 84.6576C362.869 66.4486 346.13 54.6188 330.754 49.321C315.441 44.0453 295.152 43.064 281.103 54.155L296.595 73.777ZM342.472 90.0419C344.672 100.021 343.354 106.778 340.699 111.128C338.124 115.348 333.069 119.304 323.501 121.261L328.511 145.754C343.02 142.786 354.966 135.741 362.039 124.153C369.033 112.694 370.012 98.835 366.885 84.6576L342.472 90.0419ZM323.501 121.261C306.91 124.655 282.165 122.252 265.207 116.423L257.08 140.065C277.501 147.085 306.818 150.191 328.511 145.754L323.501 121.261ZM265.207 116.423C258.484 114.112 252.083 110.306 244.218 105.607C236.762 101.153 227.95 95.8763 217.996 92.5581L210.09 116.275C217.066 118.6 223.624 122.426 231.397 127.069C238.759 131.467 247.443 136.752 257.08 140.065L265.207 116.423ZM217.996 92.5581C196.066 85.2481 168.978 83.9867 146.376 89.2502L152.046 113.599C170.159 109.381 192.548 110.428 210.09 116.275L217.996 92.5581ZM146.376 89.2502C133.975 92.1381 122.055 96.1774 110.819 99.9704C99.3917 103.828 88.6501 107.439 77.6896 109.969L83.3111 134.328C95.673 131.476 107.574 127.452 118.816 123.657C130.249 119.797 141.023 116.166 152.046 113.599L146.376 89.2502ZM520.563 76.4963C536.992 52.69 566.993 39.4283 597.37 32.3532C627.322 25.3771 655.077 25.0039 664 25.0039L664 0.00390635C654.423 0.00390635 624.428 0.382177 591.699 8.0049C559.395 15.5287 521.783 30.7132 499.987 62.2964L520.563 76.4963ZM664 25.0039C681.427 25.0039 680.563 24.8529 725.58 31.8516L729.42 7.14838C684.437 0.15493 683.573 0.00390635 664 0.00390635L664 25.0039Z"
            fill="url(#concepts-right)"
          />
          <defs>
            <linearGradient
              id="concepts-right"
              x1="494"
              y1="40.539"
              x2="727"
              y2="43.9843"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color-stop)" />
              <stop offset="1" stop-color="var(--color-stop)" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )
    case "features-right":
      return (
        <svg
          width="768"
          height="388"
          viewBox="0 0 768 388"
          fill="none"
          className={className}
          style={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M107.169 220.503C134.669 206.503 146.802 191.184 151.421 186.503C188.701 148.731 222.729 143.438 257.866 170.587C297.356 201.102 280.878 260.698 326.783 290.052C372.689 319.407 443.487 293.686 435.244 212.639C413.085 55.1971 524.833 55.0565 587.129 70.0002C657.587 86.9017 694.5 147.584 748.5 170.586"
            stroke="url(#features-right)"
            stroke-width="25"
          />
          <path
            d="M87.7811 217.167C87.5841 215.481 101.124 209.663 104.798 207.742L113.762 231.089C111.933 231.683 98.081 237.642 93.6737 235.14C89.2665 232.637 88.0273 219.274 87.7811 217.167Z"
            fill="var(--color-stop)"
          />
          <path
            d="M31.1139 243.353C60.3046 241.004 52.8908 243.317 65.8729 243.883C88.6674 246.387 78.8234 217.895 72.9481 213.735C70.8282 211.817 59.1059 210.541 54.1715 210.626C50.2239 210.693 39.6267 207.412 34.8215 205.764C31.1268 204.734 29.6246 208.695 32.8671 210.395C33.5374 210.847 35.7744 211.869 35.7744 211.869C37.2725 212.685 43.1154 214.579 39.4731 216.218C35.8308 217.857 19.7756 217.364 17.1955 217.574C13.4245 217.882 13.9611 222.513 17.2802 222.509C20.5993 222.505 29.4627 221.657 31.2557 221.891C33.7674 221.928 33.8685 223.947 31.4454 224.068C30.2339 224.128 15.3619 224.628 12.7132 225.085C8.92923 225.737 10.2863 229.983 13.9208 229.801C16.3436 229.68 30.7022 228.639 31.9339 228.982C34.6234 229.334 34.1683 231.103 32.2125 231.316C30.8434 231.465 20.0781 231.517 17.4294 231.974C12.1319 232.887 14.1264 237.159 17.9179 236.888C17.9179 236.888 30.9767 235.749 32.7696 235.984C35.2813 236.021 34.3483 238.415 32.9796 238.564C31.6108 238.713 28.2914 238.717 24.1848 239.166C18.6407 240.01 21.3541 244.084 24.742 243.834C28.1298 243.583 31.1139 243.353 31.1139 243.353Z"
            fill="var(--color-stop)"
          />
          <defs>
            <linearGradient
              id="features-right"
              x1="499.5"
              y1="81.4962"
              x2="749.5"
              y2="81.4962"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color-stop)" />
              <stop offset="1" stop-color="var(--color-stop)" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )
    case "sandbox-right":
      return (
        <svg
          width="732"
          height="731"
          viewBox="0 0 732 731"
          fill="none"
          className={className}
          style={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M204.705 140.991C182.134 146.765 114.159 100.534 73.8538 163.466C73.8538 163.466 7.37995 264.93 143.646 317.746C220.39 347.491 319.729 339.02 329.694 391.243C336.176 425.209 312.155 442.017 287.406 433.532C271.297 428.009 253.131 412.677 256.54 384.303C266.942 320.028 292.812 220.757 423.003 257.825C536.003 278.825 531.002 401.008 604.501 471.505C678.001 542.001 692.5 542.001 692.5 542.001"
            stroke="url(#sandbox-right)"
            stroke-width="25"
          />
          <defs>
            <linearGradient
              id="sandbox-right"
              x1="614"
              y1="593.5"
              x2="441.5"
              y2="432"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color-stop)" stop-opacity="0" />
              <stop offset="1" stop-color="var(--color-stop)" />
            </linearGradient>
          </defs>
        </svg>
      )
    case "sponsors-left":
      return (
        <svg
          width="830"
          height="685"
          viewBox="0 0 830 685"
          fill="none"
          className={className}
          style={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M353 134.498L362.708 142.372L362.708 142.372L353 134.498ZM328.227 653.572C334.618 650.962 337.683 643.664 335.072 637.273C332.462 630.882 325.165 627.818 318.774 630.428L328.227 653.572ZM829.717 119.795C792.387 66.8444 714.704 15.0256 624.616 3.00717C533.569 -9.1393 430.254 19.4189 343.293 126.623L362.708 142.372C444.147 41.9765 538.832 16.7844 621.31 27.7876C704.747 38.9189 776.114 87.1498 809.284 134.2L829.717 119.795ZM343.293 126.623C307.677 170.53 295.237 208.666 283.724 244.833C272.327 280.637 261.916 314.168 231.222 352.713L250.779 368.287C284.585 325.832 296.103 288.363 307.546 252.416C318.873 216.833 330.184 182.468 362.708 142.372L343.293 126.623ZM231.222 352.713C201.358 390.216 143.909 418.741 95.203 428.362C70.7385 433.194 50.653 432.802 38.2834 428.121C32.3436 425.874 29.0008 422.962 27.234 419.966C25.5218 417.063 24.3985 412.578 25.7789 405.343L1.22184 400.657C-1.02274 412.422 0.228941 423.39 5.70035 432.667C11.1171 441.851 19.7665 447.845 29.4361 451.504C48.2852 458.636 73.8872 458.056 100.048 452.888C152.591 442.509 216.142 411.784 250.779 368.287L231.222 352.713ZM25.7789 405.343C31.4791 375.465 60.0694 361.166 86.253 366.784C99.0003 369.519 110.62 376.995 118.044 389.59C125.486 402.214 129.422 421.232 124.227 448.13L148.774 452.87C154.829 421.518 150.827 395.973 139.581 376.895C128.318 357.786 110.5 346.418 91.4978 342.341C54.1813 334.334 10.0216 354.535 1.22184 400.657L25.7789 405.343ZM124.227 448.13C118.647 477.024 111.844 510.588 108.836 542.677C105.852 574.516 106.377 606.803 116.778 632.664C122.069 645.82 130.005 657.542 141.469 666.556C152.944 675.58 167.303 681.379 184.642 683.673C218.832 688.197 265.445 679.215 328.227 653.572L318.774 630.428C257.306 655.535 215.606 662.553 187.921 658.889C174.323 657.09 164.354 652.748 156.922 646.905C149.48 641.052 143.932 633.18 139.973 623.336C131.873 603.197 130.836 575.859 133.727 545.01C136.595 514.412 143.104 482.226 148.774 452.87L124.227 448.13Z"
            fill="var(--color-stop)"
          />
          <path
            d="M397.361 643.048C368.083 643.71 375.695 645.25 362.84 647.146C340.423 651.979 347.288 622.626 352.705 617.885C354.617 615.759 366.146 613.286 371.063 612.863C374.996 612.525 385.201 608.173 389.811 606.039C393.38 604.635 395.282 608.421 392.231 610.445C391.611 610.964 389.49 612.21 389.49 612.21C388.084 613.175 382.467 615.659 386.258 616.916C390.049 618.172 405.969 616.032 408.557 615.976C412.34 615.894 412.282 620.556 408.98 620.893C405.678 621.23 396.774 621.297 395.015 621.715C392.52 622.009 392.627 624.028 395.05 623.899C396.261 623.835 411.106 622.804 413.787 622.986C417.618 623.246 416.705 627.609 413.071 627.802C410.648 627.931 396.258 628.37 395.069 628.838C392.429 629.464 393.064 631.177 395.031 631.188C396.408 631.195 407.122 630.141 409.804 630.323C415.167 630.687 413.622 635.142 409.823 635.262C409.823 635.262 396.716 635.471 394.957 635.888C392.462 636.183 393.636 638.468 395.013 638.476C396.39 638.484 399.692 638.147 403.823 638.171C409.424 638.441 407.144 642.773 403.748 642.872C400.353 642.97 397.361 643.048 397.361 643.048Z"
            fill="var(--color-stop)"
            stroke="var(--color-stop)"
          />
          <rect x="791.5" y="113" width="38" height="22" fill="var(--page-bg-color)" />
        </svg>
      )

    default:
      throw new Error(`Invalid variant, ${variant}`)
  }
}

export { Hand }