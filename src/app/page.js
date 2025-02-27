import Image from "next/image";
import bellImage from "../../public/bell.png";

export default function Home() {
  return (
    <div className="text-center py-5">
      <h1>Welcome to My App</h1>
      <Image
        src={bellImage}
        alt="bell-notification"
        height={80}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD..."
      />
      <p>This is the homepage. Navigate using the navbar.</p>
    </div>
  );
}
