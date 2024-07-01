// import React from "react";
// import TextField from "@mui/material/TextField";
// import { Button, Stack, TextareaAutosize } from "@mui/material";

// export default function ContactForm() {
//   return (
//     <>
//       <div className=" bg-white border-[1px] rounded-lg p-5">
//         <div className="flex justify-center mt-[20px]">
//           <div className="text-[22px] ">Contact Form</div>
//         </div>
//         <Stack
//           component="form"
//           sx={{
//             width: "full",
//             gap: "5px",
//           }}
//           spacing={2}
//           noValidate
//           autoComplete="off"
//         >
//           <label className="text-[15px]">Name</label>
//           <TextField
//             hiddenLabel
//             size="small"
//             placeholder="Enter you're name here..."
//           />
//           <label className="text-[15px]">E-Mail</label>
//           <TextField
//             hiddenLabel
//             size="small"
//             placeholder="Enter you're email here..."
//           />
//           <label className="text-[15px]">Website</label>
//           <TextField
//             hiddenLabel
//             size="small"
//             placeholder="Enter you're name here..."
//           />
//           <label className="text-[15px]">Comment</label>
//           <TextareaAutosize
//             aria-label="empty textarea"
//             placeholder="Enter you're Comments"
//             minRows={4}
//             className="border-[1px] p-2 border-slate-300 rounded-md h-6 outline-blue-600"
//           />

//           <div className="flex justify-center">
//             <Button className="w-[80px] !bg-black !text-white hover:bg-black hover:text-white capitalize">
//               Submit
//             </Button>
//           </div>
//         </Stack>
//       </div>
//     </>
//   );
// }

import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-5">
      <div className="flex justify-center mt-5">
        <div className="text-2xl">Contact Form</div>
      </div>
      <form className="flex flex-col gap-6 mt-5" noValidate autoComplete="off">
        <label className="text-base">Name</label>
        <input
          type="text"
          className="p-2 border border-gray-300 rounded"
          placeholder="Enter your name here..."
        />
        <label className="text-base">E-Mail</label>
        <input
          type="email"
          className="p-2 border border-gray-300 rounded"
          placeholder="Enter your email here..."
        />
        <label className="text-base">Website</label>
        <input
          type="text"
          className="p-2 border border-gray-300 rounded"
          placeholder="Enter your website here..."
        />
        <label className="text-base">Comment</label>
        <textarea
          className="p-2 border border-gray-300 rounded h-24"
          placeholder="Enter your comments"
        ></textarea>
        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="w-20 bg-black text-white rounded py-2 hover:bg-gray-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

