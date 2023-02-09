const valid = (name, email, password, cf_password) => {
  if (!name || !email || !password) return "Veuillez remplir tous les champs";

  if (!validateEmail(email)) return "Email invalide";

  if (password.length < 6)
    return "Le mot de passe doit contenir au moins 6 caractères";

  if (password !== cf_password) return "Les mots de passe ne correspondent pas";
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}

export default valid;
