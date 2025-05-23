"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Your Journey to Wellness Begins Here
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience compassionate conversations with Magreth, your AI therapist and friend. 
            Discover emotional support, personal growth, and mental well-being through meaningful dialogue.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/dashboard">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Start Your Journey <Sparkles className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-emerald-100 to-transparent"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Magreth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12 text-emerald-600" />,
                title: "Emotional Support",
                description:
                  "Experience compassionate conversations that help you explore and understand your emotions in a safe space.",
              },
              {
                icon: <Shield className="w-12 h-12 text-emerald-600" />,
                title: "Safe & Confidential",
                description:
                  "Your privacy is our priority. All conversations are secure and confidential.",
              },
              {
                icon: <Clock className="w-12 h-12 text-emerald-600" />,
                title: "Always Available",
                description:
                  "Access emotional support whenever you need it, 24/7, from anywhere in the world.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 