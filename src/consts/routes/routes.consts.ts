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
  PRODUCT: "/products/:id",
  PRODUCT_NEW: "new",
  PRODUCT_EDIT: "edit/:id",
  ORDERS: "/orders",
  ORDER: "/order/:id",
};
