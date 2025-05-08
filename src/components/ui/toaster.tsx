import { useToast } from "@/hooks/use-toast"
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
          <Toast key={id} variant={variant} className="animate-fade-in" {...props}>
            <div className="flex items-center gap-3">
              {variant === "success" && (
                <CheckCircle2 className="h-5 w-5 text-white" />
              )}
              {variant === "destructive" && (
                <AlertCircle className="h-5 w-5 text-white" />
              )}
              {variant === "warning" && (
                <AlertTriangle className="h-5 w-5 text-black" />
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
      <ToastViewport className="md:bottom-20 md:right-4 md:top-auto" />
    </ToastProvider>
  )
}
