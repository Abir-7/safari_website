import { user_role } from "../roles/user_role";

const all_roles = Object.values(user_role);

export const protected_routes = [
  {
    path: "/product/*",
    allowedRoles: [user_role.admin],
  },
  {
    path: "/dashboard",
    allowedRoles: all_roles,
  },
  {
    path: "/packages/*/booking",
    allowedRoles: user_role.admin, // or specific roles
  },
  {
    path: "/booking-history",
    allowedRoles: user_role.admin, // or specific roles
  },
  {
    path: "/profile",
    allowedRoles: user_role.admin, // or specific roles
  },
  {
    path: "/privacy-policy",
    allowedRoles: user_role.admin, // or specific roles
  },
];
