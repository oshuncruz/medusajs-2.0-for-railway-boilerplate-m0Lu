import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        
        {/* Centered Image */}
        <img 
          src="https://clothesrewear.s3.us-east-2.amazonaws.com/rewear.png" 
          alt="Rewear Logo"
          className="w-64 h-auto object-contain" // Adjust the width as needed
        />

      </div>
    </div>
  );
};

export default Hero;
