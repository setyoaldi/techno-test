import { LayoutLogin } from "../components/Layout";
import Logo from "../assets/logo technopartner.png";
import { useStore } from "../utils/store/store";
import { Api } from "../utils/types/api";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().required("username required"),
  password: Yup.string().required("Password required"),
});
export const Login = () => {
  const grant_type = "password";
  const client_secret = "0a40f69db4e5fd2f4ac65a090f31b823";
  const client_id = "e78869f77986684a";
  const navigate = useNavigate();
  const { setToken } = useStore();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleLogin = async () => {
    const { username, password } = formik.values;

    try {
      const response = await Api.userLogin(
        username,
        password,
        grant_type,
        client_id,
        client_secret
      );
      setToken(response.data.access_token);
      navigate("/home");
      console.log(response.data);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };
  return (
    <>
      <LayoutLogin>
        <>
          <div className="flex flex-col gap-1">
            <div>
              <img src={Logo} alt="Technopartner's Logo" />
            </div>
            <div className="flex flex-col gap-x-3 gap-y-4 mt-5 justify-center items-center">
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-gray-400 capitalize text-center">
                  {"Email"}
                </p>
                <input
                  type="text"
                  id="username"
                  className="w-1/2 h-12 p-3 rounded-lg bg-white shadow-lg text-black outline-none"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-gray-400 capitalize text-center">
                  {"Password"}
                </p>
                <input
                  type="password"
                  id="password"
                  className="w-1/2 h-12 p-3 rounded-lg bg-white shadow-lg text-black outline-none"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <button
                className="capitalize bg-white shadow-lg text-black w-1/4 h-auto px-5 py-2 rounded font-semibold"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </>
      </LayoutLogin>
    </>
  );
};
