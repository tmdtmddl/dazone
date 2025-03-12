import { Suspense, lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CgSpinner } from "react-icons/cg";

const Home = lazy(() => import("./Home"));

const Product = lazy(() => import("./Product"));
const MyAccount = lazy(() => import("./MyAccount"));
const Cart = lazy(() => import("./Cart"));
const RootLayout = lazy(() => import("../layouts/RootLayout"));

export default function AppRouter() {
  return (
    <Suspense
      fallback={
        <div className="fixed w-full h-screen flex justify-center items-center flex-col gap-y-2.5 ">
          <CgSpinner className="text-4xl animate-spin text-theme" />
          <h1 className="animate-pluse">App is Loading...</h1>
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={RootLayout}>
            <Route index Component={Home} />
            <Route path="cart" Component={Cart} />
            <Route path="myAccount" Component={MyAccount} />
            <Route path="product" Component={Product} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
