export default function NotFound() {
  return (
    <div className="px-10 lg:px-20">
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Halaman gaa ada tolol</p>
      <a href="/" className="mt-6 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300 transition">
        Kembali ke Beranda
      </a>
    </div>
    </div>
  );
}
NotFound.getLayout = (page: React.ReactNode) => <>{page}</>;
