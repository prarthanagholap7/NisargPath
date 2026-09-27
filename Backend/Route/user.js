import express from "express";
import {
  handleUserSignUp,
  handlsUserSignIn,
  handleSignUpUserViaGoogleAuth,
  handleUserLogOut,
} from "../Controllers/userHandler.js";
import passport from "passport";
import configurePassport from "../Config/passport.js";
import { checkForAuthenticationCookie } from "../Middlewares/authentication.js";

// ✅ Call this first to initialize the Google Strategy
configurePassport(passport);

const userRouter = express.Router();

userRouter.post("/signup", handleUserSignUp);

userRouter.post("/signin", handlsUserSignIn);

userRouter.post(
  "/logout",
  checkForAuthenticationCookie("token"),
  handleUserLogOut
);

userRouter.get("/google", (req, res, next) => {
  if (!passport._strategy("google")) {
    return res
      .status(503)
      .json({ error: "Google OAuth is not configured on this server." });
  }
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next
  );
});

userRouter.get(
  "/google/callback",
  (req, res, next) => {
    if (!passport._strategy("google")) {
      return res
        .status(503)
        .json({ error: "Google OAuth is not configured on this server." });
    }
    passport.authenticate("google", { session: false })(req, res, next);
  },
  handleSignUpUserViaGoogleAuth
);

export default userRouter;
