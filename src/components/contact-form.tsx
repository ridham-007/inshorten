// "use client";

// import {
//   Form,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "./ui/form";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Textarea } from "./ui/textarea";
// import { zodResolver } from "@hookform/resolvers/zod";

// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   topic: z.string().url({
//     message: "Please enter a valid website URL.",
//   }),
// });

// export default function ContactForm() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       topic: "",
//     },
//   });

//   const handleSubmit = (values: z.infer<typeof formSchema>) => {
//     console.log(values);
//   };

//   return (
//     <div className="p-[20px] rounded-xl border bg-card text-card-foreground shadow">
//       <Form {...form}>
//         <form
//           className="flex flex-col items-center space-y-8 w-[100%] p-[10px]"
//           onSubmit={form.handleSubmit(handleSubmit)}
//         >
//           <h1 className="text-[22px] font-medium">Contact Form</h1>
//           <div className="flex flex-row flex-wrap w-[100%] justify-between items-center">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem className="relative w-[100%] py-[20px]">
//                   <FormLabel>Name</FormLabel>
//                   <Input placeholder="Enter you're name here" {...field} />
//                   <FormMessage className="absolute" />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem className="relative w-[100%] py-[20px]">
//                   <FormLabel>Email</FormLabel>
//                   <Input placeholder="Enter you're email.." {...field} />
//                   <FormMessage className="absolute" />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="topic"
//               render={({ field }) => (
//                 <FormItem className="relative w-[100%] py-[20px]">
//                   <FormLabel>Website</FormLabel>
//                   <Input placeholder="Enter your topic.." {...field} />
//                   <FormMessage className="absolute" />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               // control={form.control}
//               name="comment"
//               render={({ field }) => (
//                 <FormItem className="w-[100%] pt-[20px]">
//                   <FormLabel>Comment</FormLabel>
//                   <Textarea
//                     placeholder="Enter you're comment.."
//                     {...field}
//                     className="min-h-[100px]"
//                   />
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <Button type="submit" className="w-max">
//             Submit
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// }
