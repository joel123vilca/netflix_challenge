import { useForm } from "react-hook-form";
import * as userActions from "../../redux/actions/userActions";
import { userSelector } from "../../redux/selectors/UserSelectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = useSelector(userSelector);

  const onSubmit = (data) => {
    dispatch(userActions.postLogin({ payload: data }));
  };

  const toDashboard = () => {
    console.log("ya se ejecuto", user);
    if (user) {
      navigate(`/dashboard`);
    }
  };

  const intialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="login">
      <div className="login-content">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title" data-testid="title">
            Sign In
          </h1>

          {/* <div className="errors--api">
            Incorrect Email or Password. Please try again or you can reset your
            password.
          </div> */}
          <div className="input-content">
            <input
              type="email"
              placeholder="Email"
              className="input"
              name="email"
              defaultValue={intialValues.email}
              {...register("email", {
                validate: (value) => value !== "",
              })}
              style={{
                borderBottom: errors.email ? "3px solid #e87c03" : "",
              }}
            />
            {errors.email && (
              <p className="error">Please enter a valid email</p>
            )}
            <input
              type="password"
              placeholder="Password"
              className="input"
              name="password"
              defaultValue={intialValues.password}
              {...register("password", {
                validate: (value) => value !== "",
              })}
              style={{
                borderBottom: errors.password ? "3px solid #e87c03" : "",
              }}
            />
            {errors.password && (
              <p className="error">
                Your password must contain between 4 and 60 characters
              </p>
            )}
          </div>
          <button className="login-submit" type="submit">
            Sign In
          </button>
          <div className="info">
            New to Netflix? <a className="login-signup">Sign up now</a>
          </div>
        </form>
        <div className="footer">
          <p>¿Preguntas? Llama al 0-800-52352</p>
          <p>option 1</p>
          <p>option 3</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
