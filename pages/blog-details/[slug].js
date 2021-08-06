import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import BlogDetail from "../../components/blog/BlogDetail";
import {BlogData} from "../../data/Blogdata"
const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [Blog, setBlog] = useState({});
  useEffect(() => {
    setBlog(BlogData.find((b) => b.slug));
  }, [slug]);
  console.log("Blog",Blog)

  return (
    <div>
      <BlogDetail Blog={Blog} />
    </div>
  );
};

export default BlogDetails;
