import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons, images } from "../../constants";

const FormField = ({
  title,
  value,
  placeHolder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassWord, setShowPassWord] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-400 font-pMedium">{title}</Text>
      <View className=" border-2 border-black-200 w-full h-16 px-4 bg-gray-300 rounded-xl focus:border-s-emerald-200 items-center flex-row">
        <TextInput
          className="flex-1 text-white font-pSemiBold text-base"
          value={value}
          placeholder={placeHolder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassWord}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassWord(!showPassWord)}>
            <Image
              source={!showPassWord ? icons.eyeOpen : icons.eyeClose}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
