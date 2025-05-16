import React, { useState } from "react";
import Footer from "../components/ui/footer";

const BlogPage = () => {
  // Mock blog posts data with images, categories, and comments
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "5 Consejos para Mejorar tu Técnica de Press Banca",
      excerpt:
        "Aprende cómo optimizar tu press banca con estos consejos prácticos para maximizar fuerza y evitar lesiones.",
      date: "10 de Mayo, 2025",
      image: "/images/press-banca-blog.jpg",
      category: "Técnicas de Ejercicio",
      comments: [
        {
          id: 1,
          author: "Juan Pérez",
          text: "¡Gran artículo! Me ayudó a corregir mi postura.",
          date: "11 de Mayo, 2025",
        },
      ],
    },
    {
      id: 2,
      title: "Cómo Mantener la Motivación en el Gimnasio",
      excerpt:
        "Descubre estrategias para mantenerte enfocado en tus objetivos fitness, incluso en los días más difíciles.",
      date: "5 de Mayo, 2025",
      image: "/images/motivation-blog.jpg",
      category: "Motivación",
      comments: [],
    },
  ]);

  // State for search, selected category, form inputs, preview, and new comment
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
  });
  const [showPreview, setShowPreview] = useState(false);
  const [isDraftSaved, setIsDraftSaved] = useState(false);
  const [newComment, setNewComment] = useState({ author: "", text: "" });

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "Todas" || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Categories for filtering
  const categories = ["Todas", "Técnicas de Ejercicio", "Motivación"];

  // Handle form input changes for blog post
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setIsDraftSaved(true);
    setTimeout(() => setIsDraftSaved(false), 2000); // Mock draft save notification
  };

  // Handle comment input changes
  const handleCommentChange = (e, postId) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  // Handle comment submission
  const handleCommentSubmit = (postId) => {
    if (newComment.author.trim() && newComment.text.trim()) {
      const updatedPosts = blogPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: post.comments.length + 1,
                  author: newComment.author,
                  text: newComment.text,
                  date: new Date().toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }),
                },
              ],
            }
          : post
      );
      setBlogPosts(updatedPosts);
      setNewComment({ author: "", text: "" }); // Reset comment form
    }
  };

  // Character count for content
  const contentCharCount = formData.content.length;
  const maxContentChars = 2000;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Blog Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Blog de M-Lifting
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ¡Inspírate y comparte tu pasión por el fitness! Explora artículos,
              filtra por categorías, escribe tu propia historia o deja un
              comentario.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
            <input
              type="text"
              placeholder="Busca artículos..."
              className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db5d2c] focus:border-[#db5d2c] outline-none transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-[#db5d2c] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Últimos Artículos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fadeIn"
                  >
                    <img
                      src="public\images\WhatsApp Image 2025-05-16 at 5.59.31 PM.jpeg"
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-sm text-[#db5d2c] font-medium">
                        {post.category}
                      </span>
                      <h4 className="text-xl font-semibold text-gray-800 mt-2 mb-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                      <a
                        href={`/blog/${post.id}`}
                        className="mt-4 inline-block text-[#db5d2c] font-semibold hover:text-orange-700 transition-colors"
                      >
                        Leer más
                      </a>

                      {/* Comments Section */}
                      <div className="mt-6 border-t border-gray-200 pt-4">
                        <h5 className="text-lg font-semibold text-gray-800 mb-4">
                          Comentarios
                        </h5>
                        {post.comments.length > 0 ? (
                          post.comments.map((comment) => (
                            <div
                              key={comment.id}
                              className="mb-4 p-4 bg-gray-50 rounded-lg"
                            >
                              <p className="text-sm font-medium text-gray-800">
                                {comment.author}
                              </p>
                              <p className="text-gray-600">{comment.text}</p>
                              <p className="text-sm text-gray-500 mt-1">
                                {comment.date}
                              </p>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-600">
                            ¡Sé el primero en comentar!
                          </p>
                        )}

                        {/* Comment Form */}
                        <div className="mt-4">
                          <input
                            type="text"
                            name="author"
                            placeholder="Tu nombre"
                            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db5d2c] focus:border-[#db5d2c] outline-none transition-colors"
                            value={newComment.author}
                            onChange={(e) => handleCommentChange(e, post.id)}
                          />
                          <textarea
                            name="text"
                            rows="3"
                            placeholder="Escribe tu comentario..."
                            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db5d2c] focus:border-[#db5d2c] outline-none transition-colors"
                            value={newComment.text}
                            onChange={(e) => handleCommentChange(e, post.id)}
                          ></textarea>
                          <button
                            className="bg-[#db5d2c] text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                            onClick={() => handleCommentSubmit(post.id)}
                          >
                            Enviar Comentario
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600 col-span-full">
                  No se encontraron artículos. ¡Prueba con otra búsqueda o
                  categoría!
                </p>
              )}
            </div>
          </div>

          {/* Write a Blog Post Form */}
          <div className="row flex flex-col items-center">
            <div className="w-full max-w-3xl animate-fadeInUp">
              <div className="bg-white p-8 rounded-xl shadow-lg relative">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  ¡Comparte tu Historia!
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Inspira a la comunidad de M-Lifting con tus consejos y
                  experiencias. ¡Tu voz importa!
                </p>

                {/* Toggle Preview */}
                <div className="flex justify-end mb-4">
                  <button
                    className="text-[#db5d2c] font-semibold hover:text-orange-700 transition-colors"
                    onClick={() => setShowPreview(!showPreview)}
                  >
                    {showPreview ? "Volver a Editar" : "Vista Previa"}
                  </button>
                </div>

                {/* Draft Saved Notification */}
                {isDraftSaved && (
                  <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm animate-fadeIn">
                    Borrador guardado
                  </div>
                )}

                {showPreview ? (
                  <div className="border border-gray-200 p-6 rounded-lg bg-gray-50">
                    <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                      {formData.title || "Título de tu artículo"}
                    </h4>
                    <p className="text-gray-600 italic mb-4">
                      {formData.excerpt || "Un breve resumen de tu artículo..."}
                    </p>
                    <p className="text-gray-700 whitespace-pre-wrap">
                      {formData.content ||
                        "Aquí irá el contenido de tu artículo..."}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Título
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db5d2c] focus:border-[#db5d2c] outline-none transition-colors"
                        placeholder="Ej: Mis consejos para principiantes en el gimnasio"
                        value={formData.title}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="excerpt"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Resumen
                      </label>
                      <textarea
                        id="excerpt"
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db5d2c] focus:border-[#db5d2c] outline-none transition-colors"
                        placeholder="Un breve resumen de tu artículo..."
                        value={formData.excerpt}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <div>
                      <label
                        htmlFor="content"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Contenido
                      </label>
                      <textarea
                        id="content"
                        rows="8"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db5d2c] focus:border-[#db5d2c] outline-none transition-colors"
                        placeholder="Escribe aquí el contenido completo de tu artículo..."
                        value={formData.content}
                        onChange={handleInputChange}
                      ></textarea>
                      <p className="text-sm text-gray-500 mt-1">
                        {contentCharCount}/{maxContentChars} caracteres
                      </p>
                    </div>
                    <button className="w-full bg-[#db5d2c] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md">
                      Publicar Artículo
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
