"use client";

import { Navigation, NavLink } from "@/shared/components/atoms/ui/navigation";
import { Button } from "@/shared/components/atoms/ui/button";
import { UserNav } from "./user-nav";
import { useAuth } from "@/shared/providers/auth-provider";
import Link from "next/link";
import { useActivePath } from "./use-active-path";
import { authClient } from "@/shared/lib/config/auth-client";
import { CLIENT_MENU_ITEMS } from "@/shared/lib/constants/app.constant";
import { useCartStore } from "@/features/shop/cart.store";
import { ShoppingBag } from "lucide-react";

const AppClientMenu = () => {
  const { isLoading } = useAuth();
  const { data } = authClient.useSession();
  const session = data?.session;
  const pathname = useActivePath();

  const cartItemCount = useCartStore((state) => state.items.reduce((total, item) => total + item.quantity, 0));

  const ctaButton = () => {
    if (isLoading) {
      return <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />;
    }

    if (session) {
      return <UserNav />;
    }

    return (
      <div className="flex items-center gap-2">
        <Button variant="outline" asChild>
          <Link href="/register">Créer un compte</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/login">Se connecter</Link>
        </Button>
      </div>
    );
  };

  return (
    <Navigation
      className="w-full bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-30 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] h-16"
      ctaButton={ctaButton()}
    >
      {CLIENT_MENU_ITEMS.map((item) => (
        <NavLink
          key={item.url}
          href={item.url}
          className="font-semibold py-2 transition-colors duration-150 hover:text-primary"
          active={item.url === "/" ? pathname === "/" : pathname.startsWith(item.url)}
        >
          {item.title}
        </NavLink>
      ))}
      <NavLink
        href="/shop/cart"
       className="font-semibold flex flex-row gap-2 items-center py-2 transition-colors duration-150 hover:text-primary"
      >
        <ShoppingBag className="w-6 h-6" />
        Panier
        {cartItemCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </NavLink>
    </Navigation>
  );
};

export default AppClientMenu;
