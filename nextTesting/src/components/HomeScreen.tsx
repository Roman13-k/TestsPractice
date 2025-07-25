"use client";
import Link from "next/link";
import React from "react";
import Counter from "./counter/Counter";
import ToggleText from "./ToggleText";

export default function HomeScreen() {
  return (
    <div
      data-testid='mainPage'
      className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <div>
        <Link data-testid='main-link' href='/'>
          Main
        </Link>
        <Link data-testid='about-link' href='/about'>
          About
        </Link>
        <Link data-testid='support-link' href='/support'>
          Support
        </Link>
      </div>
      <Counter />
      <ToggleText />
    </div>
  );
}
