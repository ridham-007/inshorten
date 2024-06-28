import { Button } from "./ui/button";
import { Dialog, DialogClose } from "./ui/dialog";

export default function Location({
  open,
  handelClose,
  handleLocationConformation,
}: any) {
  return (
    <Dialog open={open}>
      <div className="flex h-auto w-[80%] md:w-[25%]">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <div className="text-[18px] text-lg font-semibold leading-none tracking-tight">
            Allow &quot;justreadinside&quot; to access your location while using
            the app?
          </div>
          <div className="py-[10px] text-sm text-muted-foreground">
            We need access to your location to show you relevant search results.
          </div>
          <div className="flex gap-[10px] justify-end">
            <Button variant="outline" onClick={handleLocationConformation}>
              Allow
            </Button>
            <Button variant="outline" onClick={handelClose}>
              Close
            </Button>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <DialogClose asChild />
        </div>
      </div>
    </Dialog>
  );
}
