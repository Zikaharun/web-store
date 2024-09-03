// components/Home.js
"use client"
import Image from "next/image";
import { useRef, useEffect } from "react";
import ProductList from "@/component/productList";
import Footer from "@/component/footer";
import Cta from "@/component/cta";
import Testimonial from "@/component/testimonial";

export default function Home() {
  const h1Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const text = h1Ref.current.textContent;
    h1Ref.current.textContent = "";
    let index = 0;

    const typewriterEffect = () => {
      if (index < text.length) {
        h1Ref.current.textContent += text.charAt(index);
        index++;
        setTimeout(typewriterEffect, 100);
      }
    };

    typewriterEffect();

    containerRef.current.classList.add('fade-in-visible');
  }, []);

  return (
    <>
       <div ref={containerRef} className="fade-in bg-slate-300 flex justify-center items-center p-5">
      <div className="bg-slate-100 shadow-lg flex flex-wrap md:flex-nowrap items-center md:justify-between m-4 md:m-0 rounded">
        <div className="container p-4 text-center">
          <h1 className="text-3xl font-bold " ref={h1Ref}>Welcome to My store</h1>
          <p className="mt-4">This is the homepage.</p>
          <button className="bg-transparent hover:bg-slate-500 text-black font-semibold hover:text-white py-2 px-4 my-5 border border-black hover:border-transparent rounded">
            Shop Now!
          </button>
        </div>
        <Image src="/images/download (2).jpg" width={400} height={600} className="rounded bg-cover p-5 mx-auto md:mx-0"  priority={false}/>
      </div>
    </div>
    <ProductList />
    <Cta/>
    <Testimonial/>
    <Footer/>
    </>
  )
 
}

