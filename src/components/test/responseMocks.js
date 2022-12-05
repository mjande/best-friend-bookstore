export default function getResponseMocks() {
  const booksResponseMock = {
    json: () =>
      Promise.resolve({
        works: [
          {
            key: "0",
            title: "Mock Title",
            authors: [{ name: "Mock Author" }],
            cover_edition_key: "0",
          },
        ],
      }),
  };

  const workResponseMock = {
    json: () =>
      Promise.resolve({
        title: "Mock Title",
        authors: [{ author: { key: "0" } }],
      }),
  };

  const editionResponseMock = {
    json: () =>
      Promise.resolve({
        number_of_pages: 200,
        covers: ["#"],
        key: "0",
      }),
  };

  const authorResponseMock = {
    json: () =>
      Promise.resolve({
        personal_name: "Mock Author",
      }),
  };

  return {
    booksResponseMock,
    workResponseMock,
    editionResponseMock,
    authorResponseMock,
  };
}
