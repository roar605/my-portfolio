import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { MdBarChart } from "react-icons/md";
import { GiChefToque } from "react-icons/gi";

function Navbar() {
    return (
        <div className="flex justify-center gap-6 py-6 bg-opacity-50 ">
            <a
                href="https://github.com/roar605"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-black hover:text-white hover:scale-110 transition"
            >
                <FaGithub size={24} />
                <div className="absolute bottom-10 scale-0 rounded-md bg-gray-800 text-white text-sm px-2 group-hover:scale-100 transition">
                    Github
                </div>
            </a>

            <a
                href="https://leetcode.com/u/rksingh6050/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-orange-400 hover:text-black hover:scale-110 transition"
            >
                <SiLeetcode size={24} />
                {/* Tooltip */}
                <span className="absolute bottom-10 scale-0 rounded-md bg-gray-800 text-white text-sm px-2 group-hover:scale-100 transition">
                    geeksForGeeks
                </span>
            </a>

            <a
                href="https://www.linkedin.com/in/rohit6050/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-blue-500 hover:text-black hover:scale-110 transition"
            >
                <FaLinkedin size={24} />
                {/* Tooltip */}
                <span className="absolute bottom-10 scale-0 rounded-md bg-gray-800 text-white text-sm px-2 group-hover:scale-100 transition">
                    geeksForGeeks
                </span>
            </a>

            <a
                href="https://www.geeksforgeeks.org/user/rksingh6050/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-green-400 hover:scale-110 transition"
            >
                <SiGeeksforgeeks size={24} />
                {/* Tooltip */}
                <span className="absolute bottom-10 scale-0 rounded-md bg-gray-800 text-white text-sm px-2 group-hover:scale-100 transition">
                    geeksForGeeks
                </span>
            </a>
            <a
                href="/resume.pdf"
                download="My_Resume.pdf"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-green-500 hover:scale-110 transition"
            >
                <FaDownload size={24} />

                {/* Tooltip */}
                <span className="absolute bottom-10 scale-0 rounded-md bg-gray-800 text-white text-sm px-2 group-hover:scale-100 transition">
                    Resume
                </span>
            </a>
        </div>
    );
}

export default Navbar