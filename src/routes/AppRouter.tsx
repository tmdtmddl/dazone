import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../shared/Loading";
import { AUTH } from "../contextApi/context";

const Home = lazy(() => import("./Home"));
const Product = lazy(() => import("./Product"));
const MyAccount = lazy(() => import("./MyAccount"));
const Cart = lazy(() => import("./Cart"));
const RootLayout = lazy(() => import("../layouts/RootLayout"));
const ProductDetail = lazy(() => import("./ProdctDetail"));
const Signup = lazy(() => import("./Signup"));
const Order = lazy(() => import("./Order"));
const NotFound = lazy(() => import("./NotFound"));

export default function AppRouter() {
  const { user } = AUTH.use();
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={RootLayout}>
            <Route index Component={Home} />
            <Route path="*" Component={NotFound} />

            <Route path="signup" Component={Signup} />
            <Route path="product">
              <Route index Component={Product} />
              <Route path=":pid" Component={ProductDetail} />
            </Route>

            {user && (
              <>
                <Route path="myAccount" element={<MyAccount {...user} />} />
                <Route path="orders">
                  <Route index element={<Order {...user} />} />
                  <Route path=":oid" element={<>order item</>} />
                </Route>
                <Route path="cart">
                  <Route index Component={Cart} />
                </Route>
              </>
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
