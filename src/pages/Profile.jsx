import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Plus } from "lucide-react";
import React, { useRef } from "react";

const Profile = () => {
    const imageRef = useRef();
    return (
        <>
            <section className=" w-full h-[calc(100vh-80px)]">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full min-h-[70vh] px-[100px] py-[10px]">
                        <div className=" flex items-center gap-5">
                            <div className="relative">
                                <Avatar className="p-10 bg-gray-400 rounded-full">
                                    <AvatarImage />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <input type="file" ref={imageRef} className="hidden" />
                                <div className="absolute inset-0 w-20 h-20 bg-gray-400 opacity-0 hover:opacity-100 rounded-full flex items-center justify-center cursor-pointer">
                                    <Plus
                                        size={62}
                                        strokeWidth={1}
                                        className="text-gray-200"
                                    ></Plus>
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="text-2xl border-none outline-none ring-0 focus:ring-0 focus-visible:ring-0 shadow-none"
                                />
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-10 gap-5">
                            <div className="w-full">
                                <Label>Email</Label>
                                <Input type="email" className="border" />
                            </div>
                            <div className="w-full">
                                <Label>Address</Label>
                                <Input type="text" className="border" />
                            </div>
                            <div className="w-full">
                                <Label>City</Label>
                                <Input type="text" className="border" />
                            </div>
                            <div className="w-full">
                                <Label>Country</Label>
                                <Input type="text" className="border" />
                            </div>
                            <div className="w-full">
                                <Label>Contact</Label>
                                <Input type="text" className="border" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
