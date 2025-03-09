import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArticleItem from "./ArticleItem";

const mockArticle = {
  id: "1",
  title: "Test Article",
  byline: "By Test Author",
  media: [
    { "media-metadata": [{}, {}, { url: "https://via.placeholder.com/150" }] },
  ],
  published_date: "2024-03-09T00:00:00Z",
  abstract: "This is a test abstract.",
  url: "https://example.com",
};

describe("ArticleItem Component", () => {
  test("renders correctly with given props", () => {
    render(<ArticleItem {...mockArticle} />);

    expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
    expect(screen.getByText(/By Test Author/i)).toBeInTheDocument();
    expect(screen.getByText(/Sat Mar 09 2024/i)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /Test Article/i })
    ).toBeInTheDocument();
  });

  test("toggles additional information on click", () => {
    render(<ArticleItem {...mockArticle} />);

    expect(
      screen.queryByText(/This is a test abstract./i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Read Full article here/i)
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("img"));

    expect(screen.getByText(/This is a test abstract./i)).toBeInTheDocument();
    expect(screen.getByText(/Read Full article here/i)).toBeInTheDocument();
  });
});
