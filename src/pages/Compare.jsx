import Image from "next/image";
import { compareData, mainData } from "./data/comparision-data";

const Compare = () => {
  return (
    <>
      <div className="relative  overflow-x-auto w-full bg-[#F5F5F5] m-auto">
        <table className="w-full bg-[#F5F5F5] m-auto">
          <thead className="">
            <tr>
              <td></td>
              {mainData?.map((dataHead) => (
                <td key={dataHead.id} className="w-[300px]">
                  <div className=" ">
                    <h3 className="px-4 py-4 text-[#000000] font-semibold text-xl">
                      {dataHead.heading}
                    </h3>

                    <div className="pl-4 ">
                      <input
                        className=" px-4 py-2.5 pl-2.5 text-[#191919] font-normal text-base border border-[#9D9D9D] rounded bg-[#F5F5F5] outline-none md:w-[300px] "
                        type="text"
                        placeholder="Please enter model name"
                      />
                    </div>

                    <Image
                      src={dataHead.Image}
                      width={200}
                      height={500}
                      alt="comparision image"
                    />
                  </div>
                </td>
              ))}
            </tr>
          </thead>
          <tbody className="w-full m-auto">
            <tr>
              <td className="px-4 py-4  text-[#191919] font-semibold text-sm lg:text-base">
                Name
              </td>
              {compareData?.map((item) => (
                <td
                  key={item.id}
                  className="  text-[#191919] font-semibold text-sm lg:text-xl  "
                >
                  {item.specification}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                {" "}
                CPU
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.cpu}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                RAM
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.ram}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                Graphics
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.graphics}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                Display
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.display}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                Type
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.type}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                Connections
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.connections}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                Networking
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.networking}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                {" "}
                Graphics
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.graphics}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                Storage
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.storage}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                Size: Height x Weight x Depth
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.size}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                Battery
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.battery}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                Camera Webcam
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.webcame}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                Weight
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.weight}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                Audio
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.audio}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-4    text-[#191919] font-semibold text-sm lg:text-base">
                Dell inspiron 5510 Price in Nepal
              </td>
              {compareData?.map((item) => (
                <td key={item.id} className="font-normal text-sm lg:text-xl">
                  {item.price}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Compare;
