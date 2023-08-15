import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { Icon } from "@/components/icons"

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <EmptyPlaceholder className="mx-auto max-w-[800px]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <Icon name="warning" className="h-10 w-10" />
        </div>
        <EmptyPlaceholder.Title>Not Found</EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>
          This activity cound not be found. Please try again.
        </EmptyPlaceholder.Description>
        <Link
          href="/dashboard"
          className={buttonVariants({ variant: "outline" })}
        >
          Go to Dashboard
        </Link>
      </EmptyPlaceholder>
    </div>
  )
}