import { BigHead } from "@bigheads/core";

export const AvatarGenerator = () => {
  //   function selectRandomKey(object: Object) {
  //     return Object.keys(object)[
  //       Math.floor(Math.random() * Object.keys(object).length)
  //     ];
  //   }
  return (
    <BigHead
      accessory="shades"
      body="chest"
      circleColor="blue"
      clothing="dressShirt"
      clothingColor="red"
      eyebrows="leftLowered"
      eyes="squint"
      faceMask={false}
      faceMaskColor="black"
      facialHair="none3"
      graphic="react"
      hair="buzz"
      hairColor="white"
      hat="none2"
      hatColor="black"
      lashes
      lipColor="pink"
      mask
      mouth="openSmile"
      skinTone="light"
    />
  );
};
