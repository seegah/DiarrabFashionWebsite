import dbConnect from "../../../utils/connectDB";
import User from "../../../models/User";
import jwt from "jsonwebtoken";
import { createAccessToken } from "../../../utils/generateToken";

dbConnect();

export default async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token)
      return res.status(400).json({ err: "S'il vous plait connectez-vous !" });

    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
    if (!result)
      return res
        .status(400)
        .json({ err: "Votre jeton est incorrect ou a expiré !" });

    const user = await User.findById(result.id);
    if (!user)
      return res.status(400).json({ err: "L'utilisateur n'existe pas" });

    const access_token = createAccessToken({ id: user._id });
    res.json({
      access_token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        root: user.root,
      },
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
