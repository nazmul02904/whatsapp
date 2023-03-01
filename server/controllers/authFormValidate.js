import Yup from "yup"

const formSchema = Yup.object({
  username: Yup.string()
    .required("username is required")
    .min(6, "username is too short")
    .max(28, "username is too long"),
  password: Yup.string()
    .required("password is required")
    .min(6, "password is too short")
    .max(28, "password is too long"),
});

const authValidateForm = (req, res) => {
    formSchema.validate(req.body).catch(err => {
        console.log(err)
    }).then(valid => console.log(valid))
};

export default authValidateForm;
