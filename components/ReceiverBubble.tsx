import { Text, View } from "react-native";

export default function ReceiverBubble() {
  return (
    <View className="self-start max-w-[80%] bg-[#3B2A24]/70 border border-[#5A4037] rounded-3xl rounded-bl-md px-5 py-4 mb-4">
      <Text className="text-white text-base leading-6">
        Hello 😏
      </Text>
    </View>
  );
}