import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../src/components/Pendaftaran/Input";
import axios from "axios";
import Navbar from "../src/components/Navbar/Navbar";

// describe("Test Input Componenent", () => {
//   const fetchData = (callback) => {
//     const data = axios
//       .get("https://jsonplaceholder.typicode.com/todos/1")
//       .then((res) => res)
//       .catch((error) => error);
//     callback(data);
//   };
//   test("Kembalikan Button dengan Promise Resolved", (done) => {
//     render(<Input />);
//     const button = screen.getByRole("button", { name: "Kirim Data" });
//     fireEvent.click(button);
//     function callback(data) {
//       try {
//         expect(
//           Promise.resolve({
//             userId: 1,
//             id: 1,
//             title: "delectus aut autem",
//             completed: false,
//           })
//         ).resolves.toBe({
//           userId: 1,
//           id: 1,
//           title: "delectus aut autem",
//           completed: false,
//         });
//         done();
//       } catch (error) {
//         done(error);
//       }
//     }
//     fetchData(callback);
//   });
// });

describe("cek apakah button keluar ketika tombol di tekan ", () => {
  test("should test a button", () => {
    render(<Navbar />);
    const button = screen.getByTestId("hamburger");
    fireEvent.click(button);
  });
});
