import logo from "../assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
          {/* Left Section - Contact Info */}
          <div className="w-full lg:w-auto space-y-8">
            <div className="space-y-4 sm:space-y-7 text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="text-primary font-medium sm:w-24">
                  ADDRESS:
                </span>
                <span className="text-neutral-800 mt-1 sm:mt-0">
                  6391 Elgin St. Celina, Delaware 10299
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="text-primary font-medium sm:w-24">PHONE:</span>
                <span className="text-neutral-800 mt-1 sm:mt-0">
                  +84 1102 2703
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="text-primary font-medium sm:w-24">EMAIL:</span>
                <span className="text-neutral-800 mt-1 sm:mt-0">
                  hello@thebox.com
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="TheBox Logo"
                className="h-8 sm:h-11 w-auto"
              />
              <span className="text-primary text-xl sm:text-2xl font-bold">
                <span className="italic">The</span>Box
              </span>
            </div>
          </div>

          {/* Right Section - Newsletter & Social */}
          <div className="w-full lg:w-auto space-y-6 sm:space-y-9">
            <div className="space-y-4">
              <h3 className="text-primary text-sm sm:text-base font-medium">
                NEWSLETTER:
              </h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:overflow-hidden sm:rounded">
                <input
                  type="email"
                  placeholder="Your email here"
                  className="w-full sm:w-64 px-3 py-2 border text-sm sm:text-base font-normal text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="w-full sm:w-auto px-4 py-2 sm:py-3 bg-orange-400 text-white text-sm sm:text-base font-medium hover:bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-primary text-sm sm:text-base font-medium">
                SOCIAL:
              </h3>
              <div className="flex gap-3 sm:gap-4">
                {/* Social icons with touch-friendly sizing */}
                <a
                  href="#"
                  className="text-neutral-700 hover:text-primary transition-colors p-1"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-7 h-7 sm:w-9 sm:h-9"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.555542 18.4327C0.555542 27.2712 6.9748 34.6209 15.3704 36.1112V23.2712H10.9259V18.3334H15.3704V14.3823C15.3704 9.93789 18.2341 7.46974 22.2844 7.46974C23.5674 7.46974 24.9511 7.66678 26.2341 7.86381V12.4075H23.963C21.7896 12.4075 21.2963 13.4934 21.2963 14.8771V18.3334H26.037L25.2474 23.2712H21.2963V36.1112C29.6918 34.6209 36.1111 27.2727 36.1111 18.4327C36.1111 8.60011 28.1111 0.555664 18.3333 0.555664C8.55554 0.555664 0.555542 8.60011 0.555542 18.4327Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-neutral-700 hover:text-primary transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-7 h-7 sm:w-9 sm:h-9"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6666 1.2666C9.24087 1.2666 1.59998 8.90749 1.59998 18.3333C1.59998 27.759 9.24087 35.3999 18.6666 35.3999C28.0924 35.3999 35.7333 27.759 35.7333 18.3333C35.7333 8.90749 28.0924 1.2666 18.6666 1.2666ZM14.4889 25.407H11.0329V14.2853H14.4889V25.407ZM12.7395 12.9199C11.648 12.9199 10.9422 12.1466 10.9422 11.1902C10.9422 10.2142 11.6693 9.46394 12.784 9.46394C13.8986 9.46394 14.5813 10.2142 14.6026 11.1902C14.6026 12.1466 13.8986 12.9199 12.7395 12.9199ZM27.1111 25.407H23.6551V19.2435C23.6551 17.8088 23.1538 16.8346 21.904 16.8346C20.9493 16.8346 20.3822 17.4942 20.1315 18.1288C20.0391 18.3546 20.016 18.6746 20.016 18.9928V25.4053H16.5582V17.8319C16.5582 16.4435 16.5138 15.2826 16.4675 14.2835H19.4702L19.6284 15.8284H19.6978C20.1529 15.103 21.2675 14.0328 23.1324 14.0328C25.4062 14.0328 27.1111 15.5564 27.1111 18.831V25.407V25.407Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-neutral-700 hover:text-primary transition-colors p-1"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-7 h-7 sm:w-9 sm:h-9"
                    viewBox="0 0 36 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 1.2666C8.57424 1.2666 0.93335 8.90749 0.93335 18.3333C0.93335 27.759 8.57424 35.3999 18 35.3999C27.4258 35.3999 35.0667 27.759 35.0667 18.3333C35.0667 8.90749 27.4258 1.2666 18 1.2666ZM24.9422 15.247C24.9493 15.3928 24.9511 15.5386 24.9511 15.6808C24.9511 20.1253 21.5716 25.247 15.3885 25.247C13.5614 25.2501 11.7724 24.7254 10.2365 23.7359C10.4978 23.7679 10.7662 23.7804 11.0382 23.7804C12.6133 23.7804 14.0622 23.2453 15.2125 22.3422C14.5115 22.3284 13.8323 22.0963 13.2695 21.6782C12.7068 21.2601 12.2885 20.6768 12.0729 20.0097C12.5763 20.1054 13.0949 20.0854 13.5893 19.951C12.8285 19.7972 12.1444 19.385 11.6528 18.7842C11.1613 18.1835 10.8927 17.4312 10.8925 16.655V16.6142C11.3458 16.8648 11.8649 17.0177 12.416 17.0355C11.7028 16.5607 11.1979 15.8313 11.0045 14.9966C10.8112 14.1619 10.9441 13.2848 11.376 12.5448C12.2204 13.583 13.2734 14.4324 14.4668 15.0378C15.6602 15.6433 16.9675 15.9913 18.304 16.0595C18.1341 15.3383 18.2072 14.5811 18.512 13.9057C18.8168 13.2303 19.3362 12.6746 19.9895 12.3248C20.6427 11.9751 21.3932 11.851 22.1243 11.9718C22.8553 12.0926 23.526 12.4515 24.032 12.9928C24.7843 12.844 25.5058 12.568 26.1654 12.1768C25.9146 12.9557 25.3897 13.6171 24.688 14.0382C25.3544 13.9579 26.0051 13.7787 26.6187 13.5066C26.168 14.182 25.6003 14.7714 24.9422 15.247V15.247Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-primary py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-xs sm:text-sm text-center sm:text-left">
            TheBox Company © 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
