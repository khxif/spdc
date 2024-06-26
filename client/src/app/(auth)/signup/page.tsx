import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <section className="px-6 py-6 bg-white/90 w-full text-black max-w-md rounded-lg space-y-5">
      <h1 className="font-bold text-2xl text-center">Sign Up</h1>
      <SignUpForm />
    </section>
  );
}
