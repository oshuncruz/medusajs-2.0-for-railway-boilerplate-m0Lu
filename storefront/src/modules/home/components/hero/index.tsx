import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div
        className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6"
        style={{
          backgroundImage: `url("https://clothesrewear.s3.us-east-2.amazonaws.com/DCS08525-Enhanced-NR-2.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optionally add other content here */}
      </div>
    </div>
  );
};

export default Hero;
