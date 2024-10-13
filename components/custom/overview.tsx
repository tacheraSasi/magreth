import { motion } from "framer-motion";
import Link from "next/link";

import { MessageIcon } from "./icons";
import Image from "next/image";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-[500px] mt-20 mx-4 md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="border-none bg-muted/50 rounded-2xl p-6 flex flex-col gap-4 text-zinc-500 text-sm dark:text-zinc-400 dark:border-zinc-700">
        <p className="flex flex-row justify-center gap-4 items-center text-zinc-900 dark:text-zinc-50">
          <Image
            src="/images/magreth.png"
            height={20}
            width={20}
            alt="magreth-ekilie"
          />
          <span>+</span>
          <MessageIcon size={20}/>
        </p>
        <p>
          Meet Magreth, your fun and supportive AI therapist! 🌟 She’s here to help you explore 
          your feelings.
        </p>
        <p>
          Powered by the ekilie, Magreth ensures a seamless chat experience tailored 
          to your needs.
        </p>
        <p>
          Created by Tachera Sasi at ekilie. Learn more at{" "}
          <Link
            className="text-green-500 dark:text-green-400"
            href="https://ekilie.com"
            target="_blank"
          >
            ekilie.com
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
};
