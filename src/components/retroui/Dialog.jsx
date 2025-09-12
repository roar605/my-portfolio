"use client";;
import * as ReactDialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";

const Dialog = ReactDialog.Root;
const DialogTrigger = ReactDialog.Trigger;

const overlayVariants = cva(` fixed bg-black/80 font-head
  data-[state=open]:fade-in-0
  data-[state=open]:animate-in 
  data-[state=closed]:animate-out 
  data-[state=closed]:fade-out-0 
`, {
  variants: {
    variant: {
      default: "inset-0 z-50 bg-black/80",
      none: "fixed bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const DialogBackdrop = React.forwardRef(function DialogBackdrop(inputProps, forwardedRef) {
  const { variant = "default", className, ...props } = inputProps;

  return (
    <ReactDialog.Overlay
      className={cn(overlayVariants({ variant }), className)}
      ref={forwardedRef}
      {...props} />
  );
});
DialogBackdrop.displayName = "DialogBackdrop";

const dialogVariants = cva(`fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
flex flex-col border-2 shadow-md gap-4 overflow-y-auto bg-background text-foreground
w-full h-fit max-h-[80vh] max-w-[97%] duration-300
data-[state=open]:animate-in 
data-[state=open]:slide-in-from-left-1/2 
data-[state=open]:slide-in-from-top-[48%]
data-[state=open]:fade-in-0 
data-[state=open]:zoom-in-95 
data-[state=closed]:animate-out 
data-[state=closed]:fade-out-0 
data-[state=closed]:slide-out-to-top-[48%] 
data-[state=closed]:slide-out-to-left-1/2 
data-[state=closed]:zoom-out-95`, {
  variants: {
    size: {
      auto: "max-w-fit",
      sm: "lg:max-w-[30%]",
      md: "lg:max-w-[40%]",
      lg: "lg:max-w-[50%]",
      xl: "lg:max-w-[60%]",
      "2xl": "lg:max-w-[70%]",
      "3xl": "lg:max-w-[80%]",
      "4xl": "lg:max-w-[90%]",
      screen: "max-w-[100%]",
    },
  },
  defaultVariants: {
    size: "auto",
  },
});

const DialogContent = React.forwardRef(function DialogContent(inputProps, forwardedRef) {
  const {
    children,
    size = "auto",
    className,
    overlay,
    ...props
  } = inputProps;

  return (
    <ReactDialog.Portal>
      <DialogBackdrop {...overlay} />
      <ReactDialog.Content
        className={cn(dialogVariants({ size }), className)}
        ref={forwardedRef}
        {...props}>
        <VisuallyHidden>
          <ReactDialog.Title />
        </VisuallyHidden>
        <div className="flex flex-col relative">{children}</div>
      </ReactDialog.Content>
    </ReactDialog.Portal>
  );
});
DialogContent.displayName = "DialogContent";

const DialogDescription = ({
  children,
  className,
  ...props
}) => {
  return (
    <ReactDialog.Description className={cn(className)} {...props}>
      {children}
    </ReactDialog.Description>
  );
};

const dialogFooterVariants = cva("flex items-center justify-end border-t-2 min-h-12 gap-4 px-4 py-2", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
    },
    position: {
      fixed: "sticky bottom-0",
      static: "static",
    },
  },
  defaultVariants: {
    position: "fixed",
  },
});

const DialogFooter = ({
  children,
  className,
  position,
  variant,
  ...props
}) => {
  return (
    <div
      className={cn(dialogFooterVariants({ position, variant }), className)}
      {...props}>
      {children}
    </div>
  );
};

const dialogHeaderVariants = cva("flex items-center justify-between border-b-2 px-4 min-h-12", {
  variants: {
    variant: {
      default: "bg-primary text-black",
    },
    position: {
      fixed: "sticky top-0",
      static: "static",
    },
  },
  defaultVariants: {
    variant: "default",
    position: "static",
  },
});

const DialogHeaderDefaultLayout = ({
  children
}) => {
  return (
    <>
      {children}
      <DialogTrigger title="Close pop-up" className="cursor-pointer" asChild>
        <X />
      </DialogTrigger>
    </>
  );
};

const DialogHeader = ({
  children,
  className,
  position,
  variant,
  asChild,
  ...props
}) => {
  return (
    <div
      className={cn(dialogHeaderVariants({ position, variant }), className)}
      {...props}>
      {asChild ? (
        children
      ) : (
        <DialogHeaderDefaultLayout>{children}</DialogHeaderDefaultLayout>
      )}
    </div>
  );
};

const DialogComponent = Object.assign(Dialog, {
  Trigger: DialogTrigger,
  Header: DialogHeader,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
});

export { DialogComponent as Dialog };
