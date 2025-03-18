import { RouterProvider } from "@arielgonzaguer/michi-router";

import { Hero } from "./Components/Layout";
import { GreenRoom, AudioRoom } from "./Components/Rooms";

interface Route {
  path: string;
  component: React.ReactNode;
}

const App = () => {
  const routes: Route[] = [
    { path: "/", component: <Hero /> },
    { path: "/GreenRoom", component: <GreenRoom /> },
    { path: "/AudioRoom", component: <AudioRoom /> },
  ];

  return (
    <RouterProvider routes={routes}>
      <div>404: Not Found</div>
    </RouterProvider>
  );
};

export default App;
