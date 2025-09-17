interface BlogPosts {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
}

// This will make postInfo accepts any number of properties except id
const updatePost = (id: number, postInfo: Partial<Omit<BlogPosts, "id">>) => {
  // Some logic for updating the post
};

// Can update individual properties
updatePost(1, {
  title: "bla bla bla",
  //   id: "bla bla bla",//ERROR: Object literal may only specify known properties, and 'id' does not exist in type 'Omit<Partial<BlogPosts>, "id">'.
});
// Can update more than one property
updatePost(1, {
  title: "bla bla bla",
  author: "Someone",
});
