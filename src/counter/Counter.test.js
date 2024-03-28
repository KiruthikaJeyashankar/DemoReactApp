import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
describe("Counter", () => {
//   test("should render heading Counter", () => {
//     const { getByRole, getByText } = render(<Counter />);

//     expect(getByText("Counter")).toBeTruthy();
//     expect(getByRole("heading", { level: 1 })).toHaveTextContent("Counter");
//   });

//   test("should render initial value as 0", () => {
//     render(<Counter />);

//     expect(screen.getByText(0)).toBeTruthy();
//   });

//   test("should render button with name Increment", () => {
//     render(<Counter />);

//     expect(screen.getByRole("button", { name: "Increment" })).toBeTruthy();
//   });

//   test("should render button with name Decrement", () => {
//     render(<Counter />);

//     expect(screen.getByRole("button", { name: "Decrement" })).toBeTruthy();
//   });

  test("should increment count value on clicking increment button",()=>{
    render(<Counter/>)

    expect(screen.getByText(0)).toBeTruthy()
    userEvent.click(screen.getByRole("button", { name: "Increment" }))

    expect(screen.getByText(1)).toBeTruthy()
  })
  
  test("should decrement count value on clicking decrement button",()=>{
    render(<Counter/>)

    expect(screen.getByText(0)).toBeTruthy()
    userEvent.click(screen.getByRole("button", { name: "Decrement" }))

    expect(screen.getByText(-1)).toBeTruthy()
  })

  test('should match counter snapshot', () => { 
    const container = render(<Counter/>)

    expect(container).toMatchSnapshot();
   })
});
