/* eslint-disable react/prop-types */

import { Formik, Form } from "formik";
import * as Yup from "yup";

const LoginFormSection = ({ nextStep }) => {
  return (
    <div className="max-w-[590px]  w-full p-6">
      <h1 className="text-[32px] md:text-[36px] xl:text-[36px] font-bold  mb-4">
        Log in with your phone number
      </h1>
      <p className="text-[#38465A] text-[14px] md:text-[16px] xl:text-[18px] mb-8">
        After providing your active phone number, a 4-digit PIN code will be
        sent to your phone shortly. Enter that code to activate your account.
      </p>
      <Formik
        initialValues={{ phoneNumber: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log("Phone Number Submitted:", values.phoneNumber);
          if (nextStep) nextStep(); // Call the next step function if provided
        }}
      >
        {({ errors, touched, getFieldProps }) => (
          <Form>
            <div className="flex flex-col gap-6">
              <div className="relative">
                <input
                  name="phoneNumber"
                  type="text"
                  {...getFieldProps("phoneNumber")}
                  placeholder="Enter your 11-digit phone number"
                  className={`w-full p-3 bg-[#D9DFEA] border-[1px] border-[#D9DFEA] rounded-lg ${
                    errors.phoneNumber && touched.phoneNumber
                      ? "border-red-500 border"
                      : ""
                  }`}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber}
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full bg-[#ED1C25]  max-w-[170px]  text-white p-3 rounded-lg "
                >
                  Log In
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginFormSection;

// Validation Schema
const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 11 digits"),
});
