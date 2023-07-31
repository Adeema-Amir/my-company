/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Footer = () => {
  return (
<>
<br /><br />
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111827" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,261.3C640,267,800,245,960,245.3C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
<footer className="bg-gray-900">
    <br />
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <img src="logo.png" className="w-40  mr-3" alt="Logo" />
              </a>
          </div>
          <div className="grid grid-cols-1 sm:mr-32 gap-8 sm:gap-20 space- sm:grid-cols-5">
          <br />
          <br />
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">Learn React</h2>
                  <ul className="text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">Quick Start</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">Installation</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">Describing the UI</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">Adding Interactivity</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">Managing State</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">API Reference</h2>
                  <ul className="text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">React APIs</a>
                      </li>
                      <li>
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">React DOM APIs</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase duration-300 text-white">Follow us</h2>
                  <ul className="text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">Code of Conduct</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">Meet the Team</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">Docs Contributors</a>
                      </li>
                      <li>
                          <a href="/laka" className="text-gray-500 duration-300 hover:text-white">Acknowledgements</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">More</h2>
                  <ul className="text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">Blog</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">React Native</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">Privacy</a>
                      </li>
                      <li>
                          <a href="#" className="text-gray-500 duration-300 hover:text-white">Terms</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">© 2023 <a href="/" className="hover:underline">RanaVerse™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/profile.php?id=100087931331816&sk=friends&_rdc=1&_rdr" className="text-gray-500 duration-300 hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="https://twitter.com/amir_adeema" className="text-gray-500 duration-300 hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="https://github.com/Adeema-Amir" className="text-gray-500 duration-300 hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="https://www.instagram.com/adeemaamir240/" className="bi bi-instagram text-gray-500 duration-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg>
                 <span className="sr-only">Instagram account</span>
              </a>
          </div>
      </div>
    </div>
</footer>
</>
  );
};

export default Footer;