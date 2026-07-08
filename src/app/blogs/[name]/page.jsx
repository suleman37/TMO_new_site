import BlogsClient from "@/components/blogs/BlogsClient";

export default async function BlogsPage({ params }) {
  const { name } = await params;

  return (
    <div className="w-screen">
      <BlogsClient name={name} />
    </div>
  );
}
