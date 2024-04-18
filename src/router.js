
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./components/Root";
import Main from "./components/Main/Main";
import Rent from "./components/Rent/Rent";

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="/" element={<Main />}/>
    <Route path="/rent" element={<Rent />}/>
  </Route >
));


//<Route path="/booking" element={<Booking />}/>