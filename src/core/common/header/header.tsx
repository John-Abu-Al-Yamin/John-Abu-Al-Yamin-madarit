import React, { useState, useEffect } from "react";
import ImageWithBasePath from "../imageWithBasePath";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataTheme } from "../../redux/themeSettingSlice";
import { all_routes } from "../../../feature-module/router/all_routes";
import LoginModal from "../modal/loginModal";
import RegisterModal from "../modal/registerModal";
import ForgotPasswordModal from "../modal/forgotPassword";
import ChangePasswordModal from "../modal/changePassword";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const [isOffcanva, setIsOffcanva] = useState(false);
  const [isMegaMenu, setIsMegaMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const dataTheme = useSelector((state: any) => state.themeSetting.dataTheme);
  const handleDataThemeChange = (theme: string) => {
    dispatch(setDataTheme(theme));
  };
  const openSubMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setOpenDropdownIndex(null);
  };
  const routes = all_routes;
  const toggleSubMenu = (index: any) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    setIsDropdownOpen(false);
  };

  const sideBar = [
    {
      tittle: "Home",
      base: "home",
      showAsTab: false,
      separateRoute: true,
      menu: [
        {
          menuValue: "Home - 6",
          img: "assets/img/menu/home-06.jpg",
          route: "/index-6",
          homeName: "Tours",
          hasSubRoute: false,
          showSubRoute: false,
          base: "/index-6",
          page: "",
          last: "",
          subMenus: [],
          icon: "",
        },
      ],
    },

    // tour
    {
      tittle: "Tour",
      base: "tour",
      subTitle: "Tour Booking",
      showAsTab: false,
      separateRoute: false,
      twoTitle: false,
      img: "assets/img/menu/tour.jpg",
      menu: [
        {
          menuValue: "Tour Grid",
          route: routes.tourGrid,
          hasSubRoute: false,
          showSubRoute: false,
          base: "tour-grid",
          page: "",
          last: "",
          subMenus: [],
          icon: "",
        },
        {
          menuValue: "Tour List",
          route: routes.tourList,
          hasSubRoute: false,
          showSubRoute: false,
          base: "tour-list",
          page: "",
          last: "",
          subMenus: [],
          icon: "",
        },
        {
          menuValue: "Tour Details",
          route: routes.tourDetails,
          hasSubRoute: false,
          showSubRoute: false,
          base: "tour-details",
          page: "",
          last: "",
          subMenus: [],
          icon: "",
        },
        {
          menuValue: "Tour Booking",
          route: routes.tourBooking,
          hasSubRoute: false,
          showSubRoute: false,
          base: "tour-bookings",
          page: "",
          last: "",
          subMenus: [],
          icon: "",
        },
        {
          menuValue: "Add Tour",
          route: routes.addTour,
          hasSubRoute: false,
          showSubRoute: false,
          base: "add-tour",
          page: "",
          last: "",
          subMenus: [],
          icon: "",
        },
      ],
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setIsResponsive(true);
      } else {
        setIsResponsive(false);
        setIsOffcanva(false);
      }
    };

    // Call the function on mount
    handleResize();

    // Attach resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("class", dataTheme);
  }, [dataTheme]);
  const DarkButton = () => {
    return (
      <div className="me-3">
        <Link
          to="#"
          id="dark-mode-toggle"
          className={`theme-toggle ${dataTheme === "light" && "activate"}`}
          onClick={() => handleDataThemeChange("dark-mode")}
        >
          <i className="isax isax-moon" />
        </Link>
        <Link
          to="#"
          id="light-mode-toggle"
          className={`theme-toggle ${dataTheme === "dark-mode" && "activate"}`}
          onClick={() => handleDataThemeChange("light")}
        >
          <i className="isax isax-sun-1" />
        </Link>
      </div>
    );
  };

  const token = localStorage.getItem("token");

  return (
    <>
      <div
        className={`main-header ${
          location.pathname === "/index-6"
            ? "main-header-four"
            : ""
        } `}
      >
        {/* Header Topbar*/}
        {/* {
        location.pathname === "/index-6" ? (
          <></>
        ) : (
          <div className="header-topbar text-center bg-transparent">
            <div className="container">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <p className="d-flex align-items-center fw-medium fs-14 mb-2">
                  <i className="isax isax-call5 me-2" />
                  Toll Free : +1 56565 56594
                </p>
                <div className="d-flex align-items-center">
                  <p className="mb-2 me-3 d-flex align-items-center fw-medium fs-14">
                    <i className="isax isax-message-text-15 me-2" />
                    Email : info@example.com
                  </p>
                  <div className="dropdown flag-dropdown mb-2 me-3">
                    <Link
                      to="#"
                      className="dropdown-toggle d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      <ImageWithBasePath
                        src="assets/img/flags/us-flag.svg"
                        className="me-2"
                        alt="flag"
                      />
                      ENG
                    </Link>
                    <ul className="dropdown-menu p-2 mt-2">
                      <li>
                        <Link
                          className="dropdown-item rounded d-flex align-items-center"
                          to="#"
                        >
                          <ImageWithBasePath
                            src="assets/img/flags/us-flag.svg"
                            className="me-2"
                            alt="flag"
                          />
                          ENG
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item rounded d-flex align-items-center"
                          to="#"
                        >
                          <ImageWithBasePath
                            src="assets/img/flags/arab-flag.svg"
                            className="me-2"
                            alt="flag"
                          />
                          ARA
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item rounded d-flex align-items-center"
                          to="#"
                        >
                          <ImageWithBasePath
                            src="assets/img/flags/france-flag.svg"
                            className="me-2"
                            alt="flag"
                          />
                          FRE
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown mb-2 me-3">
                    <Link
                      to="#"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      USD
                    </Link>
                    <ul className="dropdown-menu p-2 mt-2">
                      <li>
                        <Link className="dropdown-item rounded" to="#">
                          USD
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item rounded" to="#">
                          YEN
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item rounded" to="#">
                          EURO
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="fav-dropdown mb-2">
                    <Link to={routes.wishlist} className="position-relative">
                      <i className="isax isax-heart" />
                      <span className="count-icon bg-secondary text-gray-9">
                        0
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}

        {location.pathname === "/index-6" && (
          <div className="header-topbar header-top-six text-center bg-transparent">
            <div className="container">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                {/* <div className="d-flex align-items-center flex-wrap">
                  <p className="d-flex align-items-center fs-14 mb-2 me-3 ">
                    <i className="isax isax-call5 me-2" />
                    Toll Free : +1 56565 56594
                  </p>
                  <p className="mb-2 d-flex align-items-center fs-14">
                    <i className="isax isax-message-text-15 me-2" />
                    Email : info@example.com
                  </p>
                </div> */}
                <div className="navbar-logo mb-2">
                  <Link className="logo-dark header-logo" to={routes.home6}>
                    <ImageWithBasePath
                      src="assets/img/logo-dark.svg"
                      className="logo"
                      alt="Logo"
                    />
                  </Link>
                  <Link className="logo-white header-logo" to={routes.home6}>
                    <ImageWithBasePath
                      src="assets/img/logo.svg"
                      className="logo"
                      alt="Logo"
                    />
                  </Link>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="dropdown mb-2 me-3">
                    <Link
                      to="#"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      USD
                    </Link>
                    <ul className="dropdown-menu p-2 mt-2">
                      <li>
                        <Link className="dropdown-item rounded" to="#">
                          USD
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item rounded" to="#">
                          YEN
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item rounded" to="#">
                          EURO
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <DarkButton />
                  <div className="fav-dropdown  me-3">
                    <Link to={routes.wishlist} className="position-relative">
                      <i className="isax isax-heart" />
                      <span className="count-icon bg-secondary text-gray-9">
                        0
                      </span>
                    </Link>
                  </div>
                  <div>
                    {token ? (
                      <Link
                        to="/user/my-profile"
                        className="text-white btn btn-dark w-100 mb-2"
                      >
                        Profile
                      </Link>
                    ) : (
                      <Link
                        to="#"
                        className="text-white btn btn-dark w-100 mb-2"
                        data-bs-toggle="modal"
                        data-bs-target="#login-modal"
                      >
                        Sign In
                      </Link>
                    )}
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* /Header Topbar*/}
        {/* Header */}
        <header
          className={`${scrolled ? "fixed" : ""} ${
            location.pathname === "/index-2" && "header-four"
          } ${location.pathname === "/index-3" && "header-three"} ${
            location.pathname === "/index-4" && "header-four"
          } ${location.pathname === "/index-5" && "header-five"} ${
            location.pathname === "/index-6" && "header-six"
          }`}
        >
          <div className="container">
            <div className={`offcanvas-info ${isOffcanva ? "show" : ""}`}>
              <div className="offcanvas-wrap">
                <div className="offcanvas-detail">
                  <div className="offcanvas-head">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Link to={routes.home6} className="black-logo-responsive">
                        <ImageWithBasePath
                          src="assets/img/logo-dark.svg"
                          alt="logo-img"
                        />
                      </Link>
                      <Link to={routes.home6} className="white-logo-responsive">
                        <ImageWithBasePath
                          src="assets/img/logo.svg"
                          alt="logo-img"
                        />
                      </Link>
                      <div
                        className="offcanvas-close"
                        onClick={() => setIsOffcanva(false)}
                      >
                        <i className="ti ti-x" />
                      </div>
                    </div>
                    <div className="wishlist-info d-flex justify-content-between align-items-center">
                      <h6 className="fs-16 fw-medium">Wishlist</h6>
                      <div className="d-flex align-items-center">
                        <div className="fav-dropdown">
                          <Link
                            to={routes.wishlist}
                            className="position-relative"
                          >
                            <i className="isax isax-heart" />
                            <span className="count-icon bg-secondary text-gray-9">
                              0
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`mobile-menu fix mb-3 ${
                      isResponsive ? "mean-container" : ""
                    }`}
                  >
                    <div className="mean-bar">
                      <nav className="mean-nav">
                        <ul className="main-nav" style={{ display: "none" }}>
                          {sideBar.map((mainMenus, i) => (
                            <React.Fragment key={i}>
                              {mainMenus.separateRoute ? (
                                <li
                                  className={`has-submenu megamenu active ${
                                    isDropdownOpen ? "dropdown-opened" : ""
                                  }`}
                                >
                                  <Link to="#">
                                    {mainMenus.tittle}
                                    <i className="fa-solid fa-plus"></i>
                                  </Link>
                                  <ul
                                    className="submenu mega-submenu"
                                    style={{
                                      display: isDropdownOpen
                                        ? "block"
                                        : "none",
                                    }}
                                  >
                                    <li>
                                      <div className="megamenu-wrapper">
                                        <div className="d-none d-lg-flex align-items-center justify-content-between flex-wrap">
                                          <h6 className="mb-3">Home Pages</h6>
                                          <Link
                                            to="#"
                                            className="btn btn-dark btn-md mb-3 text-white d-inline-block w-auto"
                                          >
                                            Purchase Template
                                          </Link>
                                        </div>
                                        <div className="row g-lg-4">
                                          {mainMenus.menu.map(
                                            (menu: any, index: any) => (
                                              <div
                                                className="col-lg-2"
                                                key={index}
                                              >
                                                <div
                                                  className={`single-demo ${
                                                    menu.base === mainMenus.base
                                                      ? "active"
                                                      : ""
                                                  }`}
                                                >
                                                  <div className="demo-img">
                                                    <Link to={menu.route}>
                                                      <ImageWithBasePath
                                                        src={menu.img}
                                                        className="img-fluid"
                                                        alt="img"
                                                      />
                                                    </Link>
                                                  </div>
                                                  <div className="demo-info">
                                                    <Link to={menu.route}>
                                                      {menu.homeName}
                                                    </Link>
                                                  </div>
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <Link
                                    className={`mean-expand ${
                                      isDropdownOpen ? "mean-clicked" : ""
                                    }`}
                                    to="#"
                                    style={{ fontSize: "18px" }}
                                    onClick={openSubMenu}
                                  >
                                    <i className="ti ti-plus"></i>
                                  </Link>
                                </li>
                              ) : (
                                <li
                                  className={`has-submenu mega-innermenu ${
                                    openDropdownIndex === i
                                      ? "dropdown-opened"
                                      : ""
                                  }`}
                                >
                                  <Link to="#">
                                    {mainMenus.tittle}
                                    <i className="fa-solid fa-plus"></i>
                                  </Link>
                                  <ul
                                    className="submenu mega-submenu"
                                    style={{
                                      display:
                                        openDropdownIndex === i
                                          ? "block"
                                          : "none",
                                    }}
                                  >
                                    <li>
                                      <div className="megamenu-wrapper">
                                        <div className="row">
                                          <div className="col-lg-6">
                                            <h6>{mainMenus.tittle}</h6>
                                            <ul>
                                              {/* {mainMenus.menu.map((menu: any, index: any) => (
                                                <React.Fragment key={index}>
                                                  {!mainMenus.twoTitle && (
                                                    <li>
                                                      <Link to={to={"#"}}>
                                                        {menu.menuValue}
                                                      </Link>
                                                    </li>
                                                  )}
                                                  {mainMenus.twoTitle && menu.menuValue && (
                                                    <li>
                                                      <Link to={to={"#"}}>
                                                        {menu.menuValue}
                                                      </Link>
                                                    </li>
                                                  )}
                                                  {mainMenus.twoTitle && menu.menuValue2 && (
                                                    <li>
                                                      <Link to={to={"#"}}>
                                                        {menu.menuValue2}
                                                      </Link>
                                                    </li>
                                                  )}
                                                </React.Fragment>
                                              ))} */}
                                            </ul>
                                            <Link
                                              className="mean-expand"
                                              to="#"
                                              style={{ fontSize: "18px" }}
                                            >
                                              <i className="ti ti-plus"></i>
                                            </Link>
                                          </div>
                                          <div className="col-lg-6">
                                            <div className="menu-img">
                                              <ImageWithBasePath
                                                src={mainMenus?.img || ""}
                                                alt="img"
                                                className="img-fluid"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <Link
                                    className={`mean-expand ${
                                      openDropdownIndex === i
                                        ? "mean-clicked"
                                        : ""
                                    }`}
                                    to="#"
                                    style={{ fontSize: "18px" }}
                                    onClick={() => toggleSubMenu(i)}
                                  >
                                    <i className="ti ti-plus"></i>
                                  </Link>
                                </li>
                              )}
                            </React.Fragment>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="offcanvas__contact">
                    <div className="mt-4">
                      <div className="header-dropdown d-flex flex-fill">
                        <div className="w-100">
                          <div className="dropdown flag-dropdown mb-2">
                            <Link
                              to="#"
                              className="dropdown-toggle bg-white border d-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <ImageWithBasePath
                                src="assets/img/flags/us-flag.svg"
                                className="me-2"
                                alt="flag"
                              />
                              ENG
                            </Link>
                            <ul className="dropdown-menu p-2">
                              <li>
                                <Link
                                  className="dropdown-item rounded d-flex align-items-center"
                                  to="#"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/flags/us-flag.svg"
                                    className="me-2"
                                    alt="flag"
                                  />
                                  ENG
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item rounded d-flex align-items-center"
                                  to="#"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/flags/arab-flag.svg"
                                    className="me-2"
                                    alt="flag"
                                  />
                                  ARA
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item rounded d-flex align-items-center"
                                  to="#"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/flags/france-flag.svg"
                                    className="me-2"
                                    alt="flag"
                                  />
                                  FRE
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="dropdown-toggle bg-white border d-block"
                              data-bs-toggle="dropdown"
                            >
                              USD
                            </Link>
                            <ul className="dropdown-menu p-2">
                              <li>
                                <Link className="dropdown-item rounded" to="#">
                                  USD
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item rounded" to="#">
                                  YEN
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item rounded" to="#">
                                  EURO
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Link
                          to="#"
                          className="text-white btn btn-dark w-100 mb-3"
                          data-bs-toggle="modal"
                          data-bs-target="#login-modal"
                        >
                          Sign In
                        </Link>
                      </div>
                      <Link
                        to={routes.becomeAnExpert}
                        className="btn btn-primary w-100"
                      >
                        Become Expert
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`offcanvas-overlay ${
                isOffcanva ? "overlay-open" : ""
              }`}
              onClick={() => setIsOffcanva(false)}
            />
            <div className="header-nav">
              <div className="main-menu-wrapper">
                <div className="navbar-logo">
                  <Link className="logo-white header-logo" to={routes.home6}>
                    {location.pathname === "/index-2" ||
                    location.pathname === "/index-3" ||
                    location.pathname === "/index-4" ||
                    location.pathname === "/index-5" ? (
                      <ImageWithBasePath
                        src="assets/img/logo-dark.svg"
                        className="logo"
                        alt="Logo"
                      />
                    ) : (
                      <ImageWithBasePath
                        src="assets/img/logo.svg"
                        className="logo"
                        alt="Logo"
                      />
                    )}
                  </Link>
                  {location.pathname !== routes.home6 && (
                    <Link className="logo-dark header-logo" to={routes.home6}>
                      {location.pathname === "/index-2" ||
                      location.pathname === "/index-3" ||
                      location.pathname === "/index-4" ||
                      location.pathname === "/index-5" ? (
                        <ImageWithBasePath
                          src="assets/img/logo.svg"
                          className="logo"
                          alt="Logo"
                        />
                      ) : (
                        <ImageWithBasePath
                          src="assets/img/logo-dark.svg"
                          className="logo"
                          alt="Logo"
                        />
                      )}
                    </Link>
                  )}
                </div>
                <nav id="mobile-menu">
                  <ul className={`main-nav ${isMegaMenu ? "active" : ""}`}>
                    {sideBar.map((mainMenus: any, index) => (
                      <React.Fragment key={index}>
                        {mainMenus.separateRoute ? (
                          <li
                            className={`has-submenu megamenu ${
                              mainMenus?.menu?.some((item: any) =>
                                item?.route?.includes(location.pathname)
                              )
                                ? "active"
                                : ""
                            }`}
                            onMouseOver={() => setIsMegaMenu(true)}
                            onMouseLeave={() => setIsMegaMenu(false)}
                          >
                            <Link to="#">
                              {mainMenus.tittle}
                              <i
                                className={`${
                                  location.pathname === "/index"
                                    ? "fa-solid fa-plus"
                                    : "fa-solid fa-angle-down"
                                } `}
                              ></i>
                            </Link>
                            <ul
                              className="submenu mega-submenu"
                              onMouseOver={() => setIsMegaMenu(true)}
                              onMouseLeave={() => setIsMegaMenu(false)}
                            >
                              <li>
                                <div className="megamenu-wrapper">
                                  <div className="d-none d-lg-flex align-items-center justify-content-between flex-wrap">
                                    <h6 className="mb-3">Home Pages</h6>
                                    <Link
                                      to="#"
                                      className="btn btn-dark btn-md mb-3 text-white d-inline-block w-auto"
                                    >
                                      Purchase Template
                                    </Link>
                                  </div>
                                  <div className="row g-lg-4">
                                    {mainMenus.menu.map(
                                      (menu: any, idx: any) => (
                                        <div className="col-lg-2" key={idx}>
                                          <div
                                            className={`single-demo ${
                                              location.pathname === menu.route
                                                ? "active"
                                                : ""
                                            }`}
                                          >
                                            <div className="demo-img">
                                              <Link to={menu.route}>
                                                <ImageWithBasePath
                                                  src={menu.img}
                                                  className="img-fluid"
                                                  alt="img"
                                                />
                                              </Link>
                                            </div>
                                            <div className="demo-info">
                                              <Link to={menu.route}>
                                                {menu.homeName}
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        ) : (
                          <>
                            {mainMenus.twoTitle ? (
                              <li
                                className={`has-submenu mega-innermenu ${
                                  mainMenus?.menu?.some((item: any) =>
                                    item?.route?.includes(location.pathname)
                                  )
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <Link to="#">
                                  {mainMenus.tittle}
                                  <i
                                    className={`${
                                      location.pathname === "/index"
                                        ? "fa-solid fa-plus"
                                        : "fa-solid fa-angle-down"
                                    } `}
                                  ></i>
                                </Link>
                                <ul className="submenu mega-submenu">
                                  <li>
                                    <div className="megamenu-wrapper">
                                      <div className="row g-lg-4">
                                        <div className="col-lg-6">
                                          <h6>{mainMenus.subTitle}</h6>
                                          <ul>
                                            {mainMenus.menu.map(
                                              (
                                                menu: {
                                                  menuValue: any;
                                                  route: string;
                                                },
                                                idx:
                                                  | React.Key
                                                  | null
                                                  | undefined
                                              ) =>
                                                menu.menuValue && (
                                                  <li
                                                    key={idx}
                                                    className={
                                                      location.pathname ===
                                                      menu.route
                                                        ? "active"
                                                        : ""
                                                    }
                                                  >
                                                    <Link to={menu.route}>
                                                      {menu.menuValue}
                                                    </Link>
                                                  </li>
                                                )
                                            )}
                                          </ul>
                                        </div>
                                        <div className="col-lg-6">
                                          <h6>{mainMenus.subTitle2}</h6>
                                          <ul>
                                            {mainMenus.menu.map(
                                              (
                                                menu: {
                                                  menuValue2: any;
                                                  route: string;
                                                },
                                                idx:
                                                  | React.Key
                                                  | null
                                                  | undefined
                                              ) =>
                                                menu.menuValue2 && (
                                                  <li
                                                    key={idx}
                                                    className={
                                                      location.pathname ===
                                                      menu.route
                                                        ? "active"
                                                        : ""
                                                    }
                                                  >
                                                    <Link to={menu.route}>
                                                      {menu.menuValue2}
                                                    </Link>
                                                  </li>
                                                )
                                            )}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            ) : (
                              <li
                                className={`has-submenu mega-innermenu ${
                                  mainMenus?.menu?.some((item: any) =>
                                    item?.route?.includes(location.pathname)
                                  )
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <Link to="#">
                                  {mainMenus.tittle}
                                  <i
                                    className={`${
                                      location.pathname === "/index"
                                        ? "fa-solid fa-plus"
                                        : "fa-solid fa-angle-down"
                                    } `}
                                  ></i>
                                </Link>
                                <ul className="submenu mega-submenu">
                                  <li>
                                    <div className="megamenu-wrapper">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <h6>{mainMenus.subTitle}</h6>
                                          <ul>
                                            {mainMenus.menu.map(
                                              (
                                                menu: {
                                                  menuValue: string;
                                                  route: string;
                                                },
                                                idx:
                                                  | React.Key
                                                  | null
                                                  | undefined
                                              ) => (
                                                <li
                                                  key={idx}
                                                  className={
                                                    location.pathname ===
                                                    menu.route
                                                      ? "active"
                                                      : ""
                                                  }
                                                >
                                                  <Link to={menu.route}>
                                                    {menu.menuValue}
                                                  </Link>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="menu-img">
                                            <ImageWithBasePath
                                              src={mainMenus.img}
                                              className="img-fluid"
                                              alt="img"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            )}
                          </>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </nav>
                {location.pathname === "/index" ? (
                  <div className="header-btn d-flex align-items-center">
                    <DarkButton />
                    <div>
                      <Link
                        to="#"
                        className="btn btn-white me-3"
                        data-bs-toggle="modal"
                        data-bs-target="#login-modal"
                      >
                        Sign In
                      </Link>
                    </div>
                    <Link
                      to={routes.becomeAnExpert}
                      className="btn btn-primary me-0"
                    >
                      Become Expert
                    </Link>
                    <div className="header__hamburger d-xl-none my-auto">
                      <div
                        className="sidebar-menu"
                        onClick={() => setIsOffcanva(true)}
                      >
                        <i className="isax isax-menu5" />
                      </div>
                    </div>
                  </div>
                ) : location.pathname === "/index-2" ? (
                  <div className="header-btn d-flex align-items-center">
                    <div className="dropdown flag-dropdown me-3">
                      <Link
                        to="#"
                        className="d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <ImageWithBasePath
                          src="assets/img/flags/us-flag.svg"
                          alt="flag"
                        />
                      </Link>
                      <ul className="dropdown-menu p-2 mt-2">
                        <li>
                          <Link
                            className="dropdown-item rounded d-flex align-items-center"
                            to="#"
                          >
                            <ImageWithBasePath
                              src="assets/img/flags/us-flag.svg"
                              className="me-2"
                              alt="flag"
                            />
                            ENG
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item rounded d-flex align-items-center"
                            to="#"
                          >
                            <ImageWithBasePath
                              src="assets/img/flags/arab-flag.svg"
                              className="me-2"
                              alt="flag"
                            />
                            ARA
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item rounded d-flex align-items-center"
                            to="#"
                          >
                            <ImageWithBasePath
                              src="assets/img/flags/france-flag.svg"
                              className="me-2"
                              alt="flag"
                            />
                            FRE
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown me-3">
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        USD
                      </Link>
                      <ul className="dropdown-menu p-2 mt-2">
                        <li>
                          <Link className="dropdown-item rounded" to="#">
                            USD
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item rounded" to="#">
                            YEN
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item rounded" to="#">
                            EURO
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="me-3">
                      <Link to={routes.userDashboard}>
                        <i className="isax isax-user" />
                      </Link>
                    </div>
                    <DarkButton />
                    <div className="fav-dropdown me-3">
                      <Link to={routes.wishlist} className="position-relative">
                        <i className="isax isax-heart" />
                        <span className="count-icon bg-secondary text-gray-9">
                          0
                        </span>
                      </Link>
                    </div>
                    <Link
                      to={routes.becomeAnExpert}
                      className="btn btn-primary"
                    >
                      Become Expert
                    </Link>
                    <div className="header__hamburger d-xl-none my-auto">
                      <div
                        className="sidebar-menu"
                        onClick={() => setIsOffcanva(true)}
                      >
                        <i className="isax isax-menu5" />
                      </div>
                    </div>
                  </div>
                ) : location.pathname === "/index-3" ? (
                  <div className="header-btn d-flex align-items-center">
                    <div className="cart-dropdown me-3">
                      <Link
                        to={routes.userDashboard}
                        className="position-relative"
                      >
                        <i className="isax isax-user" />
                      </Link>
                    </div>
                    <DarkButton />
                    <div className="fav-dropdown me-3">
                      <Link to={routes.wishlist} className="position-relative">
                        <i className="isax isax-heart" />
                        <span className="count-icon bg-secondary text-gray-9">
                          0
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="#"
                        className="text-white fs-13 btn btn-dark btn-md"
                        data-bs-toggle="modal"
                        data-bs-target="#login-modal"
                      >
                        Sign In
                      </Link>
                    </div>
                    <div className="header__hamburger d-xl-none my-auto">
                      <div
                        className="sidebar-menu"
                        onClick={() => setIsOffcanva(true)}
                      >
                        <i className="isax isax-menu5" />
                      </div>
                    </div>
                  </div>
                ) : location.pathname === "/index-4" ? (
                  <>
                    <div className="header-btn d-flex align-items-center">
                      <DarkButton />
                      <div className="fav-dropdown me-3">
                        <Link
                          to={routes.wishlist}
                          className="position-relative"
                        >
                          <i className="isax isax-heart" />
                          <span className="count-icon bg-secondary text-gray-9">
                            0
                          </span>
                        </Link>
                      </div>
                      {/* <Link
                              to={routes.addFlight}
                              className="btn btn-dark d-inline-flex align-items-center me-3"
                            >
                              <i className="isax isax-lock me-2" />
                              Add Your Listing
                            </Link> */}
                      <Link
                        to={routes.register}
                        className="btn btn-dark d-inline-flex align-items-center me-0"
                      >
                        <i className="isax isax-lock me-2" />
                        Sign Up
                      </Link>
                      <div className="header__hamburger d-xl-none my-auto">
                        <div
                          className="sidebar-menu"
                          onClick={() => setIsOffcanva(true)}
                        >
                          <i className="isax isax-menu5" />
                        </div>
                      </div>
                    </div>
                  </>
                ) : location.pathname === "/index-5" ? (
                  <div className="header-btn d-flex align-items-center">
                    <div className="cart-dropdown me-3">
                      <Link
                        to={routes.userDashboard}
                        className="position-relative"
                      >
                        <i className="isax isax-user" />
                      </Link>
                    </div>
                    <DarkButton />
                    <div className="fav-dropdown me-3">
                      <Link to={routes.wishlist} className="position-relative">
                        <i className="isax isax-heart" />
                        <span className="count-icon bg-secondary text-gray-9">
                          0
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="#"
                        className="text-white btn btn-dark w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#login-modal"
                      >
                        Sign In
                      </Link>
                    </div>
                    <div className="header__hamburger d-xl-none my-auto">
                      <div
                        className="sidebar-menu"
                        onClick={() => setIsOffcanva(true)}
                      >
                        <i className="isax isax-menu5" />
                      </div>
                    </div>
                  </div>
                ) : location.pathname === "/index-6" ? (
                  <div className="header__hamburger d-xl-none my-auto">
                    <div
                      className="sidebar-menu"
                      onClick={() => setIsOffcanva(true)}
                    >
                      <i className="isax isax-menu5" />
                    </div>
                  </div>
                ) : (
                  <div className="header-btn d-flex align-items-center">
                    <DarkButton />
                    <div className="dropdown profile-dropdown">
                      <Link
                        to="#"
                        className="d-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <span className="avatar avatar-md">
                          <ImageWithBasePath
                            src="assets/img/users/user-05.jpg"
                            alt="Img"
                            className="img-fluid rounded-circle border border-white border-4"
                          />
                        </span>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <Link
                            className="dropdown-item d-inline-flex align-items-center rounded fw-medium p-2"
                            to={routes.userDashboard}
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item d-inline-flex align-items-center rounded fw-medium p-2"
                            to={routes.customerHotelBooking}
                          >
                            My Booking
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item d-inline-flex align-items-center rounded fw-medium p-2"
                            to={routes.userMyProfile}
                          >
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider my-2" />
                        </li>
                        <li>
                          <Link
                            className="dropdown-item d-inline-flex align-items-center rounded fw-medium p-2"
                            to={routes.userProfileSettings}
                          >
                            Settings
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item d-inline-flex align-items-center rounded fw-medium p-2"
                            to={routes.login}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="header__hamburger d-xl-none my-auto"
                      onClick={() => setIsOffcanva(true)}
                    >
                      <div className="sidebar-menu">
                        <i className="isax isax-menu5" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        {/* /Header */}
      </div>
      <LoginModal />
      <RegisterModal />
      <ForgotPasswordModal />
      <ChangePasswordModal />
    </>
  );
};

export default Header;
