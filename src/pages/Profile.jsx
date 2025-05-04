import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Loader, LocateIcon, Mail, MapPin, MapPinned, PhoneOutgoing, Plus } from "lucide-react";
import React, { useRef, useState } from "react";

const Profile = () => {


    const imageRef = useRef();
    let loading = false;
    const [profilepicture, setprofilepicture] = useState('')

    const [profileData, setprofileData] = useState({
        fullname: "",
        email: "",
        address: "",
        city: "",
        country: "",
        contact: "",
        profileImage: "",
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setprofileData({ ...profileData, [name]: value });
    };

    const handleformsubmit = (e) => {
        e.preventDefault();
        console.log(profileData);
    };


    const fileChangehandler = (e) => {
        const file = e.target.file?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result;
                setprofilepicture(result);
            }
        }
    }
    return (
        <>
            <section className=" w-full h-[calc(100vh-80px)] bg-pastel">
                <form onSubmit={handleformsubmit}>
                    <div className="w-full h-full px-20">
                        <div className="w-full min-h-[50vh] border border-deep-teal bg-white shadow-2xl px-[100px] py-[10px] rounded-3xl mt-[30px]">
                            <div className=" flex items-center gap-5">
                                <div className="relative">
                                    <Avatar className="p-10 bg-seaform rounded-full">
                                        <AvatarImage />
                                        <AvatarFallback>CN</AvatarFallback>
                                        <input
                                            type="file"
                                            ref={imageRef}
                                            onChange={fileChangehandler}
                                            className="hidden"
                                            accept="image/*"
                                        />
                                        <div onClick={() => { imageRef.current?.click() }} className="absolute inset-0 w-20 h-20 bg-seaform opacity-0 hover:opacity-100 rounded-full flex items-center justify-center cursor-pointer">
                                            <Plus
                                                size={62}
                                                strokeWidth={1}
                                                className="text-black"
                                            ></Plus>
                                        </div>
                                    </Avatar>
                                </div>
                                <div>
                                    <input
                                        name="fullname"
                                        value={profileData.fullname}
                                        onChange={handlechange}
                                        type="text"
                                        className="w-full text-2xl border-none outline-none ring-0 focus:ring-0 focus-visible:ring-0 shadow-none bg-white"
                                    />
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-1 lg:grid-cols-4 mt-5 gap-5">
                                <div className="w-full relative">
                                    <Label className="font-semibold">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={profileData.email}
                                        onChange={handlechange}
                                        className="border bg-seaform px-10 focus-visible:ring-1"
                                    />
                                    <Mail className="absolute inset-y-7.5 ml-2"></Mail>
                                </div>
                                <div className="w-full relative">
                                    <Label className="font-semibold">Address</Label>
                                    <Input
                                        name="address"
                                        type="text"
                                        value={profileData.address}
                                        onChange={handlechange}
                                        className="border bg-seaform px-10 focus-visible:ring-1"
                                    />
                                    <LocateIcon className="absolute inset-y-7.5 ml-2"></LocateIcon>
                                </div>
                                <div className="w-full relative">
                                    <Label className="font-semibold">City</Label>
                                    <Input
                                        name="city"
                                        type="text"
                                        value={profileData.city}
                                        onChange={handlechange}
                                        className="border bg-seaform px-10 focus-visible:ring-1"
                                    />
                                    <MapPin className="absolute inset-y-7.5 ml-2"></MapPin>
                                </div>
                                <div className="w-full relative">
                                    <Label className="font-semibold">Country</Label>
                                    <Input
                                        name="country"
                                        type="text"
                                        value={profileData.country}
                                        onChange={handlechange}
                                        className="border bg-seaform px-10 focus-visible:ring-1"
                                    />
                                    <MapPinned className="absolute inset-y-7.5 ml-2"></MapPinned>
                                </div>
                                <div className="w-full relative">
                                    <Label className="font-semibold">Contact</Label>
                                    <Input
                                        name="contact"
                                        type="text"
                                        value={profileData.contact}
                                        onChange={handlechange}
                                        className="border bg-seaform px-10 focus-visible:ring-1"
                                    />
                                    <PhoneOutgoing className="absolute inset-y-7.5 ml-2" />
                                </div>
                            </div>
                            <div className="lg:w-[10vw]  mt-5 mb-2 m-auto">
                                {loading ? (
                                    <Button className="w-full cursor-pointer bg-deep-teal hover:bg-hover">
                                        <Loader className="animate-spin" /> Please Wait
                                    </Button>
                                ) : (
                                    <Button className="w-full cursor-pointer bg-deep-teal hover:bg-hover">
                                        Update
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Profile;
