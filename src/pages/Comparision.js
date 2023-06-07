import Image from "next/image";
import { compareData } from "./data/comparision-data";

const Comparision = () => {
  return (
    <div>
      <div class="relative overflow-x-auto bg-[#F5F5F5] w-full">
        <table class="w-full text-sm text-left ">
          <thead className="">
            <tr className="">
              <tr>
                <th
                  scope="col"
                  class=" px-4 py-4 text-[#000000] font-semibold text-xl"
                >
                  Compare with
                </th>
              </tr>
              <tr>
                <td
                  scope="row"
                  class="px-4 py-4  font-medium     whitespace-nowrap"
                >
                  <form action="">
                    <input
                      className=" w-[300px] py-2.5 pl-2.5 text-[#191919] font-normal text-base border border-[#9D9D9D] rounded bg-[#F5F5F5] outline-none "
                      type="text"
                      name=""
                      id=""
                      placeholder="Please enter model name"
                    />
                  </form>
                </td>
              </tr>
              <tr>
                <td scope="row" class=" font-medium bg-[#F5F5F5] ">
                  <Image
                    src="/Compare.png"
                    width="500"
                    height="300"
                    alt="comparedImage"
                  />
                </td>
              </tr>
            </tr>
            <tr className="">
              <tr>
                <th
                  scope="col"
                  class=" px-4 py-4 text-[#000000] font-semibold text-xl"
                >
                  Compare with
                </th>
              </tr>
              <tr>
                <td
                  scope="row"
                  class="px-4 py-4  font-medium     whitespace-nowrap"
                >
                  <form action="">
                    <input
                      className=" w-[300px] py-2.5 pl-2.5 text-[#191919] font-normal text-base border border-[#9D9D9D] rounded bg-[#F5F5F5] outline-none "
                      type="text"
                      name=""
                      id=""
                      placeholder="Please enter model name"
                    />
                  </form>
                </td>
              </tr>
              <tr>
                <td scope="row" class=" font-medium bg-[#F5F5F5] ">
                  <Image
                    src="/Compare.png"
                    width="500"
                    height="300"
                    alt="comparedImage"
                  />
                </td>
              </tr>
            </tr>
            <tr className="">
              <tr>
                <th
                  scope="col"
                  class=" px-4 py-4 text-[#000000] font-semibold text-xl"
                >
                  Compare with
                </th>
              </tr>
              <tr>
                <td
                  scope="row"
                  class="px-4 py-4  font-medium     whitespace-nowrap"
                >
                  <form action="">
                    <input
                      className=" w-[300px] py-2.5 pl-2.5 text-[#191919] font-normal text-base border border-[#9D9D9D] rounded bg-[#F5F5F5] outline-none "
                      type="text"
                      name=""
                      id=""
                      placeholder="Please enter model name"
                    />
                  </form>
                </td>
              </tr>
              <tr>
                <td scope="row" class=" font-medium bg-[#F5F5F5] ">
                  <Image
                    src="/Compare.png"
                    width="500"
                    height="300"
                    alt="comparedImage"
                  />
                </td>
              </tr>
            </tr>
            <tr className="">
              <th
                scope="col"
                class="px-4 py-4 text-[#000000] font-semibold text-xl"
              >
                Compare with
              </th>
              <td
                scope="row"
                class=" px-4 py-4 font-medium     whitespace-nowrap"
              >
                <form action="">
                  <input
                    className=" w-[300px] py-2.5 pl-2.5 text-[#191919] font-normal text-base border border-[#9D9D9D] rounded bg-[#F5F5F5] outline-none "
                    type="text"
                    name=""
                    id=""
                    placeholder="Please enter model name"
                  />
                </form>
              </td>
              <td scope="row" class=" font-medium bg-[#F5F5F5] ">
                <Image
                  src="/Compare.png"
                  width="500"
                  height="300"
                  alt="comparedImage"
                />
              </td>
            </tr>
            <tr className="flex flex-col">
              <th
                scope="col"
                class="px-4 py-4 text-[#000000] font-semibold text-xl"
              >
                Compare with
              </th>
              <td
                scope="row"
                class=" px-4 py-4 font-medium     whitespace-nowrap"
              >
                <form action="">
                  <input
                    className=" w-[300px] py-2.5 pl-2.5 text-[#191919] font-normal text-base border border-[#9D9D9D] rounded bg-[#F5F5F5] outline-none "
                    type="text"
                    name=""
                    id=""
                    placeholder="Please enter model name"
                  />
                </form>
              </td>
              <td scope="row" class="  font-medium bg-[#F5F5F5] ">
                <Image
                  src="/Compare.png"
                  width="500"
                  height="300"
                  alt="comparedImage"
                />
              </td>
            </tr>
          </thead>
          <tbody className="bg-[#F5F5F5]">
            <tr>
              <th class="px-4 py-4   text-[#191919] font-semibold text-base">
                Specification
              </th>
              <td class="px-4 py-4 text-[#191919] font-semibold text-xl">
                HP Envy x360 13M i7 11th Gen / 8GB RAM / 512GB SSD / 13.3" OLED
                360 TouchScreen Display
              </td>
              <td class="px-4 py-4 text-[#191919] font-semibold text-xl">
                HP Envy x360 13M i7 11th Gen / 8GB RAM / 512GB SSD / 13.3" OLED
                360 TouchScreen Display
              </td>
              <td class="px-4 py-4 text-[#191919] font-semibold text-xl">
                HP Envy x360 13M i7 11th Gen / 8GB RAM / 512GB SSD / 13.3" OLED
                360 TouchScreen Display
              </td>
            </tr>
            <tr class="  dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-4 py-4    text-[#191919] font-semibold text-base"
              >
                CPU
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                11th Generation Inter core i5-11320H Processor(8MB Cache, upto
                4.5Ghz)
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                11th Generation Inter core i5-11320H Processor(8MB Cache, upto
                4.5Ghz)
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                $11th Generation Inter core i5-11320H Processor(8MB Cache, upto
                4.5Ghz)
              </td>
            </tr>
            <tr class=" dark:bg-gray-800 ">
              <th
                scope="row"
                class="px-4 py-4 whitespace-nowrap  text-[#191919] font-semibold text-base"
              >
                RAM
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                8GB, DDR4, 32000Mhz
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                8GB, DDR4, 32000Mhz PC
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                $8GB, DDR4, 32000Mhz
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4  whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Graphics
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Intel Iris Xe Graphics with shared graphics memory
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Intel Iris Xe Graphics with shared graphics memory
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                $Intel Iris Xe Graphics with shared graphics memory
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4  whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Display
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                15.6 Inch FHD(1920x1080) Anti-glare LED Backlight Non-Touch
                Narrow Border WVA Display
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                15.6 Inch FHD(1920x1080) Anti-glare LED Backlight Non-Touch
                Narrow Border WVA Display
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                15.6 Inch FHD(1920x1080) Anti-glare LED Backlight Non-Touch
                Narrow Border WVA Display
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Type
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Thin and light laptop
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Thin and light laptop
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Thin and light laptop
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4  whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Connections
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                2USB 3.2 Gen 1 Type-A prts1 USB Gen 2x2 Type-C with Display Port
                and Power Delivery(Available on i3/i5 processors)/Thunderbolt
                4.0 with Displayport and Power Delivery(Available on i7
                processors) 1 Universal Audio Jack’1 HDMI 1.4 port1 power
                adapter port
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                2USB 3.2 Gen 1 Type-A prts1 USB Gen 2x2 Type-C with Display Port
                and Power Delivery(Available on i3/i5 processors)/Thunderbolt
                4.0 with Displayport and Power Delivery(Available on i7
                processors) 1 Universal Audio Jack’1 HDMI 1.4 port1 power
                adapter port
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                2USB 3.2 Gen 1 Type-A prts1 USB Gen 2x2 Type-C with Display Port
                and Power Delivery(Available on i3/i5 processors)/Thunderbolt
                4.0 with Displayport and Power Delivery(Available on i7
                processors) 1 Universal Audio Jack’1 HDMI 1.4 port1 power
                adapter port
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Networking
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Intel Wi-Fi 6 2x2(Gigs+) and Bluetooth 5.1
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Intel Wi-Fi 6 2x2(Gigs+) and Bluetooth 5.1
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Intel Wi-Fi 6 2x2(Gigs+) and Bluetooth 5.1
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Storage
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                256GB SSD
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                256GB SSD
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                256GB SSD
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Size: Height x Weight x Depth
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Height(front): 14.6mm (0.57”) Height (rear): 17.99 mm (0.71”)
                Width: 356.06mm (14.02”) Depth: 228.9mm (9.01”
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Height(front): 14.6mm (0.57”) Height (rear): 17.99 mm (0.71”)
                Width: 356.06mm (14.02”) Depth: 228.9mm (9.01”
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Height(front): 14.6mm (0.57”) Height (rear): 17.99 mm (0.71”)
                Width: 356.06mm (14.02”) Depth: 228.9mm (9.01”
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4  whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Battery
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                4-CEll Battery, 54WHr (Integrated
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                4-CEll Battery, 54WHr (Integrated
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                4-CEll Battery, 54WHr (Integrated
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base "
              >
                Camera Webcam
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base ">
                HD 1280 x 720 at 30 fps cameraDual-array microphones
              </td>
              <td class="px-4 py-4  text-[#191919] font-normal text-base">
                HD 1280 x 720 at 30 fps cameraDual-array microphones
              </td>
              <td class="px-4 py-4  text-[#191919] font-normal text-base">
                HD 1280 x 720 at 30 fps cameraDual-array microphones
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Weight
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                1.63 kg
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                1.63 kg
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                1.63 kg
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Audio
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Stereo speakers, 2 W x 2 W = 4 W total
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Stereo speakers, 2 W x 2 W = 4 W total
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Stereo speakers, 2 W x 2 W = 4 W total
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4  whitespace-wrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Dell inspiron 5510 Price in Nepal
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Rs. 114,500 (i5 Variant)
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Rs. 114,500 (i5 Variant)
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base ">
                Rs. 114,500 (i5 Variant)
              </td>
            </tr>
          </tbody>
        </table>

        {/* <table class="w-full text-left">
          <tbody className="bg-[#F5F5F5]">
            <tr>
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap  text-[#191919] font-semibold text-base"
              >
                Specification
              </th>
              <td class="px-4 py-4 text-[#191919] font-semibold text-xl">
                HP Envy x360 13M i7 11th Gen / 8GB RAM / 512GB SSD / 13.3" OLED
                360 TouchScreen Display
              </td>
              <td class="px-4 py-4 text-[#191919] font-semibold text-xl">
                HP Envy x360 13M i7 11th Gen / 8GB RAM / 512GB SSD / 13.3" OLED
                360 TouchScreen Display
              </td>
              <td class="px-4 py-4 text-[#191919] font-semibold text-xl">
                HP Envy x360 13M i7 11th Gen / 8GB RAM / 512GB SSD / 13.3" OLED
                360 TouchScreen Display
              </td>
            </tr>
            <tr class="  dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                CPU
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                11th Generation Inter core i5-11320H Processor(8MB Cache, upto
                4.5Ghz)
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                11th Generation Inter core i5-11320H Processor(8MB Cache, upto
                4.5Ghz)
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                $11th Generation Inter core i5-11320H Processor(8MB Cache, upto
                4.5Ghz)
              </td>
            </tr>
            <tr class=" dark:bg-gray-800 ">
              <th
                scope="row"
                class="px-4 py-4 whitespace-nowrap  text-[#191919] font-semibold text-base"
              >
                RAM
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                8GB, DDR4, 32000Mhz
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                8GB, DDR4, 32000Mhz PC
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                $8GB, DDR4, 32000Mhz
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4  whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Graphics
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Intel Iris Xe Graphics with shared graphics memory
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Intel Iris Xe Graphics with shared graphics memory
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                $Intel Iris Xe Graphics with shared graphics memory
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4  whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Display
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                15.6 Inch FHD(1920x1080) Anti-glare LED Backlight Non-Touch
                Narrow Border WVA Display
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                15.6 Inch FHD(1920x1080) Anti-glare LED Backlight Non-Touch
                Narrow Border WVA Display
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                15.6 Inch FHD(1920x1080) Anti-glare LED Backlight Non-Touch
                Narrow Border WVA Display
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Type
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Thin and light laptop
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Thin and light laptop
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Thin and light laptop
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4  whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Connections
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                2USB 3.2 Gen 1 Type-A prts1 USB Gen 2x2 Type-C with Display Port
                and Power Delivery(Available on i3/i5 processors)/Thunderbolt
                4.0 with Displayport and Power Delivery(Available on i7
                processors) 1 Universal Audio Jack’1 HDMI 1.4 port1 power
                adapter port
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                2USB 3.2 Gen 1 Type-A prts1 USB Gen 2x2 Type-C with Display Port
                and Power Delivery(Available on i3/i5 processors)/Thunderbolt
                4.0 with Displayport and Power Delivery(Available on i7
                processors) 1 Universal Audio Jack’1 HDMI 1.4 port1 power
                adapter port
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                2USB 3.2 Gen 1 Type-A prts1 USB Gen 2x2 Type-C with Display Port
                and Power Delivery(Available on i3/i5 processors)/Thunderbolt
                4.0 with Displayport and Power Delivery(Available on i7
                processors) 1 Universal Audio Jack’1 HDMI 1.4 port1 power
                adapter port
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Networking
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Intel Wi-Fi 6 2x2(Gigs+) and Bluetooth 5.1
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Intel Wi-Fi 6 2x2(Gigs+) and Bluetooth 5.1
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Intel Wi-Fi 6 2x2(Gigs+) and Bluetooth 5.1
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Storage
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                256GB SSD
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                256GB SSD
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                256GB SSD
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Size: Height x Weight x Depth
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Height(front): 14.6mm (0.57”) Height (rear): 17.99 mm (0.71”)
                Width: 356.06mm (14.02”) Depth: 228.9mm (9.01”
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Height(front): 14.6mm (0.57”) Height (rear): 17.99 mm (0.71”)
                Width: 356.06mm (14.02”) Depth: 228.9mm (9.01”
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Height(front): 14.6mm (0.57”) Height (rear): 17.99 mm (0.71”)
                Width: 356.06mm (14.02”) Depth: 228.9mm (9.01”
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4  whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Battery
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                4-CEll Battery, 54WHr (Integrated
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                4-CEll Battery, 54WHr (Integrated
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                4-CEll Battery, 54WHr (Integrated
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base "
              >
                Camera Webcam
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base ">
                HD 1280 x 720 at 30 fps cameraDual-array microphones
              </td>
              <td class="px-4 py-4  text-[#191919] font-normal text-base">
                HD 1280 x 720 at 30 fps cameraDual-array microphones
              </td>
              <td class="px-4 py-4  text-[#191919] font-normal text-base">
                HD 1280 x 720 at 30 fps cameraDual-array microphones
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Weight
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                1.63 kg
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                1.63 kg
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                1.63 kg
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4   whitespace-nowrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Audio
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Stereo speakers, 2 W x 2 W = 4 W total
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Stereo speakers, 2 W x 2 W = 4 W total
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Stereo speakers, 2 W x 2 W = 4 W total
              </td>
            </tr>
            <tr class=" dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4  whitespace-wrap dark:text-white text-[#191919] font-semibold text-base"
              >
                Dell inspiron 5510 Price in Nepal
              </th>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Rs. 114,500 (i5 Variant)
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base">
                Rs. 114,500 (i5 Variant)
              </td>
              <td class="px-4 py-4 text-[#191919] font-normal text-base ">
                Rs. 114,500 (i5 Variant)
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default Comparision;
