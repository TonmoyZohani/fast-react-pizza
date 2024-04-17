import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {

  const navigation = useNavigation();
  const isLoading = navigation.state ==='loading';

  return (
    <div>
      <Header />

      <main>
        <Outlet/>
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
