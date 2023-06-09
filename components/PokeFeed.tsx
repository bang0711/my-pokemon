import Image from "next/image";
import React from "react";
import bug from "../app/assets/types/bug.png";
import dark from "../app/assets/types/dark.svg";
import dragon from "../app/assets/types/dragon.png";
import electric from "../app/assets/types/electric.svg";
import fairy from "../app/assets/types/fairy.svg";
import fighting from "../app/assets/types/fighting.svg";
import fire from "../app/assets/types/fire.png";
import flying from "../app/assets/types/flying.png";
import ghost from "../app/assets/types/ghost.png";
import grass from "../app/assets/types/grass.png";
import ground from "../app/assets/types/ground.svg";
import ice from "../app/assets/types/ice.svg";
import normal from "../app/assets/types/normal.svg";
import poison from "../app/assets/types/poison.svg";
import psychic from "../app/assets/types/psychic.svg";
import rock from "../app/assets/types/rock.svg";
import steel from "../app/assets/types/steel.svg";
import water from "../app/assets/types/water.svg";

type Props = {
  name: string;
  image: string;
  id: string;
  weight: number;
  type: string[];
};

function PokeFeed({ name, weight, id, image, type }: Props) {
  return (
    <div
      className={`flex px-3 py-6 filter h-[300px] backdrop-filter backdrop-blur-md bg-opacity-40 flex-col items-center justify-center max-w-lg min-w-fit rounded-xl relative ${
        type[0] === "grass"
          ? "bg-[#76cc54]/50"
          : type[0] === "fire"
          ? "bg-[#ff4422]/50"
          : type[0] === "water"
          ? "bg-[#3299fe]/50"
          : type[0] === "electric"
          ? "bg-[#ffcd32]/50"
          : type[0] === "normal"
          ? "bg-[#aaaa99]/50"
          : type[0] === "ice"
          ? "bg-[#67cdff]/50"
          : type[0] === "fighting"
          ? "bg-[#ba5545]/50"
          : type[0] === "poison"
          ? "bg-[#7f3f72]/50"
          : type[0] === "ground"
          ? "bg-[#ddba54]/50"
          : type[0] === "flying"
          ? "bg-[#8898fe]/50"
          : type[0] === "psychic"
          ? "bg-[#ff5599]/50"
          : type[0] === "bug"
          ? "bg-[#abba22]/50"
          : type[0] === "rock"
          ? "bg-[#baab66]/50"
          : type[0] === "ghost"
          ? "bg-[#6667ba]/50"
          : type[0] === "dragon"
          ? "bg-[#765545]/50"
          : type[0] === "dark"
          ? "bg-[#765545]/50"
          : type[0] === "steel"
          ? "bg-[#ababbb]/50"
          : "bg-[#ef99ef]/50"
      }`}
    >
      <div className="absolute top-2 left-2 text-white text-lg font-semibold">
        {id}
      </div>
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        loading="lazy"
        className="pokemonShadow"
      />
      <div className="flex w-full flex-col items-center justify-center">
        <h1
          className={`text-xl text-center flex items-center justify-center font-bold uppercase mt-2 max-w-[100px] ${
            type[0] === "grass"
              ? "text-[#76cc54]"
              : type[0] === "fire"
              ? "text-[#ff4422]"
              : type[0] === "water"
              ? "text-[#3299fe]"
              : type[0] === "electric"
              ? "text-[#ffcd32]"
              : type[0] === "normal"
              ? "text-[#aaaa99]"
              : type[0] === "ice"
              ? "text-[#67cdff]"
              : type[0] === "fighting"
              ? "text-[#ba5545]"
              : type[0] === "poison"
              ? "text-[#7f3f72]"
              : type[0] === "ground"
              ? "text-[#ddba54]"
              : type[0] === "flying"
              ? "text-[#8898fe]"
              : type[0] === "psychic"
              ? "text-[#ff5599]"
              : type[0] === "bug"
              ? "text-[#abba22]"
              : type[0] === "rock"
              ? "text-[#baab66]"
              : type[0] === "ghost"
              ? "text-[#6667ba]"
              : type[0] === "dragon"
              ? "text-[#765545]"
              : type[0] === "dark"
              ? "text-[#765545]"
              : type[0] === "steel"
              ? "text-[#ababbb]"
              : "text-[#ef99ef]"
          }`}
        >
          {name}
        </h1>
        <p className="text-white font-semibold text-md">
          Weight: {weight / 10} kg
        </p>
        <div className="flex items-center my-3 gap-10 ">
          {type.map((t) => {
            let image;
            if (t === "bug") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={bug}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "dark") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={dark}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "dragon") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={dragon}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "electric") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={electric}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "fairy") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={fairy}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "fighting") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={fighting}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "fire") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={fire}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "flying") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={flying}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "ghost") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={ghost}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "grass") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={grass}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "ground") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={ground}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "ice") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={ice}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "normal") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={normal}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "poison") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={poison}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "psychic") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={psychic}
                    alt="Bug type"
                  />
                </div>
              );
            } else if (t === "rock") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={rock}
                    alt="Bug type"
                    key={t}
                  />
                </div>
              );
            } else if (t === "steel") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={steel}
                    alt="Bug type"
                    key={t}
                  />
                </div>
              );
            } else if (t === "water") {
              image = (
                <div key={t} className="relative">
                  <Image
                    loading="lazy"
                    width={40}
                    height={40}
                    src={water}
                    alt="Bug type"
                    key={t}
                  />
                </div>
              );
            } else {
              image = null;
            }
            return image;
          })}
        </div>
      </div>
    </div>
  );
}

export default PokeFeed;
