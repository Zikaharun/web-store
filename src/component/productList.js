"use client"
import { useEffect, useState,useRef } from 'react';
import Image from 'next/image';

export default function ProductList() {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setData(data.product));

      containerRef.current.classList.add('fade-in-visible');
  }, []);

  return (
    <div ref={containerRef} className="fade-in flex justify-center items-center w-full min-h-screen bg-slate-300">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-2">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center bg-white p-4 rounded shadow-lg m-5">
            <Image src={`/${item.image}`} width={200} height={300} className="rounded w-full max-h-64 object-cover" alt={item.name} priority={false} />
            <h2 className="text-lg font-bold mt-4 text-center">{item.name}</h2>
            <p className="text-gray-600 text-center">{item.description}</p>
            <p className='text-gray-600 text-center'>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

