import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "@fontsource/amiri";

const ContactMe = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };

            //   await emailjs.send(
            //     process.env.REACT_APP_SERVICE_ID,
            //     process.env.REACT_APP_TEMPLATE_ID,
            //     templateParams,
            //     process.env.REACT_APP_USER_ID
            //   );
            await emailjs.send(
                "service_67457x8",
                "template_g6er89i",
                templateParams,
                "V9FiYPkfj9TMFJR-e"
            );

            reset();
            toastifySuccess();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='bg-[#0A182E] text-[#1EC08F] flex justify-evenly items-center p-20'>
            <div className=''>
                <p className=' mb-14 text-6xl font-bold '> <i> Contact Me </i> </p>
                <div className='flex text-xl text-[#8892B0] items-center mb-6'>
                    <i class="fa-solid fa-phone-volume"></i>
                    <p className='px-3 font-sans  font-semibold'>+8801793439379</p>
                </div>
                <div className='flex text-xl text-[#8892B0] items-center mt-6'>
                    <i class="fa-solid fa-envelope-open-text"></i>
                    <p className='px-3 font-sans  font-semibold'>kayes.ek8@gmail.com</p>
                </div>
                <div className='flex text-xl text-[#8892B0] items-center my-6'>
                    <i class="fa-solid fa-location-dot"></i>
                    <p className='px-3 font-sans  font-semibold'>1230 Uttara, Dhaka-Bangladesh</p>
                </div>
                <p className='text-[#b7bccb] font-semibold text-xl'>
                    I’m currently looking for an opportunities.
                </p>
                <p className=' text-[#b7bccb] font-semibold text-xl'>
                    Feel free to contact with me or drop your valuable word.
                </p>
                <div className=' mt-10'>
                    <a href="resume.pdf" className='btn border-2 text-[#4AB9A7] font-semibold border-sky-300 normal-case hover:text-black hover:bg-sky-100' download> <i>Download Resume</i> <i class="fa-solid fa-download pl-2"></i> </a>
                </div>
            </div>
            <div className='ContactForm '>
                <div className='container'>
                    <div className='row'>
                        <div className='text-center'>
                            <div className='contactForm rounded-2xl bg-[#1F2937]'>
                                {/* <div className='contactForm m-10 rounded-2xl bg-[#030f27]'> */}
                                <form className='p-20' id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <h1 className=' xl:text-5xl text-xl font-bold text-center py-4'> <i> be with me... </i>  </h1>
                                    {/* <h1 className='text-4xl text-yellow-300 mt-8 lg:text-left  md:text-7xl kayes  font-bold mb-10 whitespace-nowrap text-center py-4'> Send Me Your Feedback  </h1> */}
                                    <div className='row formRow'>
                                        <div className='col-6 py-4 '>
                                            <input
                                                type='text'
                                                name='name'
                                                {...register('name', {
                                                    required: { value: true, message: 'Please enter your name' },
                                                    maxLength: {
                                                        value: 30,
                                                        message: 'Please use 30 characters or less'
                                                    }
                                                })}
                                                className='border-2 rounded-xl border-sky-300 form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]'
                                                placeholder='Name'
                                            ></input>
                                            {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                        </div>
                                        <div className='col-6 py-4'>
                                            <input
                                                type='email'
                                                name='email'
                                                {...register('email', {
                                                    required: true,
                                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                                })}
                                                className='border-2 rounded-xl border-sky-300 form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]'
                                                placeholder='Email address'
                                            ></input>
                                            {errors.email && (
                                                <span className='errorMessage'>Please enter a valid email address</span>
                                            )}
                                        </div>
                                    </div>
                                    {/* Row 2 of form */}
                                    <div className='row formRow py-2'>
                                        <div className='col'>
                                            <input
                                                type='text'
                                                name='subject'
                                                {...register('subject', {
                                                    required: { value: true, message: 'Please enter a subject' },
                                                    maxLength: {
                                                        value: 75,
                                                        message: 'Subject cannot exceed 75 characters'
                                                    }
                                                })}
                                                className='border-2 rounded-xl border-sky-300 form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]'
                                                placeholder='Subject'
                                            ></input>
                                            {errors.subject && (
                                                <span className='errorMessage'>{errors.subject.message}</span>
                                            )}
                                        </div>
                                    </div>
                                    {/* Row 3 of form */}
                                    <div className='row formRow py-4'>
                                        <div className='col'>
                                            <textarea
                                                rows={3}
                                                name='message'
                                                {...register('message', {
                                                    required: true
                                                })}
                                                className='border-2 rounded-2xl border-sky-300 form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]'
                                                placeholder='Message'
                                            ></textarea>
                                            {errors.message && <span className='errorMessage'>Please enter a message</span>}
                                        </div>
                                    </div>
                                    <button className='submit-btn border-2 border-[#1EC08F] px-4 py-2 rounded-lg hover:bg-sky-300 hover:text-black hover:font-bold' type='submit'>
                                        <i class="fa-solid fa-envelope-circle-check pr-2"></i> <i className='font-bold'> Drop </i>
                                    </button>
                                </form>
                            </div>

                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;