import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const App = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value.trim() === "") {
      setError("");
      return;
    }

    if (!EMAIL_REGEX.test(value)) setError("Please provide a valid email");
    else setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error || !email) {
      alert("Please fix the form error first.");
      return;
    } else alert("Form submitted successfully:" + email);
    setEmail("");
  };

  return (
    <div className="w-full flex flex-col min-h-screen lg:flex-row relative ">
      <div className="flex flex-col flex-1 z-100 lg:before:bg-[url('images/bg-pattern-desktop.svg')] lg:before:bg-no-repeat lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:w-4/6 lg:before:bottom-0 lg:before:z-[-1] lg:before:bg-cover lg:before:bg-left">
        <header className="p-10 lg:px-50 lg:pt-16">
          <img src="images/logo.svg" alt="logo" className="w-2/5 lg:w-45" />
        </header>
        <main className="lg:hidden">
          <img
            src="images/hero-mobile.jpg"
            alt="hero-mobile"
            className="w-full"
          />
        </main>
        <section className="flex flex-col h-full justify-center items-center gap-8 py-20 px-2 lg:px-50 lg:mb-15 lg:py-0 lg:items-start lg:gap-12 lg:justify-center ">
          <h1 className="text-7xl text-center tracking-widest lg:text-start lg:tracking-[1.5rem]">
            <span className="font-light text-red-300 text-6xl">WE'RE</span>
            <br />
            <span className="text-6xl lg:font-semibold">
              COMING
              <br />
              SOON
            </span>
          </h1>
          <p className="text-red-300 px-5 lg:px-0 text-center lg:pr-1 lg:w-2/3 lg:text-left leading-8 lg:text-md">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <motion.form
            layout
            onSubmit={handleSubmit}
            className={`w-6/7 flex justify-center relative lg:w-5/7 ${error !== "" && "after:absolute after:top-4.5 lg:after:right-25 after:right-16 after:w-12 after:h-12 after:content-[url('/images/icon-error.svg')]"} `}
          >
            <input
              type="text"
              placeholder="Email Address"
              className={`w-full h-14 rounded-full border border-red-300 px-7 outline-0 placeholder:text-red-200  ${error !== "" && "border-red-500 bg-red-50/10"}`}
              onChange={handleEmailChange}
              value={email}
            />
            <button
              className="rounded-full bg-linear-60 from-red-200 to-red-300 absolute right-0 bottom-0 h-full w-1/5 flex justify-center items-center shadow-2xl cursor-pointer active:from-red-50 active:to-red-200 active:shadow-none"
              type="submit"
              aria-label="Submit email"
            >
              <img
                src="/images/icon-arrow.svg"
                alt=""
                className="w-4"
                aria-hidden="true"
              />
            </button>
            <AnimatePresence>
              {error !== "" && (
                <motion.span
                  layout
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-6 -bottom-6 text-red-400 text-xs lg:text-base lg:-bottom-7 lg:left-7"
                >
                  {error}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.form>
        </section>
      </div>
      <div className="hidden lg:block z-100 ">
        <img
          src="/images/hero-desktop.jpg"
          alt="hero-desktop"
          className="hidden lg:block "
        />
      </div>

      <footer className="absolute -bottom-100 lg:bottom-2 left-2 text-xs opacity-60 z-100">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-blue-500 "
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/bikazdev/"
          className="text-red-400 underline active:text-red-300"
        >
          bikazDev
        </a>
        .
      </footer>
    </div>
  );
};

export default App;
