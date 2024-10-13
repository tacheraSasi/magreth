"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import EkiliRelay from "ekilirelay"

import { AuthForm } from "@/components/custom/auth-form";
import { SubmitButton } from "@/components/custom/submit-button";

import { register, RegisterActionState } from "../actions";

export default function Page() {
  const router = useRouter();
  const relayApiKey:string = `${process.env.EKILIRELAY}`;
  const mailer = new EkiliRelay(relayApiKey)

  const [email, setEmail] = useState("");
  const [state, formAction] = useActionState<RegisterActionState, FormData>(
    register,
    {
      status: "idle",
    },
  );

  useEffect(() => {
    // console.log(state)
    if (state.status === "user_exists") {
      toast.error("Account already exists");
    } else if (state.status === "failed") {
      toast.error("Failed to create account");
    } else if (state.status === "invalid_data") {
      toast.error("Failed validating your submission!");
    } else if (state.status === "success") {
      sendEmailNotification(email)
      toast.success("Account created successfully");
      router.refresh();
    }
  }, [state, router]);

  const sendEmailNotification = (email:string) => {
      console.log(`Sending email to: ${email}`);

      const subject = "🌟 You're Now Friends with Magreth! 🎉";
      const message = `
          <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #007bff; border-radius: 5px; background-color: #f8f9fa;">
              <h1 style="color: #007bff;">Hello there!</h1>
              <p style="font-size: 16px;">Thank you for joining our little community! 🎈</p>
              <p style="font-size: 16px;">I’m Magreth, your AI friend and therapist, and I'm here to support you on your journey. Whether you need advice, a listening ear, or just someone to share your thoughts with, I'm just an email away!</p>
              <p style="font-size: 16px;">Here are a few things you can do with me:</p>
              <ul style="font-size: 16px;">
                  <li>🧠 Share your thoughts and feelings anytime.</li>
                  <li>💬 Ask for advice on various topics.</li>
                  <li>Join me in some fun activities and challenges!</li>
              </ul>
              <p style="font-size: 16px;">I'm excited to embark on this journey with you. Let's make great memories together!</p>
              <p style="font-size: 16px;">Best Wishes,<br>Magreth 🤗</p>
          </div>
      `;

      mailer.sendEmail(
          email, 
          subject, 
          message, 
          'From: Magreth <support@ekilie.com>' 
      )
      .then(response => {
          if (response.status === 'success') {
              console.log('Email sent successfully.');
          } else {
              console.log('Failed to send email: ' + response.message);
          }
      })
      .catch(error => {
          console.log('Error:', error);
      });
  };


  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get("email") as string);
    formAction(formData);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <div className="w-full max-w-md overflow-hidden rounded-2xl gap-12 flex flex-col">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h3 className="text-xl font-semibold dark:text-zinc-50">Sign Up</h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            Create an account with your email and password
          </p>
        </div>
        <AuthForm action={handleSubmit} defaultEmail={email} isRegister={true}>
          <SubmitButton>Sign Up</SubmitButton>
          <p className="text-center text-sm text-gray-600 mt-4 dark:text-zinc-400">
            {"Already have an account? "}
            <Link
              href="/login"
              className="font-semibold text-gray-800 hover:underline dark:text-zinc-200"
            >
              Sign in
            </Link>
            {" instead."}
          </p>
        </AuthForm>
      </div>
    </div>
  );
}
