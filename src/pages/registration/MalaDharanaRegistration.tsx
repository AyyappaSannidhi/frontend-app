import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const MalaDharanaRegistration = () => {
  const [totalDays, setTotalDays] = useState(0);

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    gothram: Yup.string().required('Gothram is required'),
    mobileNumber: Yup.string()
      .matches(/^\d{10}$/, 'Mobile number should be 10 digits')
      .required('Mobile Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
    startDate: Yup.date().required('Start Date is required'),
    endDate: Yup.date().required('End Date is required'),
    totalDaysOfMalaDharan: Yup.number().min(0, 'Total days cannot be negative').required(),
  });

  const handleDateChange = (startDate: string, endDate: string, setFieldValue: Function) => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      setTotalDays(days >= 0 ? days : 0);
      setFieldValue("totalDaysOfMalaDharan", days >= 0 ? days : 0);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-6 py-8 max-w-screen-xl mx-auto">
      <div className="lg:w-7/12 border p-6 rounded shadow-md bg-white">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Mala Dharana Registration</h2>

        <Formik
          initialValues={{
            fullName: '',
            gothram: '',
            mobileNumber: '',
            email: '',
            address: '',
            startDate: '',
            endDate: '',
            totalDaysOfMalaDharan: 0,
            kanniSwamiCheck: false,
            irumudiYatraInterest: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Form Submitted', values);
            alert("form is under development!")
          }}
        >
          {({ values, handleChange, handleBlur, errors, touched, setFieldValue }) => (
            <Form className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-600 font-medium">Full Name</label>
                <Field
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border rounded w-full p-2"
                />
                {errors.fullName && touched.fullName && (
                  <div className="text-red-500 text-sm">{errors.fullName}</div>
                )}
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-gray-600 font-medium">Start Date</label>
                <Field
                  type="date"
                  name="startDate"
                  value={values.startDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    handleDateChange(e.target.value, values.endDate, setFieldValue);
                  }}
                  onBlur={handleBlur}
                  className="border rounded w-full p-2"
                />
                {errors.startDate && touched.startDate && (
                  <div className="text-red-500 text-sm">{errors.startDate}</div>
                )}
              </div>

              {/* End Date */}
              <div>
                <label className="block text-gray-600 font-medium">End Date</label>
                <Field
                  type="date"
                  name="endDate"
                  value={values.endDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    handleDateChange(values.startDate, e.target.value, setFieldValue);
                  }}
                  onBlur={handleBlur}
                  className="border rounded w-full p-2"
                />
                {errors.endDate && touched.endDate && (
                  <div className="text-red-500 text-sm">{errors.endDate}</div>
                )}
              </div>

              {/* Total Days */}
              <div>
                <label className="block text-bold text-black font-medium">Total Days of Mala Dharan</label>
                <div className="border rounded w-full p-2">{totalDays}</div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Right Side - Info or Instructions */}
      <div className="lg:w-7/12 min-h-screen flex flex-col">
        <div className="flex-1 border p-6 rounded shadow-md bg-gray-50 flex flex-col mb-4">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Instructions</h2>
          <p className="text-gray-600 flex-grow">
            Please fill out the form with accurate details. Ensure that the start and end dates are
            correct to calculate the total days for Mala Dharan. Check the boxes for additional
            details like Kanni Swami and Irumudi Yatra if applicable.
          </p>
        </div>

        <div className="flex-1 border p-6 rounded shadow-md bg-gray-50 flex flex-col">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Additional Information</h2>
          <p className="text-gray-600 flex-grow">
            Additional information, such as Kanni Swami and Irumudi Yatra interest, can be added here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MalaDharanaRegistration;