import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import BookingDetails from "./pages/BookingDetails";
import PriceSummary from "./pages/PriceSummary";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/booking",
    Component: BookingDetails,
  },
  {
    path: "/price-summary",
    Component: PriceSummary,
  },
  {
    path: "/payment",
    Component: Payment,
  },
  {
    path: "/confirmation",
    Component: Confirmation,
  },
]);
