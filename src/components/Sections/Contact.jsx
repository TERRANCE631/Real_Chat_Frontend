import { useRef, useState } from "react";
import { RevealOnScrol } from "../RevealOnScrol";
import { useGlobalState } from "../Context/Context";
import { BiLoader, BiMailSend, BiTargetLock, BiUser } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

export function Contact() {
  const { contactRef } = useGlobalState();
  const formData = useRef();
  const [sending, setSending] = useState(false);

  const validation = () => {
    const name = formData.current.name.value.trim();
    const subject = formData.current.subject.value.trim();
    const email = formData.current.email.value.trim();
    const message = formData.current.message.value.trim();

    if (!name || !subject || !email || !message) {
      toast.error("Please fill in all fields.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const isValid = validation();

    try {
      if (isValid) {
        setSending(true);
        emailjs
          .sendForm(
            "service_11ng1pc",
            "template_1qiyq7t",
            formData.current,
            "-YrGFR5vM8HZdWaad"
          )
          .then(
            (result) => {
              console.log(result.text);
              toast.success("Message sent successfully!");
              formData.current.reset();
              setSending(false);
            },
            (error) => {
              setSending(false);
              console.error(error.text);
              toast.error("Failed to send message. Please try again.");
            }
          );
      }
    } catch (error) {
      setSending(false);
      // Log the error to the console for debugging
      console.log(error);
      toast.error("An error occurred while sending the message.");
    }
  };

  return (
    <div ref={contactRef} className="w-full bg-white/10 pb-20">
      <RevealOnScrol>
        <p className="text-3xl font-bold mb-8 bg-gradient-to-tr from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Contact Me
        </p>

        <section className="flex justify-center items-center">
          <form
            ref={formData}
            onSubmit={sendEmail}
            className="flex font-thin tracking-wider flex-col md:w-[80%] lg:w-[50%] w-[99%] bg-black bg-opacity-30 shadow-inner shadow-blue-600 gap-6 border p-4 border-white/10 hover:border-blue-600 rounded-xl hover:-translate-y-0.5 duration-500 hover:shadow-blue-600 hover:shadow-xl"
          >
            <section>
              <label htmlFor="" className="text-white tracking-wider font-thin">
                Name
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <div className="size-5 text-white/50 text-base-content/40">
                    <BiUser className="size-5" />
                  </div>
                </div>
                <input
                  name="name"
                  placeholder="Enter your name..."
                  className={`input tracking-wider focus:border-blue-300 font-thin text-white border-white/20 input-bordered outline-none rounded-lg bg-black/30 border w-full pl-10 py-2`}
                />
              </div>
            </section>
            <section>
              <label htmlFor="" className="text-white tracking-wider font-thin">
                Subject
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <div className="size-5 text-white/50 text-base-content/40">
                    <BiTargetLock className="size-5" />
                  </div>
                </div>
                <input
                  name="subject"
                  placeholder="Enter your name..."
                  className={`input tracking-wider focus:border-blue-300 font-thin text-white border-white/20 input-bordered outline-none rounded-lg bg-black/30 border w-full pl-10 py-2`}
                />
              </div>
            </section>
            <section>
              <label htmlFor="" className="text-white tracking-wider font-thin">
                Email
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <div className="size-5 text-white/50 text-base-content/40">
                    <BiMailSend className="size-5" />
                  </div>
                </div>
                <input
                  name="email"
                  placeholder="Enter your name..."
                  className={`input tracking-wider focus:border-blue-300 font-thin text-white border-white/20 input-bordered outline-none rounded-lg bg-black/30 border w-full pl-10 py-2`}
                />
              </div>
            </section>
            <div className="">
              <label htmlFor="">Message</label>
              <textarea
                name="message"
                placeholder="Enter your massage..."
                type="text"
                rows={6}
                className="w-full rounded-lg outline-none p-2 border-white/10 border focus:border-blue-600 focus:border-2 bg-black/30"
              />
            </div>
            <div className="border-b border-white/20" />
            <div className="">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 shadow-inner shadow-purple-900 mb-2 p-2 w-full duration-200 rounded-lg"
              >
                {!sending ? (
                  <span className="uppercase">Send</span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span className="text-2xl animate-spin">
                      <BiLoader />
                    </span>
                    <span>Sending...</span>
                  </span>
                )}
              </button>
            </div>
          </form>
        </section>
      </RevealOnScrol>
      <ToastContainer />
    </div>
  );
}
