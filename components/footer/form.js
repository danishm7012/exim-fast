import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  number: "",
  message: "",
};

const onSubmit = (values, submitProps) => {
  console.log("Form data", values);
  toast.success("Message Submit Sucessfully", {
    position: "top-center",
  });
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be three or more characters")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  number: Yup.string()
    .matches(/^[0-9\s]+$/, "Only number are allowed for this field ")
    .required("Number is required"),
  message: Yup.string().required("Message is required"),
});
const FooterForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  return (
    <div className="footer-form">
      <form onSubmit={formik.handleSubmit}>
        <Row className="m-0 p-0">
          <Col md={6} xs={12} className="m-0 pl-0">
            <input
              type="text"
              placeholder="Full Name"
              className="form-control mb-2"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </Col>
          <Col md={6} xs={12} className="m-0 pr-0">
            <input
              type="text"
              placeholder="Number"
              className="form-control mb-2"
              name="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.number}
            />
            {formik.touched.number && formik.errors.number ? (
              <div className="error">{formik.errors.number}</div>
            ) : null}
          </Col>
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-2"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="form-control mb-2"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
          <button className="btn btn-1" type="submit">
            Submit
          </button>
        </Row>
      </form>
    </div>
  );
};

export default FooterForm;
