import Link from "next/link"

import { siteConfig } from "@/config/site"
// import { Icons } from "@/components/icons"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        {/* <Icons.logo className="h-7 w-7" /> */}
        <img src='/icon.png' width={70} height={70} className="pt-3" alt="logo" />
        <span className="inline-block text-xl font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
