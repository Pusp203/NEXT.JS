import Image from "next/image";
import { Inter } from "next/font/google";
import { Data } from "./Data";
import Company from "./Company";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Company />
      <div className="flex gap-2 flex-col">
        <div>
          <h2 className="text-center">Accessories</h2>
          <h6 className="text-end text-[#BE1E2D]"> View all</h6>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {Data.map((val) => {
            return (
              <div className="flex gap-5 items-center " key={val.id}>
                <Image
                  src={val.Image}
                  alt="productImage"
                  width={500}
                  height={500}
                />
                <div className="flex flex-col items-start gap-3 ">
                  <h2 className="text-base not-italic font-medium leading-5 text-[#191919]">
                    {val.title}{" "}
                  </h2>

                  <h4>{val.rating}</h4>
                  <p className="text-[#BE1E2D]">NPR {val.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
