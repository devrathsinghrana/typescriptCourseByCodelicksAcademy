interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
}

const BLOG_API = "https://shrimo.com/fake-api/blog";

/*
TypeScript’s Pick ensures that, in your code, you can only use the properties you specify (title and content). Even if the API response contains more data, TypeScript will restrict you from accessing other fields like author or publishedAt unless you change the type. This helps keep your code safe and focused on just the data you need.
*/
const fetchBlogPost = async (): Promise<
  Pick<BlogPost, "title" | "content">
> => {
  const response = await fetch(BLOG_API);
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  const post = await response.json();
  return post["blogs"][0] || post;
};

const getBlogSummary = async () => {
  const post = await fetchBlogPost();
  console.log(post);
};

getBlogSummary();
