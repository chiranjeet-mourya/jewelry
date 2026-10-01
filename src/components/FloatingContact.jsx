import React, { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  X,
  Send,
  User,
  AtSign,
  FileText,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingContact = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const YOUR_EMAIL = "chiranjeetsingh055@gmail.com";

  const PHONE_NUMBER = "+919012922055";

  const WHATSAPP_NUMBER = "919012922055";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
  if (isEnquiryOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isEnquiryOpen]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || "Jewelry Website Enquiry"
    );

    const body = encodeURIComponent(
      `Hello,

I have an enquiry regarding your jewelry website.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

Thank you.`
    );

    window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="fixed right-4 top-1/2 z-[9990] -translate-y-1/2">
        <div className="flex flex-col items-end gap-2">

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="group flex h-11 w-11 items-center overflow-hidden rounded-full bg-[#222] text-white shadow-lg transition-all duration-300 hover:w-[125px] hover:bg-[#b58b4c] cursor-pointer"
            aria-label="Call Us"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center">
              <Phone size={18} strokeWidth={1.8} />
            </span>

            <span className="max-w-0 overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.12em] opacity-0 transition-all duration-300 group-hover:max-w-[70px] group-hover:pr-4 group-hover:opacity-100">
              Call Us
            </span>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center overflow-hidden rounded-full bg-[#222] text-white shadow-lg transition-all duration-300 hover:w-[145px] hover:bg-[#25D366] cursor-pointer"
            aria-label="WhatsApp"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center">
              <FaWhatsapp size={19} strokeWidth={1.8} />
            </span>

            <span className="max-w-0 overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.12em] opacity-0 transition-all duration-300 group-hover:max-w-[90px] group-hover:pr-4 group-hover:opacity-100">
              WhatsApp
            </span>
          </a>

          <button
            type="button"
            onClick={() => setIsEnquiryOpen(true)}
            className="group flex h-11 w-11 items-center overflow-hidden rounded-full bg-[#b58b4c] text-white shadow-lg transition-all duration-300 hover:w-[125px] hover:bg-[#222] cursor-pointer"
            aria-label="Enquiry"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center">
              <Mail size={18} strokeWidth={1.8} />
            </span>

            <span className="max-w-0 overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.12em] opacity-0 transition-all duration-300 group-hover:max-w-[70px] group-hover:pr-4 group-hover:opacity-100">
              Enquiry
            </span>
          </button>
        </div>
      </div>


      {isEnquiryOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm"
          onClick={() => setIsEnquiryOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="bg-[#222] px-6 py-7 text-white sm:px-8">
              <button
                type="button"
                onClick={() => setIsEnquiryOpen(false)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <X size={18} />
              </button>

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b58b4c]">
                Get In Touch
              </p>

              <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
                Send An Enquiry
              </h2>

              <p className="mt-2 max-w-sm text-xs leading-5 text-white/60">
                Have a question about our jewelry? Send us your details and
                we'll get back to you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-6 sm:p-8"
            >

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Your Name
                </label>

                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#b58b4c]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Email Address
                </label>

                <div className="relative">
                  <AtSign
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#b58b4c]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#b58b4c]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Subject
                </label>

                <div className="relative">
                  <FileText
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What would you like to know?"
                    className="w-full border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#b58b4c]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Write your enquiry..."
                  className="w-full resize-none border border-gray-200 p-3 text-sm outline-none transition focus:border-[#b58b4c]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 bg-[#222] py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b58b4c] cursor-pointer"
              >
                <Send size={15} />
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContact;