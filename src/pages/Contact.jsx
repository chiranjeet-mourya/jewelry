import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    alert("Thank you! Your enquiry has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#faf9f7]">

      <section className="bg-[#222] px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto conatiner text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#b58b4c]">
            Get In Touch
          </p>

          <h1 className="font-serif text-4xl text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
            Whether you have a question about our collection, your order, or
            something special, our team is here to help.
          </p>
        </div>
      </section>


      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid container overflow-hidden bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">

          <div className="bg-[#222] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b58b4c]">
              Visit Our Store
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Let's Connect
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
              We'd love to hear from you. Visit our store, give us a call, or
              simply send us a message and our team will be happy to assist.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#b58b4c]/40 text-[#b58b4c]">
                  <MapPin size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#b58b4c]">
                    Address
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    123 Luxury Avenue,
                    <br />
                    New Delhi, India - 110001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#b58b4c]/40 text-[#b58b4c]">
                  <Phone size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#b58b4c]">
                    Phone
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="mt-2 block text-sm text-white/70 transition hover:text-[#b58b4c]"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#b58b4c]/40 text-[#b58b4c]">
                  <Mail size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#b58b4c]">
                    Email
                  </p>

                  <a
                    href="mailto:info@yourjewelry.com"
                    className="mt-2 block text-sm text-white/70 transition hover:text-[#b58b4c]"
                  >
                    info@yourjewelry.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#b58b4c]/40 text-[#b58b4c]">
                  <Clock size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#b58b4c]">
                    Opening Hours
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Monday - Saturday
                    <br />
                    9:30 AM - 6:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="container">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b58b4c]">
                Send A Message
              </p>

              <h2 className="mt-3 font-serif text-3xl text-[#222] sm:text-4xl">
                How Can We Help?
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                <div className="grid gap-5 sm:grid-cols-2">

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
                        className="w-full border border-gray-200 bg-[#faf9f7] py-3.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#b58b4c]"
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
                        className="w-full border border-gray-200 bg-[#faf9f7] py-3.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#b58b4c]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 bg-[#faf9f7] px-4 py-3.5 text-sm outline-none transition focus:border-[#b58b4c]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className="w-full border border-gray-200 bg-[#faf9f7] px-4 py-3.5 text-sm outline-none transition focus:border-[#b58b4c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Your Message
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={16}
                      className="absolute left-3 top-4 text-gray-400"
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Write your message..."
                      className="w-full resize-none border border-gray-200 bg-[#faf9f7] py-3.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#b58b4c]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 bg-[#222] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#b58b4c] sm:w-auto cursor-pointer"
                >
                  Send Message
                  <Send size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto container">
          <div className="mb-7 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b58b4c]">
              Find Us
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[#222] sm:text-4xl">
              Visit Our Store
            </h2>
          </div>

          <div className="h-[350px] overflow-hidden bg-gray-200 sm:h-[450px]">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps?q=New+Delhi,India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;