import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import React from "react";

const Profile = () => {
  return (
    <>
      <section className="w-full h-[calc(100vh-80px)]  flex justify-center items-center">
        <div className="w-full h-[60vh] relative sm:h-[60vh] md:h-[50vh] bg-white px-[100px] py-[20px]">
          <Avatar className="p-5 bg-gray-400 rounded-full">
            <AvatarImage />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* <input type="file" className="hidden" /> */}
          <div className="absolute inset-y-5 w-10 h-10 flex items-center justify-center bg-gray-400 rounded-full opacity-0 hover:opacity-100 transition-all">
            <Plus size={'100px'}></Plus>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile
