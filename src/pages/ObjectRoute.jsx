import React from 'react';
import { Outlet, Link, useRoutes, useParams } from 'react-router-dom';

function ObjectRoute() {
  let routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        {
          path: 'courses',
          element: <Courses />,
          children: [
            { index: true, element: <CoursesIndex /> },
            { path: '/courses/:id', element: <Course /> },
          ],
        },
        { path: '*', element: <NoMatch /> },
      ],
    },
  ];

  let element = useRoutes(routes);
  return <div>ObjectRoute{element}</div>;
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="courses">Courses</Link>
          </li>
          <li>
            <Link to="nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h2>Courses</h2>
      <Outlet />
    </div>
  );
}
function CoursesIndex() {
  return (
    <div>
      <p>Please choose a course:</p>

      <nav>
        <ul>
          <li>
            <Link to="react-fundamentals">React Fundamentals</Link>
          </li>
          <li>
            <Link to="advanced-react">Advanced React</Link>
          </li>
          <li>
            <Link to="react-router">React Router</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Course() {
  let { id } = useParams();

  return (
    <div>
      <h2>
        Welcome to the {id?.split('-').map(capitalizeString).join(' ')} course!
      </h2>

      <p>This is a great course. You're gonna love it!</p>

      <Link to="/objectRoute/courses">See all courses</Link>
    </div>
  );
}

function capitalizeString(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost in object route...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default ObjectRoute;
