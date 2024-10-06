"use client";

import { ArrowRightIcon, Mail, MessageSquare, User } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="text" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" placeholder="Email" />
        <Mail className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea type="text" placeholder="Type your message here" />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center max-w-[166px] gap-x-2">
        Let's talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
