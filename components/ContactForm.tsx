"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectValue,
    SelectLabel,
    SelectTrigger,
} from "./ui/select";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import SuccessMsg from "./SuccessMsg";

const ContactForm = () => {
    const { toast } = useToast();
    const [status, setStatus] = useState("");
    const [success, setSucces] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Address: "",
        Message: "",
        Service: "",
    });
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prevData) => ({ ...prevData, Service: value }));
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (!formData.Name.trim() || !formData.Email.trim()) {
                toast({
                    title: "Error: Something is wrong",
                    description: "Please input your mail and email to continue",
                    variant: "destructive",
                });
                return;
            }
            const form = new FormData();
            const currentDateTime = new Date().toLocaleString();
            form.append("Name", formData.Name);
            form.append("Email", formData.Email);
            form.append("Phone", formData.Phone);
            form.append("Address", formData.Address);
            form.append("Message", formData.Message);
            form.append("Service", formData.Service);
            form.append("DateTime", currentDateTime);
            const response = await fetch(process.env.NEXT_PUBLIC_GETFORM_URL!, {
                method: "POST",
                body: form,
            });
            if (response?.ok) {
                setSucces(true);
                setStatus("Success! Your message has been sent.");
                setFormData({
                    Name: "",
                    Email: "",
                    Phone: "",
                    Address: "",
                    Message: "",
                    Service: "",
                });
            } else {
                setStatus("Error! Unable to send your message.");
            }
        } catch (error) {
            console.error("Data submitting error", error);
            setStatus("Error! Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="text-2xl md:text-4xl text-lightSky">
                Let&apos;s work together
            </h3>
            <p>
                As a Civil Engineer in Informatics, I specialize in delivering
                innovative solutions through technical expertise and a
                commitment to excellence. Whether you’re looking to optimize
                processes, develop robust web platforms, or tackle complex
                challenges, I’m ready to contribute to your success. Reach out
                to discuss how we can collaborate effectively.
            </p>
            <>
                {success ? (
                    <SuccessMsg status={status} />
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col md:flex-row">
                            <Input
                                type="text"
                                id="Name"
                                name="Name"
                                required
                                placeholder="Your Name"
                                value={formData.Name}
                                onChange={handleChange}
                                disabled={loading}
                                className="disabled:bg-white/10"
                            />
                            <Input
                                type="email"
                                id="Email"
                                name="Email"
                                required
                                placeholder="Email Address"
                                value={formData.Email}
                                onChange={handleChange}
                                disabled={loading}
                                className="disabled:bg-white/10"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <Input
                                type="text"
                                id="Phone"
                                name="Phone"
                                placeholder="Phone Number"
                                value={formData.Phone}
                                onChange={handleChange}
                                disabled={loading}
                                className="disabled:bg-white/10"
                            />
                            <Input
                                type="text"
                                id="Address"
                                name="Address"
                                placeholder="Address"
                                value={formData.Address}
                                onChange={handleChange}
                                disabled={loading}
                                className="disabled:bg-white/10"
                            />
                        </div>
                        <Textarea
                            name="Message"
                            placeholder="Text Here"
                            rows={5}
                            value={formData.Message}
                            onChange={handleChange}
                            disabled={loading}
                            className="disabled:bg-white/10"
                        />

                        <Select
                            onValueChange={handleSelectChange}
                            disabled={loading}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a service"></SelectValue>{" "}
                            </SelectTrigger>
                            <SelectContent className="bg-bodyColor text-white border-white/20 ">
                                <SelectGroup>
                                    <SelectLabel>Select a service</SelectLabel>
                                    <SelectItem value="Web Development">
                                        Web Development
                                    </SelectItem>
                                    <SelectItem value="Process Management">
                                        Process Management
                                    </SelectItem>
                                    <SelectItem value="Maintenance and Technical Support">
                                        Maintenance and Technical Support
                                    </SelectItem>
                                    <SelectItem value="Digital Marketing and SEO">
                                        Digital Marketing and SEO
                                    </SelectItem>
                                    <SelectItem value="Portfolio Creation">
                                        Portfolio Creation
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Button
                            disabled={loading}
                            type="submit"
                            className="w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                        >
                            {loading ? "Submiting message..." : "Send Message"}
                        </Button>
                    </form>
                )}
            </>
        </div>
    );
};

export default ContactForm;
