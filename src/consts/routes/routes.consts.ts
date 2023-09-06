export const PUBLIC_ROUTES = {
  ERROR: "/error",
  LOGIN: "/login",
};

export const PRIVATE_ROUTES = {
  LAYOUT: "/*",
};

export const PRODUCTS_ROUTES = {
  ROOT: "/products/*",
  PRODUCTS_ALL: "/",
  PRODUCT_NEW: "new",
  PRODUCT_EDIT: "edit/:id",
};

export const ORDERS_ROUTES = {
  ROOT: "/orders/*",
  ORDERS_ALL: "/",
  ORDER_NEW: "new",
  ORDER_EDIT: "edit/:id",
};
