// "use client";

// import {
//   Button,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Paper,
//   Radio,
//   RadioGroup,
//   Stack,
//   Typography,
// } from "@mui/material";
// import { useFormik } from "formik";

// const mcqs = [
//   {
//     id: 1,
//     question: "JavaScript kis type ki language hai?",
//     options: [
//       { id: 1, label: "Compiled" },
//       { id: 2, label: "Interpreted" },
//       { id: 3, label: "Assembly" },
//       { id: 4, label: "Machine" },
//     ],
//     correctAnswerId: 2,
//   },
//   {
//     id: 2,
//     question: "React kis company ne banaya?",
//     options: [
//       { id: 1, label: "Google" },
//       { id: 2, label: "Microsoft" },
//       { id: 3, label: "Facebook" },
//       { id: 4, label: "Amazon" },
//     ],
//     correctAnswerId: 3,
//   },
// ];

function Home() {
  //   const formik = useFormik({
  //     initialValues: {
  //       answers: {} as {
  //         [key: number]: {
  //           optionId: number;
  //           label: string;
  //         };
  //       },
  //     },
  //     onSubmit: (values) => {
  //       let score = 0;
  //       mcqs.forEach((mcq: any) => {
  //         if (values.answers[mcq.id]?.optionId === mcq.correctAnswerId) {
  //           score += 1;
  //         }
  //       });
  //       console.log(values.answers);
  //       alert(`Aapka score hai: ${score} out of ${mcqs.length}`);
  //     },
  //   });
  //   return (
  //     <form onSubmit={formik.handleSubmit}>
  //       <Stack spacing={3}>
  //         {mcqs.map((mcq, index) => (
  //           <Paper key={mcq.id} sx={{ p: 2 }}>
  //             <FormControl>
  //               <FormLabel>
  //                 <Typography fontWeight="bold">
  //                   {index + 1}. {mcq.question}
  //                 </Typography>
  //               </FormLabel>
  //               <RadioGroup
  //                 name={`answers.${mcq.id}`}
  //                 value={formik.values.answers[mcq.id]?.optionId || ""}
  //                 onChange={(e) => {
  //                   const selectedOption = mcq.options.find(
  //                     (opt) => opt.id === Number(e.target.value)
  //                   );
  //                   if (selectedOption) {
  //                     formik.setFieldValue(`answers.${mcq.id}`, {
  //                       optionId: selectedOption.id,
  //                       label: selectedOption.label,
  //                     });
  //                   }
  //                 }}
  //               >
  //                 {mcq.options.map((option) => (
  //                   <FormControlLabel
  //                     key={option.id}
  //                     value={option.id}
  //                     control={<Radio />}
  //                     label={option.label}
  //                   />
  //                 ))}
  //               </RadioGroup>
  //             </FormControl>
  //           </Paper>
  //         ))}
  //         <Button type="submit" variant="contained">
  //           Submit Quiz
  //         </Button>
  //       </Stack>
  //     </form>
  //   );
  return <div>Home Page</div>;
}

export default Home;
