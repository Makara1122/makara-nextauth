import React from "react";
import {Avatar} from "@nextui-org/react";

type PropsType = {
    src : string;
}

export default function AvatarPrimaryComponent({src}: PropsType) {
  return (
    <div className="flex gap-4 items-center m-1  hover:scale-75 duration-700 ease-in">
      {/* <Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" /> */}
      <Avatar isBordered color="primary" src={`${src}`} />
      {/* <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" /> */}
      {/* <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" /> */}
      {/* <Avatar isBordered color="warning" src="https://i.pravatar.cc/150?u=a04258114e29026702d" /> */}
      {/* <Avatar isBordered color="danger" src="https://i.pravatar.cc/150?u=a04258114e29026708c" /> */}
    </div>
  );
}
