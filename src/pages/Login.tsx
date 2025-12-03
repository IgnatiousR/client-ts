import { Link, Form, useNavigate } from "react-router-dom";
import { FormRow, Logo, SubmitBtn } from "../components";
// import customFetch from '../utils/customFetch';
import { toast } from "react-toastify";

// export const action =
//   (queryClient) =>
//   async ({ request }) => {
//     const formData = await request.formData();
//     const data = Object.fromEntries(formData);
//     try {
//       await customFetch.post('/auth/login', data);
//       queryClient.invalidateQueries();
//       toast.success('Login successful');
//       return redirect('/dashboard');
//     } catch (error) {
//       toast.error(error?.response?.data?.msg);
//       return error;
//     }
//   };

const Login = () => {
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "secret123",
    };
    toast.success(`Email: ${data.email}, Password: ${data.password}`);
    // try {
    //   await customFetch.post('/auth/login', data);
    //   toast.success('Take a test drive');
    //   navigate('/dashboard');
    // } catch (error) {
    //   toast.error(error?.response?.data?.msg);
    // }
  };
  return (
    <section className="min-h-screen grid items-center">
      <Form method="post" className="form max-w-[400px] border-t-[5px] border-primary-500">
        <Logo className="block mx-auto mb-[1.38rem]" />
        <h4 className="text-center mb-[1.38rem] font-semibold">login</h4>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn />
        <button type="button" className="btn btn-block mt-4" onClick={loginDemoUser}>
          explore the app
        </button>
        <p className="mt-4 text-center leading-snug">
          Not a member yet?
          <Link to="/register" className="text-primary-500 tracking-[1px] ml-1 hover:underline">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
