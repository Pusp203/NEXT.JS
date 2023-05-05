import Image from "next/image";

const data = [
  {
    Image: "/acer.png",
  },
  {
    Image: "/apple.png",
  },
  {
    Image: "/hp.png",
  },
  {
    Image: "/lenovo.png",
  },
  {
    Image: "/dell.png",
  },
  {
    Image: "/msi.png",
  },
  {
    Image: "/Microsoft.png",
  },
];
const Company = () => {
  return (
    <div className="flex items-center gap-8 flex-col">
      <h2 className="text-center"> Shop by brand</h2>
      <div className="flex gap-6 items-center">
        {data.map((vals) => {
          return (
            <div>
              <Image
                src={vals.Image}
                width={73}
                height={73}
                alt="Picture of the author"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Company;
