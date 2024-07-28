interface Menu {
  name: string;
  icon: string;
  link: string;
}

const navMenu: Menu[] = [
  {
    name: "Balance",
    icon: "bi-speedometer2",
    link: "/balance",
  },
  {
    name: "Leaderboard",
    icon: "bi-clipboard2-data-fill",
    link: "/leaderboard",
  },
  {
    name: "History",
    icon: "bi-hourglass-split",
    link: "/history",
  },
  {
    name: "Setting",
    icon: "bi-gear-fill",
    link: "/setting",
  },
  // {
  //   name: "Logout",
  //   icon: "bi-arrow-bar-right",
  //   link: "",
  // },
];

export default navMenu;
