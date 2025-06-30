import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Project1 from "../Layouts/ProjectLayouts/Project1";
import Project2 from "../Layouts/ProjectLayouts/Project2";
import Project3 from "../Layouts/ProjectLayouts/Project3";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
  },
  {
    path: "/project_1",
    Component: Project1,
  },
  {
    path: "/project_2",
    Component: Project2,
  },
  {
    path: "/project_3",
    Component: Project3,
  },
]);
