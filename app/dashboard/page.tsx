"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  MessageSquare,
  Calendar,
  Heart,
  Brain,
  Search,
  Settings,
  User,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Your Wellness Space</h1>
          <div className="flex gap-4">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button>
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search conversations, topics, or resources..."
              className="pl-10 py-6 text-lg"
            />
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            {
              icon: <MessageSquare className="w-6 h-6" />,
              title: "Start Chat",
              description: "Begin a new conversation with Magreth",
            },
            {
              icon: <Calendar className="w-6 h-6" />,
              title: "Journal",
              description: "Record your thoughts and feelings",
            },
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: "Resources",
              description: "Access helpful articles and guides",
            },
            {
              icon: <Brain className="w-6 h-6" />,
              title: "Mood Tracker",
              description: "Monitor your emotional well-being",
            },
          ].map((action, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Conversations</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Morning Check-in",
                  description: "How are you feeling today?",
                  time: "2 hours ago",
                },
                {
                  title: "Stress Management",
                  description: "Discussion about coping strategies",
                  time: "5 hours ago",
                },
                {
                  title: "Gratitude Practice",
                  description: "Sharing positive moments",
                  time: "1 day ago",
                },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium">{activity.title}</h4>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 