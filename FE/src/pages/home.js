import React from 'react';
import {Link} from "react-router-dom";
function Home(props) {
    return (
        <div>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-left ms-3" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
                    <a className="navbar-brand m-0" href="index.html">
                        <img src="assets/img/logo-ct.png" className="navbar-brand-img h-100 w-15" alt="..." />
                        <span className="ms-1 font-weight-bold">NFT Marketplace</span>
                    </a>
                </div>
                <hr className="horizontal dark mt-0" />
                <div className="collapse navbar-collapse  w-auto" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link  active" href="index.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>shop </title>
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g id="shop-" transform="translate(0.000000, 148.000000)">
                                                        <path className="color-background" d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z" opacity="0.598981585" />
                                                        <path className="color-background" d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="explore.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>office</title>
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(153.000000, 2.000000)">
                                                        <path className="color-background" d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z" opacity="0.6" />
                                                        <path className="color-background" d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Explore Style 1</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="explore-2.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>office</title>
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(153.000000, 2.000000)">
                                                        <path className="color-background" d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z" opacity="0.6" />
                                                        <path className="color-background" d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Explore Style 2</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="create-item.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg width="12px" height="12px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>document</title>
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(154.000000, 300.000000)">
                                                        <path className="color-background" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" opacity="0.603585379" />
                                                        <path className="color-background" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Create Item</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="item-details.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>credit-card</title>
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(453.000000, 454.000000)">
                                                        <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743" />
                                                        <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Item Details</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="connect-wallet.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg width="12px" height="12px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>settings</title>
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g id="settings" transform="translate(304.000000, 151.000000)">
                                                        <polygon className="color-background" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667" />
                                                        <path className="color-background" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" opacity="0.596981957" />
                                                        <path className="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Connect Wallet</span>
                            </a>
                        </li>
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="authors.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>credit-card</title>
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(453.000000, 454.000000)">
                                                        <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743" />
                                                        <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Authors</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="profile.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg width="12px" height="12px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>customer-support</title>
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g id="customer-support" transform="translate(1.000000, 0.000000)">
                                                        <path className="color-background" d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z" opacity="0.59858631" />
                                                        <path className="color-foreground" d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z" />
                                                        <path className="color-foreground" d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Profile</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="contact.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg width="12px" height="20px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>spaceship</title>
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(4.000000, 301.000000)">
                                                        <path className="color-background" d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z" />
                                                        <path className="color-background" d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z" />
                                                        <path className="color-background" d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" opacity="0.598539807" />
                                                        <path className="color-background" d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" opacity="0.598539807" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Contact Us</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="sign-in.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg width="12px" height="12px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>document</title>
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(154.000000, 300.000000)">
                                                        <path className="color-background" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" opacity="0.603585379" />
                                                        <path className="color-background" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Sign In</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="sign-up.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg width="12px" height="20px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>spaceship</title>
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(4.000000, 301.000000)">
                                                        <path className="color-background" d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z" />
                                                        <path className="color-background" d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z" />
                                                        <path className="color-background" d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" opacity="0.598539807" />
                                                        <path className="color-background" d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" opacity="0.598539807" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="sidenav-footer mx-3 mt-3 pt-3">
                    <div className="card card-background shadow-none card-background-mask-secondary" id="sidenavCard">
                        <div className="full-background" style={{backgroundImage: 'url("assets/img/curved-images/white-curved.jpeg")'}} />
                        <div className="card-body text-left p-3 w-100">
                            <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
                                <i className="ni ni-diamond text-dark text-gradient text-lg top-0" aria-hidden="true" />
                            </div>
                            <h6 className="text-white up mb-0">Need help?</h6>
                            <p className="text-xs font-weight-bold">Please check our docs</p>
                            <a href="contact.html" className="btn btn-white btn-sm w-100 mb-0">Contact Us</a>
                        </div>
                    </div>
                </div>
            </aside>
            <main className="main-content mt-1 border-radius-lg">
                {/* Navbar */}
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur">
                    <div className="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Pages</a></li>
                                <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Home</li>
                            </ol>
                            <h6 className="font-weight-bolder mb-0">Home</h6>
                        </nav>
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div className="input-group">
                                    <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true" /></span>
                                    <input type="text" className="form-control" placeholder="Type here..." />
                                </div>
                            </div>
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-flex align-items-center">
                                    <a href="sign-in.html" className="nav-link text-body font-weight-bold px-0">
                                        <i className="fa fa-user me-sm-1" />
                                        <span className="d-sm-inline d-none mr-10">Sign In</span>
                                    </a>
                                </li>
                                <li className="nav-item d-xl-none px-3 d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                                        <div className="sidenav-toggler-inner">
                                            <i className="sidenav-toggler-line" />
                                            <i className="sidenav-toggler-line" />
                                            <i className="sidenav-toggler-line" />
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-bell cursor-pointer" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                                        <li className="mb-2">
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="assets/img/team-2.jpg" alt="img" className="avatar avatar-sm  me-3 " />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New message</span> from Laur
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1" />
                                                            13 minutes ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="assets/img/small-logos/logo-spotify.svg" alt="img" className="avatar avatar-sm bg-gradient-dark  me-3 " />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New album</span> by Travis Scott
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1" />
                                                            1 day
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                                                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                            <title>credit-card</title>
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                                    <g transform="translate(1716.000000, 291.000000)">
                                                                        <g transform="translate(453.000000, 454.000000)">
                                                                            <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743" />
                                                                            <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            Payment successfully completed
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1" />
                                                            2 days
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End Navbar */}
                <div className="container-fluid py-4">
                    <div className="main-header">
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                                <div className="header-content">
                                    <h1>Largest Marketplace To Collect , Buy and Sell Creative NFTs Digital Assets</h1>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, deleniti, ducimus. Asperiores reiciendis eligendi magnam quas, repellendus. Voluptate repudiandae non.</p>
                                    <a href="explore.html" className="btn btn-white mb-0">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="section-heading d-flex mt-10p">
                        <div className="img-div mr-10"><img src="assets/img/icons/1.png" alt="" /></div>
                        <div className="d-flex flex-column h-100">
                            <p className="mb-1 pt-2 text-bold">Our Top Creatives</p>
                            <h5 className="font-weight-bolder">Top Selling Authors</h5>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-4 pb-0">
                    <div className="row">
                        <div className="col-12 col-xl-4 col-md-6 mb-30">
                            <div className="card h-100">
                                <div className="card-body p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <a href="profile.html" className="avatar v2 me-3">
                                                <span className="author-num">1</span>
                                                <img src="assets/img/team-2.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </a>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <a href="profile.html"><h6 className="author-name">Sophie B.</h6></a>
                                                <a className="btn btn-link autho-link" href="profile.html">@SophieBolt</a>
                                            </div>
                                            <span className="auth-earning ms-auto">45.634 ETH</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <a href="profile.html" className="avatar v2 me-3">
                                                <span className="author-num">2</span>
                                                <img src="assets/img/team-3.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </a>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <a href="profile.html"><h6 className="author-name">Anne Marie</h6></a>
                                                <a className="btn btn-link autho-link" href="profile.html">@Anne_Marie12</a>
                                            </div>
                                            <span className="auth-earning ms-auto">42.124 ETH</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <a href="profile.html" className="avatar v2 me-3">
                                                <span className="author-num">3</span>
                                                <img src="assets/img/authors/5.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </a>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <a href="profile.html"><h6 className="author-name">Ivanna</h6></a>
                                                <a className="btn btn-link autho-link" href="profile.html">@Ivanna_lio</a>
                                            </div>
                                            <span className="auth-earning ms-auto">41.904 ETH</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-0">
                                            <a href="profile.html" className="avatar v2 me-3">
                                                <span className="author-num">4</span>
                                                <img src="assets/img/team-4.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </a>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <a href="profile.html"><h6 className="author-name">Peterson</h6></a>
                                                <a className="btn btn-link autho-link" href="profile.html">@Peterson_278</a>
                                            </div>
                                            <span className="auth-earning ms-auto">39.261 ETH</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4 col-md-6 mb-30">
                            <div className="card h-100">
                                <div className="card-body p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <a href="profile.html" className="avatar v2 me-3">
                                                <span className="author-num">5</span>
                                                <img src="assets/img/authors/1.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </a>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <a href="profile.html"><h6 className="author-name">Sophie B.</h6></a>
                                                <a className="btn btn-link autho-link" href="profile.html">@SophieBolt</a>
                                            </div>
                                            <span className="auth-earning ms-auto">45.634 ETH</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <a href="profile.html" className="avatar v2 me-3">
                                                <span className="author-num">6</span>
                                                <img src="assets/img/authors/2.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </a>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <a href="profile.html"><h6 className="author-name">Anne Marie</h6></a>
                                                <a className="btn btn-link autho-link" href="profile.html">@Anne_Marie12</a>
                                            </div>
                                            <span className="auth-earning ms-auto">42.124 ETH</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <a href="profile.html" className="avatar v2 me-3">
                                                <span className="author-num">7</span>
                                                <img src="assets/img/authors/3.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </a>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <a href="profile.html"><h6 className="author-name">Ivanna</h6></a>
                                                <a className="btn btn-link autho-link" href="profile.html">@Ivanna_lio</a>
                                            </div>
                                            <span className="auth-earning ms-auto">41.904 ETH</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-0">
                                            <a href="profile.html" className="avatar v2 me-3">
                                                <span className="author-num">8</span>
                                                <img src="assets/img/authors/4.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </a>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <a href="profile.html"><h6 className="author-name">Peterson</h6></a>
                                                <a className="btn btn-link autho-link" href="profile.html">@Peterson_278</a>
                                            </div>
                                            <span className="auth-earning ms-auto">39.261 ETH</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4 col-md-6 mb-30">
                            <div className="card h-100">
                                <div className="card-body p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <a href="profile.html" className="avatar v2 me-3">
                                                <span className="author-num">9</span>
                                                <img src="assets/img/kal-visuals-square.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </a>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <a href="profile.html"><h6 className="author-name">Sophie B.</h6></a>
                                                <a className="btn btn-link autho-link" href="profile.html">@SophieBolt</a>
                                            </div>
                                            <span className="auth-earning ms-auto">45.634 ETH</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <a href="profile.html" className="avatar v2 me-3">
                                                <span className="author-num">10</span>
                                                <img src="assets/img/team-2.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </a>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <a href="profile.html"><h6 className="author-name">Anne Marie</h6></a>
                                                <a className="btn btn-link autho-link" href="profile.html">@Anne_Marie12</a>
                                            </div>
                                            <span className="auth-earning ms-auto">42.124 ETH</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <a href="profile.html" className="avatar v2 me-3">
                                                <span className="author-num">11</span>
                                                <img src="assets/img/authors/6.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </a>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <a href="profile.html"><h6 className="author-name">Ivanna</h6></a>
                                                <a className="btn btn-link autho-link" href="profile.html">@Ivanna_lio</a>
                                            </div>
                                            <span className="auth-earning ms-auto">41.904 ETH</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-0">
                                            <a href="profile.html" className="avatar v2 me-3">
                                                <span className="author-num">12</span>
                                                <img src="assets/img/team-4.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </a>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <a href="profile.html"><h6 className="author-name">Peterson</h6></a>
                                                <a className="btn btn-link autho-link" href="profile.html">@Peterson_278</a>
                                            </div>
                                            <span className="auth-earning ms-auto">39.261 ETH</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="section-heading d-flex">
                        <div className="img-div mr-10"><img src="assets/img/icons/2.png" alt="" /></div>
                        <div className="d-flex flex-column h-100">
                            <p className="mb-1 pt-2 text-bold">Latest Items</p>
                            <h5 className="font-weight-bolder">New Listed Items</h5>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="col-12 py-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6 mb-xl-0">
                                        <div className="card card-blog card-plain">
                                            <div className="position-relative">
                                                <a className="d-block border-radius-xl">
                                                    <img src="assets/img/art/1.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                </a>
                                            </div>
                                            <a href="profile.html" className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="view profile">
                                                <img alt="Image placeholder" src="assets/img/authors/3.jpg" />
                                            </a>
                                            <div className="item-cont card-body px-1 pb-0">
                                                <p className="text-gradient text-dark mb-2 text-sm">1 Of 1 In Stock</p>
                                                <a href="item-details.html">
                                                    <h5>
                                                        Building the World
                                                    </h5>
                                                </a>
                                                <p className="mb-4 text-sm">
                                                    Currenct Price : <span className="gradient-text">0.239 ETH</span>
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <a href="item-details.html" className="btn btn-outline-primary btn-sm mb-0">Buy Now</a>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Elena Morison">
                                                            <img alt="Image placeholder" src="assets/img/bruce-mars.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Ryan Milly">
                                                            <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Nick Daniel">
                                                            <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Peterson">
                                                            <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-xl-0">
                                        <div className="card card-blog card-plain">
                                            <div className="position-relative">
                                                <a className="d-block border-radius-xl">
                                                    <img src="assets/img/art/2.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
                                                </a>
                                            </div>
                                            <a href="profile.html" className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="view profile">
                                                <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                            </a>
                                            <div className="item-cont card-body px-1 pb-0">
                                                <p className="text-gradient text-dark mb-2 text-sm">3 of 5 In Stock</p>
                                                <a href="item-details.html">
                                                    <h5>
                                                        #04 Jimi Hendrix
                                                    </h5>
                                                </a>
                                                <p className="mb-4 text-sm">
                                                    Currenct Price : <span className="gradient-text">0.239 ETH</span>
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <a href="item-details.html" className="btn btn-outline-primary btn-sm mb-0">Buy Now</a>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Nick Daniel">
                                                            <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Peterson">
                                                            <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Elena Morison">
                                                            <img alt="Image placeholder" src="assets/img/bruce-mars.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Ryan Milly">
                                                            <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-xl-0">
                                        <div className="card card-blog card-plain">
                                            <div className="position-relative">
                                                <a className="d-block border-radius-xl">
                                                    <img src="assets/img/art/3.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
                                                </a>
                                            </div>
                                            <a href="profile.html" className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="view profile">
                                                <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                            </a>
                                            <div className="item-cont card-body px-1 pb-0">
                                                <p className="text-gradient text-dark mb-2 text-sm">3 of 5 In Stock</p>
                                                <a href="item-details.html">
                                                    <h5>
                                                        #04 Jimi Hendrix
                                                    </h5>
                                                </a>
                                                <p className="mb-4 text-sm">
                                                    Currenct Price : <span className="gradient-text">0.321 ETH</span>
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <a href="item-details.html" className="btn btn-outline-primary btn-sm mb-0">Buy Now</a>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Nick Daniel">
                                                            <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Peterson">
                                                            <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Elena Morison">
                                                            <img alt="Image placeholder" src="assets/img/bruce-mars.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Ryan Milly">
                                                            <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-xl-0">
                                        <div className="card card-blog card-plain">
                                            <div className="position-relative">
                                                <a className="d-block border-radius-xl">
                                                    <img src="assets/img/art/4.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                </a>
                                            </div>
                                            <a href="profile.html" className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="view profile">
                                                <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                            </a>
                                            <div className="item-cont card-body px-1 pb-0">
                                                <p className="text-gradient text-dark mb-2 text-sm">2 Of 10 In Stock</p>
                                                <a href="item-details.html">
                                                    <h5>
                                                        Commander Fluffy
                                                    </h5>
                                                </a>
                                                <p className="mb-4 text-sm">
                                                    Currenct Price : <span className="gradient-text">0.239 ETH</span>
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <a href="item-details.html" className="btn btn-outline-primary btn-sm mb-0">Buy Now</a>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Peterson">
                                                            <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Nick Daniel">
                                                            <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Ryan Milly">
                                                            <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Elena Morison">
                                                            <img alt="Image placeholder" src="assets/img/bruce-mars.jpg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-xl-0">
                                        <div className="card card-blog card-plain">
                                            <div className="position-relative">
                                                <a className="d-block border-radius-xl">
                                                    <img src="assets/img/art/5.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                </a>
                                            </div>
                                            <a href="profile.html" className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="view profile">
                                                <img alt="Image placeholder" src="assets/img/authors/3.jpg" />
                                            </a>
                                            <div className="item-cont card-body px-1 pb-0">
                                                <p className="text-gradient text-dark mb-2 text-sm">1 Of 1 In Stock</p>
                                                <a href="item-details.html">
                                                    <h5>
                                                        SHE | Orange #1
                                                    </h5>
                                                </a>
                                                <p className="mb-4 text-sm">
                                                    Currenct Price : <span className="gradient-text">0.239 ETH</span>
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <a href="item-details.html" className="btn btn-outline-primary btn-sm mb-0">Buy Now</a>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Elena Morison">
                                                            <img alt="Image placeholder" src="assets/img/bruce-mars.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Ryan Milly">
                                                            <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Nick Daniel">
                                                            <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Peterson">
                                                            <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-xl-0">
                                        <div className="card card-blog card-plain">
                                            <div className="position-relative">
                                                <a className="d-block border-radius-xl">
                                                    <img src="assets/img/art/6.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
                                                </a>
                                            </div>
                                            <a href="profile.html" className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="view profile">
                                                <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                            </a>
                                            <div className="item-cont card-body px-1 pb-0">
                                                <p className="text-gradient text-dark mb-2 text-sm">3 of 5 In Stock</p>
                                                <a href="item-details.html">
                                                    <h5>
                                                        Olia Andronova's
                                                    </h5>
                                                </a>
                                                <p className="mb-4 text-sm">
                                                    Currenct Price : <span className="gradient-text">0.239 ETH</span>
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <a href="item-details.html" className="btn btn-outline-primary btn-sm mb-0">Buy Now</a>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Nick Daniel">
                                                            <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Peterson">
                                                            <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Elena Morison">
                                                            <img alt="Image placeholder" src="assets/img/bruce-mars.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Ryan Milly">
                                                            <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-xl-0">
                                        <div className="card card-blog card-plain">
                                            <div className="position-relative">
                                                <a className="d-block border-radius-xl">
                                                    <img src="assets/img/art/7.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
                                                </a>
                                            </div>
                                            <a href="profile.html" className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="view profile">
                                                <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                            </a>
                                            <div className="item-cont card-body px-1 pb-0">
                                                <p className="text-gradient text-dark mb-2 text-sm">3 of 5 In Stock</p>
                                                <a href="item-details.html">
                                                    <h5>
                                                        Artificial Paintings
                                                    </h5>
                                                </a>
                                                <p className="mb-4 text-sm">
                                                    Currenct Price : <span className="gradient-text">0.321 ETH</span>
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <a href="item-details.html" className="btn btn-outline-primary btn-sm mb-0">Buy Now</a>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Nick Daniel">
                                                            <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Peterson">
                                                            <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Elena Morison">
                                                            <img alt="Image placeholder" src="assets/img/bruce-mars.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Ryan Milly">
                                                            <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-xl-0">
                                        <div className="card card-blog card-plain">
                                            <div className="position-relative">
                                                <a className="d-block border-radius-xl">
                                                    <img src="assets/img/art/8.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                </a>
                                            </div>
                                            <a href="profile.html" className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="view profile">
                                                <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                            </a>
                                            <div className="item-cont card-body px-1 pb-0">
                                                <p className="text-gradient text-dark mb-2 text-sm">2 Of 10 In Stock</p>
                                                <a href="item-details.html">
                                                    <h5>
                                                        Murphy the Mutant
                                                    </h5>
                                                </a>
                                                <p className="mb-4 text-sm">
                                                    Currenct Price : <span className="gradient-text">0.239 ETH</span>
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <a href="item-details.html" className="btn btn-outline-primary btn-sm mb-0">Buy Now</a>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Peterson">
                                                            <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Nick Daniel">
                                                            <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Ryan Milly">
                                                            <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Elena Morison">
                                                            <img alt="Image placeholder" src="assets/img/bruce-mars.jpg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <a className="btn bg-gradient-dark mb-0" href="explore.html"><i className="fas fa-plus mr-10" aria-hidden="true" />Load More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="section-heading d-flex mt-10p">
                        <div className="img-div mr-10"><img src="assets/img/icons/3.png" alt="" /></div>
                        <div className="d-flex flex-column h-100">
                            <p className="mb-1 pt-2 text-bold">Hot Auctions</p>
                            <h5 className="font-weight-bolder">Live Auctions</h5>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="col-12 py-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6 mb-xl-0">
                                        <div className="card card-blog card-plain">
                                            <div className="position-relative">
                                                <a className="d-block border-radius-xl">
                                                    <img src="assets/img/art/9.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                </a>
                                            </div>
                                            <div className="auction-timer">
                                                <img src="assets/img/icons/fire.png" width={30} alt="" />
                                                <p>23 Minutes Left</p>
                                            </div>
                                            <a href="profile.html" className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="view profile">
                                                <img alt="Image placeholder" src="assets/img/authors/3.jpg" />
                                            </a>
                                            <div className="item-cont card-body px-1 pb-0">
                                                <p className="text-gradient text-dark mb-2 text-sm">1 Of 1 In Stock</p>
                                                <a href="item-details.html">
                                                    <h5>
                                                        Building the World
                                                    </h5>
                                                </a>
                                                <p className="mb-4 text-sm">
                                                    Currenct Price : <span className="gradient-text">0.239 ETH</span>
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <a href="item-details.html" className="btn btn-outline-primary btn-sm mb-0">Buy Now</a>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Elena Morison">
                                                            <img alt="Image placeholder" src="assets/img/bruce-mars.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Ryan Milly">
                                                            <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Nick Daniel">
                                                            <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Peterson">
                                                            <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-xl-0">
                                        <div className="card card-blog card-plain">
                                            <div className="position-relative">
                                                <a className="d-block border-radius-xl">
                                                    <img src="assets/img/art/10.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
                                                </a>
                                            </div>
                                            <div className="auction-timer">
                                                <img src="assets/img/icons/fire.png" width={30} alt="" />
                                                <p>58 Minutes Left</p>
                                            </div>
                                            <a href="profile.html" className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="view profile">
                                                <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                            </a>
                                            <div className="item-cont card-body px-1 pb-0">
                                                <p className="text-gradient text-dark mb-2 text-sm">3 of 5 In Stock</p>
                                                <a href="item-details.html">
                                                    <h5>
                                                        #04 Jimi Hendrix
                                                    </h5>
                                                </a>
                                                <p className="mb-4 text-sm">
                                                    Currenct Price : <span className="gradient-text">0.239 ETH</span>
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <a href="item-details.html" className="btn btn-outline-primary btn-sm mb-0">Buy Now</a>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Nick Daniel">
                                                            <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Peterson">
                                                            <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Elena Morison">
                                                            <img alt="Image placeholder" src="assets/img/bruce-mars.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Ryan Milly">
                                                            <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-xl-0">
                                        <div className="card card-blog card-plain">
                                            <div className="position-relative">
                                                <a className="d-block border-radius-xl">
                                                    <img src="assets/img/art/11.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
                                                </a>
                                            </div>
                                            <div className="auction-timer">
                                                <img src="assets/img/icons/fire.png" width={30} alt="" />
                                                <p>40 Minutes Left</p>
                                            </div>
                                            <a href="profile.html" className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="view profile">
                                                <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                            </a>
                                            <div className="item-cont card-body px-1 pb-0">
                                                <p className="text-gradient text-dark mb-2 text-sm">3 of 5 In Stock</p>
                                                <a href="item-details.html">
                                                    <h5>
                                                        #04 Jimi Hendrix
                                                    </h5>
                                                </a>
                                                <p className="mb-4 text-sm">
                                                    Currenct Price : <span className="gradient-text">0.321 ETH</span>
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <a href="item-details.html" className="btn btn-outline-primary btn-sm mb-0">Buy Now</a>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Nick Daniel">
                                                            <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Peterson">
                                                            <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Elena Morison">
                                                            <img alt="Image placeholder" src="assets/img/bruce-mars.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Ryan Milly">
                                                            <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-xl-0">
                                        <div className="card card-blog card-plain">
                                            <div className="position-relative">
                                                <a className="d-block border-radius-xl">
                                                    <img src="assets/img/art/4.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                </a>
                                            </div>
                                            <div className="auction-timer">
                                                <img src="assets/img/icons/fire.png" width={30} alt="" />
                                                <p>31 Minutes Left</p>
                                            </div>
                                            <a href="profile.html" className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="view profile">
                                                <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                            </a>
                                            <div className="item-cont card-body px-1 pb-0">
                                                <p className="text-gradient text-dark mb-2 text-sm">2 Of 10 In Stock</p>
                                                <a href="item-details.html">
                                                    <h5>
                                                        Commander Fluffy
                                                    </h5>
                                                </a>
                                                <p className="mb-4 text-sm">
                                                    Currenct Price : <span className="gradient-text">0.239 ETH</span>
                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <a href="item-details.html" className="btn btn-outline-primary btn-sm mb-0">Buy Now</a>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Peterson">
                                                            <img alt="Image placeholder" src="assets/img/team-4.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Nick Daniel">
                                                            <img alt="Image placeholder" src="assets/img/team-3.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Ryan Milly">
                                                            <img alt="Image placeholder" src="assets/img/team-2.jpg" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Elena Morison">
                                                            <img alt="Image placeholder" src="assets/img/bruce-mars.jpg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <a className="btn bg-gradient-dark mb-0" href="explore.html"><i className="fas fa-plus mr-10" aria-hidden="true" />Load More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
