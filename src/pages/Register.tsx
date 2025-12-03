import { Link, Form } from "react-router-dom";
// import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
// import customFetch from '../utils/customFetch';
// import { toast } from "react-toastify";

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);

//   try {
//     await customFetch.post('/auth/register', data);
//     toast.success('Registration successful');
//     return redirect('/login');
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);

//     return error;
//   }
// };
const Register = () => {
  return (
    <section className="min-h-screen grid items-center">
      <Form method="post" className="max-w-[400px] border-t-[5px] border-primary-500 form">
        <Logo className="block mx-auto mb-[1.38rem]" />
        <h4 className="text-center mb-[1.38rem] font-semibold">Register</h4>
        <FormRow type="text" name="name" />
        <FormRow type="text" name="lastName" labelText="last name" />
        <FormRow type="text" name="location" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn />
        <p className="mt-4 text-center leading-snug">
          Already a member?
          <Link to="/login" className="text-primary-500 tracking-[1px] ml-1 hover:underline">
            {/* className="member-btn" */}
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
