import React from "react";
import "animate.css";
import { Row, Tab } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import acexsport from "../../assets/acexsport.png";
import adminCms from "../../assets/adminCms.png";
import library from "../../assets/librarymgmt.png";
import finance from "../../assets/finance.png";
import movielist from "../../assets/movielist.png";
import notodolist from "../../assets/notodolist.png";
import nextblog from "../../assets/nextblog.png";
import boringCompany from "../../assets/boring-company.png";
import tesla from "../../assets/tesla.png";
import revgym from "../../assets/revgym.png";
import uber from "../../assets/uber.png";
import carhub from "../../assets/carhub.png";

export const Everything = () => {
  const projects = [
    {
      title: "Admin CMS",
      description:
        "full stack Content Management System for Admin of the aceXsports",
      imgUrl: adminCms,
      github: "https://github.com/Emprcode/E-commerce_api_admin",
      live: "https://admincms-acexsports.vercel.app/",
    },
    {
      title: "aceXsports",
      description:
        "full stack e-commerce project, space for wide range of sports and street wares.",
      imgUrl: acexsport,
      github: "https://github.com/Emprcode/E-commerce-store-client",
      live: "https://acexsports.vercel.app/",
    },
    {
      title: "Car-Hub",
      description:
        "Your portal to elite automobiles, where you discover and admire world-class cars and their stories.",
      imgUrl: carhub,
      github: "https://github.com/Emprcode/car-hub-nextjs",
      live: "https://carhub-lilac.vercel.app/",
    },
    {
      title: "Uber UI Clone",
      description: "Develop and Deployment",
      imgUrl: uber,
      github: "https://github.com/Emprcode/Uber-clone",
      live: "https://uberclone-xi.vercel.app/",
    },

    {
      title: "Library Management System",
      description:
        "automates library operations, and retrieval, making it easier for users to find and access resources. ",
      imgUrl: library,
      github: "https://github.com/Emprcode/client-Library-management",
      live: "https://user-librarymgmt.vercel.app/",
    },
    {
      title: "BudgetBuddy",
      description:
        "help individuals or businesses manage expenses, income, budgets, and investments efficiently, providing insights into financial health.",
      imgUrl: finance,
      github: "https://github.com/Emprcode/ft-v2-api.git",
      live: "https://budgetbuddyfinance.vercel.app/",
    },
    {
      title: "Emprocode Blog",
      description:
        "Built and deployed a modern blog using Next.js, Typescript, Tailwind.css, and Sanity.io",
      imgUrl: nextblog,
      github: "https://github.com/Emprcode/nextjs-blog-app",
      live: "https://blog-narayanaryal.vercel.app/",
    },
    {
      title: "RevGym",
      description: "Develop and Deployment",
      imgUrl: revgym,
      github: "https://github.com/Emprcode/gym-app-typescript",
      live: "https://revgym.vercel.app/",
    },
    {
      title: "Tesla UI Clone",
      description: "Develop and Deployment",
      imgUrl: tesla,
      github: "https://github.com/Emprcode/Tesla-Clone",
      live: "https://tesla-clone-rho-three.vercel.app/",
    },
    {
      title: "The Boring Company UI Clone",
      description: "Develop and Deployment",
      imgUrl: boringCompany,
      github: "https://github.com/Emprcode/Boring-Company-Clone",
      live: "https://boring-company-clone.vercel.app/",
    },

    {
      title: "Not-To-Do List App",
      description:
        "helps users prioritize tasks by specifying what not to do, and provides reminders for avoidance",
      imgUrl: notodolist,
      github: " https://github.com/Emprcode/To-do-list",
      live: "https://to-do-list-psi-flax.vercel.app/",
    },
    {
      title: "Movie List App",
      description: "Design & Development",
      imgUrl: movielist,
      github: " https://github.com/Emprcode/movie-list-app",
      live: "https://react-movie-list-kappa.vercel.app/",
    },
  ];
  return (
    <Tab.Pane eventKey="first">
      <Row className="">
        {projects.map((project, i) => {
          return <ProjectCard key={i} {...project} />;
        })}
      </Row>
    </Tab.Pane>
  );
};
