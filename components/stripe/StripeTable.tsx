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
    <stripe-pricing-table
      pricing-table-id="prctbl_1PUDJ1ADkkF4oHxOHYji6QcY"
      publishable-key="pk_live_51MK3NiADkkF4oHxOAFkg9oCufXPZFAgCU9aJrKgVdUgUb8OCrrBf6rUEQwZEn9ntkIZlVRjzpbjzNLCKYNew7DAD00oT42sFtw"
    ></stripe-pricing-table>
  );
};

export default StripePricingTable;
