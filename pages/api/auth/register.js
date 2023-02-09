import dbConnect from "../../../utils/connectDB";
import User from "../../../models/User";
import valid from "../../../utils/valid";
import bcrypt from "bcrypt";

dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, cf_password } = req.body;

    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return res.status(400).json({ err: errMsg });

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ err: "Cet email existe déjà." });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
      cf_password,
    });

    await newUser.save();
    res.json({ msg: "Inscription Réussie !" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
