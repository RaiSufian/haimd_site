import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';


const Enquire = () => {
    const initialValues: { name: string; phone: string; email: string; msgtype: string; del: string } = {
        name: "",
        phone: "",
        email: "",
        msgtype: "",
        del: "",
    };
    // ==================================================
    // On Submit form
    // ==================================================
    const onSubmit = (value: any) => {
        console.log("from values are", value)
        emailjs.sendForm('jonesmart53@gmail.com', 'template_m50e1cm', value, 'ZEV9-2Pc-ZkkRdkKK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        formik.resetForm();
        toast('🦄 Thank you for Interest', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    // ==================================================
    // Form Validation
    // ==================================================
    const validationSchema = Yup.object({
        name: Yup.string().required("This field is required"),
        phone: Yup.string().required("This field is required"),
        email: Yup.string().required("This field is required")
            .email("Please enter email address"),
        msgtype: Yup.string().required("This field is required"),
        del: Yup.string()
            .min(5, "enter min 8 characters")
            .max(500, "you can add max 500 char")
            .required("This field is required"),
    });

    // formik function start here
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    // console.log("get values", formik.values);
    return (
        <div className="enquire _section py-12 bg-black" id="equire_section">
            <div className="container mx-auto px-12 font-inter">
                <h3 className="lg:text-5xl text-3xl font-extrabold text-center">
                    Lets build your<br />
                    <span className="text-themeColor"> project together</span></h3>
                <div className="enquire_form py-8">
                    <form className="lg:w-2/4 md:w-full mx-auto text-end" onSubmit={formik.handleSubmit} >

                        <input type="text" placeholder="Enter Your Name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} name="name" className="w-full h-10 px-2 bg-slate-600 rounded-md" />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-white">{formik.errors.name}</div>
                        ) : null}
                        <input type="text" placeholder="Enter Your Phone Number" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} name="phone" className="w-full h-10 px-2 bg-slate-600 rounded-md mt-4" />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="text-white">{formik.errors.phone}</div>
                        ) : null}
                        <input type="email" placeholder="Enter Your Email Address" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" className="w-full h-10 px-2 bg-slate-600 rounded-md mt-4" />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-white">{formik.errors.email}</div>
                        ) : null}
                        <select className="w-full h-10 px-2  bg-slate-600 rounded-md mt-3" value={formik.values.msgtype} onBlur={formik.handleBlur} onChange={formik.handleChange} name="msgtype">
                            <option value="">Select option</option>
                            <option value="1">Website</option>
                            <option value="2">Marketing</option>
                            <option value="3">Advertisment</option>
                        </select>
                        {formik.touched.msgtype && formik.errors.msgtype ? (
                            <div className="text-white">{formik.errors.msgtype}</div>
                        ) : null}
                        <textarea rows={4} className="w-full px-2 bg-slate-600 rounded-md mt-3 py-1" onBlur={formik.handleBlur} value={formik.values.del} onChange={formik.handleChange} placeholder="Enter Your Phone Number" name="del">

                        </textarea>
                        {formik.touched.del && formik.errors.del ? (
                            <div className="error">{formik.errors.del}</div>
                        ) : null}
                        <button className="mt-3 lg:py-5 lg:px-16 py-2 px-7 bg-white text-black font-bold rounded-full" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}
export default Enquire;