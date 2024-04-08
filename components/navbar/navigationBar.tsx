"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";
import styles from "./styles.module.css";
import { inter, suwannaphum } from "@/app/fonts";
import AvatarPrimaryComponent from "../avatar/AvatarComponent";

export default function NavbarComponent() {
  return (
    <Breadcrumbs
      className={`${styles.navbar} ${suwannaphum.className} ${inter.className}`}
    >
      <BreadcrumbItem>
        <Link href="/" className="text-white mx-3">
          Home
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/" className="text-white mx-3">
          Service
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/" className="text-white mx-3">
          About Us
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/" className="text-white mx-3">
          Login
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/" className="text-white mx-3">
          Feature
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
      <AvatarPrimaryComponent src="https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-1/380539678_1462142337962942_6946668859156806621_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGYgOlZ9Rkaw4pRJHHk1KKFQTlS_M7h0f9BOVL8zuHR_zAyPVgw-py-62aJUbT_gXPM_jNyBrYW0cBoayxUR0TH&_nc_ohc=xyItpvxAVbUAb7RRi95&_nc_ht=scontent.fpnh18-5.fna&oh=00_AfBJPsL8gw-Qp9RezCVXV-zYuldo-qqMLD77yZc44kCYSg&oe=6619E07A" />
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
