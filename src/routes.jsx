import { Home, Profile, SignIn, SignUp } from "@/pages";
import ProtectedRoute from "@/components/ProtectedRoute";
import Announcement from "./pages/Announcement";


export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />
  },
  {
    name: "Announcements",
    path: "/announcements",
    element: (
      <ProtectedRoute>
        <Announcement />
      </ProtectedRoute>
    )
  },
];

export default routes;
