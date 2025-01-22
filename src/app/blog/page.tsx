import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Features from '@/components/Pro';

const BlogLayout = () => {
  const posts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      date: "14 Oct 2022",
      category: "Wood",
      author: "Admin",
      image: "/images/blg1.png",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mut mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices."
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      date: "13 Oct 2022",
      category: "Handmade",
      author: "Admin",
      image: "/images/blg2.png",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mut mauris vitae ultricies leo integer malesuada nunc."
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      date: "14 Oct 2022",
      category: "Wood",
      author: "Admin",
      image: "/images/blg3.png",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 8 }
  ];

  const recentPosts = [
    { title: "Going all-in with millennial design", date: "03 Aug 2023", image: "/images/blg4.png" },
    { title: "Exploring new ways of decorating", date: "03 Aug 2023", image: "/images/blg5.png" },
    { title: "Handmade pieces that took time to make", date: "03 Aug 2023", image: "/images/blg6.png" },
    { title: "Modern home in Milan", date: "03 Aug 2023", image: "/images/blg7.png" },
    { title: "Colorful office redesign", date: "17 Aug 2023", image: "/images/blg8.png" }
  ];

  return (
    <div>
        <div className="relative h-[300px] w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/sp.png" 
          alt="Blog banner background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        
        <div className="absolute inset-0 "></div>
      </div>

      
      <div className="relative h-full max-w-6xl mx-auto px-4">
        
        <div className="flex justify-center pt-8">
          <svg 
            viewBox="0 0 24 24" 
            className="w-12 h-12 text-amber-500"
            fill="currentColor"
          >
            <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="text-center text-black mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Link href="/" className="hover:text-amber-500 transition-colors">
              Home
            </Link>
            <span className="text-black">›</span>
            <span className="text-black">Blog</span>
          </nav>
        </div>
      </div>
    </div> 
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="space-y-4">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold hover:text-gray-700">
                  <Link href={`/post/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                <button className="text-gray-700 font-medium hover:underline">
                  Read more
                </button>
              </div>
            </article>
          ))}

          {/* Pagination */}
          <div className="flex justify-center space-x-2 pt-8">
            <button className="px-4 py-2 hover:bg-amber-600 hover:text-white bg-gray-300 rounded-md">1</button>
            <button className="px-4 py-2 hover:bg-amber-600 hover:text-white bg-gray-300 rounded-md">2</button>
            <button className="px-4 py-2 hover:bg-amber-600 hover:text-white bg-gray-300 rounded-md">3</button>
            <button className="px-4 py-2 hover:bg-amber-600 hover:text-white bg-gray-300 rounded-md">Next</button>
          </div>
        </div>

       
        <div className="space-y-8">
          
          <div>
            <input
              type="search"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>

       
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name} className="flex justify-between items-center text-gray-600 hover:text-gray-900">
                  <Link href={`/category/${category.name.toLowerCase()}`} className="hover:underline">
                    {category.name}
                  </Link>
                  <span className="text-gray-400">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <div key={index} className="flex space-x-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium hover:text-gray-700 hover:underline">
                      <Link href="#">{post.title}</Link>
                    </h4>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Features/>
    </div>
  );
};

export default BlogLayout;