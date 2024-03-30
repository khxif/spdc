"use client";

import Loading from "@/components/ui/loading";
import { useTokenStore } from "@/store/tokenStore";
import { ReactNode, useEffect, useState } from "react";

export default function Hydrations({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    useTokenStore.persist.rehydrate();
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <>{children}</> : <Loading />}</>;
}
