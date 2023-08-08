import HeadingText from "@/components/heading-text"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { FaGithub } from "react-icons/fa"

export default function OpenSource() {
  return (
    <section className="container py-12 lg:py-20">
      <div className="flex flex-col items-center gap-8">
        <HeadingText
          subtext="Feel free to view the codebase or contribute!"
          className="text-center"
        >
          Fully Open Source
        </HeadingText>
        <Link
          href="https://github.com/redpangilinan/iotawise"
          target="_blank"
          className={`w-[10rem] gap-2 ${cn(
            buttonVariants({ variant: "outline", size: "sm" })
          )}`}
        >
          <FaGithub />
          Github
        </Link>
      </div>
    </section>
  )
}
