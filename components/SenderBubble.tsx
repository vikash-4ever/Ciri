import { Text, View } from "react-native";

export default function SenderBubble() {
  return (
    <View className="self-end max-w-[80%] bg-white/10 border border-white/10 rounded-3xl rounded-br-md px-5 py-4 mb-4 backdrop-blur-xl">
      <Text className="text-white text-base font-poppins-semibold leading-6">
        Hey Ciri ✨
      </Text>
    </View>
  );
}