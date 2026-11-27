"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

/**
 * Wrapper shadcn/ui untuk react-resizable-panels v4.
 * v4 mengganti nama primitif: PanelGroup → Group, PanelResizeHandle → Separator,
 * prop direction → orientation. Nama komponen wrapper dipertahankan agar
 * kontrak shadcn (ResizablePanelGroup / ResizablePanel / ResizableHandle) tetap.
 */
function ResizablePanelGroup({
  className,
  direction,
  orientation,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Group> & {
  /** Kompatibilitas API lama shadcn (direction) — dipetakan ke orientation v4. */
  direction?: "horizontal" | "vertical"
}) {
  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      orientation={orientation ?? direction ?? "horizontal"}
      className={cn(
        "group flex h-full w-full data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Separator> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden group-data-[orientation=vertical]:h-px group-data-[orientation=vertical]:w-full group-data-[orientation=vertical]:after:left-0 group-data-[orientation=vertical]:after:h-1 group-data-[orientation=vertical]:after:w-full group-data-[orientation=vertical]:after:translate-x-0 group-data-[orientation=vertical]:after:-translate-y-1/2 group-data-[orientation=vertical]:[&>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.Separator>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
