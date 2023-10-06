import {
  login,
  dashboard,
  expenses,
  transactions,
  trend,
} from "../utils/Icons";

export const menuItems = [
  {
    id: 1,
    title: "Login",
    icon: login,
    link: "/Login",
  },
  {
    id: 2,
    title: "View Transactions",
    icon: transactions,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Incomes",
    icon: trend,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Expenses",
    icon: expenses,
    link: "/dashboard",
  },
];
