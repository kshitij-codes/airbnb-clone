"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

type SubmitButtonProps = {
  className?: string;
  text?: string;
};
export const SubmitButton = ({
  className = "",
  text = "submit",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className={`capitalize ${className}`}
      disabled={pending}
      size="lg"
    >
      {pending ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : text}
    </Button>
  );
};
