
"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function NewsFilter() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search articles..." className="pl-10" />
      </div>
      <div className="flex gap-4">
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="All Sports" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="football">Football</SelectItem>
            <SelectItem value="basketball">Basketball</SelectItem>
            <SelectItem value="tennis">Tennis</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="All Cups" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="premier-league">Premier League</SelectItem>
            <SelectItem value="champions-cup">Champions Cup</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
