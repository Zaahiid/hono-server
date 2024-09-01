const testMiddleware = (c, next) => {
  console.log("test middleware ===>>.");
  console.log("YOU ARE NOT AUTHORIZED 🔴")
  return next();
};

export default testMiddleware;
