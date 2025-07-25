import { strapiFetcher } from "@/api";
import { getProjectsNextConfig } from "@/cache";
import { Glass } from "@/components";
import { strapiProjectModelSchema } from "@/validation";
import Link from "next/link";
import z from "zod";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoDocumentText,
  IoLogoDiscord,
  IoMail,
} from "react-icons/io5";
import type { PropsWithChildren } from "react";

interface ProjectCardProps {
  title: string;
  url: string;
  description: string;
}

function ProjectCard({ title, url, description }: ProjectCardProps) {
  return (
    <Link href={url} target="_blank">
      <Glass className="transition-all duration-200 hover:shadow-white-glow">
        <h2 className="text-2xl font-bold mb-2 font-mono">{title}</h2>
        <p className="text-sm text-white/80">{description}</p>
      </Glass>
    </Link>
  );
}

function SocialButton({ children }: PropsWithChildren) {
  return (
    <Glass className="!p-4 size-15 rounded-full flex items-center justify-center">{children}</Glass>
  );
}

export default async function Page() {
  const res = await strapiFetcher("/api/projects", { next: getProjectsNextConfig() });
  const { data } = z.object({ data: z.array(strapiProjectModelSchema) }).parse(await res.json());

  return (
    <main className="w-full flex justify-center items-center min-h-svh">
      <div className="p-4 max-w-6xl flex flex-col items-center gap-4 sm:gap-8">
        <h1 className="text-4xl sm:text-6xl font-bold font-mono">Portfolio</h1>
        <Glass className="!max-w-xl">
          <p>
            Hello, my name&apos;s Philip. I&apos;m a fullstack web developer with sharp knowledge
            and plenty of experience.
            <br />
            <br />
            Take a look around, and maybe get in touch!
          </p>
        </Glass>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8">
          {data.map(({ description, id, title, url }) => (
            <ProjectCard key={id} description={description} title={title} url={url} />
          ))}
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <SocialButton>
            <Link href="https://github.com/Zeilar" title="Zeilar" target="_blank">
              <IoLogoGithub className="size-8" />
            </Link>
          </SocialButton>
          <SocialButton>
            <IoLogoDiscord className="size-8" title="zeilar#2288" />
          </SocialButton>
          <SocialButton>
            <Link
              href="https://www.linkedin.com/in/philip-angelin-a36b50138/"
              title="Philip Angelin"
              target="_blank"
            >
              <IoLogoLinkedin className="size-8" />
            </Link>
          </SocialButton>
          <SocialButton>
            <a download href="/api/cv" title="Download CV">
              <IoDocumentText className="size-8" />
            </a>
          </SocialButton>
          <SocialButton>
            <a href="mailto:philip@angelin.dev" title="Mail philip@angelin.dev">
              <IoMail className="size-8" />
            </a>
          </SocialButton>
        </div>
      </div>
    </main>
  );
}
