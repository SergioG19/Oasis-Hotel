import React from 'react';

const BlogSection = () => {
  return (
    <div className="py-12 bg-yellow-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Nuestro Blog</h2>
        <p className="text-gray-600 mb-8">
          Mantente Informado con las últimas noticias y guías turísticas que ofrecemos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
        {/* Repeat this block for each blog post */}
        <div className="bg-orange-500 p-4 shadow-md rounded-lg">
          <img src="https://images.pexels.com/photos/14652573/pexels-photo-14652573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Title" className="w-full h-64 object-cover mb-3" />
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm text-gray-600">4 de marzo del 2024</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Añade Aquí Tu Texto De Cabecera</h3>
          <p className="text-gray-600">
            Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.
          </p>
        </div>
        <div className="bg-orange-500 p-4 shadow-md rounded-lg">
          <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Title" className="w-full h-64 object-cover mb-3" />
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm text-gray-600">4 de marzo del 2024</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Añade Aquí Tu Texto De Cabecera</h3>
          <p className="text-gray-600">
            Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.
          </p>
        </div>
        <div className="bg-orange-500 p-4 shadow-md rounded-lg">
          <img src="https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Title" className="w-full h-64 object-cover mb-3" />
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm text-gray-600">4 de marzo del 2024</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Añade Aquí Tu Texto De Cabecera</h3>
          <p className="text-gray-600">
            Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;