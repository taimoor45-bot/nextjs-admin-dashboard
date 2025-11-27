import React, { SVGProps } from "react";
import * as Icons from "../icons";

type SubItem = {
  title: string;
  url: string;
  itemsIcon?: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
};

type Item =
  | {
      title: string;
      icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
      items: SubItem[];
    }
  | {
      title: string;
      url: string;
      icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
      items: [];
    };

type Section = {
  label: string;
  items: Item[];
};

export const NAV_DATA: Section[] = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "eCommerce",
            url: "/",
          },
        ],
      },
      // {
      //   title: "Calendar",
      //   url: "/calendar",
      //   icon: Icons.Calendar,
      //   items: [],
      // },
      {
        title: "Profile",
        url: "/profile",
        icon: Icons.User,
        items: [],
      },
      // {
      //   title: "Forms",
      //   icon: Icons.Alphabet,
      //   items: [
      //     {
      //       title: "Form Elements",
      //       url: "/forms/form-elements",
      //     },
      //     {
      //       title: "Form Layout",
      //       url: "/forms/form-layout",
      //     },
      //   ],
      // },
      {
        title: "Tables",
        url: "/tables",
        icon: Icons.Table,
        items: [
          {
            title: "Quotes",
            url: "/quotes",
            itemsIcon: Icons.QuoteIcon,
          },
          {
            title: "Users",
            url: "/users",
            itemsIcon: Icons.UserOutlineIcon,
          },
        ],
      },
      // {
      //   title: "Pages",
      //   icon: Icons.Alphabet,
      //   items: [
      //     {
      //       title: "Settings",
      //       url: "/pages/settings",
      //     },
      //   ],
      // },
    ],
  },
  {
    label: "OTHERS",
    items: [
      // {
      //   title: "Charts",
      //   icon: Icons.PieChart,
      //   items: [
      //     {
      //       title: "Basic Chart",
      //       url: "/charts/basic-chart",
      //     },
      //   ],
      // },
      // {
      //   title: "UI Elements",
      //   icon: Icons.FourCircle,
      //   items: [
      //     {
      //       title: "Alerts",
      //       url: "/ui-elements/alerts",
      //     },
      //     {
      //       title: "Buttons",
      //       url: "/ui-elements/buttons",
      //     },
      //   ],
      // },
      {
        title: "Authentication",
        icon: Icons.Authentication,
        items: [
          {
            title: "Sign In",
            url: "/auth/sign-in",
          },
        ],
      },
    ],
  },
];
