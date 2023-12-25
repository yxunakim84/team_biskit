import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import Image from "next/image";
import React from "react";
import { IconName } from "../Icon/Icon";
import CategoryItem from "../CategoryItem";

const category_list: { ko_label: string; en_label: string; icon: IconName }[] =
  [
    {
      ko_label: "푸드",
      en_label: "food",
      icon: "Food",
    },
    {
      ko_label: "언어교환",
      en_label: "language",
      icon: "Language",
    },
    {
      ko_label: "액티비티",
      en_label: "activity",
      icon: "Activity",
    },
    {
      ko_label: "스포츠",
      en_label: "sports",
      icon: "Sports",
    },
    {
      ko_label: "스터디",
      en_label: "study",
      icon: "Study",
    },
    {
      ko_label: "문화·예술",
      en_label: "culture",
      icon: "Culture",
    },
    {
      ko_label: "취미",
      en_label: "hobby",
      icon: "Hobby",
    },
  ];

export default function Part4() {
  const animatedItem = {
    0: useScrollFadeIn(DirectionType.up, 1.2, 0.1, 0.5),
    1: useScrollFadeIn(DirectionType.up, 1.6, 0.1, 0.5),
    2: useScrollFadeIn(DirectionType.up, 1.3, 0.1, 0.5),
    3: useScrollFadeIn(DirectionType.up, 1.6, 0.3, 0.5),
  };

  return (
    <section className="mobile:pt-[60px] mobile:pb-[40px] mobile:px-5 laptop:py-[100px] laptop:px-[40px] flex-col items-center bg-bg-elevation1 flex">
      <div className="laptop:max-w-[1220px] mobile:gap-y-12 w-full flex mobile:flex-col desktop:flex-row items-center desktop:justify-between">
        <div className="desktop:pr-8 flex w-full flex-col laptop:gap-y-12 mobile:gap-y-8">
          <div className="flex flex-col mobile:items-center mobile:text-center desktop:text-start desktop:items-start mobile:gap-y-3 laptop:gap-y-6">
            <div className="text-content-default laptop:text-title48Bd mobile:text-heading24Bd animate-fadeIn">
              내 취향에
              <br />딱 맞는 모임
            </div>
            <div
              className="laptop:text-heading24Md mobile:text-body16Rg text-content-weaker"
              {...animatedItem[1]}
            >
              밥약부터 취미까지
              <br />내 취향에 맞는 모임을 찾아보세요
            </div>
          </div>

          <div
            className="flex overflow-x-scroll no-scrollbar mobile:justify-center desktop:justify-start mobile:gap-x-6 mobile:w-full"
            {...animatedItem[0]}
          >
            {category_list.map((category) => (
              <CategoryItem
                key={category.ko_label}
                icon={category.icon}
                label={category.ko_label}
              />
            ))}
          </div>
        </div>
        <div
          className="relative mobile:w-[335px] mobile:h-[335px] laptop:w-[504px] laptop:h-[504px] bg-bg-inverseWeak flex flex-col items-center rounded-[32px]"
          {...animatedItem[2]}
        >
          <div className="relative mobile:w-[206px] mobile:h-[446px] laptop:w-[311px] laptop:h-[672px]">
            <Image
              src="/assets/img/screen/meetup_list.png"
              alt=""
              fill
              unoptimized
            />
          </div>
          <div
            className="absolute laptop:w-[377px] laptop:h-[224px] mobile:w-[250px] mobile:h-[150px] top-10 shadow-shadow-3"
            {...animatedItem[3]}
          >
            <Image
              src="/assets/img/screen/meetup.png"
              alt=""
              fill
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
