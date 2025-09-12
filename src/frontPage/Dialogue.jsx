import { Button } from "@/components/retroui/Button";
import { Dialog } from "@/components/retroui/Dialog";
import { Text } from "@/components/retroui/Text";
import { Link } from "lucide-react";
 
export default function DialogStyleDefault(props) {
    const proj=props.p    
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button className="w-full flex justify-center ">{proj.name}</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Text as="h5">About</Text>
        </Dialog.Header>
        <section className="flex flex-col gap-4 p-4">
          <section className="text-xl">
            <Dialog.Description> {proj.desc}</Dialog.Description>
          </section>
          <section className="flex w-full justify-end">
            <Dialog.Trigger asChild>
              
                <a href={proj.githubLink} target="_blank">
                    <Button>Github</Button>
                </a>
               
            </Dialog.Trigger>
          </section>
        </section>
      </Dialog.Content>
    </Dialog>
  );
}