import { Locate, Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className="space-y-10 max-w-[1440px]">
      <section>
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          Get in Touch
        </h1>
        <p className="lg:text-xl text-center lg:px-[350px]">
          I'm always interested in new opportunities and exciting projects.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </p>
      </section>
      <div className="grid lg:flex w-full justify-between gap-10">
        <section className="space-y-7 ">
          <div className="space-y-3">
            <h2 className="font-bold text-2xl">Contact Information</h2>
            <div className="flex items-center gap-3">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white text-2xl`}
              >
                <Mail />
              </div>
              <div>
                <h3>Email</h3>
                <p className="text-brand-red">eseigbesamuel810@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-purple-500 text-white text-2xl`}
              >
                <Locate />
              </div>
              <div>
                <h3>Location</h3>
                <p className="text-brand-red">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-3">Follow Me</h2>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/eseigbe-samuel-ba6891333/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 stroke-current" />
              </Link>

              <Link
                href="https://x.com/muel_se"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-6 h-6 stroke-current" />
              </Link>

              <Link
                href="https://github.com/EseigbeSamuel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6 stroke-current" />
              </Link>
            </div>
          </div>
        </section>

        <section className="">
          <div className="rounded-xl bg-brand-dark p-5 lg:p-10">
            <h2 className="font-bold text-2xl mb-3">What I'm Looking For</h2>
            <ul className="list-disc text-lg p-5 lg:px-10 space-y-3">
              <li>Full-stack development opportunities</li>
              <li>Web app development projects</li>
              <li>Mobile app development projects</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
