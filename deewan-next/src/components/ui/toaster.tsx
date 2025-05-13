"use client";

import { useToast } from "../../hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { CheckCircle2, AlertCircle, AlertTriangle } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        return (
          <Toast 
            key={id} 
            variant={variant} 
            className="animate-fade-in shadow-lg drop-shadow-md" 
            {...props}
          >
            <div className="flex items-center gap-3">
              {variant === "success" && (
                <div className="bg-white/20 p-1.5 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
              )}
              {variant === "destructive" && (
                <div className="bg-white/20 p-1.5 rounded-full">
                  <AlertCircle className="h-5 w-5 text-white" />
                </div>
              )}
              {variant === "warning" && (
                <div className="bg-black/10 p-1.5 rounded-full">
                  <AlertTriangle className="h-5 w-5 text-black" />
                </div>
              )}
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport className="md:top-20 md:right-4 md:top-auto" />
    </ToastProvider>
  )
}
