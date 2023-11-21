import * as Dialog from "@radix-ui/react-dialog";
import { RegisterModal } from "./RegisterModal";

interface RegisterProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function Register({ open, setOpen }: RegisterProps) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div className="flex items-center gap-2">
        Não tem conta?
        <Dialog.Trigger className="flex items-center text-primary-100">
          Registre-se
        </Dialog.Trigger>
      </div>

      <RegisterModal />
    </Dialog.Root>
  );
}
