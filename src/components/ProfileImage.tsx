import React from "react";
import Image from "next/image";
type ProfilePicProps = {
  src?: string | null;
  className?: string;
};
const ProfileImage = ({ src, className = "" }: ProfilePicProps) => {
  return (
    <div
      className={`${className} relative h-12 w-12 overflow-hidden rounded-full`}
    >
      {src == null ? null : (
        <Image src={src} quality={100} fill alt="Profile Image" />
      )}
    </div>
  );
};

export default ProfileImage;
