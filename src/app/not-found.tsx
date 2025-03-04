"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Halaman tidak ditemukan</p>
      <Link href="/">
        <span className="mt-6 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300 transition cursor-pointer">
          Kembali ke Beranda
        </span>
      </Link>
    </div>
  );
}
