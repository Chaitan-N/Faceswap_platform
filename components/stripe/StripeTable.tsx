"use client";
import { User } from "@supabase/supabase-js";
import React, { useEffect } from "react";

interface StripePricingTableProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  "pricing-table-id": string;
  "publishable-key": string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": StripePricingTableProps;
    }
  }
}

type Props = {
  user: User;
};

const StripePricingTable = ({ user }: Props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-1 flex-col w-full">
      <stripe-pricing-table
        pricing-table-id="prctbl_1PTnTbHMV7VDW4MGZAEWo3Zx"
        publishable-key="pk_live_51PTlwZHMV7VDW4MGMKCzR7KoA65Rl9FVEakq7KLokpCeUi5AKXBWeC8HbPNKVsjUtNDveTZOHpr33eAD8yukYMNJ00wWQLip28"
        client-reference-id={user.id}
        customer-email={user.email}></stripe-pricing-table>
    </div>
  );
};

export default StripePricingTable;
