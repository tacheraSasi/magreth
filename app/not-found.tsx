import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai"; 

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 dark:bg-neutral-900 p-5">
      <svg 
        fill="currentColor" 
        version="1.1" 
        id="Capa_1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 60 60" 
        xmlSpace="preserve" 
        className="w-24 h-24 mb-4 transition-transform duration-300 transform hover:scale-110"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path d="M0,0v12v2v46h60V14v-2V0H0z M20,39h-3v8c0,0.552-0.448,1-1,1s-1-0.448-1-1v-8H9c-0.552,0-1-0.448-1-1V27 c0-0.552,0.448-1,1-1s1,0.448,1,1v10h5v-2c0-0.552,0.448-1,1-1s1,0.448,1,1v2h3c0.552,0,1,0.448,1,1S20.552,39,20,39z M36,41.5 c0,3.584-2.916,6.5-6.5,6.5S23,45.084,23,41.5v-9c0-3.584,2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5V41.5z M51,39h-3v8 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-8h-6c-0.552,0-1-0.448-1-1V27c0-0.552,0.448-1,1-1s1,0.448,1,1v10h5v-2c0-0.552,0.448-1,1-1 s1,0.448,1,1v2h3c0.552,0,1,0.448,1,1S51.552,39,51,39z M2,12V2h56v10H2z"></path>
            <polygon points="54.293,3.293 52,5.586 49.707,3.293 48.293,4.707 50.586,7 48.293,9.293 49.707,10.707 52,8.414 54.293,10.707 55.707,9.293 53.414,7 55.707,4.707 "></polygon>
            <rect x="3" y="3" width="39" height="8"></rect>
            <path d="M29.5,28c-2.481,0-4.5,2.019-4.5,4.5v9c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5v-9C34,30.019,31.981,28,29.5,28z"></path>
          </g>
        </g>
      </svg>
      <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
        404 - Page Not Found 🛑
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist. 😕
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild className="px-6 py-3 text-lg flex items-center gap-2 transition-transform duration-200 hover:scale-105">
          <Link href="/">
            <AiOutlineHome className="text-lg" />
            Go Back Home
          </Link>
        </Button>
        <Button
          asChild
          className="px-6 py-3 text-lg flex items-center gap-2 border border-neutral-300 dark:border-neutral-600 transition-transform duration-200 hover:scale-105"
          variant="outline"
        >
          <Link href="https://ekilie.com" target="blank">
            {/* <AiOutlineMail className="text-lg" /> */}
            ekilie
          </Link>
        </Button>
      </div>
    </div>
  );
}
