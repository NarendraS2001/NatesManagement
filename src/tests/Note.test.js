import React from "react";
import Note from "../components/Note";
import { render, fireEvent, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect"; // Import the extension for jest-dom

// Your test case here


test("renders Note component with title, description, and date", () => {
  const props = {
    title: "Test Title",
    description: "Test Description",
    date: "2023-08-23", // Assuming your date is in this format
    onDelete: jest.fn(),
    id: 1,
  };

  const { getByText, getByLabelText } = render(<Note {...props} />);

  // Check if the title, description, and date are rendered
  expect(getByText(props.title)).toBeInTheDocument();
  expect(getByText(props.description)).toBeInTheDocument();
  expect(getByText(props.date)).toBeInTheDocument();

  // Find and click the delete button
  const deleteButton = getByLabelText("delete");
  fireEvent.click(deleteButton);

  // Check if the onDelete function was called with the correct id
  expect(props.onDelete).toHaveBeenCalledWith(props.id);
});
