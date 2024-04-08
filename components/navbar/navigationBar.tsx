"use client"
import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import Link from "next/link";
import styles from "./styles.module.css"
import {inter,suwannaphum} from '@/app/fonts'

export default function NavbarComponent() {
  return (
    <Breadcrumbs className= {`${styles.navbar} ${suwannaphum.className} ${inter.className}`}>
      <BreadcrumbItem>
      <Link href="/" className="text-white mx-3">Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
      <Link href="/" className="text-white mx-3">Service</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
      <Link href="/" className="text-white mx-3">About Us</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
      <Link href="/" className="text-white mx-3">Login</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
      <Link href="/" className="text-white mx-3">Feature</Link>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}