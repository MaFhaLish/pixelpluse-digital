function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mb-10 flex flex-col gap-4 md:flex-row items-center justify-between md:px-20 lg:px-40 py-6 bg-cyan-500 text-center">
        <h3 className="text-2xl font-black text-white">
          Move even faster with PixelPluse Digital.
        </h3>
        <button className="bg-white md:self-start self-center text-cyan-500 px-4 py-2 font-semibold rounded-full hover:bg-cyan-900">
          Call Me
        </button>
      </div>

      {/* Socials */}
      <div class="pb-10 text-slate-300 container text-center mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 class="text-lg font-semibold mb-4">PixelPluse Digital</h3>
          <p>&copy; 2024 PixelPluse Digital</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" class="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
