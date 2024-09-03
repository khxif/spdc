import TeamMember from "@/components/Home/TeamMember";

export default function Team() {
  return (
    <section className="py-10 flex flex-col space-y-6 items-center">
      <h1 className="font-bold text-3xl pb-4">Our Team</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 md:gap-8">
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </section>
  );
}
