import JohnDoe from "../../../public/JohnDoe.jpg";
import JaneSmith from "../../../public/JaneSmith.jpg";
import MichaelJohnson from "../../../public/MichaelJohnson.jpg";
import Image from "next/image";

function Reviews() {
  return (
    <section class="container max-w-6xl mx-auto py-12 my-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold text-gray-800 mb-20 text-center">
          Client Reviews
        </h2>
        <div class="flex flex-col md:flex-row gap-10">
          <div class="bg-white shadow-md rounded-lg border border-slate-100">
            <div class="p-4 flex flex-col items-center gap-4">
              <Image
                src={JohnDoe}
                width={50}
                height={50}
                className="rounded-full -mt-10"
              />
              <p class="text-gray-600">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p class="text-gray-800 font-semibold">- John Doe</p>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg border border-slate-100">
            <div class="p-4 flex flex-col items-center gap-4">
              <Image
                src={JaneSmith}
                width={50}
                height={50}
                className="rounded-full -mt-10"
              />
              <p class="text-gray-600 mb-4">
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat."
              </p>
              <p class="text-gray-800 font-semibold">- Jane Smith</p>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg border border-slate-100">
            <div class="p-4 flex flex-col items-center gap-4">
              <Image
                src={MichaelJohnson}
                width={50}
                height={50}
                className="rounded-full -mt-10"
              />
              <p class="text-gray-600 mb-4">
                "Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur."
              </p>
              <p class="text-gray-800 font-semibold">- Michael Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
